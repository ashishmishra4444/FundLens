import React, { useState } from "react";
import palogo from "../assets/images/palogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-gray-700/30
        border-b border-white/10
      "
    >
      {/* Top Bar */}
      <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={palogo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          <span className="cursor-pointer hover:text-blue-500 transition">
            Home
          </span>
          <span className="cursor-pointer hover:text-blue-500 transition">
            About Us
          </span>
          <span className="cursor-pointer hover:text-blue-500 transition">
            Contact Us
          </span>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800/90 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-white text-sm">
            <span className="cursor-pointer hover:text-blue-500 transition">
              Home
            </span>
            <span className="cursor-pointer hover:text-blue-500 transition">
              About Us
            </span>
            <span className="cursor-pointer hover:text-blue-500 transition">
              Contact Us
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
