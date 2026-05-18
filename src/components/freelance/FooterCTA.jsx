import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const FooterCTA = () => {
  return (
    <section id="contact" style={{
      backgroundColor: '#111110',
      padding: 'clamp(80px, 14vw, 160px) clamp(24px, 6vw, 72px) clamp(40px, 6vw, 64px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background geometry */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
        <circle cx="-5%" cy="110%" r="420" fill="none" stroke="rgba(247,243,236,0.04)" strokeWidth="1" />
        <circle cx="-5%" cy="110%" r="260" fill="none" stroke="rgba(199,91,33,0.06)" strokeWidth="1" />
        <circle cx="105%" cy="-10%" r="300" fill="none" stroke="rgba(247,243,236,0.03)" strokeWidth="1" />
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <circle key={`${row}-${col}`} cx={`${74 + col * 5}%`} cy={`${10 + row * 14}%`} r="1.2" fill="rgba(247,243,236,0.07)" />
          ))
        )}
      </svg>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Limited slots badge */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B7D6B',
            fontFamily: "'DM Mono', monospace",
            marginBottom: '40px',
          }}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#C75B21',
            display: 'inline-block',
            animation: 'fl2-pulse-amber 2.4s ease-in-out infinite',
          }} />
          Limited slots this month
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease }}
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(56px, 11.5vw, 168px)',
            color: '#F7F3EC',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            margin: '0 0 64px',
          }}
        >
          Let's build<br />
          <span style={{ color: '#C75B21' }}>something</span><br />
          real.
        </motion.h2>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '80px',
          }}
        >
          <a
            href="https://wa.me/916379160890"
            target="_blank"
            rel="noreferrer"
            style={ctaBtn(true)}
          >
            WhatsApp →
          </a>
          <a href="mailto:pradeepchandranm@gmail.com" style={ctaBtn(false)}>
            Email →
          </a>
          <a href="tel:+916379160890" style={ctaBtn(false)}>
            Call →
          </a>
        </motion.div>

        {/* Footer bar */}
        <div style={{
          borderTop: '1px solid rgba(247, 243, 236, 0.07)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/RAN-GAN' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/pradeepchandranm' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: '#8B7D6B',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(247, 243, 236, 0.18)',
            textTransform: 'uppercase',
            fontFamily: "'DM Mono', monospace",
          }}>
            © {new Date().getFullYear()} Pradeep Chandran M.
          </div>
        </div>
      </div>
    </section>
  );
};

const ctaBtn = (primary) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: primary ? '#F7F3EC' : 'transparent',
  color: primary ? '#111110' : '#F7F3EC',
  padding: '14px 28px',
  borderRadius: '100px',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontFamily: "'DM Mono', monospace",
  fontWeight: 500,
  border: primary ? 'none' : '1px solid rgba(247, 243, 236, 0.18)',
  cursor: 'pointer',
});

export default FooterCTA;
