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
      <ContextMenuContent className="w-48 bg-[#f9f5f0] border-[#d2c9b4]">
        <ContextMenuItem onClick={onClick} className="cursor-pointer">
          {menuText}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
