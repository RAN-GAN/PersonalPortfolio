import React from "react";
import ArchiveLayout from "../components/cinematic/ArchiveLayout";
import { PROJECTS, ACHIEVEMENTS } from "../data/portfolio";
import { CustomContextMenu } from "../components/CustomContextMenu";
import { useNavigate, Link } from "react-router-dom";

const mono = { fontFamily: '"DM Mono", monospace' };
const display = { fontFamily: '"SAILORS", "Fraunces", Georgia, serif' };

function SectionLabel({ children }) {
  return (
    <h2
      className="font-mono text-[10px] uppercase tracking-[0.5em] text-td-muted mb-6"
      style={mono}
    >
      {children}
    </h2>
  );
}

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <ArchiveLayout
      kicker="Case Archive"
      title="Artifacts"
      subtitle="Here are things I’m proud of."
    >
      {/* Achievements */}
      <section className="mb-16">
        <SectionLabel>Achievements</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <JournalContextTrigger key={a.label} journalLink="/journal">
            <article
              className="archive-reveal bg-td-surface border border-td-border rounded-sm p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ "--reveal-delay": `${0.15 + i * 0.08}s` }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-td-amber mb-3" style={mono}>
                Record /{String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-td-ink mb-2 leading-tight"
                style={{ ...display, fontSize: "1.15rem", color: "var(--color-td-ink)" }}
              >
                {a.label}
              </h3>
              <p className="text-td-muted text-sm leading-relaxed" style={{ lineHeight: 1.75 }}>
                {a.text}
              </p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.4em] text-td-amber hover:gap-3 transition-all"
                  style={mono}
                >
                  View Record <span aria-hidden>→</span>
                </a>
              )}
            </article>
            </JournalContextTrigger>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <SectionLabel>Projects</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <CustomContextMenu
              key={p.id}
              menuText={p.link ? "Open Project Details" : "Project Classified"}
              onClick={() => {
                if (!p.link) return;
                if (p.link.startsWith("#")) {
                  navigate(p.link.replace(/^#/, ""));
                } else {
                  window.open(p.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
            <article
              className="archive-reveal bg-td-surface border border-td-border rounded-sm p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ "--reveal-delay": `${0.3 + i * 0.08}s` }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-td-amber mb-3" style={mono}>
                Case File /{p.id}
              </p>
              <h3
                className="text-td-ink mb-2 leading-tight"
                style={{ ...display, fontSize: "1.4rem", color: "var(--color-td-ink)" }}
              >
                {p.title}
              </h3>
              <p className="text-td-muted text-sm leading-relaxed mb-4" style={{ lineHeight: 1.75 }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-wider text-td-muted border border-td-border px-2 py-0.5 rounded-sm"
                    style={mono}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                p.link.startsWith("#") ? (
                  <Link
                    to={p.link.replace(/^#/, "")}
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-td-amber hover:gap-4 transition-all duration-300"
                    style={mono}
                  >
                    Open File <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-td-amber hover:gap-4 transition-all duration-300"
                    style={mono}
                  >
                    Open File <span aria-hidden>→</span>
                  </a>
                )
              )}
            </article>
            </CustomContextMenu>
          ))}
        </div>
      </section>
    </ArchiveLayout>
  );
};

export default ProjectsPage;
