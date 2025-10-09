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
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <PaymentElement />
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="group w-full px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-light"
      >
        {isProcessing ? 'Processing...' : `Donate $${amount}`}
        {!isProcessing && (
          <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
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
      <div className="min-h-screen bg-white pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600/10 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Thank <span className="font-semibold text-green-600">you</span>
            </h1>
            <p className="text-xl text-gray-500 mb-2">
              Your donation of <span className="font-semibold text-green-600">${amount}</span> has been received
            </p>
            <p className="text-sm text-gray-400">
              You will receive a confirmation email shortly
            </p>
          </div>

          <div className="mb-12 py-8 border-t border-b border-gray-200">
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Your support helps us continue our mission to transform lives and build stronger communities.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Share2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500 uppercase tracking-wider">Share</span>
            </div>
            <div className="flex justify-center gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleNewDonation}
              className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 font-light"
            >
              Make Another Donation
            </button>
            <Link
              href="/"
              className="px-8 py-4 text-green-600 hover:text-green-700 transition-colors font-light"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-gray-500 uppercase tracking-wider">Donate</span>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mt-4 mb-6">
            Make a <span className="font-semibold text-green-600">difference</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Your generous donation helps us continue our mission to empower communities
          </p>
        </div>

        {/* Tech Donation Banner */}
        <div className="mb-20">
          <div className="bg-green-600 rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl  text-white mb-4">
                Donate Your <span className="font-bold">Technology</span>
              </h2>
              <p className="text-green-100 text-lg mb-6 font-light leading-relaxed">
                Your old computers and laptops can transform lives. Many students lack access to essential technology. Help bridge the digital divide.
              </p>
              <a 
                href="tel:+13308624221"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 "
              >
                Call +1 330-862-4221
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              {isCardLoading ? (
                <div className="flex flex-col items-center justify-center py-32">
                  <div className="w-12 h-12 border-2 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 font-light">Loading...</p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-12 flex items-center justify-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-light ${!showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <span className={`text-sm ${!showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>Amount</span>
                    </div>
                    <div className="w-24 h-px bg-gray-200">
                      <div className={`h-full ${showPaymentForm ? 'bg-green-600' : 'bg-gray-200'} transition-all duration-300`}></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-light ${showPaymentForm ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className={`text-sm ${showPaymentForm ? 'text-green-600' : 'text-gray-400'}`}>Payment</span>
                    </div>
                  </div>

                  {!showPaymentForm ? (
                    <>
                      <div className="mb-8">
                        <label className="block text-sm text-gray-500 uppercase tracking-wider mb-4">
                          Select Amount
                        </label>
                        <div className="grid grid-cols-3 gap-3 mb-8">
                          {quickAmounts.map((quickAmount) => (
                            <button
                              key={quickAmount}
                              onClick={() => handleQuickAmount(quickAmount)}
                              className={`py-4 rounded-full border transition-all font-light ${
                                amount === quickAmount.toString()
                                  ? 'border-green-600 bg-green-50 text-green-600'
                                  : 'border-gray-200 hover:border-green-600 text-gray-600'
                              }`}
                            >
                              ${quickAmount}
                            </button>
                          ))}
                        </div>

                        <label className="block text-sm text-gray-500 uppercase tracking-wider mb-4">
                          Custom Amount
                        </label>
                        <div className="relative mb-2">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl font-light">
                            $
                          </span>
                          <input
                            type="text"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-full focus:border-green-600 focus:outline-none text-2xl font-light text-gray-900 placeholder:text-gray-300"
                          />
                        </div>
                        {error && (
                          <div className="flex items-center gap-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <p>{error}</p>
                          </div>
                        )}
                        <p className="text-gray-400 text-sm mt-2">Minimum donation: $5.00</p>
                      </div>

                      <button
                        onClick={handleContinue}
                        disabled={!amount}
                        className="group w-full px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-light"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-light text-gray-900">Payment Details</h2>
                        <button
                          onClick={() => setShowPaymentForm(false)}
                          className="text-gray-500 hover:text-gray-900 font-light text-sm"
                        >
                          ← Back
                        </button>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                        <p className="text-gray-500 text-sm mb-1">Donation Amount</p>
                        <p className="text-3xl font-light text-green-600">${amount}</p>
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <p className="text-sm text-red-600">{error}</p>
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
            <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
              <span className="text-sm text-gray-500 uppercase tracking-wider">Your Impact</span>
              <h3 className="text-2xl font-light text-gray-900 mt-4 mb-8">
                Every dollar <span className="font-semibold text-green-600">matters</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-full bg-green-600/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-light mb-1">Tax Deductible</p>
                  <p className="text-sm text-gray-500">501(c)(3) nonprofit</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-green-600/10 flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-900 font-light mb-1">Direct Impact</p>
                  <p className="text-sm text-gray-500">Every dollar supports our mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;