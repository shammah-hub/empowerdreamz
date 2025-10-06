"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateButton from "./donateButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Our Team", path: "/our-team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="
      fixed top-4 inset-x-0
      bg-white border border-gray-300 rounded-[15px]
      px-4 sm:px-6 md:pl-[30px] md:pr-[50px] py-2
      shadow-lg w-[95%] max-w-[1700px] mx-auto z-50
    ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Ad.png"
            width={140}
            height={70}
            alt="Logo"
            className="h-8 sm:h-10 w-auto"
          />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-black transition-colors duration-200 ${
                  pathname === link.path
                    ? "border-b-2 border-black text-black font-medium"
                    : "text-[#989898]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:flex gap-4">
          <DonateButton />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          isOpen ? "max-h-[400px] mt-2" : "max-h-0"
        }`}
      >
        <ul className="py-2 border-t border-gray-200 bg-white rounded-lg shadow-lg mt-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                  pathname === link.path
                    ? "bg-green-50 text-green-600 font-medium border-r-4 border-green-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="border-t border-gray-100 px-4 py-3">
            <DonateButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
