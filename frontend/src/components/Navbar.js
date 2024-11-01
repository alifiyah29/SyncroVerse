import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <h1 className="text-lg">SyncroVerse</h1>
      <div className="flex space-x-4">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
