"use client"
import CounterSection from '@/app/components/counter';
import CircularProgres from '@/app/components/cprogressbar';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';



type TabType = 'mission' | 'values' | 'team';
const AboutPage = () => {

   const [activeTab, setActiveTab] = useState<TabType>('mission');

  const content: Record<TabType, {
    title: string;
    image: { icon: string; label: string };
    bullets: string[];
    description: string;
    story: string;
    stats: { number: string; label: string }[];
  }> = {
    mission: {
      title: "Our Mission",
      image: {
        icon: "/c7.jpg",
        label: "Mission Focus"
      },
      bullets: [
        "Empowering communities through sustainable development",
        "Creating lasting solutions to local challenges",
        "Building bridges between resources and needs"
      ],
      description: "Our Mission Drive",
      story: "We exist to create meaningful change in communities by connecting resources with real needs. Our mission-driven approach ensures every initiative has a clear purpose and measurable impact.",
      stats: [
        { number: "160+", label: "Families Helped" },
        { number: "13", label: "Active Volunteers" },
        { number: "4", label: "Communities Served" }
      ]
    },
    values: {
      title: "Our Values",
      image: {
        icon: "/c8.jpg",
        label: "Core Values"
      },
      bullets: [
        "Integrity in all our actions and decisions",
        "Respect for diverse perspectives and cultures",
        "Excellence in service delivery and outcomes"
      ],
      description: "Our Core Values",
      story: "Our values guide every decision we make and every action we take. They are the foundation upon which we build trust with our communities and partners.",
      stats: [
        { number: "100%", label: "Transparency" },
        { number: "24/7", label: "Community Support" },
        { number: "3+", label: "Years Experience" }
      ]
    },
    team: {
      title: "Our Team",
      image: {
        icon: "/c9.jpg",
        label: "Leadership Team"
      },
      bullets: [
        "Diverse backgrounds bringing unique perspectives",
        "Proven track record in community development",
        "Passionate commitment to social impact"
      ],
      description: "Our Amazing Team",
      story: "Our team brings together passionate individuals from diverse backgrounds, united by a common goal of creating positive change in communities around the world.",
      stats: [
        { number: "8", label: "Team Members" },
        { number: "2", label: "Countries" },
        { number: "4", label: "Languages Spoken" }
      ]
    }
  };

  const currentContent = content[activeTab];



  return (
    <div className="min-h-screen pt-12 bg-white ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-50 py-12 sm:py-16 lg:py-20">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Visual elements now on the left */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <CircularProgres/>

            <div className="bg-[#1a344b] text-white rounded-lg p-3 sm:p-4">
                <p className="text-sm sm:text-base">
                  Together we can turn compassion into action, 
                  transform lives through kindness, and create lasting change in our world.
                </p>
            </div>
          </div>
          <div className="bg-green-100 rounded-lg p-4 sm:p-6 lg:p-8 aspect-square">
            <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-400 rounded-lg bg-cover bg-top bg-no-repeat" 
            style={{backgroundImage: "url('/7.jpg')"}}>

            </div>
          </div>
        </div>
      </div>
      {/* Text and button now on the right */}
      <div>
        <p className="font-medium mb-3 text-black sm:mb-4 text-sm sm:text-base">About Our Organization</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a344b] mb-4 sm:mb-6 leading-tight">
          Transforming Lives
          <br />
          <span className="text-green-600">Together</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          Building stronger communities through compassion, dedication, and sustainable impact.
        </p>
       <Link href={"/projects"}> <button className="gap-2 flex px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white bg-gradient-to-r from-[#2d8f00] to-[#85e065] shadow-xl shadow-[#1F610A4D] hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">                
           Learn Our Story
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What We Do</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Our comprehensive approach addresses multiple aspects of community wellbeing
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Medical & Blood */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-xl text-gray-900  font-semibold mb-4">Healthcare Support</h3>
        <p className="text-gray-600 text-sm mb-6">
          Providing essential medical assistance and organizing blood drives to support our community health needs.
        </p>
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <Link href="/projects" className="text-sm text-green-600 font-medium hover:text-green-700">
          Learn More →
        </Link>
      </div>

      {/* Food Donation */}
      <div className="bg-[#1a344b] rounded-xl p-8 shadow-lg text-white">
        <h3 className="text-xl font-semibold mb-4">Nutrition Programs</h3>
        <p className="text-white text-opacity-90 text-sm mb-6">
          Combating food insecurity by distributing nutritious meals and groceries to families in need.
        </p>
        <div className="w-12 h-12 bg-green-100 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </div>
        <Link href="/food" className="text-sm text-white font-medium hover:text-gray-200">
          Learn More →
        </Link>
      </div>

      {/* Pure Water */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-xl text-gray-900 font-semibold mb-4">Clean Water Access</h3>
        <p className="text-gray-600 text-sm mb-6">
          Ensuring communities have reliable access to clean, safe drinking water through sustainable solutions.
        </p>
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        </div>
        <Link href="/projects" className="text-sm text-green-600 font-medium hover:text-green-700">
          Learn More →
        </Link>
      </div>

      {/* Give Education */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-xl text-gray-900 font-semibold mb-4">Educational Empowerment</h3>
        <p className="text-gray-600 text-sm mb-6">
          Building brighter futures through educational programs, scholarships, and skill development initiatives.
        </p>
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <Link href="/projects" className="text-sm text-green-600 font-medium hover:text-green-700">
          Learn More →
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Our Story Section */}
       <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-green-600 font-medium mb-2 text-center">Our Journey</p>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">Who We Are</h2>
          
          {/* Who We Are Description and 501c3 Download */}
          <div className="max-w-5xl mx-auto mb-8 text-center">
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              EmpowerDreamz is a registered 501(c)(3) nonprofit organization dedicated to transforming lives and building stronger communities. 
              We believe in the power of compassion, sustainable development, and meaningful partnerships to create lasting positive change. 
              Through our various programs and initiatives, we address critical needs in healthcare, education, nutrition, and community development, 
              touching the lives of hundreds of families across multiple communities.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              As a federally recognized tax-exempt organization, all donations to EmpowerDreamz are tax-deductible to the fullest extent permitted by law. 
              We are committed to transparency, accountability, and maximizing the impact of every contribution we receive.
            </p>
            <a 
              href="/documents/09_24_25_OH_State_Notice_Empowering_Dreamers_Foundation.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download 501(c)(3) Determination Letter
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button 
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'mission' 
                  ? 'bg-green-600 shadow-2xl text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Our Mission
            </button>
            <button 
              onClick={() => setActiveTab('values')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'values' 
                  ? 'bg-green-600 shadow-2xl text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Our Values
            </button>
            <button 
              onClick={() => setActiveTab('team')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'team' 
                  ? 'bg-green-600 shadow-2xl text-white' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Our Team
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="bg-gray-100 rounded-xl p-6 h-80 flex items-center justify-center mb-6 transition-all duration-500 bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url('${currentContent.image.icon}')` }}
            >
              <div className="absolute inset-0 bg-opacity-40 rounded-xl"></div>
              <div className="text-center relative z-10">
               </div>
            </div>
            <div className="space-y-4">
              {currentContent.bullets.map((bullet, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-green-500 rounded-xl p-8 text-white h-80 flex items-center transition-all duration-500">
            <div>
              <h3 className="text-2xl font-bold mb-4">{currentContent.description}</h3>
              <p className="text-white text-opacity-90 mb-6">
                {currentContent.story}
              </p>
              <div className="flex items-center space-x-4">
                {currentContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>

      {/* Our Impact Section */}
      <CounterSection />

      {/* Join Us Section */}
      <section className="bg-[#f9fafb] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-[#17364b] mb-16">
            <h2 className="text-5xl font-extrabold mb-4">Be Part of Our Story</h2>
            <p className="text-[#17364b] text-lg max-w-2xl mx-auto">
              Every person who joins our mission adds another chapter to our story of community transformation. 
              Discover how you can contribute to creating lasting positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-[#17364b]">
              <div className="w-12 h-12 bg-green-100 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Support Our Work</h3>
              <p className="text-[#17364b] mb-6">
                Your contributions help us expand our programs and reach more families in need across our communities.
              </p>
              <Link href="/donate" className="inline-flex items-center text-white font-medium hover:text-green-200">
                Make a Donation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[#17364b] bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-[#17364b]">
              <div className="w-12 h-12 bg-green-100 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Join Our Team</h3>
              <p className="text-white mb-6">
                Become a volunteer and experience the joy of directly impacting lives while building meaningful connections.
              </p>
              <Link href="/volunteer" className="inline-flex items-center text-white font-medium hover:text-green-200">
                Start Volunteering
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-[#17364b]">
              <div className="w-12 h-12 bg-green-100 bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share Our Mission</h3>
              <p className="text-[#17364b] mb-6">
                Help us reach more people by sharing our story and connecting us with others who share our values.
              </p>
              <Link href="/contact" className="inline-flex items-center text-white font-medium hover:text-green-200">
                Get Connected
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;