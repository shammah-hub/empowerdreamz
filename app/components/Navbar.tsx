"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border bg-white border-gray-300 rounded-[15px] px-4 sm:px-6 md:pl-[30px] md:pr-[50px] py-2 md:p-[10px] fixed left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1400px] top-4 shadow-lg">      
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          <img src="/Ad.png" alt="Logo" className="h-8 sm:h-10 md:h-[40px] w-auto"/>        
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-black transition-colors duration-200 ${
                  pathname === link.path ? "border-b-2 border-black text-black font-medium" : "text-[#989898]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button className="gap-2 flex items-center px-4 py-[10px] font-bold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105">                
            Donate Now
            <img src="/wb.png" alt="Parofund Logo" className="h-[30px] w-[30px]" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                    pathname === link.path 
                      ? "bg-green-50 text-green-600 font-medium border-r-4 border-green-500" 
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Donate Button */}
          <div className="px-4 py-3 border-t border-gray-100">
            <button className="w-full gap-2 flex items-center justify-center px-4 py-3 font-bold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95">                
              Donate Now
              <img src="/wb.png" alt="Parofund Logo" className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}