import React from "react";

const Header = ({ name, tagline }) => {
  return (
    <header className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-primary leading-tight m-0">
        {name}
      </h1>
      <h2 className="text-lg text-secondary font-medium m-0">{tagline}</h2>
    </header>
  );
};

export default Header;
