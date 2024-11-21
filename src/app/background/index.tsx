

import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div id='about' className="w-full max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-teal-700 mb-16 text-center">About Us</h1>

      <div className="flex flex-wrap gap-6">
       
        <div className="relative w-full md:w-[45%]">

          <div className="relative w-full h-[300px] mb-6">
            <Image
              src="/images/team.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 668px) 100vw, 45vw"
            />
          </div>
          
         
          <div className="relative w-[80%] h-[200px] ml-auto -mt-12">
            <Image
              src="/images/const1.jpeg.jpeg"
              alt="Modern building"
              fill
              className="object-cover rounded-2xl shadow-lg"
              sizes="(max-width: 768px) 80vw, 35vw"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-3xl p-9 border border-teal-600 shadow-sm">
            <p className="text-gray-800 mb-6">
              The Africa Business Group (<span className="font-semibold">ABG</span>) is a growing company that specialises in designing, 
              promoting, facilitating and implementing African economic development projects - with a 
              particular focus on supporting private sector engagement.
            </p>
            
            <p className="text-gray-800 mb-6">
              The company focuses on three key areas: {' '}
              <span className="text-teal-600">Consulting</span>, {' '}
              <span className="text-teal-600">Projects</span>, and {' '}
              <span className="text-teal-600">Capacity Development</span>.
            </p>
            
            <p className="text-gray-800">
              Africa Business Group is based in Johannesburg, South Africa and has 
              associates in London, New York, Nairobi, Ghana and Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;