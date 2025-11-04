"use client";

import React, { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CheckCircle, AlertCircle, Heart, ArrowRight, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

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
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
        <PaymentElement />
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-light text-sm sm:text-base"
      >
        {isProcessing ? 'Processing...' : `Donate $${amount}`}
        {!isProcessing && (
          <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
        )}
      </button>

      <p className="text-center text-xs sm:text-sm text-gray-500">
        Secure payment powered by Stripe
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
  const shareText = 'Support our charity and help transform lives in our communities!';

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#16a34a',
        colorBackground: '#ffffff',
        colorText: '#1a1a1a',
        colorDanger: '#dc2626',
        fontFamily: 'system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '12px',
      },
    },
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-[#fafffa] pt-20 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-600/10 mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-3 sm:mb-4">
              Thank <span className="font-semibold text-green-600">you</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 mb-2 px-4">
              Your donation of <span className="font-semibold text-green-600">${amount}</span> has been received
            </p>
            <p className="text-xs sm:text-sm text-gray-400 px-4">
              You will receive a confirmation email shortly
            </p>
          </div>

          <div className="mb-8 sm:mb-12 py-6 sm:py-8 border-t border-b border-gray-200">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto px-4">
              Your support helps us continue our mission to transform lives and build stronger communities.
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Share2 className="w-4 h-4 text-gray-500" />
              <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Share</span>
            </div>
            <div className="flex justify-center gap-2 sm:gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={handleNewDonation}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 font-light text-sm sm:text-base"
            >
              Make Another Donation
            </button>
            <Link
              href="/"
              className="px-6 sm:px-8 py-3 sm:py-4 text-green-600 hover:text-green-700 transition-colors font-light text-sm sm:text-base"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafffa] pt-20 sm:pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Donate</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            Make a <span className="font-semibold text-green-600">difference</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto font-light px-4">
            Your generous donation helps us continue our mission to empower communities
          </p>
        </div>

        

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-8">
              {isCardLoading ? (
                <div className="flex flex-col items-center justify-center py-20 sm:py-32">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 font-light text-sm sm:text-base">Loading...</p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-8 sm:mb-12 flex items-center justify-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-light text-sm sm:text-base ${!showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <span className={`text-xs sm:text-sm ${!showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>Amount</span>
                    </div>
                    <div className="w-16 sm:w-24 h-px bg-gray-200">
                      <div className={`h-full ${showPaymentForm ? 'bg-green-600' : 'bg-gray-200'} transition-all duration-300`}></div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-light text-sm sm:text-base ${showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className={`text-xs sm:text-sm ${showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>Payment</span>
                    </div>
                  </div>

                  {!showPaymentForm ? (
                    <>
                      <div className="mb-6 sm:mb-8">
                        <label className="block text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                          Select Amount
                        </label>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                          {quickAmounts.map((quickAmount) => (
                            <button
                              key={quickAmount}
                              onClick={() => handleQuickAmount(quickAmount)}
                              className={`py-3 sm:py-4 rounded-full border transition-all font-light text-sm sm:text-base ${
                                amount === quickAmount.toString()
                                  ? 'border-green-600 bg-green-50 text-green-600'
                                  : 'border-gray-200 hover:border-green-600 text-gray-600'
                              }`}
                            >
                              ${quickAmount}
                            </button>
                          ))}
                        </div>

                        <label className="block text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                          Custom Amount
                        </label>
                        <div className="relative mb-2">
                          <span className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl sm:text-2xl font-light">
                            $
                          </span>
                          <input
                            type="text"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 border border-gray-200 rounded-full focus:border-green-600 focus:outline-none text-xl sm:text-2xl font-light text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                        {error && (
                          <div className="flex items-center gap-2 text-red-600 text-xs sm:text-sm">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <p>{error}</p>
                          </div>
                        )}
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Minimum donation: $5.00</p>
                      </div>

                      <button
                        onClick={handleContinue}
                        disabled={!amount}
                        className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-light text-sm sm:text-base"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-light text-gray-900">Payment Details</h2>
                        <button
                          onClick={() => setShowPaymentForm(false)}
                          className="text-gray-500 hover:text-gray-900 font-light text-xs sm:text-sm"
                        >
                          ← Back
                        </button>
                      </div>

                      <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">Donation Amount</p>
                        <p className="text-2xl sm:text-3xl font-light text-green-600">${amount}</p>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-red-600">{error}</p>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:sticky lg:top-32">
              <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Your Impact</span>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mt-3 sm:mt-4 mb-6 sm:mb-8">
                Every dollar <span className="font-semibold text-green-600">matters</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-600/10 flex items-center justify-center mb-2 sm:mb-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-900 font-light mb-1">Tax Deductible</p>
                  <p className="text-xs sm:text-sm text-gray-500">501(c)(3) nonprofit</p>
                </div>
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-600/10 flex items-center justify-center mb-2 sm:mb-3">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-900 font-light mb-1">Direct Impact</p>
                  <p className="text-xs sm:text-sm text-gray-500">Every dollar supports our mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Donation Banner */}
        <div className="mt-12 sm:mt-20">
          <div className="bg-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
                Donate Your <span className="font-bold">Technology</span>
              </h2>
              <p className="text-green-100 text-sm sm:text-lg mb-4 sm:mb-6 font-light leading-relaxed">
                Your old computers and laptops can transform lives. Many students lack access to essential technology. Help bridge the digital divide.
              </p>
              <a 
                href="tel:+13308624221"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Call +1 330-862-4221
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;