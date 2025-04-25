import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const username = prompt("Enter admin username:");
    if (username === null) return; // User clicked Cancel

    const password = prompt("Enter admin password:");
    if (password === null) return; // User clicked Cancel

    if (username === "123" && password === "123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-gray-700 text-xl">
                  Badimalika School
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  Academics
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                    <Link
                      to="/academics/curriculum"
                      className="block px-4 py-2 text-gray-500 hover:text-blue-500"
                    >
                      Curriculum
                    </Link>
                    <Link
                      to="/academics/faculty"
                      className="block px-4 py-2 text-gray-500 hover:text-blue-500"
                    >
                      Faculty
                    </Link>
                    <Link
                      to="/academics/admission"
                      className="block px-4 py-2 text-gray-500 hover:text-blue-500"
                    >
                      Admission
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/blog"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
              <Link
                to="/about-us"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/student-portal"
              className="py-2 px-4 text-gray-500 hover:text-blue-500 transition duration-300"
            >
              Student Portal
            </Link>
            <Link
              to="/teacher-portal"
              className="py-2 px-4 text-gray-500 hover:text-blue-500 transition duration-300"
            >
              Teacher Portal
            </Link>
            <button
              onClick={handleAdminLogin}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Admin Panel
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/academics/curriculum"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Curriculum
        </Link>
        <Link
          to="/academics/faculty"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Faculty
        </Link>
        <Link
          to="/academics/admission"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Admission
        </Link>
        <Link
          to="/blog"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Blog
        </Link>
        <Link
          to="/about-us"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Contact
        </Link>
        <Link
          to="/student-portal"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Student Portal
        </Link>
        <Link
          to="/teacher-portal"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
        >
          Teacher Portal
        </Link>
        <button
          onClick={handleAdminLogin}
          className="block w-full text-left py-2 px-4 text-sm bg-blue-500 text-white hover:bg-blue-600"
        >
          Admin Panel
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
