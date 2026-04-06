import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 md:px-24 pt-20 pb-16">
      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto z-10 relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_4px_24px_rgba(255,255,255,0.02)]"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a1a1aa] font-medium">Available for new projects</span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] sm:leading-[1.05] mb-8 text-white max-w-5xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Building Modern,
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[#a1a1aa] bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent"
          >
            Fast & Scalable
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Web Solutions.
          </motion.span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 md:mt-12 flex flex-col items-center"
        >
          <p className="text-[#a1a1aa] text-lg sm:text-xl font-light leading-relaxed max-w-2xl text-center mb-12">
            Transforming ideas into high-end digital products. I deliver unmatched <strong className="text-white font-medium">performance, usability, and reliability</strong> to elevate your brand above the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a href="#contact" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              Get Your Website
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#work" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300">
              View Projects
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
