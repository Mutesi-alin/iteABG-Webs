




'use client';
import React, { useState } from 'react';
import { ChevronDown, Coffee, Leaf, Clock, ThumbsUp, Coffee as CoffeeIcon, Package } from 'lucide-react';

const ContactFormFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

 const faqData = [
    {
      icon: <Coffee className="w-5 h-5" />,
      question: "What coffee brewing methods do you offer?",
      answer: "We offer various brewing methods including Espresso, Pour Over, French Press, Cold Brew, AeroPress, and Traditional Drip. Each method brings out unique flavors and characteristics of our coffee beans."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      question: "Are your coffee beans ethically sourced?",
      answer: "Yes, all our coffee beans are ethically sourced through direct trade partnerships with farmers. We ensure fair wages and sustainable farming practices across our supply chain."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Do you offer coffee subscriptions?",
      answer: "Yes, we offer flexible subscription plans delivered weekly, bi-weekly, or monthly. You can customize your coffee selection and adjust delivery frequency anytime."
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      question: "What's your most popular coffee blend?",
      answer: "Our Signature House Blend is our most popular option, featuring a balanced mix of Brazilian and Colombian beans with notes of chocolate and caramel."
    },
    {
      icon: <CoffeeIcon className="w-5 h-5" />,
      question: "Do you offer decaf options?",
      answer: "Yes, we offer Swiss Water Process decaf options for most of our popular blends, ensuring great taste without the caffeine."
    },
    {
      icon: <Package className="w-5 h-5" />,
      question: "How should I store my coffee beans?",
      answer: "Store your coffee beans in an airtight container in a cool, dark place. Avoid refrigeration as it can introduce moisture. For best results, use within 30 days of roasting."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-amber-500 text-center mb-4">
          Have any questions?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Find answers to our most frequently asked coffee questions
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="text-gray-300">{item.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
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
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl text-amber-500 mb-8 font-medium">
              Reach out to us for any inquiry
            </h2>
            
            <form  className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Messages"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-amber-500 focus:bg-gray-600 focus:ring-1 focus:ring-amber-500 text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="h-[300px] md:h-full relative bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203640535!2d74.8055!3d34.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzAxLjAiTiA3NMKwNDgnMTkuOCJF!5e0!3m2!1sen!2s!4v1635770000000!5m2!1sen!2s"
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
