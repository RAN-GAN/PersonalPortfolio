import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Website & Web App Development',
    desc: 'From marketing sites to full-stack web apps — responsive, fast, and built to scale. Landing page or custom internal tool, I build it right the first time.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    num: '02',
    title: 'Mobile App Development',
    desc: 'Cross-platform apps built with React Native. One codebase, two platforms — iOS and Android — with a native feel that doesn\'t cut corners.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    num: '03',
    title: 'API Development & Integration',
    desc: 'Custom REST APIs and third-party connections — payments, maps, CRMs. Backend logic that powers your product reliably behind the scenes.',
    tags: ['REST', 'Node.js', 'Webhooks'],
  },
  {
    num: '04',
    title: 'Bot & Automation',
    desc: 'Telegram bots, WhatsApp assistants, scheduled scripts and workflow automation that eliminate repetitive work and run quietly in the background.',
    tags: ['Telegram', 'Python', 'Automation'],
  },
  {
    num: '05',
    title: 'Website Redesign',
    desc: 'Outdated look, slow load times, poor conversions? I modernize existing sites with sharp UI/UX and performance tuning — without starting from scratch.',
    tags: ['UI/UX', 'Performance', 'SEO'],
  },
  {
    num: '06',
    title: 'Cloud Deployment & Migration',
    desc: 'From local to live — CI/CD pipelines, VPS setup, domain config, and cloud infrastructure built for reliability so your app stays up when it matters.',
    tags: ['AWS', 'VPS', 'CI/CD'],
  },
];

const ease = [0.16, 1, 0.3, 1];

const BentoServices = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="services" style={{
      backgroundColor: '#F7F3EC',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 72px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background geometry */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
        <circle cx="50%" cy="-12%" r="380" fill="none" stroke="rgba(26,24,22,0.06)" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(26,24,22,0.04)" strokeWidth="1" />
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => (
            <circle key={`${row}-${col}`} cx={`${4 + col * 5}%`} cy={`${20 + row * 20}%`} r="1.3" fill="rgba(26,24,22,0.1)" />
          ))
        )}
        <circle cx="96%" cy="88%" r="180" fill="none" stroke="rgba(199,91,33,0.08)" strokeWidth="1" />
      </svg>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
          }}
        >
          <div>
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: '#8B7D6B',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px',
              fontFamily: "'DM Mono', monospace",
            }}>
              What I Do
            </span>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#1A1816',
              margin: 0,
            }}>
              Specialized offerings.
            </h2>
          </div>
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#8B7D6B',
            textTransform: 'uppercase',
            fontFamily: "'DM Mono', monospace",
          }}>
            6 services
          </span>
        </motion.div>

        {/* Grid */}
        <div className="fl2-services-grid">
          {services.map((svc, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  backgroundColor: isHovered ? '#1A1816' : '#F7F3EC',
                  border: `1px solid ${isHovered ? 'transparent' : 'rgba(26,24,22,0.1)'}`,
                  padding: 'clamp(28px, 4vw, 44px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background-color 0.4s ease, border-color 0.4s ease',
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                }}
              >
                {/* Top row: number + arrow */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px',
                    color: isHovered ? '#C75B21' : '#8B7D6B',
                    letterSpacing: '0.1em',
                    transition: 'color 0.4s',
                  }}>
                    {svc.num}
                  </span>
                  <span style={{
                    fontSize: '18px',
                    color: isHovered ? '#C75B21' : 'rgba(26,24,22,0.15)',
                    transition: 'color 0.4s, transform 0.4s',
                    transform: isHovered ? 'translate(3px, -3px)' : 'translate(0,0)',
                    display: 'inline-block',
                  }}>
                    ↗
                  </span>
                </div>

                {/* Large ghost number */}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '16px',
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(80px, 10vw, 130px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  transition: 'color 0.4s',
                  color: isHovered
                    ? 'rgba(199, 91, 33, 0.12)'
                    : 'rgba(26, 24, 22, 0.04)',
                }}>
                  {svc.num}
                </div>

                {/* Bottom: title + desc + tags */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(20px, 2.6vw, 28px)',
                    fontWeight: isHovered ? 700 : 600,
                    fontStyle: isHovered ? 'italic' : 'normal',
                    color: isHovered ? '#F7F3EC' : '#1A1816',
                    margin: '0 0 14px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    transition: 'color 0.4s',
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: isHovered ? 'rgba(247,243,236,0.7)' : '#4A3F38',
                    lineHeight: 1.75,
                    margin: '0 0 22px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    transition: 'color 0.4s',
                  }}>
                    {svc.desc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {svc.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontFamily: "'DM Mono', monospace",
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: `1px solid ${isHovered
                          ? 'rgba(199,91,33,0.4)'
                          : 'rgba(26,24,22,0.15)'}`,
                        color: isHovered ? '#C75B21' : '#8B7D6B',
                        transition: 'color 0.4s, border-color 0.4s',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
