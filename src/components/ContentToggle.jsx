import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const buttons = [
  {
    to: "/projects",
    label: "Projects",
    className: "border-muted text-muted hover:border-accent hover:text-accent",
  },
  {
    to: "/miniprojects",
    label: "Mini Projects",
    className: "border-muted text-muted hover:border-accent hover:text-accent",
  },
  {
    to: "/freelance",
    label: "Freelance",
    className: "border-muted text-muted hover:border-accent hover:text-accent",
    bounce: true,
  },
];

const ContentToggle = () => {
  return (
    <motion.div
      className="flex gap-3 justify-center flex-wrap"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {buttons.map(({ to, label, className, style, bounce }) => (
        <MotionLink
          key={to}
          to={to}
          className={`px-4 py-2 border-2 rounded-full bg-transparent cursor-pointer font-medium capitalize inline-flex items-center no-underline ${className}`}
          style={style}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
          }}
          animate={bounce ? { y: [0, -3, 0] } : undefined}
          transition={bounce ? { duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 } : undefined}
          whileHover={{ scale: 1.06, transition: { duration: 0.18 } }}
          whileTap={{ scale: 0.94 }}
        >
          {label}
        </MotionLink>
      ))}
    </motion.div>
  );
};

export default ContentToggle;
