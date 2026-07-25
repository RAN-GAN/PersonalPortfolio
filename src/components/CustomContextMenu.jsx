import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function CustomContextMenu({ 
  children, 
  menuText = "More details here", 
  onClick 
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <div className="px-3 pt-2 pb-1.5 mb-1 border-b border-[#d2c9b4]/50">
          <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#b45309]">
            // SYSTEM.ACTIONS
          </p>
        </div>
        <ContextMenuItem onClick={onClick}>
          <span className="flex items-center justify-between w-full">
            {menuText}
            <span className="text-[#b45309] group-hover:text-[#f9f5f0] transition-colors">→</span>
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
