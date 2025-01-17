import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AI Photo App</h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
        Generate stunning AI images or remove image backgrounds effortlessly with our powerful tools.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow">
          Get Started
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
