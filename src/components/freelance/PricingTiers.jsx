import React from 'react';
import { motion } from 'framer-motion';

const PricingTiers = () => {
  return (
    <section className="px-6 sm:px-12 md:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1aa] font-medium">Investment</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 tracking-tight">Transparent <span className="font-semibold text-white">Pricing.</span></h2>
          <p className="text-[#a1a1aa] mt-4 font-light text-sm max-w-xl mx-auto">Outcome-focused packages tailored to your business needs without hidden surprises.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/5 bg-[#09090b] flex flex-col relative group hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="text-2xl font-medium text-white mb-2">Starter</div>
            <div className="text-xl font-light text-[#a1a1aa] mb-6">₹4,000 – ₹6,000</div>
            
            <ul className="space-y-4 mb-8 text-[#a1a1aa] text-sm font-light flex-1">
              <li className="flex items-center gap-3"><span className="text-[#B19EEF]">•</span> 1–2 pages</li>
              <li className="flex items-center gap-3"><span className="text-[#B19EEF]">•</span> Responsive design</li>
              <li className="flex items-center gap-3"><span className="text-[#B19EEF]">•</span> Basic deployment</li>
              <li className="flex items-center gap-3"><span className="text-[#B19EEF]">•</span> Delivery in 2–3 days</li>
            </ul>
            
            <button className="w-full text-xs font-medium uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 px-4 py-3 rounded-full transition-colors cursor-pointer border border-transparent">
              Select Starter
            </button>
          </motion.div>

          {/* Growth Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/20 bg-[#121214] flex flex-col relative group hover:bg-[#18181b] transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-2 z-10 md:scale-105"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-white text-black text-[10px] uppercase tracking-widest font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Most Popular
            </div>
            <div className="text-2xl font-medium text-white mb-2">Growth</div>
            <div className="text-xl font-light text-[#B19EEF] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a1a1aa]">₹10,000 – ₹18,000</div>
            
            <ul className="space-y-4 mb-8 text-gray-300 text-sm font-light flex-1">
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> 4–6 pages or simple web app</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Modern UI/UX design</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Performance optimized</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Deployment included</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Delivery in 5–10 days</li>
            </ul>
            
            <button className="w-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-gray-200 px-4 py-3 rounded-full transition-colors cursor-pointer">
              Select Growth
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/5 bg-[#09090b] flex flex-col relative group hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="text-2xl font-medium text-white mb-2">Premium</div>
            <div className="text-xl font-light text-[#a1a1aa] mb-6">₹25,000+</div>
            
            <ul className="space-y-4 mb-8 text-[#a1a1aa] text-sm font-light flex-1">
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Custom web application</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Advanced UI & animations</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Cloud deployment architecture</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Scalable robust backend</li>
              <li className="flex items-start gap-3"><span className="text-[#B19EEF] mt-[2px]">•</span> Priority support</li>
            </ul>
            
            <button className="w-full text-xs font-medium uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 px-4 py-3 rounded-full transition-colors cursor-pointer border border-transparent">
              Select Premium
            </button>
          </motion.div>
        </div>

        {/* Add-ons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/5 bg-[#121214] p-8 sm:p-12 mb-24"
        >
          <h3 className="text-xl font-medium text-white mb-6">Optional Add-ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#a1a1aa] font-light">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span>Extra page</span>
              <span className="text-white">₹800 – ₹1500</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span>Cloud setup</span>
              <span className="text-white">₹1500 – ₹4000</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span>Maintenance (monthly)</span>
              <span className="text-white">₹1000 – ₹3000/month</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default PricingTiers;
