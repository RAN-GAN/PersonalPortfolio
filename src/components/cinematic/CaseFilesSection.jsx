import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterTitle from "./ChapterTitle";
import { PROJECTS } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function CaseCard({ project, index }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 36,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <article
      ref={ref}
      className="group relative bg-td-surface border border-td-border rounded-sm p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 24px rgba(28,25,23,0.06), inset 0 0 0 1px rgba(180,83,9,0.0)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(28,25,23,0.10), inset 0 0 0 1px rgba(180,83,9,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 24px rgba(28,25,23,0.06), inset 0 0 0 1px rgba(180,83,9,0)";
      }}
    >
      {/* Case label */}
      <p
        className="font-mono text-[9px] uppercase tracking-[0.55em] text-td-amber mb-4"
        style={{ fontFamily: '"DM Mono", monospace' }}
      >
        Case File /{project.id}
      </p>

      <h3
        className="font-display font-medium text-td-ink mb-3 leading-tight"
        style={{
          fontFamily: '"SAILORS", serif',
          fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
          color: "#000",
        }}
      >
        {project.title}
      </h3>

      <p
        className="text-td-muted leading-relaxed mb-6 text-sm"
        style={{ fontFamily: "DM Sans, system-ui, sans-serif", lineHeight: 1.75 }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-wider text-td-muted border border-td-border px-2 py-0.5 rounded-sm"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-td-amber hover:gap-4 transition-all duration-300"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Open File <span aria-hidden>→</span>
        </a>
      ) : (
        <span
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-td-muted/60"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Classified
        </span>
      )}

      {/* Corner accent */}
      <div
        aria-hidden="true"
        className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          borderTop: "1px solid rgba(180,83,9,0.5)",
          borderRight: "1px solid rgba(180,83,9,0.5)",
        }}
      />
    </article>
  );
}

export default function CaseFilesSection() {
  const sectionRef = useRef(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-td-bg"
    >
      {/* Faint crosshatch background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(28,25,23,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
        <ChapterTitle number="02" title="Investigations" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <CaseCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
