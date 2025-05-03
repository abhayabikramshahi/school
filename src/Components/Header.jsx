import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 items-center justify-end gap-6 relative">
      
      {/* Social Icons */}
      <div className="flex items-center gap-4 text-blue-200">
        <FaXTwitter className="hover:text-white cursor-pointer" />
        <FaFacebookF className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-white opacity-30"></div>

      {/* Virtual Tour Button */}
      <Link to="/virtual-tour">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md font-medium">
          Virtual Tour
        </button>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 font-medium relative">
        <Link to="/developer" className="hover:text-gray-300">Developer</Link>
        <Link to="/news-events" className="hover:text-gray-300">News & Events</Link>

        {/* Profile with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-300 focus:outline-none"
          >
            <FaUserCircle size={22} />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <Link
                to="/student-portal"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Student Portal
              </Link>
              <Link
                to="/teacher-portal"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Teacher Portal
              </Link>
              <Link
                to="/admin"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Admin Portal
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
