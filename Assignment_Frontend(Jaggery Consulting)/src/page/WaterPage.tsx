import React from 'react';
import { Link } from 'react-router-dom';

const WaterPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="mb-8">
        <Link to="/" className="text-blue-400 hover:underline">&larr; Back to Home</Link>
      </header>
      <h1 className="text-4xl font-bold mb-4">Water Attractions</h1>
      {/* Add your Water attractions content here */}
      <p>This page showcases all Water rides and attractions.</p>
    </div>
  );
};

export default WaterPage;
