import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/ca.jpg",
      title: "Help the Poor",
      subtitle: "in Need",
      description: "Together we can make a difference in the lives of those who need it most. Join our mission to bring hope and support to communities worldwide."
    },
    {
      id: 2,
      image: "/cb.jpg",
      title: "Clean Water",
      subtitle: "for All",
      description: "Providing access to clean, safe drinking water for communities that need it most. Every drop counts in saving lives."
    },
    {
      id: 3,
      image: "/cc.jpg",
      title: "Education",
      subtitle: "Changes Lives",
      description: "Empowering children and adults through education initiatives that create lasting impact in underserved communities."
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-14 h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="z-10 relative order-2 md:order-1 text-center md:text-left">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-extrabold text-gray-800 mb-4 md:mb-6 leading-tight md:leading-none">
                <span className="inline-block animate-slideInLeft">
                  {slides[currentSlide].title}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#85e065] inline-block animate-slideInLeft delay-200">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 animate-slideInLeft delay-300 max-w-lg mx-auto md:mx-0">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-slideInLeft delay-500 justify-center md:justify-start">
                <button className="font-bold gap-2 flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105">                
                  Donate Now
                  <Image src="/wb.png" alt="Parofund Logo" className="h-[30px] w-[30px]" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:border-green-500 hover:shadow-xl transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] w-full md:w-164 rounded-lg overflow-hidden shadow-2xl order-1 md:order-2">
            {/* Curtain Animation Container */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Curtain Reveal Animation */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent transform transition-transform duration-1000 ease-out ${
                        index === currentSlide && !isAnimating 
                          ? 'translate-y-full' 
                          : 'translate-y-0'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #1f2937 0%, #1f2937 50%, transparent 100%)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-green" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-green" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-50 animate-pulse" />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }

        @media (max-width: 768px) {
          .animate-slideInLeft {
            animation: slideInLeft 0.6s ease-out;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;