import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaFileAlt, FaInfoCircle } from 'react-icons/fa';

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample notices data
  const notices = [
    {
      id: 1,
      title: 'Annual Sports Day Announcement',
      category: 'events',
      date: '2024-03-15',
      description: 'We are pleased to announce our Annual Sports Day will be held on March 15th, 2024. All students are required to participate.',
      important: true
    },
    {
      id: 2,
      title: 'Mid-Term Examination Schedule',
      category: 'academic',
      date: '2024-03-10',
      description: 'The mid-term examinations will commence from March 10th. Please check the detailed schedule attached.',
      important: true
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      category: 'meetings',
      date: '2024-03-20',
      description: 'The quarterly parent-teacher meeting is scheduled for March 20th. Parents are requested to attend.',
      important: false
    },
    {
      id: 4,
      title: 'School Holiday Announcement',
      category: 'holidays',
      date: '2024-03-25',
      description: 'The school will remain closed on March 25th due to local elections.',
      important: true
    },
    {
      id: 5,
      title: 'Science Exhibition',
      category: 'events',
      date: '2024-04-05',
      description: 'Annual Science Exhibition will be held on April 5th. Students are encouraged to participate.',
      important: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Notices' },
    { id: 'academic', name: 'Academic' },
    { id: 'events', name: 'Events' },
    { id: 'meetings', name: 'Meetings' },
    { id: 'holidays', name: 'Holidays' }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              School Notices
            </h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest announcements and important information
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* No Information Available State */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <FaInfoCircle className="h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Notices Available
                </h3>
                <p className="text-gray-600 max-w-md">
                  There are currently no notices to display. Please check back later for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Notices;
