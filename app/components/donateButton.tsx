"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const DonateButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleOpenModal = () => {
    setShowModal(true);
    setAmount('');
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAmount('');
    setError('');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
      setError('');
    }
  };

  const handleDonate = async (): Promise<void> => {
    const donationAmount = parseFloat(amount);

    // Validation
    if (!amount || isNaN(donationAmount)) {
      setError('Please enter a valid amount');
      return;
    }

    if (donationAmount < 5) {
      setError('Minimum donation amount is $5');
      return;
    }

    setIsLoading(true);
    
    try {
      // Convert dollars to cents for Stripe
      const amountInCents = Math.round(donationAmount * 100);

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInCents,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url }: { url: string } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
      
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('Failed to process donation. Please try again.');
      setIsLoading(false);
    }
  };

  // Quick amount buttons
  const quickAmounts = [5, 10, 25, 50, 100];

  const handleQuickAmount = (quickAmount: number) => {
    setAmount(quickAmount.toString());
    setError('');
  };

  return (
    <>
      <button 
        onClick={handleOpenModal}
        disabled={isLoading}
        className="w-full sm:w-auto font-bold gap-2 flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Your generosity makes a difference. Enter any amount $5 or more.
            </p>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => handleQuickAmount(quickAmount)}
                  className={`py-2 px-3 rounded-lg border-2 transition-all font-semibold ${
                    amount === quickAmount.toString()
                      ? 'border-green-600 bg-green-50 text-green-600'
                      : 'border-gray-300 hover:border-green-400 text-gray-700'
                  }`}
                >
                  ${quickAmount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Donation Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg font-semibold">
                  $
                </span>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="5.00"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
              <p className="text-gray-500 text-xs mt-2">Minimum donation: $5.00</p>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={isLoading || !amount}
              className="w-full font-bold gap-2 flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Processing...' : `Donate ${amount ? `$${amount}` : ''}`}
              {!isLoading && (
                <Image 
                  src="/wb.png" 
                  width={24} 
                  height={24} 
                  alt="Parofund Logo" 
                  className="h-[24px] w-[24px]" 
                />
              )}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateButton;