import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    priceRange: '₹4,000 – ₹6,000',
    features: [
      '1–2 pages',
      'Responsive design',
      'Basic deployment',
      'Delivery in 2–3 days',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    priceRange: '₹10,000 – ₹18,000',
    badge: 'Most popular',
    features: [
      '4–6 pages or simple web app',
      'Modern UI/UX design',
      'Performance optimized',
      'Deployment included',
      'Delivery in 5–10 days',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    priceRange: '₹25,000+',
    features: [
      'Custom web application',
      'Advanced UI & animations',
      'Cloud deployment architecture',
      'Scalable robust backend',
      'Priority support',
    ],
    highlight: false,
  },
];

const addons = [
  { label: 'Extra page', price: '₹800 – ₹1,500' },
  { label: 'Cloud setup', price: '₹1,500 – ₹4,000' },
  { label: 'Monthly maintenance', price: '₹1,000 – ₹3,000 / mo' },
];

const ease = [0.16, 1, 0.3, 1];

const scrollToContact = (e) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const PricingTiers = () => {
  const [hoveredTier, setHoveredTier] = useState(null);

  return (
    <section id="pricing" style={{
      backgroundColor: '#F7F3EC',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 72px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: '64px' }}
        >
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#8B7D6B',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
            fontFamily: "'DM Mono', monospace",
          }}>
            Investment
          </span>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1816',
            margin: 0,
          }}>
            Transparent pricing.
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="fl2-pricing-grid">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              onMouseEnter={() => setHoveredTier(i)}
              onMouseLeave={() => setHoveredTier(null)}
              style={{
                backgroundColor: tier.highlight
                  ? '#111110'
                  : hoveredTier === i ? '#EDE8DF' : '#F7F3EC',
                padding: '40px 36px 36px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'background-color 0.3s ease',
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#C75B21',
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: '20px',
                }}>
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    backgroundColor: '#C75B21', display: 'inline-block',
                  }} />
                  {tier.badge}
                </div>
              )}
              {!tier.badge && <div style={{ height: '30px', marginBottom: '20px' }} />}

              {/* Plan name */}
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '22px',
                fontWeight: 600,
                color: tier.highlight ? '#F7F3EC' : '#1A1816',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>
                {tier.name}
              </div>

              {/* Price — DM Mono, bold, single string */}
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontWeight: 500,
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                color: tier.highlight ? '#F7F3EC' : '#1A1816',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '32px',
                paddingBottom: '28px',
                borderBottom: `1px solid ${tier.highlight
                  ? 'rgba(247, 243, 236, 0.1)'
                  : 'rgba(26, 24, 22, 0.1)'}`,
              }}>
                {tier.priceRange}
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}>
                {tier.features.map((f, j) => (
                  <li key={j} style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    padding: '11px 0',
                    borderBottom: `1px solid ${tier.highlight
                      ? 'rgba(247, 243, 236, 0.07)'
                      : 'rgba(26, 24, 22, 0.07)'}`,
                  }}>
                    <span style={{
                      color: '#C75B21',
                      flexShrink: 0,
                      fontSize: '14px',
                      fontFamily: "'DM Mono', monospace",
                      lineHeight: 1,
                    }}>
                      —
                    </span>
                    <span style={{
                      fontSize: '15px',
                      color: tier.highlight ? 'rgba(247, 243, 236, 0.82)' : '#3D342D',
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact" onClick={scrollToContact} style={{
                display: 'block',
                textAlign: 'center',
                padding: '13px 20px',
                borderRadius: '100px',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'DM Mono', monospace",
                fontWeight: 500,
                backgroundColor: tier.highlight ? '#F7F3EC' : 'transparent',
                color: tier.highlight ? '#111110' : '#1A1816',
                border: tier.highlight ? 'none' : '1px solid rgba(26, 24, 22, 0.2)',
                cursor: 'pointer',
              }}>
                Get started →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons — full-width row layout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            backgroundColor: '#1A1816',
            padding: '36px 40px',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '20px',
              fontWeight: 600,
              color: '#F7F3EC',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Optional Add-ons
            </h3>
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: '#8B7D6B',
              textTransform: 'uppercase',
              fontFamily: "'DM Mono', monospace",
            }}>
              Bolt-on to any plan
            </span>
          </div>

          <div>
            {addons.map((addon, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 0',
                borderTop: '1px solid rgba(247, 243, 236, 0.07)',
                gap: '24px',
              }}>
                <span style={{
                  fontSize: '15px',
                  color: 'rgba(247, 243, 236, 0.75)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  {addon.label}
                </span>
                <span style={{
                  fontSize: '14px',
                  color: '#F7F3EC',
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 500,
                  flexShrink: 0,
                  letterSpacing: '-0.01em',
                }}>
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingTiers;
