import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Donation!
        </h1>
        
        <p className="text-gray-600 mb-6 text-lg">
          Your generosity makes a real difference. We&apos;ve received your donation and truly appreciate your support.
        </p>

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image 
            src="/wb.png" 
            width={60} 
            height={60} 
            alt="Parofund Logo" 
            className="h-[60px] w-[60px]" 
          />
        </div>

        {/* Additional Info */}
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            A confirmation email has been sent to your email address with the donation receipt.
          </p>
        </div>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}