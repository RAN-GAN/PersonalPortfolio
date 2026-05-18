import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5+',     label: 'Projects delivered',  sub: 'and counting' },
  { value: '3 days', label: 'Fastest turnaround',  sub: 'from brief to live' },
  { value: '100%',   label: 'Remote-capable',       sub: 'anywhere, anytime' },
];

const process = [
  { num: '01', title: 'Brief & Scope',    desc: 'We align on goals, timeline, and budget in a single call.' },
  { num: '02', title: 'Design & Build',   desc: 'I design in the browser — you see real progress, not mockups.' },
  { num: '03', title: 'Review & Refine',  desc: 'Two rounds of feedback, then we lock it down.' },
  { num: '04', title: 'Ship & Hand Off',  desc: 'Live deployment, full ownership transfer, and a clean handoff.' },
];

const ease = [0.16, 1, 0.3, 1];

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const WhyChooseMe = () => {
  return (
    <section style={{
      backgroundColor: '#111110',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background geometry */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
        <circle cx="100%" cy="50%" r="400" fill="none" stroke="rgba(247,243,236,0.03)" strokeWidth="1" />
        <circle cx="100%" cy="50%" r="260" fill="none" stroke="rgba(199,91,33,0.05)" strokeWidth="1" />
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(247,243,236,0.02)" strokeWidth="1" />
      </svg>

      {/* Quote block */}
      <div style={{ padding: 'clamp(80px,12vw,140px) clamp(24px,6vw,72px) clamp(60px,8vw,80px)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.95, ease }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,6vw,80px)',
              alignItems: 'end',
              marginBottom: '80px',
            }}
          >
            <blockquote style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(32px, 5.5vw, 80px)',
              color: '#F7F3EC',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
              paddingLeft: 'clamp(16px, 3vw, 40px)',
              borderLeft: '3px solid #C75B21',
            }}>
              "I don't ship<br />
              templates.<br />
              <span style={{ color: '#C75B21' }}>I build tools.</span>"
            </blockquote>

            <div>
              <p style={{
                fontSize: '16px',
                color: '#8B7D6B',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                lineHeight: 1.8,
                margin: '0 0 28px',
              }}>
                Every project gets my full attention from day one. No hand-offs to junior devs, no cookie-cutter templates — just direct collaboration and clean, purposeful code.
              </p>
              <a href="#contact" onClick={scrollTo('contact')} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C75B21',
                fontFamily: "'DM Mono', monospace",
                textDecoration: 'none',
                borderBottom: '1px solid rgba(199,91,33,0.35)',
                paddingBottom: '3px',
              }}>
                Start a project →
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="fl2-stats-grid" style={{ marginBottom: '80px' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                style={{
                  padding: 'clamp(28px,4vw,48px)',
                  borderTop: '1px solid rgba(247,243,236,0.08)',
                  borderLeft: i > 0 ? '1px solid rgba(247,243,236,0.08)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 700,
                  color: '#F7F3EC',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#8B7D6B',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '4px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(247,243,236,0.2)',
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: '0.06em',
                }}>
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{ marginBottom: '40px' }}
          >
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: '#8B7D6B',
              textTransform: 'uppercase',
              fontFamily: "'DM Mono', monospace",
              display: 'block',
              marginBottom: '32px',
            }}>
              How it works
            </span>

            <div className="fl2-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }}>
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  style={{
                    backgroundColor: '#1A1816',
                    padding: '32px 28px',
                  }}
                >
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    color: '#C75B21',
                    letterSpacing: '0.15em',
                    marginBottom: '20px',
                  }}>
                    {step.num}
                  </div>
                  <div style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#F7F3EC',
                    letterSpacing: '-0.01em',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#8B7D6B',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.7,
                  }}>
                    {step.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
