import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const Vacancy = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Sample job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      department: 'Academic',
      type: 'Full-time',
      location: 'Main Campus',
      requirements: [
        'Master\'s degree in Mathematics or related field',
        'Minimum 3 years of teaching experience',
        'Strong communication and interpersonal skills',
        'Experience with modern teaching methodologies'
      ],
      responsibilities: [
        'Teach mathematics to secondary level students',
        'Develop and implement lesson plans',
        'Assess and evaluate student performance',
        'Participate in school activities and events'
      ],
      deadline: '2024-04-15'
    },
    {
      id: 2,
      title: 'Science Lab Assistant',
      department: 'Academic',
      type: 'Part-time',
      location: 'Science Department',
      requirements: [
        'Bachelor\'s degree in Science',
        'Experience in laboratory management',
        'Knowledge of safety protocols',
        'Good organizational skills'
      ],
      responsibilities: [
        'Maintain laboratory equipment and supplies',
        'Assist teachers during practical sessions',
        'Ensure safety protocols are followed',
        'Keep inventory of laboratory materials'
      ],
      deadline: '2024-04-10'
    },
    {
      id: 3,
      title: 'Administrative Assistant',
      department: 'Administration',
      type: 'Full-time',
      location: 'Main Office',
      requirements: [
        'Bachelor\'s degree in any field',
        'Proficiency in MS Office',
        'Excellent communication skills',
        '2+ years of administrative experience'
      ],
      responsibilities: [
        'Handle office correspondence',
        'Maintain student records',
        'Assist in event organization',
        'Support administrative tasks'
      ],
      deadline: '2024-04-20'
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl text-blue-100">
              Join our team and be part of an inspiring educational community
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* No Information Available State */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <FaInfoCircle className="h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Current Openings
                </h3>
                <p className="text-gray-600 max-w-md mb-6">
                  There are currently no job openings available. Please check back later for new opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaClock className="h-4 w-4" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Apply for {selectedJob.title}
              </h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Position
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vacancy;