import React from 'react';
import Navbar from './Navbar'; // Make sure to import Navbar

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Include Navbar here */}
      <main>{children}</main> {/* Ensure children are rendered */}
    </div>
  );
};

export default Layout;
