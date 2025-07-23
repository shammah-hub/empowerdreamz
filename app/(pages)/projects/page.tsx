"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

const CharityProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: "/c1.jpg",
      title: "Build Schools for Needy Kids",
      description: "Providing quality education infrastructure for underprivileged children in rural communities. Our goal is to build sustainable learning environments.",
      raised: "$45,000",
      goal: "$75,000",
      progress: 60,
      supporters: 324
    },
    {
      image: "/c2.jpg", 
      title: "Clean Water for Rural Communities",
      description: "Installing water pumps and purification systems in remote villages to ensure access to clean, safe drinking water for families.",
      raised: "$28,500",
      goal: "$50,000",
      progress: 57,
      supporters: 189
    },
    {
      image: "/c3.jpg",
      title: "Emergency Food Relief Program", 
      description: "Providing nutritious meals and food packages to families affected by natural disasters and economic hardship.",
      raised: "$62,300",
      goal: "$80,000",
      progress: 78,
      supporters: 456
    },
    {
      image: "/c4.jpg",
      title: "Medical Care for Children", 
      description: "Funding medical treatments, vaccines, and healthcare services for children in underserved communities.",
      raised: "$35,750",
      goal: "$60,000",
      progress: 60,
      supporters: 267
    },
    {
      image: "/c5.jpg",
      title: "Women Empowerment Initiative", 
      description: "Supporting skills training and microfinance programs to help women become financially independent.",
      raised: "$41,200",
      goal: "$55,000",
      progress: 75,
      supporters: 312
    },
    {
      image: "/c6.jpg",
      title: "Disaster Relief Fund", 
      description: "Emergency response fund for communities affected by natural disasters, providing immediate aid and rebuilding support.",
      raised: "$78,900",
      goal: "$100,000",
      progress: 79,
      supporters: 623
    },
    {
      image: "/c9.jpg",
      title: "Medical Care for Children", 
      description: "Supporting healthy childhoods through access to safe water and quality medical care in remote areas.",
      raised: "$22,750",
      goal: "$40,000",
      progress: 64,
      supporters: 297
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const donorImages = [
    "/ca.jpg",
    "/cb.jpg", 
    "/cc.jpg",
    "/cd.jpg",
    "/ce.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
<section className="relative overflow-hidden pt-8 sm:pt-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-center min-h-[400px] sm:min-h-[500px]">
      
      {/* Left Content */}
      <div className="lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-20 max-w-md mb-8 lg:mb-0">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              We stand by the
              <span className="text-green-600 block">helpless Children</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Donor Section */}
          <div className="hidden lg:block bg-green-50 rounded-xl p-3 sm:p-4 border border-green-100">
            <div className="flex items-center space-x-3 mb-3">
             <div className="flex -space-x-2">
               <div className="flex -space-x-2">
                {donorImages.slice(0, 5).map((img, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Donor ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              </div>


              <div>
                <p className="font-semibold text-gray-900 text-sm">1000+ Donor Amative Members</p>
                <p className="text-xs text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-3">
            <Link href={"#"}>
            <button className="gap-2 flex items-center justify-center px-4 py-[10px] font-bold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">                
              Donate Now
              <div className="relative w-6 h-6 sm:w-[30px] sm:h-[30px]">
                <Image src="/wb.png" alt="Parofund Logo" fill className="object-contain" />
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Images Grid */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto lg:mr-8">
        <div className="space-y-3 sm:space-y-4">

          {/* Top Row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden">
              <Image src="/c1.jpg" alt="Community outreach" fill className="object-cover" />
            </div>
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden mt-4 sm:mt-6 lg:mt-8">
              <Image src="/c2.jpg" alt="Educational programs" fill className="object-cover" />
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden">
              <Image src="/c9.jpg" alt="Volunteers working" fill className="object-cover" />
            </div>
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden mt-4 sm:mt-6 lg:mt-8">
              <Image src="/cf.jpg" alt="Community impact" fill className="object-cover" />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden mt-2 sm:mt-3 lg:mt-4">
              <Image src="/c3.jpg" alt="Healthcare initiatives" fill className="object-cover" />
            </div>
            <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-2xl shadow-lg overflow-hidden">
              <Image src="/c4.jpg" alt="Sustainable development" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute top-4 sm:top-6 -right-2 sm:-right-4 bg-white rounded-xl p-2 sm:p-3 w-[120px] sm:w-[140px] shadow-xl z-20">
          <div className="relative w-full h-[80px] rounded-lg overflow-hidden mb-2">
            <Image src="/c8.jpg" alt="Project impact" fill className="object-cover" />
          </div>
          <p className="text-green-600 font-semibold text-xs">Let us stand by the poor</p>
          <p className="text-xs text-gray-600">It is a long established fact that</p>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-20 scale-150"></div>
      </div>

      {/* Mobile-only Donor Section and Button */}
      <div className="lg:hidden mt-8 space-y-4 max-w-md mx-auto">
        <div className="bg-green-50 rounded-xl p-3 sm:p-4 border border-green-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex -space-x-2">
                {donorImages.slice(0, 5).map((img, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Donor ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm">1000+ Donor Amative Members</p>
              <p className="text-xs text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={"#"}> 
          <button className="gap-2 flex items-center justify-center px-4 py-[10px] font-bold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">                
            Donate Now
            <div className="relative w-6 h-6 sm:w-[30px] sm:h-[30px]">
              <Image src="/wb.png" alt="Parofund Logo" fill className="object-contain" />
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Mission Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  width={900} height={900}
                  src="/c9.jpg"
                  alt="Volunteers working"
                  className="rounded-2xl shadow-lg"
                />
                <Image
                width={900} height={900}
                  src="/cf.jpg"
                  alt="Community impact"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>

            <div className="space-y-6">

              <h2 className="text-4xl font-bold text-gray-900">
                Our Mission: Creating Sustainable Impact Through Community-Driven Projects.
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Every project we undertake is designed with sustainability and community ownership in mind. We work directly with local leaders and organizations to ensure that our initiatives create lasting positive change that continues long after our initial involvement.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our approach focuses on empowerment rather than dependency, providing communities with the tools, resources, and knowledge they need to thrive independently. From education and healthcare to economic development and disaster relief, each project addresses critical needs while building local capacity.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">150K+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>

              <Link href={"/contact"} className="mt-6 inline-block">
              <button className=" gap-2 bg-[#1a344b] shadow-2xl shadow-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                Next Project
                <Image src="/grl.png" width={50} height={50} alt="Parofund Logo" className="h-[30px] w-[30px]" />
              </button> 
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Projects
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support Our Current Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully selected projects that are making a real difference in communities around the world.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(currentSlide * 3, currentSlide * 3 + 6).map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="relative w-full h-48">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-green-600">
    {project.progress}% Funded
  </div>
</div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Raised: {project.raised}</span>
                      <span>Goal: {project.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-[#369612] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Supporters */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{project.supporters} supporters</span>
                    </div>
                    <div className="flex -space-x-2">
                      {donorImages.slice(0, 3).map((img, i) => (
                        <Image
                          key={i}
                          width={50} height={50}
                          src={img}
                          alt={`Supporter ${i + 1}`}
                          className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={"/contact"}>
                    <button className="flex-1 bg-[#369612] text-white py-2 px-4 rounded hover:bg-green-700 transition-colors font-medium">
                      Donate Now
                    </button>
                    </Link>
                    <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white shadow-lg rounded-full hover:bg-green-50 transition-colors border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(projects.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#369612]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white shadow-lg rounded-full hover:bg-green-50 transition-colors border border-gray-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#1a344b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of supporters who are already making an impact. Every contribution, no matter the size, helps us create positive change in communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"#"}><button className="bg-white text-[#1a344b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Supporting Today
            </button></Link>
            <Link href={"/about"}><button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1a344b] transition-all">
              Learn More About Us
            </button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharityProjectsPage;