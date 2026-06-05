import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import { ACHIEVEMENTS } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const ROTATIONS = [-5, 2.5, -4];
const PINNED_OFFSET = [
  { top: "10%",  left: "4%" },
  { top: "18%",  left: "36%" },
  { top: "8%",   left: "66%" },
];

function PinIcon() {
  return (
    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true" style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)" }}>
      <circle cx="7" cy="5" r="4" fill="#b45309" />
      <line x1="7" y1="9" x2="7" y2="20" stroke="#b45309" strokeWidth="1.5" />
    </svg>
  );
}

export default function SecurityBoard() {
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);
  const isMobile   = typeof window !== "undefined" && window.innerWidth < 640;

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        opacity: 0,
        y: 40,
        rotate: ROTATIONS[i] - 4,
        duration: 0.9,
        delay: i * 0.18,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      id="security"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-td-bg overflow-hidden"
    >
      {/* Grid board texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(28,25,23,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(28,25,23,0.07) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {/* Faded headline stamp */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "3%",
          fontFamily: '"DM Mono", monospace',
          fontSize: "clamp(4rem, 12vw, 10rem)",
          fontWeight: 700,
          color: "rgba(28,25,23,0.08)",
          letterSpacing: "-0.04em",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        INTEL
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
        <ChapterTitle number="04" title="Intel" />

        {/* Connector SVG lines (absolute, behind cards) */}
        <div className="relative">
          <svg
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
          >
            <line x1="16%" y1="30%" x2="38%" y2="30%" stroke="rgba(180,83,9,0.25)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="62%" y1="28%" x2="72%" y2="28%" stroke="rgba(180,83,9,0.25)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {ACHIEVEMENTS.map((item, i) => (
              <div
                key={i}
                ref={el => (cardsRef.current[i] = el)}
                className="relative bg-td-surface border border-td-border p-6 sm:p-7 rounded-sm"
                style={{
                  transform: isMobile ? "none" : `rotate(${ROTATIONS[i]}deg)`,
                  boxShadow: "3px 4px 18px rgba(28,25,23,0.08), 0 1px 3px rgba(28,25,23,0.05)",
                  willChange: "transform",
                }}
              >
                <PinIcon />

                <p
                  className="font-mono text-[9px] uppercase tracking-[0.5em] text-td-amber mb-4 mt-2"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  [CLASSIFIED]
                </p>

                <h3
                  className="font-display font-medium text-td-ink mb-3 leading-tight"
                  style={{
                    fontFamily: '"SAILORS", serif',
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    color: "#000",
                  }}
                >
                  {item.label}
                </h3>

                <p
                  className="text-td-muted text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, system-ui, sans-serif", lineHeight: 1.75 }}
                >
                  {item.text}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.4em] text-td-amber hover:text-td-sepia transition-colors"
                    style={{ fontFamily: '"DM Mono", monospace' }}
                  >
                    View Record <span aria-hidden>→</span>
                  </a>
                )}

                {/* Worn corner fold */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderLeft: "24px solid transparent",
                    borderBottom: `24px solid rgba(28,25,23,0.18)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
