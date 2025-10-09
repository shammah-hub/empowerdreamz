import Image from 'next/image'
import Link from "next/link"
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-white mt-8 sm:mt-16">
      {/* Logo Container */}
      <div className="w-full flex justify-center items-center pt-8 pb-6 px-4">
        <div className="relative">
          <Image 
            src="/Ad.png" alt="Parofund Logo" 
            width={2000}  
            height={2000} 
            className="w-auto max-w-[250px] sm:max-w-none"
            priority
          />
          <div className="h-15 w-full bg-gradient-to-t from-gray-600 to-transparent -mt-6 blur-lg"></div>
        </div>
      </div>

      {/* Social Media Icons - Centered */}
      <div className="flex space-x-4 justify-center py-4">
        <a href="#" className="bg-[#7fe97d] hover:bg-[#53f050] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <FaFacebook size={18} />
        </a>
        <a href="#" className="bg-[#7fe97d] hover:bg-[#53f050] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <FaTwitter size={18} />
        </a>
        <a href="#" className="bg-[#7fe97d] hover:bg-[#53f050] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <FaInstagram size={18} />
        </a>
        <a href="#" className="bg-[#7fe97d] hover:bg-[#53f050] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <FaLinkedin size={18} />
        </a>
      </div>

      {/* Navigation Links - Horizontal */}
      <nav className="flex flex-wrap justify-center items-center gap-4 py-6 px-4">
        <Link href="/" className="text-black hover:text-gray-600 font-medium transition-colors">Home</Link>
        <span className="text-gray-400">/</span>
        <Link href="/about" className="text-black hover:text-gray-600 font-medium transition-colors">About Us</Link>
        <span className="text-gray-400">/</span>
        <Link href="/team" className="text-black hover:text-gray-600 font-medium transition-colors">Our Team</Link>
        <span className="text-gray-400">/</span>
        <Link href="/projects" className="text-black hover:text-gray-600 font-medium transition-colors">What We Do</Link>
        <span className="text-gray-400">/</span>
        <Link href="/contact" className="text-black hover:text-gray-600 font-medium transition-colors">Contact Us</Link>
      </nav>
      
      <nav className="flex flex-wrap justify-center items-center gap-4 py-6 px-4">
        <Link href="/privacy-policy" className="text-black hover:text-gray-600 font-light transition-colors">Privacy-Policy</Link>
        <span className="text-gray-400">/</span>
        <Link href="/terms&condition" className="text-black hover:text-gray-600 font-light transition-colors">Terms & Condition</Link>
        
      </nav>

      {/* Copyright Section - Single Line */}
      <div className="border-t border-gray-200 py-6 text-center">
        <p className="text-gray-600 text-sm">
          Copyright ©2025 Leaders Hub Foundation . All rights reserved. Powered by WordPress & Designed by Bizberg Themes
        </p>
      </div>
    </footer>
  );
}

export default Footer;