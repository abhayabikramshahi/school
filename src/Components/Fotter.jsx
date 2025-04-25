import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4 tracking-wide">Badimalika Secondary School</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Shaping young minds with quality education and values since 2032 B.S.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-4 uppercase tracking-wider">Explore</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/admission" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-4 uppercase tracking-wider">Connect</h2>
          <ul className="space-y-3 text-sm sm:text-base mb-6">
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-blue-400" /> +977-98XXXXXXXX</li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-blue-400" /> info@badimalikasecschool.edu.np</li>
            <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-400" /> Kalikot, Nepal</li>
          </ul>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-6 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Badimalika Secondary School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;