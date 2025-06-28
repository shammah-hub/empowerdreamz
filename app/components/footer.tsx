import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Heart, Users, Globe, Award, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Play, Calendar, User, ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full border-gray-200 bg-white py-6 sm:py-8 mt-8 sm:mt-16">
      {/* Logo Container */}
      <div className="w-full flex justify-center items-center mb-6 sm:mb-8 px-4">
        <div className="relative">
          <img src="/Ad.png" alt="Parofund Logo" className="w-auto max-w-[250px] sm:max-w-none" />
          {/* Non-absolute blur effect - using a div with background gradient */}
          <div className="h-15 w-full bg-gradient-to-t from-gray-600 to-transparent -mt-6 blur-lg"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Sign In Section */}
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <img src="/Ad.png" alt="Parofund Logo" className='h-[25px] sm:h-[30px] w-auto max-w-[200px] sm:w-[250px]'/>
            </div>
            <div className="flex flex-col sm:flex-row pt-4 sm:pt-[20px] space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="px-4 py-2 rounded-lg font-extrabold border border-gray-300 hover:border-green-300 hover:shadow-xl transition-colors">
                Learn More
              </button>
              <button className="px-3 py-2 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105">                
                Donate Now
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2 justify-center sm:justify-start">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-lg sm:text-base">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-lg sm:text-base">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-lg sm:text-base">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-lg sm:text-base">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-lg sm:text-base">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-extrabold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Our Causes</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Get Involved</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Events</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">News</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-extrabold mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-gray-800 flex-shrink-0" />
                <span className="text-gray-400">+1 305-724-1176</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-gray-800 flex-shrink-0" />
                <span className="text-black break-all sm:break-normal">admin@empowerdreamz.org</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-gray-800 flex-shrink-0" />
                <span className="text-black text-sm sm:text-base">123 Hope Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-black mb-4 text-sm sm:text-base">
              Subscribe to get updates on our latest campaigns and impact stories.
            </p>
            <div className="pt-4 sm:pt-[25px]">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-200 text-black px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none flex-1 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
                <button className="flex gap-2 bg-gradient-to-r from-[#2d8f00] text-white to-[#85e065] font-bold px-8 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:shadow-lg transition-shadow">
                  Subscribe
                  <img src="/wb.png" alt="Parofund Logo" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2024 EmpowerDreamz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;