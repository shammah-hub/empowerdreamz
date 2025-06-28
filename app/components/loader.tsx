'use client';
import Image from 'next/image'


import { useState, useEffect } from 'react';

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading or wait for actual content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                                  <Image src="/Ad.png" alt="" />

          <div className="w-8 h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin">
          </div>
          <style jsx>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
            .animate-spin {
              animation: spin 1s linear infinite;
            }
          `}</style>

        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;