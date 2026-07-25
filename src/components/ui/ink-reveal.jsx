"use client";
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * InkReveal
 * ---------
 * A canvas overlay that paints a solid `maskColor` rectangle over whatever sits
 * behind it, then "carves" organic ink-shaped holes that follow the pointer and
 * fade out, momentarily revealing the layer beneath.
 *
 * Two modes:
 *  - "interactive" (default): the canvas is on top and owns the pointer
 *    (cursor hidden). Matches the original drop-in demo behaviour.
 *  - "ambient": the canvas sits BEHIND your content (pointer-events: none) and
 *    follows the cursor via a window listener, so it reveals the image under
 *    your text/links without intercepting clicks. Pair with low `gradientStops`
 *    for a subtle "only nudge the opacity" reveal where content stays the focus.
 *
 * @typedef {Object} InkRevealProps
 * @property {[number, number, number]} [maskColor]   RGB of the mask overlay (match the section bg in ambient mode)
 * @property {number}   [brushSize]                   Radius of each ink stamp in px
 * @property {number}   [lifetime]                    How long each stamp lives before fading (ms)
 * @property {number}   [rStart]                      Initial radius before the stamp expands
 * @property {number}   [rVary]                       Random variation factor for stamp radius (0-1)
 * @property {number}   [stampStep]                   Min pixel distance between stamps along a stroke
 * @property {number}   [maxStamps]                   Max stamps alive at once (oldest are pruned)
 * @property {number}   [segments]                    Segments on the wobble circle (higher = smoother)
 * @property {[number, number, number]} [wobble]      Wobble amplitude weights [primary, secondary, tertiary]
 * @property {number}   [gradientInnerRadius]         Gradient inner-radius factor (0-1, relative to stamp radius)
 * @property {[number, number, number]} [gradientStops] Gradient opacity stops [center, mid, edge] — lower = subtler reveal
 * @property {number}   [maskOpacity]                 Opacity of the whole mask (1 = image hidden at rest; <1 = image always faintly visible)
 * @property {"interactive"|"ambient"} [mode]         Pointer handling strategy
 * @property {string}   [className]                   Extra CSS class for the canvas element
 * @property {React.CSSProperties} [style]            Extra inline styles for the canvas element
 */

export default function InkReveal({
  maskColor = [252, 250, 248],
  brushSize = 128,
  lifetime = 600,
  rStart = 10,
  rVary = 0.45,
  stampStep = 10,
  maxStamps = 200,
  segments = 36,
  wobble = [0.14, 0.08, 0.05],
  gradientInnerRadius = 0.2,
  gradientStops = [0.95, 0.88, 0],
  maskOpacity = 1,
  mode = "interactive",
  className,
  style,
}) {
  const canvasRef = useRef(null);
  const stampsRef = useRef([]);
  const runningRef = useRef(false);
  const lastPosRef = useRef(null);
  const dimsRef = useRef({ w: 0, h: 0 });

  const mc = maskColor;
  const ambient = mode === "ambient";

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = parent.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    dimsRef.current = { w, h };
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = `rgb(${mc[0]},${mc[1]},${mc[2]})`;
    ctx.fillRect(0, 0, w, h);
  }, [mc]);

  const carveInk = useCallback(
    (ctx, x, y, r, seed, alpha) => {
      const g = ctx.createRadialGradient(
        x, y, r * gradientInnerRadius,
        x, y, r
      );
      g.addColorStop(0, `rgba(0,0,0,${gradientStops[0] * alpha})`);
      g.addColorStop(0.5, `rgba(0,0,0,${gradientStops[1] * alpha})`);
      g.addColorStop(1, `rgba(0,0,0,${gradientStops[2] * alpha})`);
      ctx.fillStyle = g;

      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        const wob =
          0.78 +
          wobble[0] * Math.sin(a * 3 + seed) +
          wobble[1] * Math.sin(a * 5 + seed * 2.1) +
          wobble[2] * Math.sin(a * 7 + seed * 0.7);
        const px = x + Math.cos(a) * r * wob;
        const py = y + Math.sin(a) * r * wob;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    },
    [segments, wobble, gradientInnerRadius, gradientStops]
  );

  const addStamp = useCallback(
    (x, y, overrides = {}) => {
      const stamps = stampsRef.current;
      if (stamps.length >= maxStamps) stamps.shift();
      stamps.push({
        x,
        y,
        born: performance.now(),
        seed: Math.random() * Math.PI * 2,
        rmax: overrides.rmax || (brushSize * (1 - rVary + Math.random() * rVary)),
        lifetime: overrides.lifetime || lifetime,
        isRipple: overrides.isRipple || false
      });
    },
    [brushSize, rVary, maxStamps, lifetime]
  );

  const stampAlong = useCallback(
    (x, y) => {
      const last = lastPosRef.current;
      if (!last) {
        addStamp(x, y);
      } else {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / stampStep));
        for (let i = 1; i <= steps; i++) {
          addStamp(last.x + (dx * i) / steps, last.y + (dy * i) / steps);
        }
      }
      lastPosRef.current = { x, y };
    },
    [addStamp, stampStep]
  );

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w, h } = dimsRef.current;
    const now = performance.now();
    const stamps = stampsRef.current;

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = `rgb(${mc[0]},${mc[1]},${mc[2]})`;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "destination-out";

    for (let i = stamps.length - 1; i >= 0; i--) {
      const stamp = stamps[i];
      const t = (now - stamp.born) / stamp.lifetime;
      if (t >= 1) {
        stamps.splice(i, 1);
        continue;
      }
      
      const ease = stamp.isRipple ? (1 - Math.pow(1 - t, 4)) : (1 - Math.pow(1 - t, 3));
      const r = rStart + (stamp.rmax - rStart) * ease;
      const alpha = stamp.isRipple ? (1 - t) : (1 - t * t);
      
      carveInk(ctx, stamp.x, stamp.y, r, stamp.seed, alpha);
    }

    if (stamps.length) {
      requestAnimationFrame(loop);
    } else {
      runningRef.current = false;
    }
  }, [carveInk, mc, lifetime, rStart]);

  const startLoop = useCallback(() => {
    if (!runningRef.current) {
      runningRef.current = true;
      requestAnimationFrame(loop);
    }
  }, [loop]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  // Ambient mode: drive the reveal from a window-level pointer listener so the
  // canvas can sit behind content with pointer-events:none and still follow the
  // cursor anywhere over the section (including over text and links).
  useEffect(() => {
    if (!ambient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (!inside) {
        lastPosRef.current = null;
        return;
      }
      stampAlong(x, y);
      startLoop();
    };

    const onClick = (e) => {
      if (e.button !== 0) return; // Only left click
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (!inside) return;

      addStamp(x, y, { rmax: brushSize * 1.5, lifetime: 800, isRipple: true });
      startLoop();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [ambient, stampAlong, startLoop]);

  const getRelativePos = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        opacity: maskOpacity,
        cursor: ambient ? undefined : "none",
        pointerEvents: ambient ? "none" : undefined,
        ...style,
      }}
      onMouseEnter={
        ambient
          ? undefined
          : (e) => {
              const pos = getRelativePos(e);
              lastPosRef.current = pos;
              stampAlong(pos.x, pos.y);
              startLoop();
            }
      }
      onMouseMove={
        ambient
          ? undefined
          : (e) => {
              const pos = getRelativePos(e);
              stampAlong(pos.x, pos.y);
              startLoop();
            }
      }
      onMouseLeave={
        ambient
          ? undefined
          : () => {
              lastPosRef.current = null;
            }
      }
      onMouseDown={
        ambient
          ? undefined
          : (e) => {
              if (e.button !== 0) return;
              const pos = getRelativePos(e);
              addStamp(pos.x, pos.y, { rmax: brushSize * 1.5, lifetime: 800, isRipple: true });
              startLoop();
            }
      }
    />
  );
}

