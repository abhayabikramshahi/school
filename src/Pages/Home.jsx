import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SEE from "../hero-images/see-2081.png";
import Office from "../hero-images/office.png";
import Teacher from "../hero-images/teachers.png";
import MordenClassroom from "../some-img-imgs/morden-class.png";
import AdvanceLibary from "../some-img-imgs/advanced-libary.png";
import Sports from "../some-img-imgs/sports.png";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <section className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-[80vh] sm:h-[90vh]"
        >
          {[SEE, Office, Teacher].map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  loading="lazy"
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[80vh] sm:h-[90vh] object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/70 to-transparent">
                  <div className="text-center px-4 max-w-4xl mx-auto">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {idx === 0
                        ? "Welcome to Badimalika Secondary School"
                        : idx === 1
                        ? "Nurturing Excellence in Education"
                        : "Inspiring Future Leaders"}
                    </h2>
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-light">
                      Shaping young minds since 2032 B.S.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Welcome Section with Zigzag */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Welcome to Badimalika Secondary School
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Since 2032 B.S., we have been committed to providing quality
                education and fostering holistic development to shape the leaders of
                tomorrow.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={MordenClassroom}
                alt="Modern Classroom"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights with Zigzag */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16 text-center">
            Discover Our Campus
          </h2>
          
          {/* First Zigzag */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src={AdvanceLibary}
                alt="Advanced Library"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Advanced Library</h3>
              <p className="text-lg text-gray-600">
                Our state-of-the-art library provides students with access to a vast collection of books,
                digital resources, and quiet study spaces to enhance their learning experience.
              </p>
            </div>
          </div>

          {/* Second Zigzag */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Sports Facilities</h3>
              <p className="text-lg text-gray-600">
                Our comprehensive sports facilities encourage physical fitness and team spirit,
                featuring modern equipment and dedicated spaces for various sports activities.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={Sports}
                alt="Sports Facilities"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16 text-center">
            Why Choose Badimalika?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description: "Our dedicated teachers guide students toward academic excellence.",
                icon: "👨‍🏫"
              },
              {
                title: "State-of-the-Art Facilities",
                description: "Modern labs and classrooms enhance the learning experience.",
                icon: "🏫"
              },
              {
                title: "Holistic Development",
                description: "We focus on academics, sports, and extracurricular activities.",
                icon: "🎯"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16 text-center">
            Our Academic Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Education",
                description: "Foundational learning for Classes 1-5.",
                icon: "📚"
              },
              {
                title: "Secondary Education",
                description: "Comprehensive education for Classes 6-10.",
                icon: "🎓"
              },
              {
                title: "Higher Secondary Education",
                description: "Specialized streams for Classes 11-12.",
                icon: "🎯"
              }
            ].map((program, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Admission Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Apply for Scholarship Admission
            </h2>
            <p className="text-xl leading-relaxed mb-12">
              We offer merit-based scholarships to support talented students. Take
              the first step toward a brighter future by applying today!
            </p>
            <Link
              to="/scholarship"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
