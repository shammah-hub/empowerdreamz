"use client"
import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Users, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CharityProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: "/11.jpg",
      title: "Build Schools for Needy Kids",
      description: "Providing quality education infrastructure for underprivileged children in rural communities. Our goal is to build sustainable learning environments.",
      raised: "$1,000",
      goal: "$75,000",
      progress: 6,
      supporters: 324
    },
    {
      image: "/nnn.jpg", 
      title: "Clean Water for Rural Communities",
      description: "Installing water pumps and purification systems in remote villages to ensure access to clean, safe drinking water for families.",
      raised: "$2,800",
      goal: "$50,000",
      progress: 12,
      supporters: 189
    },
    {
      image: "/7.jpg",
      title: "Emergency Food Relief Program", 
      description: "Providing nutritious meals and food packages to families affected by natural disasters and economic hardship.",
      raised: "$6,300",
      goal: "$80,000",
      progress: 20,
      supporters: 456
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const donorImages = [
    "/da.jpg",
    "/db.jpg",
    "/dc.jpg",
    "/dd.jpg",
    "/ca.jpg",
  ];

  return (
    <div className="bg-white">
      {/* HERO - Keeping your grid layout but minimalist */}
      <section className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(22 163 74) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Our Projects</span>
                <h1 className="text-6xl md:text-7xl font-light text-gray-900 mt-4 mb-6 leading-tight">
                  We stand by the
                  <br />
                  <span className="font-semibold text-green-600">helpless children</span>
                </h1>
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  There are many variations of passages available, but the majority have suffered alteration in some form.
                </p>
              </div>

              {/* Donor Section */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    {donorImages.slice(0, 5).map((img, i) => (
                      <div
                        key={i}
                        className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                      >
                        <Image
                                        width={1}
                                        height={1}
                          src={img}
                          alt={`Donor ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-light text-gray-900">Be Part of Our Mission</p>
                    <p className="text-sm text-gray-500">
                      Together, we can create lasting change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link href="/donate">
                <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300">
                  Support a Project
                </button>
              </Link>
            </div>

            {/* Right - Image Grid (keeping your structure) */}
            <div className="relative">
              <div className="space-y-4">
                {/* Top Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                                    width={1}
                                    height={1} src="/c1.jpg" alt="Community" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100 mt-8">
                    <Image
                                    width={1}
                                    height={1} src="/c2.jpg" alt="Education" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                                  width={1}
                                  height={1}
                                   src="/c9.jpg" alt="Volunteers" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100 mt-8">
                    <Image
                                  width={1}
                                  height={1} 
                    src="/cf.jpg" alt="Impact" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100 mt-4">
                    <Image
                                    width={1}
                                    height={1}
                                     src="/c3.jpg" alt="Healthcare" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                                    width={1}
                                    height={1} src="/c4.jpg" alt="Development" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute top-6 -right-4 bg-white rounded-2xl p-4 w-[140px] shadow-xl z-20">
                <div className="relative w-full h-[80px] rounded-lg overflow-hidden mb-2 bg-gray-100">
                  <Image
                                  width={1}
                                  height={1}
                   src="/c8.jpg" alt="Project" className="w-full h-full object-cover" />
                </div>
                <p className="text-green-600 font-light text-sm">Stand With Us</p>
                <p className="text-xs text-gray-500">Join our mission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                              width={1}
                              height={1} src="/6.jpg" alt="Volunteers" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <Image
                              width={1}
                              height={1} src="/cf.jpg" alt="Community" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6 leading-tight">
                Creating sustainable <span className="font-semibold text-green-600">impact</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every project we undertake is designed with sustainability and community ownership in mind. We work directly with local leaders and organizations to ensure that our initiatives create lasting positive change.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our approach focuses on empowerment rather than dependency, providing communities with the tools, resources, and knowledge they need to thrive independently.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-light text-green-600 mb-1">25+</div>
                  <div className="text-sm text-gray-500">Active Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-green-600 mb-1">150K+</div>
                  <div className="text-sm text-gray-500">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-green-600 mb-1">5</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
              </div>

              <Link href="/contact">
                <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center gap-2">
                  Next Project
                  <Image
                                 src="/grl.png" width={24} height={24} alt="Arrow" className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <span className="text-sm text-gray-500 tracking-wider uppercase">Featured Projects</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Support our current <span className="font-semibold text-green-600">initiatives</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Choose from our carefully selected projects that are making a real difference.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.slice(currentSlide * 3, currentSlide * 3 + 6).map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative h-64 bg-gray-100">
                 <Image
                               width={1}
                               height={1}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-1 text-sm font-light text-green-600">
                    {project.progress}%
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{project.raised}</span>
                      <span>{project.goal}</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-600 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Supporters */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{project.supporters} supporters</span>
                    </div>
                    <div className="flex -space-x-2">
                      {donorImages.slice(0, 3).map((img, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                        >
                          <Image
                                        width={1}
                                        height={1}
                            src={img}
                            alt={`Supporter ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <button className="w-full px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                        Support
                      </button>
                    </Link>
                    <button className="px-4 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(projects.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Ready to make a <span className="font-semibold">difference?</span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of supporters who are already making an impact. Every contribution helps us create positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300">
                Start Supporting Today
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharityProjectsPage;