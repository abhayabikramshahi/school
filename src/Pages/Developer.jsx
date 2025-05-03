import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const developers = [
  {
    name: "Abhaya Bikram Shahi",
    role: "Frontend Developer",
    description:
      "Focused on crafting smooth interfaces with pixel-perfect designs. Experienced in React, Tailwind CSS, and UI/UX thinking.",
    image: "https://via.placeholder.com/150", // Replace with your real image
    github: "https://github.com/abhaya",
    linkedin: "https://linkedin.com/in/abhaya",
    more: "/developer/abhaya", // Where Read More should take you
  },
];

const Developer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        Meet the Developers
      </h1>

      <div className="w-full max-w-md">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1 text-center"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full mb-5 border-4 border-blue-500 object-cover mx-auto transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-2xl font-bold text-gray-800">{dev.name}</h2>
            <p className="text-blue-600 text-sm mb-3">{dev.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{dev.description}</p>

            {/* Read More Button */}
            <a
              href={dev.more}
              className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Read More →
            </a>

            {/* Social Icons */}
            <div className="mt-5 flex justify-center space-x-4">
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors text-xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors text-xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
