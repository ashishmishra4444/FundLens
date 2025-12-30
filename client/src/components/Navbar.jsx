import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import palogo from "../assets/images/palogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-[#0b1220]/70
        border-b border-white/10
      "
    >
      {/* Top Bar */}
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={palogo}
          alt="FundLens Logo"
          className="h-9 w-auto cursor-pointer"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          {["Home", "About Us", "Contact Us"].map((item) => (
            <span
              key={item}
              className="
                cursor-pointer
                text-gray-300
                hover:text-teal-400
                transition-colors duration-200
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal-500 cursor-pointer"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#0b1220]/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5 text-white text-sm">
            {["Home", "About Us", "Contact Us"].map((item) => (
              <span
                key={item}
                onClick={() => setOpen(false)}
                className="
                  cursor-pointer
                  text-gray-300
                  hover:text-teal-400
                  transition-colors
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;