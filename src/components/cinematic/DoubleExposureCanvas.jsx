import { useEffect, useRef, memo } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

const TARGET_FPS = 24;
const FRAME_MS   = 1000 / TARGET_FPS;

const DoubleExposureCanvas = memo(function DoubleExposureCanvas({
  width = 400,
  height = 580,
}) {
  const canvasRef  = useRef(null);
  const rafRef     = useRef(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const off  = document.createElement("canvas");
    off.width  = width;
    off.height = height;
    const octx = off.getContext("2d");

    let offsetY  = 0;
    let lastFloor = -1;
    let lastTime  = 0;
    let loaded    = 0;
    let meImg     = null;
    let codeImg   = null;

    const maybeStart = () => { if (++loaded >= 2) startLoop(); };

    meImg = new Image();
    meImg.src = "/PersonalPortfolio/me.png";
    meImg.onload = maybeStart;
    meImg.onerror = maybeStart;

    codeImg = new Image();
    codeImg.src = "/PersonalPortfolio/code.jpeg";
    codeImg.onload = maybeStart;
    codeImg.onerror = maybeStart;

    // Pause animation when canvas is not in view
    const io = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(canvas);

    function fit(img, w, h) {
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      return {
        sw: img.naturalWidth  * scale,
        sh: img.naturalHeight * scale,
        sx: (w - img.naturalWidth  * scale) / 2,
        sy: (h - img.naturalHeight * scale) / 2,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      if (!meImg?.complete || !meImg.naturalWidth) return;

      octx.clearRect(0, 0, width, height);
      const { sw, sh, sx, sy } = fit(meImg, width, height);
      octx.drawImage(meImg, sx, sy, sw, sh);

      if (codeImg?.complete && codeImg.naturalWidth) {
        const cScale = width / codeImg.naturalWidth;
        const cH     = codeImg.naturalHeight * cScale;
        const maxPan = Math.max(0, cH - height);
        const panY   = maxPan > 0 ? offsetY % maxPan : 0;
        octx.globalCompositeOperation = "source-atop";
        octx.globalAlpha = 0.02;
        octx.drawImage(codeImg, 0, -panY, width, cH);
        octx.globalAlpha = 1;
        octx.globalCompositeOperation = "source-over";
      }

      ctx.drawImage(off, 0, 0);
    }

    function startLoop() {
      const reduced = prefersReducedMotion();

      // Static frame for reduced-motion
      draw();
      if (reduced) return;

      const tick = (now) => {
        rafRef.current = requestAnimationFrame(tick);

        // Skip if not visible
        if (!visibleRef.current) return;

        // Throttle to TARGET_FPS
        if (now - lastTime < FRAME_MS) return;
        lastTime = now;

        offsetY += 0.28;

        // Only redraw if the integer pan position changed (avoids ~80% of redraws)
        const floor = Math.floor(offsetY);
        if (floor === lastFloor) return;
        lastFloor = floor;

        draw();
      };

      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
    };
  }, [width, height]);

  return (
    <canvas
      role="img"
      aria-label="Portrait of Pradeep Chandran M, double-exposed with code"
      ref={canvasRef}
      style={{
        display: "block",
        borderRadius: "4px",
        background: "transparent",
        boxShadow: "0 8px 60px rgba(28,25,23,0.12), 0 2px 12px rgba(28,25,23,0.08)",
      }}
    />
  );
});

export default DoubleExposureCanvas;
