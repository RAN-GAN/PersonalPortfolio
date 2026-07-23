import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function JournalContextMenu({ x, y, onClose, journalLink }) {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    // Use pointerdown to catch both mouse and touch outside the menu
    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.95, y: -5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed z-[9999] bg-[#f9f5f0] border border-[#d2c9b4] shadow-xl rounded-sm p-3 min-w-[220px]"
        style={{ top: y, left: x }}
      >
        <p className="text-[#333333] text-sm mb-3 font-medium" style={{ fontFamily: '"SAILORS", "Fraunces", Georgia, serif' }}>
          Want to see how this works?
        </p>
        <Link 
          to={journalLink || "/journal"} 
          className="block w-full text-left px-3 py-2 text-[10px] font-mono tracking-widest uppercase text-[#b24826] bg-transparent hover:bg-[#e4dccb]/50 border border-transparent hover:border-[#d2c9b4] transition-all rounded-sm"
          onClick={onClose}
        >
          Read the blog →
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

export function JournalContextTrigger({ children, journalLink = "/journal", className = "" }) {
  const [contextMenu, setContextMenu] = useState(null);
  const pressTimer = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    pressTimer.current = setTimeout(() => {
      setContextMenu({ x: touch.clientX, y: touch.clientY });
    }, 600); // 600ms long press
  };

  const handleTouchEnd = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };
  
  const handleTouchMove = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };

  const getMenuPosition = (x, y) => {
    const mw = 220; 
    const mh = 100;
    // ensure it doesn't go offscreen
    const px = typeof window !== 'undefined' && x + mw > window.innerWidth ? window.innerWidth - mw - 10 : x;
    const py = typeof window !== 'undefined' && y + mh > window.innerHeight ? window.innerHeight - mh - 10 : y;
    return { x: px, y: py };
  };

  return (
    <>
      <div 
        onContextMenu={handleContextMenu}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className={`w-full h-full cursor-context-menu ${className}`}
      >
        {children}
      </div>
      {contextMenu && (
        <JournalContextMenu 
          {...getMenuPosition(contextMenu.x, contextMenu.y)} 
          onClose={() => setContextMenu(null)}
          journalLink={journalLink}
        />
      )}
    </>
  );
}
