


'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Info, X } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  size?: 'large' | 'regular';
  bio: string;
  linkedin?: string;
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Michael Sudarkasa",
      role: "Chairman",
      image: "/images/m.png",
      size: 'large',
      bio: "Michael Sudarkasa is a visionary leader with over two decades of experience in strategic business development and African entrepreneurship. He has been instrumental in driving economic growth and innovation across multiple sectors.",
      linkedin: "https://linkedin.com/in/michaelsudarkasa"
    },
    {
      name: "Mignonne Karugu",
      role: "Chief Executive Officer",
      image: "/images/k.png",
      bio: "Mignonne Karugu brings transformative leadership to African Business Group, with expertise in strategic planning, corporate governance, and sustainable business practices.",
      linkedin: "https://linkedin.com/in/mignonnekarugu"
    },
    {
      name: "Dr Richard Hayes",
      role: "Senior Advisor & Entrepreneur Development",
      image: "/images/d.png",
      bio: "Dr. Richard Hayes is a renowned expert in entrepreneurial ecosystems, providing critical insights and mentorship to emerging businesses across the African continent.",
      linkedin: "https://linkedin.com/in/richardhayes"
    },
    {
      name: "Ernest Fausther",
      role: "Manager & Senior Advisor",
      image: "/images/h.png",
      bio: "Ernest Fausther specializes in operational excellence and strategic management, helping organizations optimize their processes and achieve sustainable growth.",
      linkedin: "https://linkedin.com/in/ernestfausther"
    }
  ];

  return (
    <div 
      id='team' 
      className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-[#00E5FF]" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0099ff] text-transparent bg-clip-text">
              Our Leadership Team
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the visionaries driving innovation and growth at African Business Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative opacity-0 animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 bg-gray-900 bg-opacity-80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#00E5FF] mb-2">{member.name}</h3>
                    <p className="text-gray-300 mb-4">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedMember(member)}
                  className="absolute top-4 right-4 z-10 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <Info className="w-5 h-5 text-[#00E5FF]" />
                </button>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#00E5FF]/0 group-hover:border-[#00E5FF]/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Custom Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 p-2 rounded-full"
              >
                <X className="w-6 h-6 text-[#00E5FF]" />
              </button>

              <div className="relative h-64 w-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#00E5FF] mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-gray-400 mb-4">
                  {selectedMember.role}
                </p>

                <p className="text-gray-300 mb-6">
                  {selectedMember.bio}
                </p>

                {selectedMember.linkedin && (
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 text-[#00E5FF] rounded-lg transition-all duration-300"
                  >
                    View LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;