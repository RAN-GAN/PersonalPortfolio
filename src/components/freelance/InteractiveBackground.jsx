import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PixelBlast from '../PixelBlast';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Map scroll progress to subtle Y translations for parallax effect on the blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Subtle Architectural Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 100% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 50% 50%, black 10%, transparent 100%)'
        }}
      ></div>

      {/* Floating Graphic Elements - Concentric Rings */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[15%] left-[-10%] md:left-[5%] opacity-[0.06] pointer-events-none hidden sm:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="249" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="4 8"/>
          <circle cx="250" cy="250" r="180" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="1 4"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] md:right-[0%] opacity-[0.04] pointer-events-none hidden sm:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="350" r="349" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="20 10"/>
          <circle cx="350" cy="350" r="250" stroke="url(#paint1_linear)" strokeWidth="1"/>
          <defs>
            <linearGradient id="paint1_linear" x1="700" y1="0" x2="0" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B19EEF" />
              <stop offset="1" stopColor="#B19EEF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Subtle PixelBlast Background for organic particle micro-interactions */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-auto">
        <PixelBlast
          variant="circle"
          pixelSize={3}
          color="#ffffff"
          patternScale={2.5}
          patternDensity={1.2}
          pixelSizeJitter={0.2}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.08}
          rippleIntensityScale={1.2}
          speed={0.4}
          edgeFade={0.3}
          transparent
        />
      </div>

      {/* Noise Texture for material feel */}
      <div className="absolute inset-0 fl-noise z-10 pointer-events-none opacity-40"></div>

      {/* Blob 1 - Top Right - Moves with scroll */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#B19EEF] opacity-[0.03] blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Bottom Left - Moves with scroll */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-blue-500 opacity-[0.03] blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cursor Follower Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-white opacity-[0.015] blur-[100px] rounded-full mix-blend-screen hidden lg:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 0.5,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
