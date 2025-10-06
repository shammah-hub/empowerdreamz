import React, { useState, useEffect } from 'react';

const CircularProgres = ({ 
  percentage = 75, 
  size = 48, 
  strokeWidth = 4,
  duration = 2000
}) => {
  const [progress, setProgress] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    
    // Animate the number
    const increment = percentage / (duration / 16);
    let current = 0;
    const numberTimer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        current = percentage;
        clearInterval(numberTimer);
      }
      setDisplayNumber(Math.round(current));
    }, 16);
    
    return () => {
      clearTimeout(timer);
      clearInterval(numberTimer);
    };
  }, [percentage, duration]);
  
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="bg-[#1a344b] rounded-lg p-3 sm:p-4 text-white flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-sm mx-auto">
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#87de6c"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-2000 ease-out"
          />
        </svg>
        {/* Number in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs sm:text-sm font-bold">
            {displayNumber}
          </span>
        </div>
      </div>
      
      {/* Text content in column */}
      <div className="flex flex-col text-center sm:text-left">
        <p className="text-base sm:text-lg font-bold">Since 2023</p>
        <p className="text-xs sm:text-sm">Years of Experience</p>
      </div>
    </div>
  );
};

export default CircularProgres;