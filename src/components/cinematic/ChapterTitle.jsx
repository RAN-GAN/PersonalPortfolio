import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChapterTitle({ number, title, light = false }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.from(el, {
      opacity: 0,
      y: 28,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  const inkClass  = light ? "text-td-bg" : "text-td-ink";
  const muteClass = light ? "text-td-bg/60" : "text-td-muted";
  const lineClass = light ? "bg-td-bg/30" : "bg-td-border";

  return (
    <div ref={ref} className="mb-8 sm:mb-12">
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.5em] mb-3 ${muteClass}`}
        style={{ fontFamily: '"DM Mono", monospace' }}
      >
        Chapter {number}
      </p>
      <div className={`h-px w-12 mb-4 ${lineClass}`} />
      <h2
        className={`font-display font-bold leading-tight ${inkClass}`}
        style={{
          fontFamily: '"SAILORS", serif',
          fontSize: "clamp(2rem, 5vw, 4rem)",
          letterSpacing: "-0.01em",
          color: "#000",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
