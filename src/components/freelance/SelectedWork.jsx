import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Karpagam Residency',
    desc: 'Premium hotel booking platform with optimized user flow.',
    impact: 'Increased direct bookings by 40%',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Clinic Pro Landing Page',
    desc: 'High-converting single page funnel for a local dental clinic.',
    impact: 'Boosted conversion rate by 25%',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'TTT Academy Portal',
    desc: 'Institutional platform for training educators with course management.',
    impact: 'Streamlined online registrations',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
  }
];

const TiltCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group w-full cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ transform: "translateZ(30px)" }}
      ></div>

      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#121214] mb-6 shadow-2xl">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-700 pointer-events-none"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1] grayscale-[50%] group-hover:grayscale-0"
        />
        
        {/* Overlay Content within Card */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(9,9,11,0.95) 0%, transparent 100%)" }}>
          <div style={{ transform: "translateZ(40px)" }}>
            <span className="inline-block px-3 py-1 bg-[#B19EEF]/10 text-[#B19EEF] text-[10px] uppercase tracking-widest font-semibold rounded-full mb-3 border border-[#B19EEF]/20 backdrop-blur-md shadow-[0_0_15px_rgba(177,158,239,0.15)]">
              {project.impact}
            </span>
            <p className="text-sm text-gray-300 max-w-xs">{project.desc}</p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between px-2">
        <div>
          <h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-[#B19EEF]">
            {project.title}
          </h3>
        </div>
        <div className="text-xs text-[#52525b] font-mono mt-1">
          {project.id}
        </div>
      </div>
    </motion.div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1aa] font-medium">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 tracking-tight">Real Business <span className="font-semibold text-white">Impact.</span></h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors">
            View All Archive
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" style={{ perspective: "1500px" }}>
          {projects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
