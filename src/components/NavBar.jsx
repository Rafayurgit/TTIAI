import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold">AI Photo App</h1>
        <div className="space-x-4">
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/generate-photo" className="hover:underline">Generate Photo</Link>
          <Link to="/remove-background" className="hover:underline">Remove Background</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
