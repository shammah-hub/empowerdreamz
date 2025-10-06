"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key from environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const DonateButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDonate = async (): Promise<void> => {
    setIsLoading(true);
    
    try {
      // Call your API endpoint to create a Stripe Checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 5000, // Amount in cents ($50.00)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url }: { url: string } = await response.json();

      // Open Stripe Checkout in a new tab
      if (url) {
        window.open(url, '_blank');
        setIsLoading(false);
      } else {
        throw new Error('No checkout URL returned');
      }
      
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('Failed to process donation. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDonate}
      disabled={isLoading}
      className="w-full sm:w-auto font-bold gap-2 flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >                
      {isLoading ? 'Processing...' : 'Donate Now'}
      {!isLoading && (
        <Image 
          src="/wb.png" 
          width={30} 
          height={30} 
          alt="Parofund Logo" 
          className="h-[30px] w-[30px]" 
        />
      )}
    </button>
  );
};

export default DonateButton;