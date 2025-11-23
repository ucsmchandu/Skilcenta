import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-100 mt-4">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1750874502/school_ruxnla.png"
          alt="Logo"
          className="h-10 w-10 rounded-full shadow-sm border border-gray-300 bg-white"
        />
        <span className="font-bold text-lg text-blue-700">Skilcenta</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-5 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/market" className="hover:text-blue-600 transition">Market</Link>
        <Link to="/orders" className="hover:text-blue-600 transition">Orders</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
      </nav>

      {/* Legal Links */}
      <nav className="flex flex-wrap justify-center gap-5 text-xs font-medium text-gray-600">
        <Link to="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
        <Link to="/terms-conditions" className="hover:text-blue-600 transition">Terms & Conditions</Link>
        <Link to="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
        {/* <Link to="/cookie-policy" className="hover:text-blue-600 transition">Cookie Policy</Link> */}
        <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>
      </nav>

      {/* Rights */}
      <div className="text-center text-xs text-gray-500 md:text-right">
        <div className="font-medium mb-1">&copy; {new Date().getFullYear()} Skilcenta</div>
        <span>
          Need help?{' '}
          <Link to="/contact" className="text-blue-600 underline hover:text-blue-800 font-semibold">
            Contact Support
          </Link>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
