import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="hidden md:flex bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 items-center justify-end gap-6">
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
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md font-medium">
        Virtual Tour
      </button>

      {/* Nav Links */}
      <div className="flex items-center gap-6 font-medium">
        <a href="#" className="hover:text-gray-300 hover:">Downloads</a>
        <a href="#" className="hover:text-gray-300">Work with us</a>
        <a href="#" className="hover:text-gray-300">Blogs</a>
        <a href="#" className="hover:text-gray-300">Notice</a>
        <a href="#" className="hover:text-gray-300">News & Events</a>
      </div>
    </div>
  );
};

export default Navbar;
