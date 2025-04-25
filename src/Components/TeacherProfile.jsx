import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Centralized teacher data with additional details
const teacherData = {
  'ram-bahadur-thapa': {
    name: 'Mr. Ram Bahadur Thapa',
    subject: 'Business Studies',
    qualifications: 'MBA, 15+ Years Experience',
    description: 'Expert in business management and entrepreneurship, guiding students to excel in commerce and leadership.',
    email: 'ram.thapa@badimalikasecschool.edu.np',
    classes: 'Classes 11-12',
    teachingPhilosophy: 'I believe in empowering students to think critically and develop entrepreneurial skills to navigate the modern business world.',
    experienceHighlights: [
      'Developed the Business Studies curriculum at Badimalika Secondary School',
      'Mentored over 50 students to start their own small businesses',
      'Guest speaker at National Commerce Education Conference 2023',
    ],
  },
  'sita-devi-sharma': {
    name: 'Ms. Sita Devi Sharma',
    subject: 'Agriculture',
    qualifications: 'M.Sc. Agriculture, 12+ Years Experience',
    description: 'Specializes in sustainable farming practices, inspiring students to innovate in agriculture.',
    email: 'sita.sharma@badimalikasecschool.edu.np',
    classes: 'Classes 11-12',
    teachingPhilosophy: 'My goal is to inspire a passion for sustainable agriculture, encouraging students to contribute to food security and environmental conservation.',
    experienceHighlights: [
      'Led agricultural projects in rural Nepal to promote organic farming',
      'Published research on sustainable farming techniques in 2022',
      'Organized field trips to local farms for hands-on learning',
    ],
  },
  'hari-prasad-adhikari': {
    name: 'Mr. Hari Prasad Adhikari',
    subject: 'Accountancy',
    qualifications: 'CA, 10+ Years Experience',
    description: 'A seasoned accountant with a knack for simplifying complex financial concepts for students.',
    email: 'hari.adhikari@badimalikasecschool.edu.np',
    classes: 'Classes 11-12',
    teachingPhilosophy: 'I aim to make accountancy accessible and engaging, helping students build a strong foundation for their future careers in finance.',
    experienceHighlights: [
      'Trained over 200 students to excel in national accountancy exams',
      'Worked as a financial consultant for 5 years before teaching',
      'Introduced interactive accounting simulations in the classroom',
    ],
  },
  'gita-kumari-neupane': {
    name: 'Ms. Gita Kumari Neupane',
    subject: 'Health Education',
    qualifications: 'B.Sc. Nursing, 8+ Years Experience',
    description: 'Passionate about health education, equipping students with essential life skills and wellness knowledge.',
    email: 'gita.neupane@badimalikasecschool.edu.np',
    classes: 'Classes 9-10',
    teachingPhilosophy: 'I focus on holistic health education to empower students to lead healthy, balanced lives.',
    experienceHighlights: [
      'Conducted health awareness campaigns in local communities',
      'Certified in adolescent health education programs',
      'Organized annual health check-up camps for students',
    ],
  },
  'shyam-lal-karki': {
    name: 'Mr. Shyam Lal Karki',
    subject: 'Accountancy',
    qualifications: 'M.Com, 9+ Years Experience',
    description: 'Focuses on foundational accounting principles, preparing students for advanced financial studies.',
    email: 'shyam.karki@badimalikasecschool.edu.np',
    classes: 'Classes 9-10',
    teachingPhilosophy: 'My teaching method emphasizes practical applications of accounting to build confidence in financial literacy.',
    experienceHighlights: [
      'Designed beginner-friendly accounting workshops for students',
      'Mentored students to participate in national accounting competitions',
      'Collaborated with local businesses for real-world financial projects',
    ],
  },
  'radha-kc': {
    name: 'Ms. Radha KC',
    subject: 'Optional Mathematics',
    qualifications: 'M.Sc. Mathematics, 7+ Years Experience',
    description: 'Encourages analytical thinking through advanced mathematical concepts and problem-solving.',
    email: 'radha.kc@badimalikasecschool.edu.np',
    classes: 'Classes 9-10',
    teachingPhilosophy: 'I strive to make mathematics exciting by connecting abstract concepts to real-world applications.',
    experienceHighlights: [
      'Developed math enrichment programs for gifted students',
      'Led students to win regional math Olympiads',
      'Introduced gamified learning for complex math topics',
    ],
  },
  'bikash-tamang': {
    name: 'Mr. Bikash Tamang',
    subject: 'Computer Science',
    qualifications: 'B.Tech, 6+ Years Experience',
    description: 'Introduces students to programming and technology, fostering innovation in the digital age.',
    email: 'bikash.tamang@badimalikasecschool.edu.np',
    classes: 'Classes 9-10',
    teachingPhilosophy: 'I aim to spark curiosity in technology, preparing students for a future driven by innovation.',
    experienceHighlights: [
      'Created coding bootcamps for beginners',
      'Guided students in developing their first mobile apps',
      'Organized tech fairs to showcase student projects',
    ],
  },
};

const TeacherProfile = () => {
  const { profileLink } = useParams();
  const teacher = teacherData[profileLink];

  if (!teacher) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Teacher Not Found</h1>
          <Link
            to="/faculty"
            className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
          >
            Back to Faculty
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            {teacher.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            {teacher.subject} Teacher | {teacher.classes}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Placeholder */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-blue-600 text-white rounded-full flex items-center justify-center text-6xl font-bold shadow-lg shrink-0">
              {teacher.name.charAt(3)}
            </div>
            {/* Profile Details */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{teacher.subject} Educator</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{teacher.description}</p>
              <div className="space-y-4">
                <p className="text-gray-700 text-base">
                  <span className="font-medium">Name:</span> {teacher.name}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-medium">Qualifications:</span> {teacher.qualifications}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-medium">Classes Taught:</span> {teacher.classes}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${teacher.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {teacher.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Teaching Philosophy</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{teacher.teachingPhilosophy}</p>
          </div>

          {/* Experience Highlights */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
              {teacher.experienceHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Back to Faculty Link */}
          <div className="mt-12">
            <Link
              to="/faculty"
              className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 border-b border-blue-600 hover:border-blue-800"
            >
              Back to Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Connect with Our Faculty</h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Have questions or want to learn more about our academic programs? Reach out to us today.
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

export default TeacherProfile;