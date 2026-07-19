import React from "react";
import ArchiveLayout from "../components/cinematic/ArchiveLayout";
import { MINI_PROJECTS } from "../data/portfolio";
import { BlogContextTrigger } from "../components/ui/BlogContextMenu";

const mono = { fontFamily: '"DM Mono", monospace' };
const display = { fontFamily: '"SAILORS", "Fraunces", Georgia, serif' };

function MiniProjectsPage() {
  return (
    <ArchiveLayout
      kicker="Field Notes"
      title="Mini Projects"
      subtitle="Small experiments and utilities I've built."
    >
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MINI_PROJECTS.map((project, idx) => (
            <BlogContextTrigger key={project.title} blogLink="/blogs">
            <article
              className="archive-reveal group bg-td-surface border border-td-border rounded-sm p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ "--reveal-delay": `${0.15 + idx * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 font-mono text-[10px] tracking-widest text-td-amber mt-1"
                  style={mono}
                >
                  /{String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-td-ink mb-1.5 leading-tight"
                    style={{ ...display, fontSize: "1.15rem", color: "var(--color-td-ink)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-td-muted text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
            </BlogContextTrigger>
          ))}
        </div>
      </section>
    </ArchiveLayout>
  );
}

export default MiniProjectsPage;
