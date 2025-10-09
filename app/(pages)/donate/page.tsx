"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CheckCircle, AlertCircle, Heart, HeartPulse, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

// Load Stripe outside of component to avoid recreating on each render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutFormProps {
  amount: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donate/success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        onError(error.message || 'An error occurred while processing your payment.');
        setIsProcessing(false);
      } else {
        onSuccess();
      }
    } catch (err) {
     onError(`${err} Please try again.`);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <PaymentElement />
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full font-bold gap-2 flex items-center justify-center px-6 py-4 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
      >
        {isProcessing ? 'Processing...' : `Donate $${amount}`}
        {!isProcessing && (
          <Image 
            src="/wb.png" 
            width={28} 
            height={28} 
            alt="Donate Icon" 
            className="h-[28px] w-[28px]" 
          />
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
        🔒 Secure payment powered by Stripe. Your information is encrypted and secure.
      </p>
    </form>
  );
};

const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [clientSecret, setClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  const quickAmounts = [5, 10, 25, 50, 100, 250];

  // Card loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
      setError('');
    }
  };

  const handleQuickAmount = (quickAmount: number) => {
    setAmount(quickAmount.toString());
    setError('');
  };

  const handleContinue = async () => {
    const donationAmount = parseFloat(amount);

    if (!amount || isNaN(donationAmount)) {
      setError('Please enter a valid amount');
      return;
    }

    if (donationAmount < 5) {
      setError('Minimum donation amount is $5');
      return;
    }

    try {
      const amountInCents = Math.round(donationAmount * 100);

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInCents,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const data = await response.json();

      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setShowPaymentForm(true);
        setError('');
      } else {
        throw new Error('No client secret returned');
      }
    } catch (err) {
      console.error('Error creating payment intent:', err);
      setError('Failed to initialize payment. Please try again.');
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShowPaymentForm(false);
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleNewDonation = () => {
    setAmount('');
    setClientSecret('');
    setShowPaymentForm(false);
    setPaymentSuccess(false);
    setError('');
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/donate' : '';
  const shareText = 'Support EmpowerDreamz and help transform lives in our communities!';

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#2d8f00',
        colorBackground: '#ffffff',
        colorText: '#1a1a1a',
        colorDanger: '#df1b41',
        fontFamily: 'system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
    },
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Thank You for Your Generosity!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your donation of <span className="font-bold text-green-600">${amount}</span> has been successfully processed.
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Your support helps us continue our mission to transform lives and build stronger communities. 
                You will receive a confirmation email shortly with your donation receipt for tax purposes.
              </p>
            </div>

            {/* Share Section */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Share2 className="w-5 h-5 text-gray-600" />
                <p className="text-gray-700 font-semibold">Share the Love</p>
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877f2] hover:bg-[#166fe5] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1da1f2] hover:bg-[#1a91da] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] hover:bg-[#006399] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25d366] hover:bg-[#20bd5a] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNewDonation}
                className="px-6 py-3 bg-gradient-to-r from-[#2d8f00] to-[#85e065] text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Make Another Donation
              </button>
              <Link
                href="/"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center justify-center"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <Heart className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us continue our mission to empower communities and transform lives.
          </p>
        </div> 

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {isCardLoading ? (
                // Loader inside the card
                <div className="flex flex-col items-center justify-center py-32">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600 mb-4"></div>
                  <p className="text-lg font-semibold text-gray-700">Loading donation form...</p>
                </div>
              ) : (
                <>
                  {/* Step Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${!showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                          1
                        </div>
                        <div>
                          <p className={`font-bold ${!showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>
                            Select Amount
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 h-1 mx-4 bg-gray-200">
                        <div className={`h-full ${showPaymentForm ? 'bg-green-600' : 'bg-gray-200'} transition-all duration-300`}></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                          2
                        </div>
                        <div>
                          <p className={`font-bold ${showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>
                            Payment Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!showPaymentForm ? (
                    <>
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Donation Amount</h2>
                        <p className="text-gray-600">Choose a preset amount or enter your own</p>
                      </div>
                      
                      {/* Quick Amount Buttons */}
                      <div className="mb-6">
                        <label className="block text-base font-bold text-gray-700 mb-3">
                          Quick Select
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                        {quickAmounts.map((quickAmount) => (
                          <button
                            key={quickAmount}
                            onClick={() => handleQuickAmount(quickAmount)}
                            className={`py-4 px-4 rounded-lg border-2 transition-all font-bold text-lg ${
                              amount === quickAmount.toString()
                                ? 'border-green-600 bg-green-50 text-green-600 shadow-lg'
                                : 'border-gray-300 hover:border-green-400 text-gray-700 hover:shadow-md'
                            }`}
                          >
                            ${quickAmount}
                          </button>
                        ))}
                      </div>
                      </div>

                      {/* Custom Amount */}
                      <div className="mb-6">
                        <label className="block text-base font-bold text-gray-700 mb-3">
                          Or Enter Custom Amount
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl font-bold">
                            $
                          </span>
                          <input
                            type="text"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-3xl font-bold text-gray-900 placeholder:text-gray-400"
                          />
                        </div>
                        {error && (
                          <div className="flex items-center gap-2 mt-3 text-red-600">
                            <AlertCircle className="w-5 h-5" />
                            <p className="text-sm font-medium">{error}</p>
                          </div>
                        )}
                        <p className="text-gray-500 text-sm mt-2">Minimum donation: $5.00</p>
                      </div>

                      <button
                        onClick={handleContinue}
                        disabled={!amount}
                        className="w-full font-bold gap-2 flex items-center justify-center px-6 py-4 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                      >
                        Continue to Payment
                        <Image 
                          src="/wb.png" 
                          width={28} 
                          height={28} 
                          alt="Continue Icon" 
                          className="h-[28px] w-[28px]" 
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
                        <button
                          onClick={() => setShowPaymentForm(false)}
                          className="text-gray-600 hover:text-gray-900 font-medium"
                        >
                          ← Back
                        </button>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 mb-6">
                        <p className="text-gray-700">
                          Donation Amount: <span className="font-bold text-green-600 text-2xl">${amount}</span>
                        </p>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <p className="text-sm font-medium text-red-600">{error}</p>
                        </div>
                      )}

                      {clientSecret && (
                        <Elements stripe={stripePromise} options={options}>
                          <CheckoutForm 
                            amount={amount} 
                            onSuccess={handlePaymentSuccess}
                            onError={handlePaymentError}
                          />
                        </Elements>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-6 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <HeartPulse className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Tax Deductible</p>
                    <p className="text-sm text-green-100">EmpowerDreamz is a 501(c)(3) nonprofit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">100% Secure</p>
                    <p className="text-sm text-green-100">Your payment information is encrypted</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Direct Impact</p>
                    <p className="text-sm text-green-100">Every dollar goes toward our mission</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <p className="text-sm text-green-100 leading-relaxed">
                  Your donation helps provide healthcare, education, nutrition, and clean water to communities in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;