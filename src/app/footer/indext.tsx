// 'use client';
// import React from 'react';
// import { Phone, Mail } from 'lucide-react';

// const DarkFooter = () => {
//   return (
//     <footer id= 'contacts' className="bg-black text-gray-400 py-8">
//       <div className="max-w-6xl mx-auto px-4">
       
//         <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        
//           <div className="max-w-xs">
//             <div className="mb-6">
//               <h2 className="text-white text-xl mb-1">Your Logo</h2>
//               <p className="text-sm text-gray-400">Your Tagline Here</p>
//             </div>
            
//             <div className="mb-6">
//               <h3 className=" text-[#00E5FF] mb-2">About Us</h3>
//               <p className="text-sm">We want to help bring talented students and unique startups together</p>
//             </div>
            
//             <div>
//               <h3 className=" text-[#00E5FF] mb-2">Contact Us</h3>
//               <div className="space-y-1 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Phone className="w-4 h-4" />
//                   <span>+91 9999 999 999</span>
//                 </div>
//                 <div>
//                   <span>your.email@.com</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-16">
          
//             <div>
//               <h3 className=" text-[#00E5FF] mb-4">Information</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500">About Us</a></li>
//                 <li><a href="#" className="hover:text-orange-500">More Search</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Blog</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Testimonials</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Events</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className=" text-[#00E5FF] mb-4">Helpful Links</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500">Services</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Supports</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Terms & Condition</a></li>
//                 <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>

//           <div>
//             <h3 className=" text-[#00E5FF] mb-4">Subscribe More Info</h3>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="px-3 py-1 bg-white text-black rounded"
//               />
//               <button 
//                 type="button" 
//                 className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
// <div className="pt-4 border-t border-gray-800">
//           <div className="flex justify-center mb-4">
//             <div className="flex gap-3">
//               {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center"
//                 >
//                   <span className="w-4 h-4 bg-white rounded-full"></span>
//                 </a>
//               ))}
//             </div>
//           </div>
//           <p className="text-center text-sm">
//             2023 © company Ltd. All Right reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default DarkFooter;




'use client';
import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const DarkFooter = () => {
  return (
    <footer id='contacts' className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        
          <div className="max-w-xs">
            <div className="mb-6">
              <h2 className="text-white text-xl mb-1">Your Logo</h2>
              <p className="text-sm text-gray-400">African Business Group</p>
            </div>
            
            <div className="mb-6">
              <h3 className=" text-[#00E5FF] mb-2">About Us</h3>
              <p className="text-sm">We  specialize in designing promiting,facilitating and implementing , african economic development Projects</p>
            </div>
            
            <div>
              <h3 className=" text-[#00E5FF] mb-2">Contact Us</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+2711 463 7602</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@abghq.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-16">
          
            <div>
              <h3 className=" text-[#00E5FF] mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">More Search</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Testimonials</a></li>
                <li><a href="#" className="hover:text-orange-500">Events</a></li>
              </ul>
            </div>

            <div>
              <h3 className=" text-[#00E5FF] mb-4">Helpful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Services</a></li>
                <li><a href="#" className="hover:text-orange-500">Supports</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className=" text-[#00E5FF] mb-4">Subscribe More Info</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-3 py-1 bg-white text-black rounded"
              />
              <button 
                type="button" 
                className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800">
          <div className="flex justify-center mb-4">
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: "text-blue-600" },
                { Icon: Twitter, color: "text-sky-400" },
                { Icon: Instagram, color: "text-pink-500" },
                { Icon: Linkedin, color: "text-blue-700" }
              ].map(({ Icon, color }) => (
                <a
                  key={Icon.name}
                  href="#"
                  className={` text-[#00E5FF] rounded-full w-9 h-8 flex items-center justify-center hover:${color} transition-colors`}
                >
                  <Icon className="w-9 h-9  text-[#00E5FF]" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-sm">
            2014 © Africa Bussiness Group. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DarkFooter;