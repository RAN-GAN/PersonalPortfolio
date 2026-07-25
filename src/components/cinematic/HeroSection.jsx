import React, { useEffect, useState } from "react";
import DoubleExposureCanvas from "./DoubleExposureCanvas";
import NowPlaying from "./NowPlaying";
import { useTextScramble } from "./TextScramble";
import { InkAmbient } from "../ui/ink-reveal";
import { PERSONAL } from "../../data/portfolio";
import { CustomContextMenu } from "../CustomContextMenu";
import { useNavigate } from "react-router-dom";

const HEADLINE    = "Building Systems. Finding Vulnerabilities. Solving Problems.";
const SUBHEADLINE = "CS Student  ·  Developer  ·  Security Researcher";
const mono = { fontFamily: '"DM Mono", monospace' };

function calcCanvas() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const mobile = vw < 768;
  return {
    w: Math.round(vw * (mobile ? 0.72 : 0.33)),
    h: Math.round(vh * (mobile ? 0.40 : 0.74)),
    mobile,
  };
}

export default function HeroSection() {
  const navigate = useNavigate();
  const [ready,  setReady]  = useState(false);
  const [canvas, setCanvas] = useState(calcCanvas);

  const { displayText: headline, start: startHeadline } = useTextScramble(HEADLINE,    2000);
  const { displayText: sub,      start: startSub }      = useTextScramble(SUBHEADLINE, 1600);

  useEffect(() => {
    const t1 = setTimeout(() => { setReady(true); startHeadline(); }, 400);
    const t2 = setTimeout(startSub, 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [startHeadline, startSub]);

  useEffect(() => {
    const onResize = () => setCanvas(calcCanvas());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [first, ...rest] = PERSONAL.name.split(" ");
  const lastName = rest.join(" ");

  const fade = (delay = 0) => ({
    opacity:    ready ? 1 : 0,
    transition: `opacity 0.7s ${delay}s`,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-td-bg select-none"
      style={{ zIndex: 2 }}
    >
      {/* Japanese image — atmospheric ink-bloom that follows the cursor.
          Carve is kept very shallow so it only nudges the image into view;
          the headline stays the focus. Falls back to a faint static wash on
          touch / reduced-motion. */}
      <InkAmbient
        src="/PersonalPortfolio/japaneese.jpg"
        maskColor={[250, 250, 249]}
        maskOpacity={0.96}
        staticOpacity={0.04}
        revealStops={[0.16, 0.11, 0]}
        brushSize={150}
        imageStyle={{
          // A 1200×628 landscape image can't "contain" into a portrait phone
          // without collapsing into a short band in the corner. On mobile we
          // let it cover the viewport (cropping the sides) so it reads as a
          // full-bleed ambient wash; desktop keeps the tucked-in contain look.
          objectFit: canvas.mobile ? "cover" : "contain",
          objectPosition: canvas.mobile ? "center" : "right bottom",
        }}
      />

      {/* ── Case-file header ── */}
      {/* <div style={{
        position: "absolute", top: "3.5rem", left: 0, right: 0,
        padding: "0.6rem clamp(1.25rem, 4vw, 3rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: "1px solid rgba(28,25,23,0.10)",
        zIndex: 10,
        ...fade(0.2),
      }}>
        <span style={{ ...mono, fontSize: "clamp(0.5rem,0.75vw,0.6rem)", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(28,25,23,0.48)" }}>
          Portfolio · 2025
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <span style={{ ...mono, fontSize: "clamp(0.5rem,0.75vw,0.6rem)", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(28,25,23,0.48)" }}>
            Case No. 001
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span style={{ width: "0.35rem", height: "0.35rem", borderRadius: "50%", background: "#b45309", display: "block" }} />
            <span style={{ ...mono, fontSize: "clamp(0.5rem,0.75vw,0.6rem)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#b45309" }}>
              Active
            </span>
          </div>
        </div>
      </div> */}

      {/* ── Main grid ── */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "grid",
        gridTemplateColumns: canvas.mobile ? "1fr" : `minmax(0,1fr) 33vw`,
        alignItems: "center",
        minHeight: "100vh",
        padding: `clamp(5.5rem,14vh,8.5rem) clamp(1.25rem,4vw,3rem) clamp(4rem,10vh,6rem)`,
        gap: canvas.mobile ? "2rem" : "clamp(1.5rem,4vw,4rem)",
      }}>

        {/* Text column */}
        <div className="hero-copy" style={{ minWidth: 0, ...fade(0) }}>

          {/* Amber bar + subject label */}
          {/* <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "clamp(1.5rem,4vh,2.5rem)" }}>
            <div style={{ width: "2px", height: "3.2rem", background: "#b45309", flexShrink: 0, marginTop: "0.2rem" }} />
            <div>
              <p style={{ ...mono, fontSize: "clamp(0.55rem,0.78vw,0.65rem)", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(28,25,23,0.55)", marginBottom: "0.3rem" }}>
                Subject File
              </p>
              <p style={{ ...mono, fontSize: "clamp(0.55rem,0.78vw,0.65rem)", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(28,25,23,0.55)" }}>
                CS · Security · Dev
              </p>
            </div>
          </div> */}

          {/* Name — dominant anchor */}
          <h1 style={{
            fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
            fontSize: "clamp(3rem,9vw,9.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            color: "#000",
            marginBottom: "clamp(1.2rem,3vh,2rem)",
          }}>
            {first}
            <br />
            <span style={{ color: "rgba(28,25,23,0.62)" }}>{lastName}</span>
          </h1>

          {/* Amber rule */}
          <div style={{ width: "3rem", height: "2px", background: "#b45309", marginBottom: "clamp(1.2rem,3vh,2rem)" }} />

          {/* Scrambled headline */}
          <p style={{
            ...mono,
            fontSize: "clamp(0.65rem,1.1vw,0.82rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.9,
            color: "rgba(28,25,23,0.75)",
            maxWidth: "42ch",
            marginBottom: "1.25rem",
          }}>
            {headline}
          </p>

          {/* Sub */}
          <p style={{ ...mono, fontSize: "clamp(0.55rem,0.78vw,0.65rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(28,25,23,0.58)", marginBottom: "2rem" }}>
            {sub}
          </p>

          {/* Journal Button */}
          <button
            onClick={() => navigate('/journal')}
            style={{
              ...mono,
              fontSize: "clamp(0.55rem,0.78vw,0.65rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid #b45309",
              color: "#b45309",
              background: "transparent",
              padding: "0.8rem 1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#b45309";
              e.currentTarget.style.color = "#fafaf9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#b45309";
            }}
          >
            Read Journal
          </button>
        </div>

        {/* Portrait column */}
        <div className="hero-portrait" style={{
          display: "flex",
          justifyContent: canvas.mobile ? "center" : "flex-end",
          alignItems: "center",
          opacity:    ready ? 1 : 0,
          transform:  ready ? "translateY(0)" : "translateY(1.25rem)",
          transition: "opacity 1s 0.3s, transform 1s 0.3s",
        }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <DoubleExposureCanvas width={canvas.w} height={canvas.h} />
            <CustomContextMenu 
              menuText="Read about this widget" 
              onClick={() => navigate("/journal/custom-now-listing-widget")}
            >
              <NowPlaying />
            </CustomContextMenu>
          </div>
        </div>
      </div>

      {/* ── Bottom metadata strip ── */}
      <div className="hero-strip" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0.9rem clamp(1.25rem,4vw,3rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid rgba(28,25,23,0.10)",
        zIndex: 10,
        ...fade(1.2),
      }}>
        <div style={{ display: "flex", gap: "clamp(0.9rem,2.5vw,2.5rem)" }}>
          {["Systems", "Security", "Research"].map(tag => (
            <span key={tag} style={{ ...mono, fontSize: "clamp(0.5rem,0.72vw,0.6rem)", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(28,25,23,0.45)" }}>
              {tag}
            </span>
          ))}
        </div>
        <span style={{ ...mono, fontSize: "clamp(0.5rem,0.72vw,0.6rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(28,25,23,0.45)" }}>
          Scroll ↓
        </span>
      </div>

      {/* Bottom fade */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "5rem",
        background: "linear-gradient(to bottom, transparent, rgba(250,250,249,0.92))",
        zIndex: 3, pointerEvents: "none",
      }} />
    </section>
  );
}
