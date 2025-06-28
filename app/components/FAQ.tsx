import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does Parofund work?",
      answer: "Parofund is a group savings platform that allows you to save money with friends, family, or colleagues. Each member contributes a fixed amount regularly, and the collective funds can be used for specific goals or distributed to members on a rotating basis."
    },
    {
      question: "Is my money safe with Parofund?",
      answer: "Yes, your money is secure with Parofund. We use bank-level encryption and security measures to protect all transactions. Additionally, all deposits are held in FDIC-insured accounts up to the maximum allowed by law."
    },
    {
      question: "Can I withdraw my savings anytime?",
      answer: "Yes, you can withdraw your contributed funds at any time, subject to the specific terms agreed upon by your savings group. Some groups may have early withdrawal fees or waiting periods as determined by the group members."
    },
    {
      question: "What happens if a group member doesn't contribute?",
      answer: "If a group member fails to make their scheduled contribution, Parofund notifies all group members. Groups can set their own rules for handling missed contributions, including grace periods, late fees, or removal from the group after multiple missed payments."
    }
  ];

  return (
    <div className="bg-green-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">What Our Users Say</h2>
        <p className="text-center text-gray-600 mb-8">Real stories from people who use with Parofund.</p>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform ${openIndex === index ? 'rotate-45' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8H4" 
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;