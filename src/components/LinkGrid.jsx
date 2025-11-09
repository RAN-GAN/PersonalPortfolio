import React from "react";

const LinkItem = ({ href, children, color, isExternal = false }) => {
  const props = {
    className:
      "link-item text-primary text-lg font-medium cursor-pointer transition-all duration-200 underline decoration-2 underline-offset-2 border-none bg-transparent p-0 hover:opacity-70 hover:text-muted",
    style: { "--decoration-color": color },
    ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
  };

  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
};

const LinkGrid = ({ links }) => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 my-8">
      {links.map((link, index) => (
        <LinkItem
          key={index}
          href={link.href}
          color={link.color}
          isExternal={link.isExternal}
        >
          {link.text}
        </LinkItem>
      ))}
    </nav>
  );
};

export default LinkGrid;
