import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
