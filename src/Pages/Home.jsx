import React from "react";
import { Link } from "react-router-dom";
import Fotter from "../Components/Fotter";
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
    <>
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
          className="w-full h-[70vh] sm:h-[90vh]"
        >
          {[SEE, Office, Teacher].map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[70vh] sm:h-[90vh] object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-transparent">
                  <div className="text-center px-4">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                      {idx === 0
                        ? "Welcome to Badimalika Secondary School"
                        : idx === 1
                        ? "Nurturing Excellence in Education"
                        : "Inspiring Future Leaders"}
                    </h2>
                    <p className="text-white text-base sm:text-lg md:text-xl">
                      Shaping young minds since 2032 B.S.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Welcome to Badimalika Secondary School
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Since 2032 B.S., we have been committed to providing quality
            education and fostering holistic development to shape the leaders of
            tomorrow.
          </p>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Discover Our Campus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[MordenClassroom, AdvanceLibary, Sports].map((img, idx) => (
              <div
                key={idx}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt="Campus View"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {idx === 0
                      ? "Modern Classrooms"
                      : idx === 1
                      ? "Advanced Library"
                      : "Sports Facilities"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Why Choose Badimalika?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert Faculty",
              "State-of-the-Art Facilities",
              "Holistic Development",
            ].map((title, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 text-base">
                  {idx === 0
                    ? "Our dedicated teachers guide students toward academic excellence."
                    : idx === 1
                    ? "Modern labs and classrooms enhance the learning experience."
                    : "We focus on academics, sports, and extracurricular activities."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Our Academic Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Primary Education",
              "Secondary Education",
              "Higher Secondary Education",
            ].map((program, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {program}
                </h3>
                <p className="text-gray-600 text-base">
                  {idx === 0
                    ? "Foundational learning for Classes 1-5."
                    : idx === 1
                    ? "Comprehensive education for Classes 6-10."
                    : "Specialized streams for Classes 11-12."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Admission Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Apply for Scholarship Admission
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We offer merit-based scholarships to support talented students. Take
            the first step toward a brighter future by applying today!
          </p>
          <Link
            to="/scholarship"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Top Regional School",
              "Academic Excellence",
              "100+ Awards Won",
              "Trusted by Parents",
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="font-semibold text-xl text-gray-800">
                  {achievement}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Fotter />
    </>
  );
};

export default Home;
