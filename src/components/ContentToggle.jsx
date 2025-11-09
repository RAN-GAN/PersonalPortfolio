import React, { useState } from "react";

const ToggleButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 border-2 rounded-full bg-transparent cursor-pointer font-medium capitalize inline-flex items-center transition-all duration-300 ${
      active
        ? "border-accent text-accent"
        : "border-muted text-muted hover:border-accent hover:text-accent"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const ContentToggle = ({ onToggle, activeView = "short" }) => {
  const [active, setActive] = useState(activeView);

  const handleToggle = (view) => {
    setActive(view);
    onToggle?.(view);
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <ToggleButton
        active={active === "short"}
        onClick={() => handleToggle("short")}
      >
        Short
      </ToggleButton>
      <ToggleButton
        active={active === "long"}
        onClick={() => handleToggle("long")}
      >
        Long
      </ToggleButton>
      <a
        href="/projects"
        className="px-4 py-2 border-2 border-muted text-muted hover:border-accent hover:text-accent rounded-full bg-transparent cursor-pointer font-medium capitalize inline-flex items-center transition-all duration-300 no-underline"
      >
        Projects
      </a>
    </div>
  );
};

export default ContentToggle;
