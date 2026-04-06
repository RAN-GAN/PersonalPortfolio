import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Business Website Development",
    desc: "Responsive, fast, clean design engineered to impress visitors and convert.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a1a1aa] mb-5 group-hover:text-white transition-colors">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "Web Application Development",
    desc: "Custom dashboards, tools, and internal systems built with scalable infrastructure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a1a1aa] mb-5 group-hover:text-white transition-colors">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Website Redesign",
    desc: "Implementing modern UI/UX principles and performance enhancements into existing sites.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a1a1aa] mb-5 group-hover:text-white transition-colors">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    span: "md:col-span-1",
  },
  {
    title: "Cloud Deployment & Migration",
    desc: "Robust app deployment, cloud hosting setups, and scalable solutions for web workloads.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a1a1aa] mb-5 group-hover:text-white transition-colors">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
    span: "md:col-span-2",
  }
];

const BentoServices = () => {
  return (
    <section className="px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1aa] font-medium">Services</span>
          <h2 className="text-3xl md:text-5xl font-light mt-4 tracking-tight">Specialized <span className="font-semibold text-white">Offerings.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((svc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${svc.span} bg-[#121214] rounded-2xl border border-white/5 p-8 flex flex-col justify-end relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {svc.icon}
              <h3 className="text-xl font-medium text-white mb-2 relative z-10">{svc.title}</h3>
              <p className="text-[#a1a1aa] text-sm max-w-md font-light relative z-10">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BentoServices;
