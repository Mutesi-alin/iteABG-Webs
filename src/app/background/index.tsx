'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <div>
    <div className="relative min-h-[600px] flex items-center justify-center ">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/coffee b.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
          Get a chance to have an amazing morning
        </h1>
        
        <p className="text-gray-200 text-xl sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
          Cursus Quisque Lobortis, Eu Eget Felis, Viverra Scelerisque Lacus In Consectetur Morbi
          Donec Risus Felis, Quis Elit Lorem. Sit Ex Eget Odio Element
        </p>

        <button 
          onClick={() => console.log('Order clicked')}
          className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 
                     text-white rounded-md text-lg font-medium transition-colors 
                     duration-200 transform hover:scale-105"
        >
          Order now
        </button>
      </div>
    </div>
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
        Our happy customers
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Awesome site on the top advertising a business online includes assembling
        <br className="hidden md:block" />
        Having the most well-planned
      </p>
    </div>
    </div>
  );
};

export default HeroSection;