



'use client'

import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, MapPin, Globe, Zap, Menu, X } from 'lucide-react';
import { Inter, Montserrat, Roboto_Slab } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

const backgroundImages = [
  '/images/The Smartest Dividend Stock to Buy With $20 Right Now - The Motley Fool.jpeg',
  '/images/Design of a shopping complex _ Polygonal shape.jpeg',
  '/images/Flipped learning for talent development_ Lessons from the college classroom.jpeg',
  '/This Renewable Energy Stock Sees High-Powered Dividend Growth Ahead _ The Motley Fool.jpeg'
];

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Team',  'Contacts', 'Projects'];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageRotationInterval);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${inter.className}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-white/30 z-50 transition-all duration-200" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated Background Image Overlay */}
      {backgroundImages.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100 scale-100 brightness-50 saturate-150' 
              : 'opacity-0 scale-105 brightness-25 saturate-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Background ${index + 1}`} 
            className="w-full h-full object-cover transition-all duration-[1500ms] transform" 
            style={{
              filter: 'grayscale(20%) contrast(120%)',
              transformOrigin: 'center center'
            }}
          />
        </div>
      ))}

      <nav className="sticky top-0 z-40 bg-black/10 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/log.png" 
              alt="Logo" 
              className="h-20 w-20 rounded-full ring-4 ring-white/30 shadow-lg transform transition 
              hover:rotate-6 hover:scale-110 hover:shadow-2xl object-cover"
            />
            <span className={`text-1xl font-bold tracking-wide text-cyan-400 ${montserrat.className}`}>
              Africa Business Group
            </span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white/70 hover:text-cyan-400 transition-colors uppercase text-xs font-medium tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-50 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  onClick={toggleMobileMenu}
                  className="text-white/70 hover:text-cyan-400 transition-colors uppercase text-xl font-medium tracking-widest"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={toggleMobileMenu} 
                className="absolute top-6 right-6 text-white hover:text-cyan-400"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}
      </nav>

    
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="relative max-w-4xl mx-auto text-center px-4 z-30">
          <div className="space-y-8 transform transition-all duration-500 hover:scale-[1.01]">
            <h1 className={`text-5xl md:text-7xl font-black text-cyan-400 ${robotoSlab.className}`}>
              Africa Business Group
            </h1>
            
            <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic tracking-wide ${montserrat.className}`}>
              Expanding Private Sector Participation In Africa's Development Agenda
            </p>

            <div className="flex justify-center space-x-8 py-6">
              {[
                { Icon: MapPin, label: "Strategic Locations" },
                { Icon: Globe, label: "Global Network" },
                { Icon: Zap, label: "Fast Growth" }
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center space-y-2 text-cyan-400 hover:text-white transition-all group">
                  <Icon size={40} strokeWidth={1.5} className="group-hover:scale-110" />
                  <span className="text-xs uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-10 py-6">
              {[
                { Icon: Twitter, color: "hover:text-sky-400" },
                { Icon: Facebook, color: "hover:text-blue-600" },
                { Icon: Linkedin, color: "hover:text-blue-800" }
              ].map(({ Icon, color }) => (
                <a 
                  key={color} 
                  href="#" 
                  className={`text-white/70 ${color} transition-all duration-300 transform hover:-translate-y-2 hover:scale-125`}
                >
                  <Icon size={56} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <button className="bg-cyan-600 text-white px-12 py-4 rounded-full hover:bg-cyan-700 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-110 text-lg font-bold tracking-wider">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;