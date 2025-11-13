import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({
  href,
  children,
  color,
  isExternal = false,
  download = false,
}) => {
  const className =
    "link-item text-primary text-lg font-medium cursor-pointer transition-all duration-200 underline decoration-2 underline-offset-2 border-none bg-transparent p-0 hover:opacity-70 hover:text-muted";
  const style = { "--decoration-color": color };

  // internal route (use react-router Link)
  if (href && !href.startsWith("http") && !href.startsWith("#") && !download) {
    return (
      <Link to={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    // Extract filename from href for download attribute
    const downloadFilename =
      download && href ? href.split("/").pop() : undefined;

    return (
      <a
        href={href}
        className={className}
        style={style}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download: downloadFilename })}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
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
          download={link.download}
        >
          {link.text}
        </LinkItem>
      ))}
    </nav>
  );
};

export default LinkGrid;
