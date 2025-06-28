import React, { useState } from 'react';

const Testimonial = () => {
  // List of testimonials
  const testimonials = [
    {
      name: "Ogechi Onwudiwe",
      location: "Lagos, Nigeria",
      text: "Parofund has been a game-changer for me. Saving with a group has helped me stay disciplined and achieve my financial goals faster. I feel secure knowing my money is in good hands."
    },
    {
      name: "James Wilson",
      location: "Toronto, Canada",
      text: "I've been using this service for six months and the results have been incredible. The platform is intuitive and the customer support is top-notch."
    },
    {
      name: "Sarah Johnson",
      location: "Sydney, Australia",
      text: "This product exceeded all my expectations. I can't imagine going back to my old workflow now that I've experienced how efficient this makes everything."
    }
  ];

  // State to track current testimonial index
  const [current, setCurrent] = useState(0);
  
  // Functions for navigation
  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  return (
    <div className="mt-12 flex flex-col items-center max-w-lg mx-auto p-4">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img src="/frame.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
      
      {/* Name and Location */}
      <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
      <p className="text-gray-600 mb-4">{testimonials[current].location}</p>
      
      {/* Stars */}
      <div className="flex mb-4">
        <span className="text-green-600">★★★★★</span>
      </div>
      
      {/* Testimonial Text */}
      <div className="bg-[#F7F9F6] w-[1018px] p-6 rounded-lg mb-6 text-center">
        <p className="italic">"{testimonials[current].text}"</p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between w-full">
        <button onClick={handlePrev} className="border rounded-full p-2">←</button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-green-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="border rounded-full p-2">→</button>
      </div>
    </div>
  );
};

export default Testimonial;