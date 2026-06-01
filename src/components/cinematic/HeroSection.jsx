import React, { useEffect, useRef, useState } from "react";
import DoubleExposureCanvas from "./DoubleExposureCanvas";
import { useTextScramble } from "./TextScramble";

const HEADLINE    = "Building Systems. Finding Vulnerabilities. Solving Problems.";
const SUBHEADLINE = "Computer Science Student  •  Developer  •  Security Researcher";

export default function HeroSection() {
  const textRef   = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  const { displayText: headline, start: startHeadline } = useTextScramble(HEADLINE, 2000);
  const { displayText: sub,      start: startSub }      = useTextScramble(SUBHEADLINE, 1600);

  useEffect(() => {
    const t1 = setTimeout(() => { setReady(true); startHeadline(); }, 400);
    const t2 = setTimeout(() => startSub(), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [startHeadline, startSub]);

  const [canvasSize, setCanvasSize] = useState({ w: 320, h: 380 });
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 640)        setCanvasSize({ w: Math.min(vw - 48, 300), h: 360 });
      else if (vw < 1024)  setCanvasSize({ w: 360, h: 500 });
      else                 setCanvasSize({ w: 420, h: 580 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-td-bg"
      style={{ zIndex: 2 }}
    >
      {/* Ambient light leaks */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-8%", right: "-6%",
        width: "52%", height: "55%",
        background: "radial-gradient(ellipse, rgba(180,83,9,0.07) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", top: "-10%", left: "-8%",
        width: "45%", height: "50%",
        background: "radial-gradient(ellipse, rgba(14,30,50,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Main layout: stacks on mobile, side-by-side on lg+ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-24 pb-16 lg:py-16">

        {/* Text column */}
        <div
          ref={textRef}
          className="flex-1 w-full max-w-xl"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s" }}
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.55em] text-td-amber mb-5"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Portfolio · 2025
          </p>

          <h1
            className="font-display font-bold text-td-ink mb-5 leading-[1.08]"
            style={{
              fontFamily: '"SAILORS", serif',
              fontSize: "clamp(2rem, 5.5vw, 6rem)",
              letterSpacing: "-0.025em",
              color: "#000",
            }}
          >
            {headline}
          </h1>

          <p
            className="font-mono text-td-muted text-[11px] sm:text-[13px] tracking-wider leading-relaxed mb-8"
            style={{ fontFamily: '"DM Mono", monospace', letterSpacing: "0.08em" }}
          >
            {sub}
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-td-amber" />
            <span
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-td-muted animate-pulse"
              style={{ fontFamily: '"DM Mono", monospace' }}
            >
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Canvas column — hidden on small mobile, shown sm+ */}
        <div
          ref={canvasRef}
          className="hidden sm:block flex-shrink-0"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s 0.3s, transform 1s 0.3s",
          }}
        >
          <DoubleExposureCanvas
            width={canvasSize.w}
            height={canvasSize.h}
            threshold={105}
          />
        </div>
      </div>

      {/* Bottom vignette */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "120px",
        background: "linear-gradient(to bottom, transparent, rgba(250,250,249,0.95))",
        zIndex: 3, pointerEvents: "none",
      }} />
    </section>
  );
}
