"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Heart, Quote, Award, Users, Target, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8 border border-green-100">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Meet Our Team</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Passionate People,
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Powerful Impact
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Behind every project is a dedicated team of professionals committed to creating meaningful change in communities worldwide.
            </p>
          </div>

          {/* Team Preview Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { img: "/t5.jpg", name: "Sarah Johnson", role: "Executive Director" },
              { img: "/tt2.jpg", name: "Michael Chen", role: "Operations Director" },
              { img: "/t1.jpg", name: "Aisha Okonkwo", role: "Outreach Manager" },
              { img: "/t9.jpg", name: "David Rodriguez", role: "Fundraising Head" }
            ].map((member, i) => (
              <div key={i} className="group relative">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-green-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-sm text-gray-600">Communities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">160+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Stats Section - Removed since mini stats are now in hero */}

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
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
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-300 font-semibold">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                  
                  {/* <div className="flex items-center space-x-3 mb-4">
                    <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-green-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={member.linkedin} className="text-gray-500 hover:text-green-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-500 hover:text-green-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div> */}

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className="w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors font-semibold flex items-center justify-center space-x-2"
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We lead with empathy and understanding, ensuring every action we take is rooted in genuine care for those we serve.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Transparency and accountability guide our operations, building trust with donors, partners, and communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, maximizing impact and creating sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1a344b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who want to make a difference. Explore our current openings and become part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-[#1a344b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                View Open Positions
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1a344b] transition-all">
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
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
              <p className="text-green-600 font-semibold text-lg mb-6">{selectedMember.role}</p>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <Quote className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic">&quot;{selectedMember.quote}&quot;</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedMember.bio}</p>

              

              {/* <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a 
                  href={selectedMember.linkedin}
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={selectedMember.twitter}
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;