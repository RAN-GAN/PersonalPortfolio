import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <section id="contact" className="px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-24 sm:pt-32 pb-12 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B19EEF]/20 bg-[#B19EEF]/5 text-[#cdb4db] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#B19EEF] animate-pulse"></span>
            Limited slots available this month
          </div>
          
          <h2 className="text-5xl sm:text-7xl md:text-[6rem] font-medium tracking-tighter text-white mb-6">
            Let's build <br className="hidden sm:block"/><span className="text-[#a1a1aa] font-light">together.</span>
          </h2>

          <p className="text-[#a1a1aa] text-base sm:text-lg font-light max-w-2xl mx-auto mb-12">
            Secure your spot now and let's engineer a high-performing website that actively drives customers and revenue to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:hello@example.com" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email
            </a>
            <a href="tel:+1234567890" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-white/5 text-[10px] sm:text-xs text-[#52525b] uppercase tracking-widest font-medium">
          <div className="flex gap-4 sm:gap-6">
            <a href="https://github.com/RAN-GAN" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/pradeepchandranm" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://twitter.com/" className="hover:text-white transition-colors">Twitter (X)</a>
          </div>
          <div>© {new Date().getFullYear()} PRADEEP CHANDRAN M.</div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
