"use client"
// components/HeroSection.js
import { useState } from 'react';
import Image from 'next/image';


export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#504030] min-h-screen text-white text-2xl ">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 relative">
        <div className="text-2xl font-bold">Logo</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:underline ">Home</a></li>
          <li><a href="#company" className="hover:underline">Company</a></li>
          <li><a href="#shop" className="hover:underline">Shop</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 w-full bg-[#4b2d1f] relative min-h-[600px] text-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="space-y-4 py-4">
            <li><a href="#home" className="block hover:underline">Home</a></li>
            <li><a href="#company" className="block hover:underline">Company</a></li>
            <li><a href="#shop" className="block hover:underline">Shop</a></li>
            <li><a href="#contact" className="block hover:underline">Contact</a></li>
            <li><a href="#gallery" className="block hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Sign-in Button for Desktop */}
        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Sign in</button>
      </nav>

      {/* Hero Section */}
      <div className=" relative min-h-[600px] flex flex-col md:flex-row items-center md:justify-between px-8 md:px-20 py-16 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-xl text-orange-300 font-semibold mb-2">Enjoy Your coffee before your activity</h2>
          <h1 className="text-6xl font-bold mb-4">High Quality Coffee Maker</h1>
          <p className="text-gray-300 mb-6 text-2xl">
            Boost your productivity and build your mood with a glass of coffee in the morning. It is the best way to start
            your day with coffee. Discover the best coffee flavors you will ever have.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Sign in</button>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image src="/images/coffees.png" alt="Coffee cup with beans" width={500} height={500} className=""/>
        </div>
      </div>
      <section className="flex flex-col items-center px-4 py-8 md:py-16 bg-white">
     
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">Menu</h2>

      
      <p className="text-gray-500  text-xl mb-6">
        Awesome site on the top advertising a business online includes assembling.
       <br/>
        Having the most well-planned
      </p>

     
      <div className="flex space-x-6 text-4xl font-bold">
        <button className="text-gray-700 text-lg md:text-2xl">Coffee</button>
        <button className="text-gray-700 text-lg md:text-2xl">Tea</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-lg md:text-xl">
          Milk
        </button>
        <button className="text-gray-700 text-lg md:text-2xl">Nutes</button>
      </div>
    </section>
    </div>
  );
}
