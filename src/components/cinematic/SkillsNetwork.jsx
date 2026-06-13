import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import { useReducedMotion } from "./useReducedMotion";
import { SKILLS, SKILL_EDGES } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const GROUP_COLORS = {
  frontend: "#b45309",
  backend:  "#292524",
  security: "#1c1917",
  database: "#4b5563",
  cloud:    "#0369a1",
  ai:       "#6d28d9",
};

const GROUP_LABELS = {
  frontend: "Frontend",
  backend:  "Backend",
  security: "Security",
  cloud:    "Cloud",
  database: "Database",
  ai:       "AI / ML",
};


const VB_W   = 1000;
const VB_H   = 425;
const NODE_H = 27;

// Estimate pill chip width from label length
const chipW = (label) => Math.max(44, label.length * 7.3 + 24);

export default function SkillsNetwork() {
  const sectionRef = useRef(null);
  const svgRef     = useRef(null);

  const [entered,  setEntered]  = useState(false);
  const [inView,   setInView]   = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  const reduced   = useReducedMotion();
  const bgRef     = useRef(null);
  const stampRef  = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Pause zap animations when section is off-screen
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => setEntered(true),
      once: true,
    });

    if (!reduced) {
      const fullTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(bgRef.current,    { yPercent: -15, ease: "none", scrollTrigger: fullTrigger });
      gsap.to(stampRef.current, { y: -70,        ease: "none", scrollTrigger: fullTrigger });
    }
  }, { scope: sectionRef });

  // Draw-in edges + pop-in nodes when section enters
  useEffect(() => {
    if (!entered || !svgRef.current || isMobile || reduced) return;

    const lines = svgRef.current.querySelectorAll(".skill-edge");
    lines.forEach((line, i) => {
      const len = line.getTotalLength?.() ?? 200;
      line.style.strokeDasharray  = len;
      line.style.strokeDashoffset = len;
      setTimeout(() => {
        line.style.transition       = `stroke-dashoffset 0.7s ease ${i * 0.035}s`;
        line.style.strokeDashoffset = "0";
      }, 50);
    });

    const nodes = svgRef.current.querySelectorAll(".skill-node-g");
    nodes.forEach((n, i) => {
      n.style.opacity   = "0";
      n.style.transform = "scale(0.6)";
      setTimeout(() => {
        n.style.transition = `opacity 0.4s ease ${0.25 + i * 0.04}s, transform 0.4s ease ${0.25 + i * 0.04}s`;
        n.style.opacity    = "1";
        n.style.transform  = "scale(1)";
      }, 50);
    });
  }, [entered, isMobile, reduced]);

  const skillMap = Object.fromEntries(SKILLS.map(s => [s.id, s]));

  const connectedIds = useMemo(() => {
    if (!hovered) return null;
    const ids = new Set([hovered]);
    SKILL_EDGES.forEach(([a, b]) => {
      if (a === hovered) ids.add(b);
      if (b === hovered) ids.add(a);
    });
    return ids;
  }, [hovered]);

  const [pulseConfigs] = useState(() =>
    SKILL_EDGES.map((_, i) => ({
      dur:   0.55 + Math.random() * 0.7,
      delay: (i * 0.28 + Math.random() * 5.5) % 5.5,
      pause: 1.8 + Math.random() * 3.2,
    }))
  );

  const grouped = SKILLS.reduce((acc, s) => {
    (acc[s.group] = acc[s.group] ?? []).push(s);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-td-surface overflow-hidden"
    >
      {/* Surface colour layer — parallaxes at 85% scroll speed */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-15% 0",
          background: "inherit",
          pointerEvents: "none",
        }}
      />

      {/* skills.jpeg atmospheric background — sits above the solid base */}
      <img
        aria-hidden="true"
        src="/PersonalPortfolio/skills.jpeg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.1,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* "ARSENAL" chapter watermark */}
      <div
        ref={stampRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "-1%",
          fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
          fontSize: "clamp(5rem, 16vw, 13rem)",
          fontWeight: 900,
          color: "rgba(28,25,23,0.035)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Arsenal
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-12">
        <ChapterTitle number="03" title="Arsenal" />

        {/* Legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
          {Object.entries(GROUP_LABELS).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-sm"
                style={{ backgroundColor: GROUP_COLORS[key] }}
              />
              <span style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: "clamp(0.55rem,0.75vw,0.65rem)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(28,25,23,0.55)",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Desktop SVG network ── */}
        {!isMobile && (
          <div className="w-full overflow-x-auto">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
              aria-label="Skills network diagram"
            >
              {/* Edges */}
              {SKILL_EDGES.map(([a, b], i) => {
                const na = skillMap[a], nb = skillMap[b];
                if (!na || !nb) return null;
                const connected = hovered === a || hovered === b;
                const dim       = connectedIds && !connected;
                return (
                  <line
                    key={i}
                    className="skill-edge"
                    x1={na.x} y1={na.y}
                    x2={nb.x} y2={nb.y}
                    stroke={connected ? "#b45309" : "rgba(28,25,23,0.18)"}
                    strokeWidth={connected ? 1.5 : 0.8}
                    strokeLinecap="round"
                    opacity={dim ? 0.18 : 1}
                    style={{ transition: "stroke 0.2s, stroke-width 0.2s, opacity 0.25s" }}
                  />
                );
              })}

              {/* Zap pulses — only while section is visible, off under reduced motion */}
              {entered && inView && !reduced && SKILL_EDGES.map(([a, b], i) => {
                const na = skillMap[a], nb = skillMap[b];
                if (!na || !nb) return null;
                const len    = Math.hypot(nb.x - na.x, nb.y - na.y);
                const cfg    = pulseConfigs[i];
                const zapDim = connectedIds && !(connectedIds.has(a) && connectedIds.has(b));
                return (
                  <line
                    key={`zap-${i}`}
                    x1={na.x} y1={na.y}
                    x2={nb.x} y2={nb.y}
                    stroke="#b45309"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray={`5 ${len + 10}`}
                    opacity={zapDim ? 0 : 0.85}
                    style={{ transition: "opacity 0.25s" }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="5"
                      to={-(len + 5)}
                      dur={`${cfg.dur + cfg.pause}s`}
                      begin={`${cfg.delay}s`}
                      repeatCount="indefinite"
                      calcMode="linear"
                    />
                  </line>
                );
              })}

              {/* Nodes — pill chips */}
              {SKILLS.map(skill => {
                const color  = GROUP_COLORS[skill.group] ?? "#78716c";
                const isHov  = hovered === skill.id;
                const isDim  = connectedIds && !connectedIds.has(skill.id);
                const isCore = skill.group === "core";
                const w      = chipW(skill.label);
                const h      = isCore ? NODE_H + 4 : NODE_H;
                const rx     = h / 2;

                return (
                  <g
                    key={skill.id}
                    className="skill-node-g"
                    style={{
                      cursor: "default",
                      transformOrigin: `${skill.x}px ${skill.y}px`,
                      opacity:    isDim ? 0.32 : 1,
                      transition: "opacity 0.25s",
                    }}
                    onMouseEnter={() => setHovered(skill.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Glow halo on hover */}
                    {isHov && (
                      <rect
                        x={skill.x - w / 2 - 6}
                        y={skill.y - h / 2 - 6}
                        width={w + 12}
                        height={h + 12}
                        rx={rx + 6}
                        fill="none"
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.28"
                      />
                    )}

                    {/* Chip */}
                    <rect
                      x={skill.x - w / 2}
                      y={skill.y - h / 2}
                      width={w}
                      height={h}
                      rx={rx}
                      fill={
                        isHov   ? `${color}28` :
                        isCore  ? `${color}1a` :
                                  `${color}0f`
                      }
                      stroke={isHov ? color : `${color}99`}
                      strokeWidth={isHov || isCore ? "1.5" : "1"}
                      style={{ transition: "fill 0.2s, stroke 0.2s" }}
                    />

                    {/* Label */}
                    <text
                      x={skill.x}
                      y={skill.y + 4}
                      textAnchor="middle"
                      fill={
                        isHov  ? color :
                        isCore ? "#1c1917" :
                                 "rgba(28,25,23,0.72)"
                      }
                      style={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize:   isCore ? "11.5px" : "10px",
                        fontWeight: isHov || isCore ? 600 : 400,
                        letterSpacing: "0.03em",
                        transition: "fill 0.2s",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {skill.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        )}

        {/* ── Mobile: grouped chips ── */}
        {isMobile && (
          <div className="flex flex-col gap-7">
            {Object.entries(grouped).map(([group, skills]) => (
              <div key={group}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-1.5 h-1.5 rounded-sm"
                    style={{ backgroundColor: GROUP_COLORS[group] }}
                  />
                  <span style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "clamp(0.5rem,0.75vw,0.6rem)",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "rgba(28,25,23,0.55)",
                  }}>
                    {GROUP_LABELS[group] ?? group}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => (
                    <span
                      key={s.id}
                      style={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize: "clamp(0.6rem, 1.1vw, 0.7rem)",
                        padding: "0.35rem 0.85rem",
                        borderRadius: "999px",
                        color:           GROUP_COLORS[s.group],
                        border:          `1px solid ${GROUP_COLORS[s.group]}66`,
                        backgroundColor: `${GROUP_COLORS[s.group]}0f`,
                      }}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
