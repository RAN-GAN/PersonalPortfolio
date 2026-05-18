import React from 'react';

const words = [
  'React', '·', 'Next.js', '·', 'Node.js', '·', 'React Native', '·',
  'PostgreSQL', '·', 'REST APIs', '·', 'Telegram Bots', '·', 'AWS', '·',
  'CI/CD', '·', 'Figma → Code', '·', 'Fast Delivery', '·', 'Mobile Apps', '·',
];

const MarqueeTicker = ({ dark = false }) => {
  const text = words.join('  ');

  return (
    <div style={{
      backgroundColor: dark ? '#1A1816' : '#111110',
      borderTop: `1px solid ${dark ? 'rgba(26,24,22,0.12)' : 'rgba(247,243,236,0.06)'}`,
      borderBottom: `1px solid ${dark ? 'rgba(26,24,22,0.12)' : 'rgba(247,243,236,0.06)'}`,
      overflow: 'hidden',
      padding: '14px 0',
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'fl2-marquee 28s linear infinite',
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#8B7D6B',
            paddingRight: '60px',
            flexShrink: 0,
          }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
