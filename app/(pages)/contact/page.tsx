"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function CharityContactPage() {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  // Handle form submission here
};

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a344b] py-42 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-extrabold text-white mb-6">
            We Would Love to Hear from You
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            Have a question about helping support children in need? Always here to help. 
            Reach out, and we &apos; ll do our best to guide you.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-lime-500 transition-colors">
              <span className="text-[#1a344b] font-bold">f</span>
            </div>
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-lime-500 transition-colors">
              <span className="text-[#1a344b] font-bold">t</span>
            </div>
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-lime-500 transition-colors">
              <span className="text-[#1a344b] font-bold">in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">Somewhere in the World</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">You Got Email from</h3>
              <p className="text-gray-600 text-sm">support@thishelp.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call us on</h3>
              <p className="text-gray-600 text-sm">+95 000-00-000</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">9:00 am - 5:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-96 bg-[#369612] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#369612] flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/hs.png')"}}>
                  {/* Stylized hands illustration */}
            
            
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1a344b] text-white px-4 py-2 rounded-lg">
                <p className="text-sm">Email us directly at:</p>
                <p className="font-semibold">contact@thishelp.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#369612] focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-lime-400 border-gray-300 rounded focus:ring-[#369612]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>

                <button
                     type="submit"
                        className="bg-[#1a344b] shadow-2xl shadow-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                        >
                    <span>Send your Message</span>
                    <Send className="w-4 h-4" />
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-600 mb-6">
                Interested in becoming a volunteer and making a hands-on difference? Please visit 
                our volunteer page for more information about how to get signed up.
              </p>
              <button className="gap-2 bg-[#1a344b] shadow-2xl shadow-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                Visit Page
                 <Image
                    src="/grl.png"
                    alt="Parofund Logo"
                    width={30}
                    height={30}
                  />

              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Donation Information
              </h3>
              <p className="text-gray-600 mb-6">
                For more information or have contact about our various giving options, visit our Donation 
                Information page.
              </p>
              <button className=" gap-2 bg-[#1a344b] shadow-2xl shadow-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                Donation Page
                <Image
                    src="/grl.png"
                    alt="Parofund Logo"
                    width={30}
                    height={30}
                  />

              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Donation CTA Section */}
     <div className="bg-[#369612] py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-100 z-0">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 border-2 sm:border-3 lg:border-4 border-gray-300 transform rotate-45"></div>
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-2 sm:border-3 lg:border-4 border-gray-300 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border-2 sm:border-3 lg:border-4 border-gray-300 transform rotate-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4">
            Donate Now and Help Level Up the Lives of Children in Need
          </h2>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Your donation will help provide essential services to children in need. Join our community of heart, hope, nutrition, and 
            advancement.
          </p>
          
          <div className="bg-white backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-md mx-auto">
            <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base">
              Click here to donate now and help get all the lives of children in need
            </p>
           <button className="gap-2 flex items-center justify-center px-4 py-[10px] mx-auto font-bold rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">                
                Donate Now
                <Image src="/wb.png" width={30} height={30} alt="Parofund Logo" className="h-6 w-6 sm:h-[30px] sm:w-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}