import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Karpagam Residency',
    category: 'Hotel / Hospitality',
    impact: '+40% direct bookings',
    image: 'karpagam.png',
    link: 'https://www.karpagamresidency.in/',
  },
  {
    id: '02',
    title: 'Clinic Pro',
    category: 'Healthcare / Conversion',
    impact: '+25% conversion rate',
    image: 'eversmile.png',
    link: 'https://eversmile-theta.vercel.app/',
  },
  {
    id: '03',
    title: 'TTT Academy Portal',
    category: 'Education / Platform',
    impact: 'Streamlined registrations',
    image: 'ttt.png',
    link: 'http://trainthetrainers.in/',
  },
];

const ease = [0.16, 1, 0.3, 1];

const SelectedWork = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="work"
      style={{
        backgroundColor: '#111110',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 72px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="fl2-work-grid">

          {/* Left — header + rows */}
          <div>
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
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(247, 243, 236, 0.07)',
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
                  Selected Work
                </span>
                <h2 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 700,
                  color: '#F7F3EC',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}>
                  Real results.
                </h2>
              </div>
              <span style={{
                fontSize: '11px',
                color: 'rgba(247, 243, 236, 0.2)',
                fontFamily: "'DM Mono', monospace",
              }}>
                ({projects.length} projects)
              </span>
            </motion.div>

            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(16px, 3vw, 32px)',
                  padding: 'clamp(20px, 3vw, 28px) 0',
                  borderBottom: '1px solid rgba(247, 243, 236, 0.07)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '12px',
                  minWidth: '28px',
                  color: hoveredId === project.id ? '#C75B21' : 'rgba(247, 243, 236, 0.18)',
                  transition: 'color 0.3s',
                }}>
                  {project.id}
                </span>

                <h3 style={{
                  flex: 1,
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(22px, 3.5vw, 48px)',
                  fontWeight: hoveredId === project.id ? 700 : 400,
                  fontStyle: hoveredId === project.id ? 'italic' : 'normal',
                  letterSpacing: '-0.025em',
                  color: hoveredId === project.id ? '#F7F3EC' : 'rgba(247, 243, 236, 0.62)',
                  margin: 0,
                  transition: 'color 0.3s ease',
                  lineHeight: 1.1,
                }}>
                  {project.title}
                </h3>

                <div style={{
                  textAlign: 'right',
                  opacity: hoveredId === project.id ? 1 : 0.25,
                  transition: 'opacity 0.3s',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <span style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: '#8B7D6B',
                    textTransform: 'uppercase',
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#C75B21',
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    {project.impact}
                  </span>
                </div>

                <span style={{
                  fontSize: '18px',
                  color: hoveredId === project.id ? '#C75B21' : 'rgba(247, 243, 236, 0.12)',
                  transition: 'color 0.3s, transform 0.3s',
                  transform: hoveredId === project.id ? 'translateX(5px)' : 'translateX(0)',
                  display: 'inline-block',
                  minWidth: '20px',
                  flexShrink: 0,
                }}>
                  →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right — sticky image panel, always in DOM */}
          <div className="fl2-work-image-panel">
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#1A1918',
            }}>
              {projects.map(p => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    opacity: hoveredId === p.id ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />
              ))}

              {/* Empty state */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                opacity: hoveredId ? 0 : 1,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }}>
                <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(247,243,236,0.12)' }} />
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'rgba(247, 243, 236, 0.18)',
                  textTransform: 'uppercase',
                  fontFamily: "'DM Mono', monospace",
                }}>
                  Hover a project
                </span>
                <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(247,243,236,0.12)' }} />
              </div>

              {/* Label overlay at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(to top, rgba(17,17,16,0.9) 0%, transparent 100%)',
                opacity: hoveredId ? 1 : 0,
                transition: 'opacity 0.35s ease',
                pointerEvents: 'none',
              }}>
                {projects.map(p => (
                  <div
                    key={p.id}
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '24px',
                      right: '24px',
                      opacity: hoveredId === p.id ? 1 : 0,
                      transition: 'opacity 0.25s ease',
                    }}
                  >
                    <div style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#F7F3EC',
                      letterSpacing: '-0.01em',
                    }}>
                      {p.title}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#C75B21',
                      fontFamily: "'DM Mono', monospace",
                      marginTop: '4px',
                    }}>
                      {p.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
