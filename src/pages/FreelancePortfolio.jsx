import React, { useEffect } from 'react';
import InteractiveBackground from '../components/freelance/InteractiveBackground';
import HeroSection from '../components/freelance/HeroSection';
import SelectedWork from '../components/freelance/SelectedWork';
import BentoServices from '../components/freelance/BentoServices';
import WhyChooseMe from '../components/freelance/WhyChooseMe';
import PricingTiers from '../components/freelance/PricingTiers';
import FooterCTA from '../components/freelance/FooterCTA';

const FreelancePortfolio = () => {
  useEffect(() => {
    document.title = "Pradeep | High-End Web Development";
    document.body.style.backgroundColor = "#09090b";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <div className="freelance-theme bg-[#09090b] text-[#fafafa] min-h-screen relative w-full overflow-hidden font-sans">
      <InteractiveBackground />
      
      <div className="relative z-10 w-full">
        <nav className="fixed top-0 w-full z-50 px-6 sm:px-12 md:px-24 py-8 flex justify-between items-center pointer-events-none mix-blend-difference">
          <div className="text-xl font-bold tracking-tighter text-white">PRADEEP.</div>
          <a href="#contact" className="text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-white/70 transition-colors pointer-events-auto">
            Contact
          </a>
        </nav>

        <main className="flex flex-col gap-24 sm:gap-32 relative z-10 pb-16">
          <HeroSection />
          <SelectedWork />
          <BentoServices />
          <WhyChooseMe />
          <PricingTiers />
          <FooterCTA />
        </main>
      </div>
    </div>
  );
};

export default FreelancePortfolio;
