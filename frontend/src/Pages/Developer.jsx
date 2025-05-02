import React from "react";

const developers = [
  {
    name: "Abhaya Bikram Shahi",
    role: "Frontend Developer",
    description:
      "Focused on crafting smooth interfaces with pixel-perfect designs. Experienced in React, Tailwind CSS, and UI/UX thinking.",
    image: "https://via.placeholder.com/150", // Replace with real image
    github: "https://github.com/abhaya",
    linkedin: "https://linkedin.com/in/abhaya",
  },
  {
    name: "Gaurab Rawal",
    role: "Backend Developer",
    description:
      "Backend wizard specializing in Node.js, APIs, and cloud infrastructure. Loves optimizing performance and writing scalable code.",
    image: "https://via.placeholder.com/150", // Replace with real image
    github: "https://github.com/gaurab",
    linkedin: "https://linkedin.com/in/gaurab",
  },
];

const Developer = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Meet the Developers
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-28 h-28 rounded-full mb-4 border-2 border-blue-500 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">{dev.name}</h2>
              <p className="text-sm text-blue-600 mb-2">{dev.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{dev.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
