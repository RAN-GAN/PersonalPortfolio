import React from "react";
import ArchiveLayout from "../components/cinematic/ArchiveLayout";
import { JOURNAL } from "../data/portfolio";

const mono = { fontFamily: '"DM Mono", monospace' };
const display = { fontFamily: '"SAILORS", "Fraunces", Georgia, serif' };
const sans = { fontFamily: "DM Sans, system-ui, sans-serif" };

const JournalPage = () => {
  return (
    <ArchiveLayout
      kicker="Documentation"
      title="Journal Entries"
      subtitle="Insights, ideas, and technical explorations."
    >
      <section className="mt-8 sm:mt-12 flex flex-col gap-0 border-y border-td-border bg-td-surface/30">
        {JOURNAL.map((b, i) => (
          <a
            href={b.link}
            key={b.id}
            className="archive-reveal group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 p-6 sm:p-8 border-b border-td-border last:border-b-0 hover:bg-td-border/20 transition-all duration-500 block"
            style={{ "--reveal-delay": `${0.15 + i * 0.08}s`, textDecoration: 'none' }}
          >
            {/* Left column: Date and ID */}
            <div className="flex flex-col md:border-r md:border-td-border/50 md:pr-6 md:justify-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-td-amber mb-2" style={mono}>
                Log /{b.id}
              </p>
              <div className="font-mono text-xs uppercase tracking-widest text-td-ink/70" style={mono}>
                {b.date}
              </div>
            </div>

            {/* Right column: Content */}
            <div className="flex flex-col justify-center">
              <h3
                className="mb-3 group-hover:text-td-amber transition-colors duration-400"
                style={{ ...display, fontSize: "1.65rem", lineHeight: 1.15, color: "var(--color-td-ink)" }}
              >
                {b.title}
              </h3>
              
              <p className="text-td-muted text-sm leading-relaxed max-w-2xl mb-6" style={{ ...sans, lineHeight: 1.8 }}>
                {b.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {b.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] uppercase tracking-[0.2em] text-td-muted/80 bg-td-border/30 px-2.5 py-1"
                      style={mono}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {b.link && (
                  <span
                    className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-td-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4"
                    style={mono}
                  >
                    Read <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            </div>

            {/* Subtle left border highlight on hover */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-td-amber scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"
            />
          </a>
        ))}
      </section>
    </ArchiveLayout>
  );
};

export default JournalPage;
