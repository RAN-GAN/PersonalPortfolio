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
        className="fixed z-[9999] bg-[#f9f5f0] border border-[#d2c9b4] shadow-xl rounded-sm p-1.5 min-w-[220px]"
        style={{ top: y, left: x }}
      >
        <div className="px-3 pt-2 pb-1.5 mb-1 border-b border-[#d2c9b4]/50">
          <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#b45309]">
            // INVESTIGATE
          </p>
        </div>
        <div className="px-3 py-2 mb-2">
            <p className="text-[#1c1917] text-sm font-medium" style={{ fontFamily: '"SAILORS", "Fraunces", Georgia, serif' }}>
              Want to see how this works?
            </p>
        </div>
        <Link 
          to={journalLink || "/journal"} 
          className="flex items-center justify-between w-full px-3 py-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#1c1917] bg-[#f9f5f0] hover:bg-[#1c1917] hover:text-[#f9f5f0] transition-colors duration-150 rounded-sm group"
          onClick={onClose}
        >
          Open Case File
          <span className="text-[#b45309] group-hover:text-[#f9f5f0] transition-colors">→</span>
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
