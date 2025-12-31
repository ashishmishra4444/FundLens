import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import palogo from "../assets/images/palogo.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1220]" />
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">

          {/* Brand */}
          <div>
            <img
              src={palogo}
              alt="FundLens"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              FundLens helps you plan smarter SIPs, stay disciplined, and grow
              wealth with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-teal-400 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-teal-400" />
                <span>support@fundlens.in</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-teal-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-teal-400" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} FundLens. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
