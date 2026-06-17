import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";
import ChapterTitle from "./ChapterTitle";
import { BIO, PERSONAL } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function AboutChapter() {
  const sectionRef = useRef(null);
  const quoteRef   = useRef(null);
  const linesRef   = useRef(null);
  const bgRef      = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const fullTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };

      // Rule-line texture drifts slower than content — subtle background depth
      gsap.to(bgRef.current, { yPercent: -12, ease: "none", scrollTrigger: fullTrigger });

      // Smaller parallax on mobile — the gap between the "Identity" chapter
      // title and the quote is ~32px, so cap y at -18 to prevent overlap.
      const parallaxY = window.innerWidth >= 1024 ? -60 : -18;
      gsap.to(quoteRef.current, { y: parallaxY, ease: "none", scrollTrigger: fullTrigger });

      // Stagger bio paragraphs
      gsap.from(linesRef.current?.children ?? [], {
        opacity: 0,
        y: 24,
        stagger: 0.14,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-td-bg pt-20 sm:pt-32 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* Subtle horizontal rule texture — parallaxes at its own rate */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-12% 0",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(28,25,23,0.07) 40px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-12">
        <ChapterTitle number="01" title="Identity" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Pull quote — parallaxes up on scroll */}
          <div ref={quoteRef} className="lg:sticky lg:top-24">

            <blockquote
              className="font-display font-bold text-td-ink leading-snug"
              style={{
                fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
                fontSize: "clamp(1.35rem, 3.5vw, 3.2rem)",
                letterSpacing: "-0.01em",
                color: "rgba(28,25,23,0.62)",
              }}
            >
              "Driven by curiosity. Learning by breaking and building."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-td-amber" />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.4em] text-td-muted"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                {PERSONAL.name}
              </span>
            </div>

            {/* Creation of Adam */}
            <div
              style={{
                marginTop: "2.5rem",
                animation: "fadeUp 0.9s ease 0.7s both",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/PersonalPortfolio/aoc.jpeg"
                alt="Creation of Adam — human meets machine"
                draggable="false"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                  opacity: 0.78,
                  filter: "contrast(1.05)",
                  userSelect: "none",
                  borderRadius: "2px",
                }}
              />
              <p
                className="mt-2 font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Ad astra per aspera!
              </p>
            </div>
          </div>

          {/* Bio paragraphs */}
          <div ref={linesRef} className="flex flex-col gap-6" style={{ position: "relative" }}>
            {/* Bamboo behind the description text */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-6% -4%",
                backgroundImage: "url('/PersonalPortfolio/bamboo.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.04,
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }}
            />
            {BIO.long.map((para, i) => (
              <p
                key={i}
                className="text-td-muted leading-relaxed"
                style={{
                  fontFamily: '"Proxima Nova", "DM Sans", system-ui, sans-serif',
                  fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                  fontWeight: 400,
                  lineHeight: 1.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
