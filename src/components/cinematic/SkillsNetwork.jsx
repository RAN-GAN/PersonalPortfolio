import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import { SKILLS, SKILL_EDGES } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const GROUP_COLORS = {
  frontend: "#b45309",
  backend:  "#78716c",
  security: "#1c1917",
  devops:   "#a16207",
};
const GROUP_LABELS = {
  frontend: "Frontend",
  backend:  "Backend",
  security: "Security",
  devops:   "DevOps",
};

const VB_W = 760;
const VB_H = 480;

export default function SkillsNetwork() {
  const sectionRef = useRef(null);
  const svgRef     = useRef(null);
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => setEntered(true),
      once: true,
    });
  }, { scope: sectionRef });

  // Animate edges on enter
  useEffect(() => {
    if (!entered || !svgRef.current) return;
    const lines = svgRef.current.querySelectorAll(".skill-edge");
    lines.forEach((line, i) => {
      const len = line.getTotalLength?.() ?? 200;
      line.style.strokeDasharray  = len;
      line.style.strokeDashoffset = len;
      setTimeout(() => {
        line.style.transition = `stroke-dashoffset 0.8s ease ${i * 0.04}s`;
        line.style.strokeDashoffset = "0";
      }, 50);
    });

    const nodes = svgRef.current.querySelectorAll(".skill-node-g");
    nodes.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "scale(0.6)";
      setTimeout(() => {
        n.style.transition = `opacity 0.5s ease ${0.3 + i * 0.05}s, transform 0.5s ease ${0.3 + i * 0.05}s`;
        n.style.opacity = "1";
        n.style.transform = "scale(1)";
      }, 50);
    });
  }, [entered]);

  const skillMap = Object.fromEntries(SKILLS.map(s => [s.id, s]));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-td-surface overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
        <ChapterTitle number="03" title="Arsenal" />

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-10">
          {Object.entries(GROUP_LABELS).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: GROUP_COLORS[key] }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-widest text-td-muted"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            style={{ width: "100%", maxWidth: VB_W, display: "block", overflow: "visible" }}
            aria-label="Skills network diagram"
          >
            {/* Edges */}
            {SKILL_EDGES.map(([a, b], i) => {
              const na = skillMap[a];
              const nb = skillMap[b];
              if (!na || !nb) return null;
              const isHov = hovered === a || hovered === b;
              return (
                <line
                  key={i}
                  className="skill-edge"
                  x1={na.x} y1={na.y}
                  x2={nb.x} y2={nb.y}
                  stroke={isHov ? "#b45309" : "rgba(28,25,23,0.14)"}
                  strokeWidth={isHov ? 1.5 : 0.8}
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                />
              );
            })}

            {/* Nodes */}
            {SKILLS.map(skill => {
              const color = GROUP_COLORS[skill.group];
              const isHov = hovered === skill.id;
              return (
                <g
                  key={skill.id}
                  className="skill-node-g"
                  style={{
                    cursor: "default",
                    transformOrigin: `${skill.x}px ${skill.y}px`,
                  }}
                  onMouseEnter={() => setHovered(skill.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Outer ring on hover */}
                  <circle
                    cx={skill.x} cy={skill.y} r={isHov ? 18 : 12}
                    fill="none"
                    stroke={isHov ? color : "transparent"}
                    strokeWidth="1"
                    style={{ transition: "r 0.2s, stroke 0.2s" }}
                  />
                  {/* Node */}
                  <circle
                    cx={skill.x} cy={skill.y}
                    r={isHov ? 8 : 6}
                    fill={isHov ? color : `${color}55`}
                    stroke={color}
                    strokeWidth="1.5"
                    style={{ transition: "r 0.2s, fill 0.2s" }}
                  />
                  {/* Label */}
                  <text
                    x={skill.x}
                    y={skill.y + (isHov ? 24 : 20)}
                    textAnchor="middle"
                    fill={isHov ? "#1c1917" : "#78716c"}
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      transition: "fill 0.2s, y 0.2s",
                    }}
                  >
                    {skill.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
