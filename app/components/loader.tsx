'use client';
import Image from 'next/image'
import { useState, useEffect } from 'react';

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setIsMounted(true);
    
    // Simulate content loading or wait for actual content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by showing children during SSR
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 gap-4">
          <Image src="/Ad.png" width={400} height={400} alt="Loading" />
          <div className="w-8 h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;