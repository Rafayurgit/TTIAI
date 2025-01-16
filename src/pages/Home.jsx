import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to AI Photo App
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                Generate stunning AI images or remove image backgrounds easily.
            </p>
            <div className="flex space-x-4">
                <a
                    href="/generate"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Generate Photo
                </a>
                <a
                    href="/remove-bg"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Remove Background
                </a>
            </div>
        </div>
    );
};

export default Home;
