"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Heart, Quote, Award, Target, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  twitter: string;
  quote: string;
}

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Felix Abraham",
      role: "Executive Director",
      image: "/f.jpg",
      bio: "With over 6 years of experience in humanitarian work, Mr. Abraham leads our organization with passion and dedication to creating lasting change.",
      email: "",
      linkedin: "#",
      twitter: "#",
      quote: "Every life we touch is a step towards a better world.",
    },
    {
      name: "Eugene Oyango",
      role: "Program Director",
      image: "/ff.jpg",
      bio: "Mr. Eugene shapes our program vision and execution, leveraging 4 years of experience to maximize outcomes and drive organizational growth.",
      email: "",
      linkedin: "#",
      twitter: "#",
      quote: "Excellence in execution creates excellence in impact.",
    },
    {
      name: "Ifeayin Orji",
      role: "Head of Fundraising",
      image: "/fff.jpg",
      bio: "Mr. Ifeayin secures funding through strategic partnerships and donor engagement, empowering our organization to expand its impact.",
      email: "",
      linkedin: "#",
      twitter: "#",
      quote: "True change comes from listening to those we serve.",
    },
  ];

  return (
    <div className="bg-[#fafffa]">
      {/* HERO - Different Layout */}
      <section className="relative pb-20 px-6 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(22 163 74) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Content */}
          <div className="text-center mb-16">
            <span className="text-sm text-gray-500 uppercase tracking-wider">Our Team</span>
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mt-4 mb-6 leading-tight">
              Passionate people,
              <br />
              <span className="font-semibold text-green-600">powerful impact</span>
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Behind every project is a dedicated team of professionals committed to creating meaningful change in communities worldwide.
            </p>
          </div>

          {/* Team Preview Images - 3 Column Layout Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {[
              { img: "/f.jpg", name: "Felix Abraham" },
              { img: "/ff.jpg", name: "Eugene Oyango" },
              { img: "/fff.jpg", name: "Ifeayin Orji" },
            ].map((member, i) => (
              <div key={i} className="group relative">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-light">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar - Centered */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-green-600 mb-1">3</div>
                <div className="text-sm text-gray-500">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-light text-green-600 mb-1">25+</div>
                <div className="text-sm text-gray-500">Active Projects</div>
              </div>
              <div>
                <div className="text-4xl font-light text-green-600 mb-1">150K+</div>
                <div className="text-sm text-gray-500">Lives Impacted</div>
              </div>
            </div>
          </div>

          {/* CTA Button - Centered */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300">
                Join Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - Minimalist */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <span className="text-sm text-gray-500 tracking-wider uppercase">Our Core Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Principles that <span className="font-semibold text-green-600">guide us</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-500 leading-relaxed">
                We lead with empathy and understanding, ensuring every action we take is rooted in genuine care for those we serve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-500 leading-relaxed">
                Transparency and accountability guide our operations, building trust with donors, partners, and communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-500 leading-relaxed">
                We strive for the highest standards in everything we do, maximizing impact and creating sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GRID - Minimalist */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <span className="text-sm text-gray-500 tracking-wider uppercase">Meet The Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Our leadership <span className="font-semibold text-green-600">team</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Passionate professionals dedicated to making a difference
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative">
                  <div className="relative w-full h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-light mb-1">{member.name}</h3>
                    <p className="text-green-300 font-light">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className="w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors font-light flex items-center justify-center space-x-2"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimalist */}
      <section className="py-32 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Want to join our <span className="font-semibold">team?</span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            We&apos;re always looking for passionate individuals who want to make a difference. Explore our current openings and become part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300">
                View Open Positions
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

     {/* Modal for member details - No Scrollbar, Larger Image */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Even Larger Image Section */}
            <div className="relative h-[500px] w-full">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-t-2xl"></div>
              
              {/* Name and Role Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-light mb-2">{selectedMember.name}</h3>
                <p className="text-green-300 font-light text-xl">{selectedMember.role}</p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-colors text-2xl leading-none font-light"
              >
                ×
              </button>
            </div>

            {/* Compact Content Section */}
            <div className="p-8">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic leading-relaxed">&quot;{selectedMember.quote}&quot;</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;