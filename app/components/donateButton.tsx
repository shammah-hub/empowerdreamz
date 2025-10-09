"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DonateButton: React.FC = () => {
  return (
    <Link href="/donate">
      <button 
        className="w-full sm:w-auto font-bold gap-2 flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >                
        Donate Now
        <Image 
          src="/wb.png" 
          width={30} 
          height={30} 
          alt="Parofund Logo" 
          className="h-[30px] w-[30px]" 
        />
      </button>
    </Link>
  );
};

export default DonateButton;