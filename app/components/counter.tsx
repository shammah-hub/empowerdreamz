"use client"
import React, { useState, useEffect, useRef } from 'react';

interface CounterState {
  lives: number;
  partners: number;
  effectiveness: number;
}

interface TargetValues {
  lives: number;
  partners: number;
  effectiveness: number;
}

const CounterSection: React.FC = () => {
  const [counters, setCounters] = useState<CounterState>({
    lives: 0,
    partners: 0,
    effectiveness: 0
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Target values for each counter
  const targets: TargetValues = {
    lives: 3200,
    partners: 30,
    effectiveness: 98
  };

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation logic
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 60; // 60fps
    const totalFrames = duration / (1000 / frameRate);
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    (Object.keys(targets) as Array<keyof TargetValues>).forEach(key => {
      const target = targets[key];
      const increment = target / totalFrames;
      let current = 0;
      let frame = 0;

      intervals[key] = setInterval(() => {
        frame++;
        current = Math.min(increment * frame, target);
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));

        if (current >= target) {
          clearInterval(intervals[key]);
        }
      }, 1000 / frameRate);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [isVisible]); // Removed targets from dependency array

  const formatNumber = (num: number, suffix: string = ''): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k${suffix}`;
    }
    return `${num}${suffix}`;
  };
  
  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Measuring success through the positive changes we create in the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatNumber(counters.lives, '+')}
              </div>
              <div className="text-gray-600 mb-4">Lives Impacted</div>
              <p className="text-gray-500 text-sm">
                Individuals and families who have directly benefited from our programs and services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {counters.partners}+
              </div>
              <div className="text-gray-600 mb-4">Community Partners</div>
              <p className="text-gray-500 text-sm">
                Local organizations, businesses, and institutions collaborating with us to amplify our impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {counters.effectiveness}%
              </div>
              <div className="text-gray-600 mb-4">Program Effectiveness</div>
              <p className="text-gray-500 text-sm">
                Of participants report improved quality of life after engaging with our programs.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CounterSection;