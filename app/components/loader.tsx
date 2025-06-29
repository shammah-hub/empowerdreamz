"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by showing children during SSR
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 gap-4">
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
      ) : (
        children
      )}
    </>
  );
};

export default Loader;