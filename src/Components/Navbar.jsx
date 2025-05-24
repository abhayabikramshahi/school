import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLinkClick = () => {
    closeMobileMenu();
    closeDropdown();
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" onClick={handleLinkClick} className="text-2xl sm:text-3xl font-bold tracking-tight hover:opacity-90">
          Badimalika <span className="text-yellow-400">School</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-base">
          <Link to="/" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Home</Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 focus:outline-none"
            >
              Academics
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 left-0 bg-white text-gray-800 rounded-lg shadow-xl w-48 overflow-hidden">
                <Link to="/academics/curriculum" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">Curriculum</Link>
                <Link to="/academics/faculty" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">Faculty</Link>
                <Link to="/academics/admission" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">Admission</Link>
                <Link to="/developer" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-gray-100">Developer</Link>
              </div>
            )}
          </div>

          <Link to="/blog" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Blog</Link>
          <Link to="/gallery" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Gallery</Link>
          <Link to="/about-us" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">About Us</Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Contact</Link>
          <Link to="/notice" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Notice</Link>
          <Link to="/vacancy" onClick={handleLinkClick} className="hover:text-yellow-300 transition-colors duration-200">Vacancy</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white font-medium text-base">
          <div className="space-y-3 py-4 px-6">
            <Link to="/" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Home</Link>
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left flex items-center justify-between hover:text-yellow-300 transition-colors duration-200"
              >
                Academics
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/academics/curriculum" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Curriculum</Link>
                  <Link to="/academics/faculty" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Faculty</Link>
                  <Link to="/academics/admission" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Admission</Link>
                </div>
              )}
            </div>
            <Link to="/blog" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Blog</Link>
            <Link to="/gallery" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Gallery</Link>
            <Link to="/notice" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Notice</Link>
            <Link to="/vacancy" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Vacancy</Link>
            <Link to="/about-us" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">About Us</Link>
            <Link to="/contact" onClick={handleLinkClick} className="block hover:text-yellow-300 transition-colors duration-200">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
