import React from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans overflow-hidden">
      <div className="w-full max-w-md bg-white p-8 pb-10 rounded-xl shadow-lg text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <div className="text-purple-700 text-lg font-semibold">Smart City Guide</div>
          <div className="text-2xl font-bold text-gray-900">Create Your account</div>
          <div className="text-sm text-gray-500 mt-1">Join our community to explore your city</div>
        </div>

        {/* Inputs */}
        <form className="flex flex-col gap-5">
          <div className="text-left w-full">
            <label className="block mb-1 font-medium text-sm text-gray-700">Full Name</label>
            <div className="flex items-center h-11 px-3 bg-gray-100 border border-gray-200 rounded-md">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="text-left w-full">
            <label className="block mb-1 font-medium text-sm text-gray-700">Email</label>
            <div className="flex items-center h-11 px-3 bg-gray-100 border border-gray-200 rounded-md">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="text-left w-full">
            <label className="block mb-1 font-medium text-sm text-gray-700">Password</label>
            <div className="flex items-center h-11 px-3 bg-gray-100 border border-gray-200 rounded-md">
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="text-left w-full">
            <label className="block mb-1 font-medium text-sm text-gray-700">Confirm Password</label>
            <div className="flex items-center h-11 px-3 bg-gray-100 border border-gray-200 rounded-md">
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent border-none text-sm text-gray-900 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full h-12 bg-purple-700 text-white font-medium text-base rounded-md flex items-center justify-center hover:bg-purple-800 transition-colors"
            >
              <span className="mr-2 text-lg">+</span>
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="text-purple-700 font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
