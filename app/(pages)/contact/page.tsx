"use client"
import Image from 'next/image'
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import DonateButton from '@/app/components/donateButton';



export default function CharityContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(22 163 74) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Get In Touch</span>
                <h1 className="text-6xl md:text-7xl font-light text-gray-900 mt-4 mb-6 leading-tight">
                  We&apos;d love to
                  <br />
                  <span className="font-semibold text-green-600">hear from you</span>
                </h1>
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  Have a question about helping support children in need? Always here to help. Reach out, and we&apos;ll do our best to guide you.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors border border-green-100">
                  <span className="text-green-600 font-semibold">f</span>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors border border-green-100">
                  <span className="text-green-600 font-semibold">t</span>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors border border-green-100">
                  <span className="text-green-600 font-semibold">in</span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                <Image 
                  src="/hs.png" 
                  alt="Contact" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Email us directly at:</p>
                <a 
                  href="mailto:support@empowerdreamz.org" 
                  className="text-green-600 font-light hover:text-green-700 transition-colors"
                >
                  support@empowerdreamz.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <span className="text-sm text-gray-500 tracking-wider uppercase">Contact Information</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Ways to <span className="font-semibold text-green-600">reach us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                6545 Market Ave. North STE 100, North Canton, OH 44721 USA
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">Mailing Address:</span> 6545 Market Ave. North STE 100, North Canton, OH 44721 USA
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Email</h3>
              <a 
                href="mailto:support@empowerdreamz.org" 
                className="text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                support@empowerdreamz.org
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Call us</h3>
              <a 
                href="tel:+13308624221" 
                className="text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                +1 330-862-4221
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Working Hours</h3>
              <p className="text-gray-500 text-sm">9:00 am - 5:00 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Volunteer */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Have questions or want to learn more about our work? We will love to hear from you! Please visit our contact page to get in touch with our team.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center gap-2">
                  Contact Us
                  <Image src="/grl.png" alt="Arrow" width={24} height={24} className="w-6 h-6" />
                </button>
              </Link>
            </div>

            {/* Donation */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Donation Information
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                For more information or have contact about our various giving options, visit our Donation Information page.
              </p>
              <Link href="#">
                <DonateButton />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-green-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white transform rotate-12"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Donate now and help <span className="font-semibold">level up lives</span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Your donation will help provide essential services to children in need. Join our community of heart, hope, nutrition, and advancement.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Click here to donate now and help get all the lives of children in need
            </p>
            <div className="flex justify-center">
              <DonateButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}