"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide body content immediately
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <div 
        className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 gap-4 transition-opacity duration-500 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
          <Image
            src="/Ad.png"
            fill
            alt="Loading"
            className="object-contain"
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 288px"
            priority
          />
        </div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
      </div>

      {/* Main content - always rendered but hidden behind loader */}
      <div className={loading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
};

export default Loader;