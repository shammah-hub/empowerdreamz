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
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/t9.jpg",
      bio: "With over 15 years of experience in humanitarian work, Sarah leads our organization with passion and dedication to creating lasting change.",
      email: "sarah@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Every life we touch is a step towards a better world.",
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      image: "/t1.jpg",
      bio: "Michael ensures our projects run efficiently and effectively, bringing 12 years of project management expertise to our mission.",
      email: "michael@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Excellence in execution creates excellence in impact.",
    },
    {
      name: "Aisha Okonkwo",
      role: "Community Outreach Manager",
      image: "/t2.jpg",
      bio: "Aisha builds bridges between communities and our organization, ensuring local voices guide our initiatives.",
      email: "aisha@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "True change comes from listening to those we serve.",
    },
    {
      name: "David Rodriguez",
      role: "Head of Fundraising",
      image: "/t3.jpg",
      bio: "David's innovative fundraising strategies have helped us secure over $10M in donations to support our critical programs.",
      email: "david@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Generosity multiplied creates miracles.",
    },
    {
      name: "Emily Thompson",
      role: "Program Director",
      image: "/t4.jpg",
      bio: "Emily designs and oversees all our programs, ensuring they meet the highest standards of effectiveness and sustainability.",
      email: "emily@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Sustainable programs create sustainable change.",
    },
    {
      name: "James Okafor",
      role: "Field Coordinator",
      image: "/t5.jpg",
      bio: "James works on the ground with local teams, ensuring our projects deliver real results where they're needed most.",
      email: "james@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "The field is where dreams become reality.",
    },
    {
      name: "Maria Santos",
      role: "Communications Director",
      image: "/tt1.jpg",
      bio: "Maria shares our stories with the world, inspiring others to join our mission and creating awareness about critical issues.",
      email: "maria@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Every story has the power to inspire action.",
    },
    {
      name: "Robert Kim",
      role: "Finance Director",
      image: "/tt2.jpg",
      bio: "Robert ensures financial transparency and accountability, managing our resources to maximize impact for those we serve.",
      email: "robert@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Transparency builds trust, trust enables impact.",
    },
    {
      name: "Fatima Hassan",
      role: "Education Programs Lead",
      image: "/t8.jpg",
      bio: "Fatima develops educational initiatives that empower children and adults with knowledge and skills for a brighter future.",
      email: "fatima@parofund.org",
      linkedin: "#",
      twitter: "#",
      quote: "Education is the foundation of all progress.",
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO - Different Layout */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
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

          {/* Team Preview Images - 4 Column Layout */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { img: "/t5.jpg", name: "Sarah Johnson" },
              { img: "/tt2.jpg", name: "Michael Chen" },
              { img: "/t1.jpg", name: "Aisha Okonkwo" },
              { img: "/t9.jpg", name: "David Rodriguez" }
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
                <div className="text-4xl font-light text-green-600 mb-1">9</div>
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

      {/* Modal for member details */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-light text-gray-900 mb-2">{selectedMember.name}</h3>
              <p className="text-green-600 font-light text-lg mb-6">{selectedMember.role}</p>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic">&quot;{selectedMember.quote}&quot;</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;