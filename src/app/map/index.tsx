



'use client';
import React, { useState } from 'react';
import { ChevronDown, Building2, Globe, Users, Briefcase, LineChart, GraduationCap } from 'lucide-react';

const ContactFormFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      icon: <Building2 className="w-5 h-5" />,
      question: "What services does Africa Business Group offer?",
      answer: "ABG specializes in three key areas: Consulting services for African economic development, Project implementation and management, and Capacity Development programs. We work closely with private sector entities to facilitate sustainable business growth across Africa."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      question: "Where does ABG operate?",
      answer: "Africa Business Group is headquartered in Johannesburg, South Africa, with a strong international presence through our associates in London, New York, Nairobi, Ghana, and Ethiopia. This network allows us to serve clients across Africa and globally."
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "How does ABG support private sector engagement?",
      answer: "We design and implement tailored strategies to facilitate private sector participation in African economic development. This includes market entry assistance, partnership development, investment facilitation, and strategic advisory services."
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      question: "What types of projects does ABG handle?",
      answer: "We manage a diverse portfolio of African economic development projects, focusing on infrastructure development, agriculture, technology, renewable energy, and other key sectors that drive economic growth across the continent."
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      question: "What consulting services do you provide?",
      answer: "Our consulting services include market research and analysis, strategy development, project feasibility studies, investment advisory, and implementation support for businesses looking to expand or establish operations in African markets."
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      question: "What are your capacity development programs?",
      answer: "We offer comprehensive capacity building programs designed to enhance local expertise, including training workshops, skill development programs, and knowledge transfer initiatives tailored to specific industry needs and regional contexts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#00E5FF] text-center mb-4">
          Have any questions?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Find answers to frequently asked questions about Africa Business Group
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-[#00E5FF]">{item.icon}</span>
                  <span className="text-gray-300">{item.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-[#00E5FF] transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-gray-400">
                  <div className="pt-2 pl-9">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl md:text-3xl text-[#00E5FF] mb-8 font-medium">
              Contact Africa Business Group
            </h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#00E5FF] focus:bg-gray-700 focus:ring-1 focus:ring-[#00E5FF] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#00E5FF] focus:bg-gray-700 focus:ring-1 focus:ring-[#00E5FF] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#00E5FF] focus:bg-gray-700 focus:ring-1 focus:ring-[#00E5FF] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#00E5FF] hover:bg-[#00c8e6] text-gray-900 rounded-md transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="h-[300px] md:h-full relative bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14313.200310830187!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1635770000000!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormFAQ;
