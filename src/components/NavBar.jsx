import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold">AI Photo App</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