/**
 * usePrefersStaticInk
 * Returns true when the interactive reveal should be skipped in favour of a
 * plain faint image — i.e. reduced-motion users and hover-less (touch) devices,
 * for whom a cursor-driven effect would never fire.
 */
function usePrefersStaticInk() {
  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    const queries = ["(prefers-reduced-motion: reduce)", "(hover: none)"];
    const mqls = queries.map((q) => window.matchMedia(q));
    const update = () => setIsStatic(mqls.some((m) => m.matches));
    update();
    mqls.forEach((m) => m.addEventListener("change", update));
    return () => mqls.forEach((m) => m.removeEventListener("change", update));
  }, []);

  return isStatic;
}

/**
 * InkAmbient
 * ----------
 * Drop-in background layer that wraps an image with an ambient InkReveal mask.
 * Sits behind your content (absolute inset-0, pointer-events:none) so the cursor
 * reveals a faint ink bloom of the image without stealing clicks. On touch /
 * reduced-motion it degrades to a static faint image.
 *
 * @param {Object} props
 * @param {string} props.src                          Image to reveal
 * @param {[number, number, number]} props.maskColor  RGB matching the section background
 * @param {number} [props.maskOpacity]                Mask opacity — 1 hides the image at rest, <1 keeps it faintly visible everywhere (≈ 1 − maskOpacity reveal at rest, blooming higher under the cursor)
 * @param {number} [props.staticOpacity]              Opacity of the fallback static image (touch / reduced-motion only)
 * @param {[number, number, number]} [props.revealStops] gradientStops for the reveal (keep low for subtle)
 * @param {number} [props.brushSize]                  Ink brush radius
 * @param {string} [props.blend]                      mix-blend-mode for the image
 * @param {number} [props.zIndex]                     Stacking level of the layer (keep below content)
 * @param {React.CSSProperties} [props.imageStyle]    Extra styles for the image (objectFit/position, filter…)
 */
export function InkAmbient({
  src,
  maskColor,
  maskOpacity = 0.94,
  staticOpacity = 0.06,
  revealStops = [0.2, 0.14, 0],
  brushSize = 150,
  blend = "multiply",
  zIndex = 0,
  imageStyle,
  ...inkProps
}) {
  const isStatic = usePrefersStaticInk();

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          mixBlendMode: blend,
          opacity: isStatic ? staticOpacity : 1,
          userSelect: "none",
          ...imageStyle,
        }}
      />
      {!isStatic && (
        <InkReveal
          mode="ambient"
          maskColor={maskColor}
          maskOpacity={maskOpacity}
          brushSize={brushSize}
          gradientStops={revealStops}
          {...inkProps}
        />
      )}
    </div>
  );
}
