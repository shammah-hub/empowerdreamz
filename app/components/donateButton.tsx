"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DonateButton: React.FC = () => {
  return (
    <Link href="/donate">
      <button 
        className="group w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 font-light text-base"
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