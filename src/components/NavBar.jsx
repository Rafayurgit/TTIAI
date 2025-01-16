import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AI Photo App</h1>
        <div>
          <a href="/" className="text-white px-4">
            Home
          </a>
          <a href="/generate" className="text-white px-4">
            Generate Photo
          </a>
          <a href="/remove-bg" className="text-white px-4">
            Remove Background
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
