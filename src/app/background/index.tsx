

// 'use client';
// import React from 'react';

// const AboutUsSection = () => {
//   return (
//     <div id='about' className="w-full">

//       <div className="relative w-full">
        
//         <div 
//           className="relative h-[400px] bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/images/backk.png')" }}
//         >
          
//           <div className="absolute bottom-0 left-0 right-0">
//             <svg 
//               viewBox="0 0 1920 100" 
//               className="w-full h-[100px] fill-white" 
//               preserveAspectRatio="none"
//             >
//               <path d="M0,0 C300,90 900,80 1920,0 L1920,100 L0,100 Z" />
//             </svg>
//           </div>

          
//           <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//             <h1 className="text-4xl font-bold text-black mb-6">About Us</h1>
//             <p className="text-gray-800 text-lg max-w-3xl text-center px-4">
//               Discover Wanderlust – where every cup is an adventure. We source and roast the finest beans, delivering 
//               extraordinary flavor to your home. And with our partnership with EcoGoji, every bag sold plants a tree. Savor the taste, 
//               embrace the journey, and make a difference—one cuppa at a time.
//             </p>
//           </div>
//         </div>
//       </div>

    
//       <div className="max-w-6xl mx-auto py-20 px-4">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
          
//           <div className="relative">
//             <div className="rounded-lg overflow-hidden shadow-xl relative">
//               <img
//              src="/images/ground.jpeg"
// alt="Coffee cup with magical tree"
//                 className="w-full h-90"
//               />
              
              
//               <div className="absolute top-0 -right-8 w-20 h-20">
//                 <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
//               </div>
//               <div className="absolute -bottom-4 left-10 w-16 h-16">
//                 <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
//               </div>
//             </div>
//           </div>

        
//           <div className="space-y-6">
//             <div className="uppercase text-black tracking-wider text-sm font-medium">
//               UNIQUE FLAVORS, AROMAS, AND TASTE
//             </div>
//             <h2 className="text-4xl font-bold">
//               Our vision <span className="">Story</span>
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               By focusing on specialty grade, single-origin coffees, we ensure that each cup 
//               is a unique and an extraordinary experience. This allows you to appreciate the 
//               craftsmanship, attention to detail, and rich diversity of the specialty coffee 
//               world. focusing on specialty grade, single-origin coffees, we ensure that each 
//               cup is a unique and an extraordinary experience. This allows you to appreciate 
//               the craftsmanship, attention to detail, and rich diversity of the specialty coffee 
//               world.
//             </p>
//             <button className=" bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
//               Explore Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsSection;


'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div id='about' className="w-full">
      <div className="relative w-full">
        {/* Hero Section with Background */}
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/backk.png')"
          }}
        >
          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1920 100"
              className="w-full h-[100px] fill-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C300,90 900,80 1920,0 L1920,100 L0,100 Z" />
            </svg>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-4xl font-bold text-black mb-6">About Us</h1>
            <p className="text-gray-800 text-lg max-w-3xl text-center px-4">
              Discover Bashana companies – where every cup is an adventure. We source and roast the finest beans, delivering 
              extraordinary flavor to your home. And with our partnership with EcoGoji, every bag sold plants a tree. Savor the taste, 
              embrace the journey, and make a difference—one cuppa at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              {/* Replaced img with Next.js Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/ground.jpeg"
                  alt="Coffee cup with magical tree"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative Blobs */}
              <div className="absolute top-0 -right-8 w-20 h-20">
                <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
              </div>
              <div className="absolute -bottom-4 left-10 w-16 h-16">
                <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="uppercase text-black tracking-wider text-sm font-medium">
              UNIQUE FLAVORS, AROMAS, AND TASTE
            </div>
            <h2 className="text-4xl font-bold">
              Our vision <span className="">Story</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By focusing on specialty grade, single-origin coffees, we ensure that each cup 
              is a unique and an extraordinary experience. This allows you to appreciate the 
              craftsmanship, attention to detail, and rich diversity of the specialty coffee 
              world. focusing on specialty grade, single-origin coffees, we ensure that each 
              cup is a unique and an extraordinary experience. This allows you to appreciate 
              the craftsmanship, attention to detail, and rich diversity of the specialty coffee 
              world.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;