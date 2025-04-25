import React from 'react';
import { Link } from 'react-router-dom';
import Fotter from '../Components/Fotter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SEE from '../hero-images/see-2081.png'
import Office from '../hero-images/office.png'
import Teacher from '../hero-images/teachers.png'


const Home = () => {
  return (
    <>
   {/* Image Slider Section */}
<section className="relative z-10">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    loop={true}
    className="w-full h-[90vh]"
  >
    <SwiperSlide>
      <div className="relative w-full h-full">
        <img
          src= {SEE}
          alt="Slide 1"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Welcome to a Future of Learning
          </h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative w-full h-full">
        <img
          src= {Office}
          alt="Slide 2"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Empowering Students with Knowledge
          </h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="relative w-full h-full">
        <img
          src= {Teacher}
          alt="Slide 3"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Building Tomorrow’s Leaders
          </h2>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>

      {/* Image Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Our Campus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="uploads/school1.jpg" alt="School Building" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">Modern School Infrastructure</h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="uploads/school2.jpg" alt="Library" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">A Well-Equipped Library for Curious Minds</h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="uploads/school3.jpg" alt="Playground" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">Spacious Playground for Physical Growth</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <div className="bg-white text-gray-800">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Badimalika Secondary School</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Shaping young minds with quality education and holistic development since 2032 B.S.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Qualified Teachers</h3>
                <p className="text-gray-600">
                  Learn from experienced educators dedicated to nurturing student potential.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Modern Facilities</h3>
                <p className="text-gray-600">
                  Enjoy a conducive learning environment with state-of-the-art classrooms and labs.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Extra-Curricular Activities</h3>
                <p className="text-gray-600">
                  Participate in sports, arts, and cultural programs to develop all-around skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Programs Offered</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Primary Education</h3>
                <p className="text-gray-600">Building a strong foundation for young learners from Class 1 to Class 5.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Secondary Education</h3>
                <p className="text-gray-600">Focused and structured learning from Class 6 to Class 10.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Higher Secondary Education</h3>
                <p className="text-gray-600">Advanced studies for Class 11 and 12 with a variety of streams to choose from.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-semibold text-xl">Best School Community</h3>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="font-semibold text-xl">Highest Academic Growth Rate</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Fotter />
    </>
  );
};

export default Home;
