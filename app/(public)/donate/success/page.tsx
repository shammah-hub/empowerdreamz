"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || '0';

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + '/donate' : '';
  const shareText = 'Support our charity and help transform lives in our communities!';

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
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300">
              <FaFacebook size={16} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300">
              <FaTwitter size={16} />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300">
              <FaLinkedin size={16} />
            </a>
            <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/donate" className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 font-light text-sm sm:text-base">
            Make Another Donation
          </Link>
          <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 text-green-600 hover:text-green-700 transition-colors font-light text-sm sm:text-base">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafffa] pt-20 sm:pt-32 pb-16 px-4 sm:px-6 flex items-center justify-center"><div className="text-center"><div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-600/10 mb-4"><CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 animate-pulse" /></div><p className="text-gray-500">Loading...</p></div></div>}>
      <SuccessContent />
    </Suspense>
  );
}