import React from 'react'
import { Link } from 'react-router-dom';

const LandingRight = () => {
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <h2 className="text-2xl font-semibold mb-4">
        Get Started
      </h2>

      <p className="text-gray-600 mb-6">
        Login or create an account to start your SIP journey.
      </p>

      <div className="space-y-4">
        <Link
          to="/login"
          className="block text-center bg-blue-600 text-white py-2 rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="block text-center border border-blue-600 text-blue-600 py-2 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LandingRight
