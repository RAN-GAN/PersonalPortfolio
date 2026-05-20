import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const items = [
  { name: 'sites that convert.',   category: 'Not just look pretty.',          project: 'Karpagam Residency' },
  { name: 'apps that scale.',      category: 'From idea to production.',        project: 'Clinic Pro' },
  { name: 'tools that save time.', category: 'Bots, scripts & automation.',     project: 'TTT Academy' },
  { name: 'code that ships.',      category: 'Software built to solve problems.', project: 'Fast delivery' },
];

const TYPING_SPEED = 68;
const DELETE_SPEED = 32;
const PAUSE_END    = 2200;
const PAUSE_START  = 420;

const useTypewriter = (list) => {
  const [idx, setIdx]           = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused]     = useState(false);

  useEffect(() => {
    const full = list[idx].name;

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, PAUSE_END);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (text.length < full.length) {
        const t = setTimeout(() => setText(full.slice(0, text.length + 1)), TYPING_SPEED);
        return () => clearTimeout(t);
      }
      setPaused(true);
      return;
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setIdx((idx + 1) % list.length); setDeleting(false); }, PAUSE_START);
    return () => clearTimeout(t);
  }, [text, deleting, paused, idx, list]);

  return { text, item: list[idx], idx, isComplete: text === list[idx].name, activeIdx: idx };
};

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  const { text, item, activeIdx, isComplete } = useTypewriter(items);

  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#F7F3EC',
      padding: 'clamp(72px, 10vh, 160px) clamp(24px, 6vw, 72px) clamp(40px, 6vh, 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background geometry */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', userSelect: 'none' }} aria-hidden="true">
        <defs>
          <symbol id="cross" viewBox="-6 -6 12 12">
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#1A1816" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#1A1816" strokeWidth="1" />
          </symbol>
        </defs>

        {/* Large circle outline — top right */}
        <circle cx="88%" cy="-8%" r="340" fill="none" stroke="rgba(26,24,22,0.18)" strokeWidth="1.5" />
        <circle cx="88%" cy="-8%" r="220" fill="none" stroke="rgba(199,91,33,0.22)" strokeWidth="1.5" />

        {/* Arc fragment — bottom left */}
        <circle cx="-6%" cy="108%" r="280" fill="none" stroke="rgba(26,24,22,0.14)" strokeWidth="1.5" />

        {/* Horizontal rule accent */}
        <line x1="0" y1="50%" x2="18%" y2="50%" stroke="rgba(26,24,22,0.18)" strokeWidth="1" />

        {/* Cross marks */}
        {[
          ['72%', '76%'], ['83%', '40%'], ['13%', '86%'], ['91%', '62%'],
        ].map(([x, y], i) => (
          <use key={i} href="#cross" x={x} y={y} width="12" height="12" opacity="0.45" />
        ))}

        {/* Dot grid — bottom right */}
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 7 }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={`${66 + col * 4}%`}
              cy={`${64 + row * 7}%`}
              r="1.5"
              fill="rgba(26,24,22,0.28)"
            />
          ))
        )}

        {/* Amber accent line — bottom left */}
        <line x1="5%" y1="91%" x2="16%" y2="91%" stroke="#C75B21" strokeWidth="2" opacity="0.5" />
      </svg>

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="fl2-hero-grid">

          {/* Left — headline + description + CTAs */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}
            >
              {/* <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block',
                animation: 'fl2-pulse-green 2s ease-in-out infinite',
              }} /> */}
              <span style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#4A3F38',
                fontFamily: "'DM Mono', monospace",
              }}>
                Available for projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <h1 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(52px, 8vw, 112px)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                margin: '0 0 28px',
                color: '#1A1816',
              }}>
                <span style={{ display: 'block' }}>Software</span>
                <span style={{ display: 'block', color: '#C75B21' }}>Development</span>
                <span style={{ display: 'block' }}>that works.</span>
              </h1>
            </motion.div>

            {/* Description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              <p style={{
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                color: '#4A3F38',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                lineHeight: 1.75,
                maxWidth: '440px',
                marginBottom: '36px',
              }}>
                Freelance developer based in India. I design and build websites, web apps, and automation tools that deliver real results — fast.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#work" onClick={scrollTo('work')} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  backgroundColor: '#1A1816',
                  color: '#F7F3EC',
                  textDecoration: 'none',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  See my work →
                </a>
                <a href="#contact" onClick={scrollTo('contact')} style={{
                  color: '#8B7D6B',
                  textDecoration: 'none',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  borderBottom: '1px solid rgba(139,125,107,0.4)',
                  paddingBottom: '2px',
                }}>
                  Let's talk
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — typewriter + project preview card */}
          <motion.div
            className="fl2-hero-right"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            style={{ paddingTop: '8px' }}
          >
            <div style={{
              backgroundColor: '#111110',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Amber glow */}
              <div style={{
                position: 'absolute',
                top: '-40px', right: '-40px',
                width: '220px', height: '220px',
                backgroundColor: '#C75B21',
                opacity: 0.05,
                borderRadius: '50%',
                filter: 'blur(70px)',
                pointerEvents: 'none',
              }} />

              {/* Top bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 28px',
                borderBottom: '1px solid rgba(247,243,236,0.06)',
              }}>
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8B7D6B',
                  fontFamily: "'DM Mono', monospace",
                }}>
                  Recently shipped
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                    <div key={c} style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: c, opacity: 0.55 }} />
                  ))}
                </div>
              </div>

              {/* Typewriter area */}
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{
                  fontSize: '12px',
                  color: '#8B7D6B',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '8px',
                  letterSpacing: '0.04em',
                }}>
                  I build
                </div>

                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: 'clamp(22px, 2.8vw, 36px)',
                  color: '#F7F3EC',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  minHeight: 'clamp(48px, 6vw, 80px)',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <span>{text}</span>
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    backgroundColor: '#C75B21',
                    marginLeft: '3px',
                    marginTop: '0.1em',
                    animation: 'fl2-blink 1s step-end infinite',
                    flexShrink: 0,
                  }} />
                </div>

                {/* Category + project name */}
                <div style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(247,243,236,0.07)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  opacity: isComplete ? 1 : 0,
                  transform: isComplete ? 'translateY(0)' : 'translateY(5px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#8B7D6B',
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: '0.03em',
                  }}>
                    {item.category}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: 'rgba(247,243,236,0.3)',
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: '0.06em',
                  }}>
                    {item.project}
                  </span>
                </div>

                {/* Progress dots */}
                <div style={{ display: 'flex', gap: '6px', marginTop: '20px' }}>
                  {items.map((_, i) => (
                    <div key={i} style={{
                      height: '2px',
                      flex: 1,
                      borderRadius: '2px',
                      backgroundColor: activeIdx === i ? '#C75B21' : 'rgba(247,243,236,0.1)',
                      transition: 'background-color 0.4s ease',
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Animated bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '1px',
          backgroundColor: 'rgba(26, 24, 22, 0.1)',
          transformOrigin: 'left',
        }}
      />
    </section>
  );
};

export default HeroSection;
