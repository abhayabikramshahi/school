import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'


import KrishnaParsad from '../image-teacher/krishna.jpg';
import ManojParsadShah from '../image-teacher/manoj.jpg';
import Mekindra from '../image-teacher/mekindra.jpg';
import DK from '../image-teacher/dk.jpg';
import KALPANA from '../image-teacher/kalpana.jpg';
import HEMRAJ from '../image-teacher/hemraj.jpg';
import Maha from '../image-teacher/mahachor.jpg';
import prem from '../image-teacher/prem.jpg';
import dharma from '../image-teacher/dharma.jpg';
import pushpa from '../image-teacher/pushpa.jpg';
import pramood from '../image-teacher/pramood.jpg';
import dipraj from '../image-teacher/dipraj.jpg';
import parbhu from '../image-teacher/parbhulal.jpg';
import lanka from '../image-teacher/lanka.jpg';
import preetam from '../image-teacher/preetam.jpg';
import upendra from '../image-teacher/upendra.jpg'
import Yamuna from '../image-teacher/yamuna.jpg'
import krishnasanjyal from '../image-teacher/k-s.jpg';
import dhanaparsad from '../image-teacher/dhanap.jpg';
import sportsteacher from '../image-teacher/jiban.jpg';
import dhurba from '../image-teacher/dhurbasanj.jpg';
import buddhiparsad from '../image-teacher/buddhiparsad.jpg';

const AboutUs = () => {
  const teachers = [
    { name: "Dipraj Shahi", role: "Chairperson", image: dipraj },
    { name: "PushpaRaj Baral", role: "Principal", image: pushpa },
    { name: "Pramood Kumar Shahi", role: "Vice Principal", image: pramood },
    { name: "Maha Parsad Baral", role: "Vice Principal", image: Maha },
    { name: "Parbhulal Neupane", role: "Senior Teacher", image: parbhu },
    { name: "Manoj Parsad Shah", role: "Mathematics Teacher", image: ManojParsadShah },
    { name: "Upendra Parsad Neupane", role: "Mathematics Teacher", image: upendra },
    { name: "Krishna Prasad Baral", role: "English Teacher", image: KrishnaParsad },
    { name: "Kalpana Shahi Bam", role: "Accountancy Teacher", image: KALPANA },
    { name: "Hemraj Neupane", role: "English Teacher", image: HEMRAJ },
    { name: "Buddhi Parsad Adhikari", role: "Nepali Teacher", image: buddhiparsad },
    { name: "Dhurba Raj Sanjyal", role: "Nepali Teacher", image: dhurba },
    { name: "Lanka Bhadur Shahi", role: "Business Teacher", image: lanka },
    { name: "Prem Bhadur Shahi", role: "Internal Management Team", image: prem }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Badimalika Secondary School
            </h1>
            <p className="text-xl text-blue-100">
              Empowering young minds through excellence in education, innovation, and cultural values
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision with Zigzag */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mission */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To foster academic excellence and personal growth by providing a dynamic learning environment
                  where students are nurtured to realize their full potential and contribute to society meaningfully.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">👁️</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be a leading institution in Nepal that develops confident, innovative, and globally-aware
                  citizens ready to meet future challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section with Zigzag */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="/uploads/school.jpg"
                alt="School Building"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Badimalika Secondary School, Kalikot is a public academic institute located in Syuna, Raskot, 
                  Kalikot district, Karnali Province of Nepal. It is affiliated to National Examinations Board (NEB) 
                  & Council for Technical Education and Vocation Training (CTEVT) and approved by Ministry of Education (MoE), Nepal.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This secondary school offers Ten Plus Two programs under Management, Humanities, Education and 
                  Agriculture Streams. We also offer vocational programs such as JTA in Plant Science for 40 seats each year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "10+ Awards",
                description: "In academic and extracurricular excellence"
              },
              {
                icon: "🎓",
                title: "95% Success",
                description: "In higher education placements"
              },
              {
                icon: "🤝",
                title: "Community Projects",
                description: "Involved in local development initiatives"
              },
              {
                icon: "⭐",
                title: "Top Rankings",
                description: "Recognized as one of the best schools in Nepal"
              }
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-600">{teacher.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8">
              Be part of our journey in shaping the future leaders of tomorrow
            </p>
            <Link
              to="/admission"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
