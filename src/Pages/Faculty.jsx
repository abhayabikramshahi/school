import React from 'react';
import { Link } from 'react-router-dom';

const Faculty = () => {
  // Data for Classes 11-12
  const higherSecondaryFaculty = [
    {
      subject: 'Business Studies',
      teacher: 'Mr. Ram Bahadur Thapa',
      qualifications: 'MBA, 15+ Years Experience',
      description: 'Expert in business management and entrepreneurship, guiding students to excel in commerce and leadership.',
      profileLink: 'ram-bahadur-thapa',
    },
    {
      subject: 'Agriculture',
      teacher: 'Ms. Sita Devi Sharma',
      qualifications: 'M.Sc. Agriculture, 12+ Years Experience',
      description: 'Specializes in sustainable farming practices, inspiring students to innovate in agriculture.',
      profileLink: 'sita-devi-sharma',
    },
    {
      subject: 'Accountancy',
      teacher: 'Mr. Hari Prasad Adhikari',
      qualifications: 'CA, 10+ Years Experience',
      description: 'A seasoned accountant with a knack for simplifying complex financial concepts for students.',
      profileLink: 'hari-prasad-adhikari',
    },
  ];

  // Data for Classes 9-10
  const secondaryFaculty = [
    {
      subject: 'Health Education',
      teacher: 'Ms. Gita Kumari Neupane',
      qualifications: 'B.Sc. Nursing, 8+ Years Experience',
      description: 'Passionate about health education, equipping students with essential life skills and wellness knowledge.',
      profileLink: 'gita-kumari-neupane',
    },
    {
      subject: 'Accountancy',
      teacher: 'Mr. Shyam Lal Karki',
      qualifications: 'M.Com, 9+ Years Experience',
      description: 'Focuses on foundational accounting principles, preparing students for advanced financial studies.',
      profileLink: 'shyam-lal-karki',
    },
    {
      subject: 'Optional Mathematics',
      teacher: 'Ms. Radha KC',
      qualifications: 'M.Sc. Mathematics, 7+ Years Experience',
      description: 'Encourages analytical thinking through advanced mathematical concepts and problem-solving.',
      profileLink: 'radha-kc',
    },
    {
      subject: 'Computer Science',
      teacher: 'Mr. Bikash Tamang',
      qualifications: 'B.Tech, 6+ Years Experience',
      description: 'Introduces students to programming and technology, fostering innovation in the digital age.',
      profileLink: 'bikash-tamang',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            Our Faculty
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated educators at Badimalika Secondary School, committed to nurturing academic excellence.
          </p>
        </div>
      </section>

      {/* Higher Secondary Faculty (Classes 11-12) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Higher Secondary Faculty (Classes 11-12)
          </h2>
          <div className="space-y-12">
            {higherSecondaryFaculty.map((faculty, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200"
              >
                {/* Profile Placeholder */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6 sm:mb-0 sm:mr-8 shrink-0">
                  {faculty.teacher.charAt(3)}
                </div>
                {/* Faculty Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{faculty.subject}</h3>
                  <p className="text-gray-600 text-base mb-3">{faculty.description}</p>
                  <p className="text-gray-700 text-base mb-1">
                    <span className="font-medium">Teacher:</span> {faculty.teacher}
                  </p>
                  <p className="text-gray-500 text-sm italic mb-4">{faculty.qualifications}</p>
                  <Link
                    to={`/faculty/profile/${faculty.profileLink}`}
                    className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 border-b border-blue-600 hover:border-blue-800"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Faculty (Classes 9-10) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Secondary Faculty (Classes 9-10)
          </h2>
          <div className="space-y-12">
            {secondaryFaculty.map((faculty, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200"
              >
                {/* Profile Placeholder */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6 sm:mb-0 sm:mr-8 shrink-0">
                  {faculty.teacher.charAt(3)}
                </div>
                {/* Faculty Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{faculty.subject}</h3>
                  <p className="text-gray-600 text-base mb-3">{faculty.description}</p>
                  <p className="text-gray-700 text-base mb-1">
                    <span className="font-medium">Teacher:</span> {faculty.teacher}
                  </p>
                  <p className="text-gray-500 text-sm italic mb-4">{faculty.qualifications}</p>
                  <Link
                    to={`/faculty/profile/${faculty.profileLink}`}
                    className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 border-b border-blue-600 hover:border-blue-800"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Academic Community</h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Connect with our faculty and explore how we can support your educational journey at Badimalika Secondary School.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/admission"
              className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;