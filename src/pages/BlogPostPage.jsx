import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PixelOverlay from "../components/ui/PixelOverlay";
import { BLOGS } from "../data/portfolio";

const mono = { fontFamily: '"DM Mono", monospace' };
const display = { fontFamily: '"SAILORS", "Fraunces", Georgia, serif' };
const sans = { fontFamily: "DM Sans, system-ui, sans-serif" };

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none text-td-ink/80 leading-relaxed" style={sans}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({node, ...props}) => <h2 style={display} className="text-3xl mt-12 mb-6 text-td-ink" {...props} />,
          h3: ({node, ...props}) => <h3 style={display} className="text-2xl mt-10 mb-4 text-td-ink" {...props} />,
          p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-2 border-td-amber pl-6 my-8 italic text-td-muted" {...props} />
          ),
          code: ({node, inline, className, children, ...props}) => {
            if (inline) {
              return <code className="bg-td-border/30 px-1.5 py-0.5 rounded-sm font-mono text-sm text-td-amber" {...props}>{children}</code>;
            }
            return (
              <div className="bg-td-border/20 p-6 rounded-sm my-8 font-mono text-sm border border-td-border/50 text-td-ink/90 overflow-x-auto">
                <code {...props}>{children}</code>
              </div>
            );
          },
          hr: ({node, ...props}) => <hr className="h-px w-24 bg-td-amber/50 my-10 border-0" {...props} />,
          a: ({node, ...props}) => <a className="text-td-amber hover:underline underline-offset-4" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const BlogPostPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    // Find the blog post by ID or by matching the URL slug in the link
    const found = BLOGS.find((b) => b.id === id || b.link.endsWith(`/${id}`));
    setBlog(found);
    if (found) {
      document.title = `${found.title} — Pradeep Chandran M`;
    }
    
    document.documentElement.dataset.cinematic = "true";
    return () => {
      document.title = "Pradeep Chandran M - Portfolio";
      delete document.documentElement.dataset.cinematic;
    };
  }, [id]);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  const handleMidpoint = () => {
    const newIsDark = !isDark;
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
    setIsDark(newIsDark);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center cinematic-page">
        <p className="font-mono text-sm uppercase tracking-widest text-td-muted" style={mono}>
          404 — Entry Not Found
        </p>
      </div>
    );
  }

  return (
    <main className="cinematic-page relative min-h-screen">
      <PixelOverlay 
        isAnimating={isAnimating}
        onMidpoint={handleMidpoint}
        onComplete={() => setIsAnimating(false)}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(28,25,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-10 py-10 sm:py-24">
        <div className="flex justify-between items-center mb-16">
          <Link
            to="/blogs"
            className="archive-reveal inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={mono}
          >
            <span aria-hidden>←</span> Return to Journal Entries
          </Link>
          <button
            onClick={toggleTheme}
            className="archive-reveal inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={mono}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <header className="archive-reveal mb-16 sm:mb-20" style={{ "--reveal-delay": "0.1s" }}>
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-td-amber" style={mono}>
              Entry /{blog.id}
            </span>
            <span className="h-px w-8 bg-td-border" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-td-muted" style={mono}>
              {blog.date}
            </span>
          </div>

          <h1
            className="font-bold leading-tight text-td-ink mb-8"
            style={{
              ...display,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-td-muted/80 border border-td-border px-2 py-1"
                style={mono}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="archive-reveal" style={{ "--reveal-delay": "0.3s" }}>
          {blog.content ? (
            <MarkdownRenderer content={blog.content} />
          ) : (
            <p className="font-mono text-sm text-td-muted italic" style={mono}>
              [ Content decryption pending for this log... ]
            </p>
          )}
        </article>
      </div>
    </main>
  );
};

export default BlogPostPage;
