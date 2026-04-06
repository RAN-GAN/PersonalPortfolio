import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseMe = () => {
  const reasons = [
    "Fast delivery",
    "Clean and scalable code",
    "Modern UI/UX",
    "Reliable deployment",
    "Focus on practical business solutions"
  ];

  return (
    <section className="px-6 sm:px-12 md:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-1/2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1aa] font-medium">Why Choose Me</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 tracking-tight leading-tight mb-8">
            Built for <span className="font-semibold text-white">Excellence.</span>
          </h2>
          <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-sm font-light mb-8">
            I don't just write code. I partner with you to build digital assets that actively grow your business, enhance your brand, and streamline your operations securely.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-white/5">
              <span className="text-xs font-semibold text-white">PR</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Pradeep Chandran M</div>
              <div className="text-xs text-[#a1a1aa]">Freelance Web Developer</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-1/2 w-full bg-[#121214] rounded-3xl border border-white/5 p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B19EEF] opacity-[0.03] blur-[80px] rounded-full pointer-events-none"></div>
          
          <ul className="space-y-6 relative z-10">
            {reasons.map((reason, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#B19EEF]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-white text-base sm:text-lg font-light tracking-wide">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default WhyChooseMe;
