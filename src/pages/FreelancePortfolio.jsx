import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/freelance/HeroSection';
import SelectedWork from '../components/freelance/SelectedWork';
import BentoServices from '../components/freelance/BentoServices';
import WhyChooseMe from '../components/freelance/WhyChooseMe';
import PricingTiers from '../components/freelance/PricingTiers';
import FooterCTA from '../components/freelance/FooterCTA';
import MarqueeTicker from '../components/freelance/MarqueeTicker';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';

const FreelancePortfolio = () => {
  useEffect(() => {
    document.title = "Pradeep | Web Development";
    document.body.style.backgroundColor = "#F7F3EC";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      backgroundColor: '#F7F3EC',
      color: '#1A1816',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '18px clamp(24px, 6vw, 72px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(247, 243, 236, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(26, 24, 22, 0.07)',
      }}>
        <Link to="/" style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '-0.03em',
          color: '#1A1816',
          textDecoration: 'none',
        }}>
          PRADEEP.
        </Link>

        <div className="fl2-nav-links">
          <a href="#work" className="fl2-hide-mobile" style={navLinkStyle} onClick={scrollTo('work')}>Work</a>
          <a href="#services" className="fl2-hide-mobile" style={navLinkStyle} onClick={scrollTo('services')}>Services</a>
          <a href="#pricing" className="fl2-hide-mobile" style={navLinkStyle} onClick={scrollTo('pricing')}>Pricing</a>
          <a href="#contact" style={{
            ...navLinkStyle,
            color: '#F7F3EC',
            backgroundColor: '#1A1816',
            padding: '9px 20px',
            borderRadius: '100px',
          }} onClick={scrollTo('contact')}>
            Hire Me
          </a>
        </div>
      </nav>

      <FlowArt aria-label="Freelance Portfolio">
        <FlowSection bare aria-label="Hero" style={{ backgroundColor: '#F7F3EC' }}>
          <HeroSection />
          <MarqueeTicker />
        </FlowSection>

        <FlowSection bare aria-label="Selected Work" style={{ backgroundColor: '#111110' }}>
          <SelectedWork />
          <MarqueeTicker dark />
        </FlowSection>

        <FlowSection bare aria-label="Services" style={{ backgroundColor: '#F7F3EC' }}>
          <BentoServices />
          <MarqueeTicker dark />
        </FlowSection>

        <FlowSection bare aria-label="Why Choose Me" style={{ backgroundColor: '#111110' }}>
          <WhyChooseMe />
          <MarqueeTicker />
        </FlowSection>

        <FlowSection bare aria-label="Pricing" style={{ backgroundColor: '#F7F3EC' }}>
          <PricingTiers />
        </FlowSection>

        <FlowSection bare aria-label="Contact" style={{ backgroundColor: '#111110' }}>
          <FooterCTA />
        </FlowSection>
      </FlowArt>
    </div>
  );
};

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const navLinkStyle = {
  fontSize: '11px',
  letterSpacing: '0.12em',
  color: '#8B7D6B',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontFamily: "'DM Mono', monospace",
};

export default FreelancePortfolio;
