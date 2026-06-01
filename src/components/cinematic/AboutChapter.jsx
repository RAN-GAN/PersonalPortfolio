import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import { BIO, PERSONAL } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function AboutChapter() {
  const sectionRef = useRef(null);
  const quoteRef   = useRef(null);
  const linesRef   = useRef(null);

  useGSAP(() => {
    // Parallax on pull-quote
    gsap.to(quoteRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

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
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-td-bg py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle horizontal rule texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(28,25,23,0.03) 40px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
        <ChapterTitle number="01" title="Identity" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Pull quote — parallaxes up on scroll */}
          <div ref={quoteRef} className="lg:sticky lg:top-24">
            <blockquote
              className="font-display font-bold text-td-ink leading-snug"
              style={{
                fontFamily: '"SAILORS", serif',
                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                letterSpacing: "-0.01em",
                color: "#000",
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
          </div>

          {/* Bio paragraphs */}
          <div ref={linesRef} className="flex flex-col gap-6">
            {BIO.long.map((para, i) => (
              <p
                key={i}
                className="text-td-muted leading-relaxed"
                style={{
                  fontFamily: '"Proxima Nova", system-ui, sans-serif',
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
