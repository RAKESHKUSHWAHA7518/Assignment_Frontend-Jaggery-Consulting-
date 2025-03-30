import React from 'react';
import { Link } from 'react-router-dom';

const LandPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="mb-8">
        <Link to="/" className="text-blue-400 hover:underline">&larr; Back to Home</Link>
      </header>
      <h1 className="text-4xl font-bold mb-4">Land Attractions</h1>
      {/* Add your Land attractions content here */}
      <p>This page showcases all Land rides and attractions.</p>
    </div>
  );
};

export default LandPage;
