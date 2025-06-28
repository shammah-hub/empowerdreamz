"use client"

import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Heart, Users, Globe, Award, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, Calendar, User, ArrowRight } from 'lucide-react';
import HeroSlider from '@/app/components/heroslider';
import CounterSection from '@/app/components/counter';
import BlogSection from '@/app/components/blog';

const CharityHomepage = () => {

  const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Supporting education initiatives in underserved communities.",
    image: "/c1.jpg",
    raised: 25000,
    goal: 50000,
  },
  {
    id: 2,
    title: "Clean Water Project",
    description: "Providing clean water access to rural communities in need.",
    image: "/c2.jpg",
    raised: 18500,
    goal: 35000,
  },
  {
    id: 3,
    title: "Medical Care Support",
    description: "Emergency medical assistance for families in crisis.",
    image: "/c3.jpg",
    raised: 32000,
    goal: 45000,
  },
];

  return (
    <div className="min-h-screen bg-white">
      
      <HeroSlider />

      {/* Belief Section */}
<section className="py-25 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/mm.png')"}}>
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
            src="/g.gif"
            alt="Community help"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 rounded-lg flex items-center justify-center">
          {/* <button className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full hover:bg-opacity-30 transition-all">
            <Play className="w-8 h-8 text-white" />
          </button> */}
        </div>
      </div>
      <div>
        <div className=''>
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          We believe we can
          <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#85e065]">
            save more lives</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-[#85e065] rounded-full mb-8"></div>
        </div>
        <p className="text-gray-600 mb-6">
          Our dedicated team works tirelessly to provide essential resources, 
          education, and support to communities that need it most. Every contribution 
          makes a real difference in someone's life.
        </p>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
            <img src="/nobg.png" alt="Parofund Logo" className="w-auto h-8" />
          </div>
          <span className="text-gray-700">Compassionate Care</span>
        </div>
        <button className="text-green-600 hover:text-green-700 flex items-center space-x-2">
          <span>Learn More About Us</span>
          <GoArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Impact Cards */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800 text-white p-8 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-300">Building stronger communities</p>
            </div>
            <div className="bg-gradient-to-r from-[#2d8f00] to-[#5fa347] text-white p-8 rounded-lg text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-white">Helping communities worldwide</p>
            </div>
            <div className="bg-gray-700 text-white p-8 rounded-lg text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Care</h3>
              <p className="text-gray-300">Medical support for all</p>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-300">Learning opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/l.png')"}}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
                We inspire and help
                <br />
                <span className="text-green-600">them live better</span>
              </h2>
               <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-[#85e065] rounded-full mb-8"></div>

              <p className="text-gray-600 mb-8">
                Through sustainable programs and community partnerships, we're creating 
                lasting change that empowers individuals and families to build better futures.
              </p>
             <button className="gap-2 flex px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105">                
                       Get Involved
                       <img src="/wb.png" alt="Parofund Logo" className=" h-[30px] w-[30px]" />
                </button>
            </div>
            <div className="relative">
              <img
                src="/c4.jpg"
                alt="Happy children"
                className="rounded-lg shadow-lg w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Campaigns */}
      <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
        Check latest
        <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#85e065]">
          Campaigns
          </span>
      </h2>
       <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-[#85e065] rounded-full mx-auto mb-8"></div>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {campaign.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {campaign.description}
            </p>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Raised</span>
                <span>{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-green-600 font-semibold">
                ${campaign.raised.toLocaleString()} raised
              </span>
              <button className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200">
                Donate →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Statistics */}
      <CounterSection />

      {/* Latest News */}
      <BlogSection />

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">EmpowerDreamz</span>
              </div>
              <p className="text-gray-400 mb-6">
                Dedicated to making a positive impact in communities worldwide through 
                sustainable programs and partnerships.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Causes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Get Involved</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">info@empowerdreamz.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">123 Hope Street, City, State 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on our latest campaigns and impact stories.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-green-600 px-6 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EmpowerDreamz. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CharityHomepage;