import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('blog-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How We're Making a Difference in Rural Communities",
      excerpt: "Discover the impact of our latest initiatives in providing clean water and education to underserved communities.",
      image: "/cd.jpg",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Impact Stories"
    },
    {
      id: 2,
      title: "Sustainable Agriculture: Empowering Local Farmers",
      excerpt: "Learn how our sustainable farming programs are helping local farmers increase yields while protecting the environment.",
      image: "/ce.jpg",
      date: "March 12, 2024",
      author: "Michael Chen",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Education Initiative Reaches 10,000 Children",
      excerpt: "Celebrating a major milestone as our education programs now serve over 10,000 children in remote areas.",
      image: "/cf.jpg",
      date: "March 10, 2024",
      author: "Dr. Amelia Rodriguez",
      category: "Education"
    }
  ];

  return (
    <section id="blog-section" className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-[#85e065] text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Latest news & articles directly
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#85e065]">
              from the blog
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-[#85e065] mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-white text-sm font-medium">Featured Article</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-1 transition-all duration-300 group/btn">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  
                  {/* Reading Time Indicator */}
                  <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    5 min read
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-green-600 to-[#85e065] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#2d8f00] to-[#85e065] text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-[#1F610A4D] hover:shadow-l  transition-all duration-300 hover:scale-105 group">
            <span>View All Articles</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>          
              </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;