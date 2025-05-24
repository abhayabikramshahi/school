import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      category: "Campus Life",
      description: "Experience the vibrant atmosphere of our school community",
      images: [
        "/uploads-school/1.jpeg",
        "/uploads-school/2.jpeg",
        "/uploads-school/3.jpeg",
        "/uploads-school/4.jpeg",
        "/uploads-school/5.jpeg",
        "/uploads-school/6.jpeg"
      ]
    },
    {
      category: "Facilities",
      description: "State-of-the-art infrastructure for optimal learning",
      images: [
        "/uploads-school/7.jpeg",
        "/uploads-school/8.jpeg",
        "/uploads-school/9.jpeg",
        "/uploads-school/10.jpeg",
        "/uploads-school/11.jpeg",
        "/uploads-school/12.jpeg"
      ]
    },
    {
      category: "Events & Activities",
      description: "Celebrating achievements and fostering creativity",
      images: [
        "/uploads-school/13.jpeg",
        "/uploads-school/14.jpeg",
        "/uploads-school/15.jpeg",
        "/uploads-school/16.jpeg",
        "/uploads-school/17.jpeg",
        "/uploads-school/18.jpeg"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              School Gallery
            </h1>
            <p className="text-xl text-blue-100">
              Explore our campus, facilities, and memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections with Zigzag */}
      {galleryImages.map((section, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {section.category}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {section.description}
                </p>
              </div>

              {/* Image Grid */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {section.images.slice(0, 4).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative group cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${section.category} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Image Slider Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Moments
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {galleryImages.flatMap(section => section.images).map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 