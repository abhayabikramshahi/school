import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Scholarship() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    grade: '',
    gpa: '',
    achievements: '',
    essay: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Scholarship Opportunities
            </h1>
            <p className="text-xl text-blue-100">
              Invest in your future with our merit-based scholarship programs
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Available Scholarships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Merit Scholarship",
                description: "For students with outstanding academic performance",
                amount: "Up to 100% tuition fee",
                icon: "🏆"
              },
              {
                title: "Sports Scholarship",
                description: "For exceptional athletes and sports performers",
                amount: "Up to 50% tuition fee",
                icon: "⚽"
              },
              {
                title: "Need-Based Scholarship",
                description: "For students with financial constraints",
                amount: "Up to 75% tuition fee",
                icon: "🤝"
              }
            ].map((scholarship, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{scholarship.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <p className="text-blue-600 font-semibold">{scholarship.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Eligibility Criteria
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                "Minimum GPA of 3.5 in previous academic year",
                "No disciplinary actions or violations",
                "Active participation in school activities",
                "Demonstrated financial need (for need-based scholarships)",
                "Outstanding achievements in sports or extracurricular activities",
                "Strong recommendation letters from teachers"
              ].map((criterion, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">✓</span>
                  </div>
                  <p className="ml-4 text-gray-600">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Scholarship Application
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Current Grade
                    </label>
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    GPA (Previous Year)
                  </label>
                  <input
                    type="number"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    max="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Achievements & Awards
                  </label>
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Why do you deserve this scholarship? (500 words max)
                  </label>
                  <textarea
                    name="essay"
                    value={formData.essay}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Need Help?
            </h2>
            <p className="text-gray-600 mb-8">
              Our scholarship committee is here to assist you with any questions
              regarding the application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scholarship;