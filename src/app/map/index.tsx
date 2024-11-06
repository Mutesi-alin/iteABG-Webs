"use client"; // Add this line at the top

import React from 'react';

const ContactFormMap = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white">
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
            Reach out to us for any inquiry
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-80 px-4 py-3 rounded-md bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-gray-600 placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-80 px-4 py-3 rounded-md bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-gray-600 placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <textarea
                placeholder="Messages"
                rows={4}
                className="w-80 px-4 py-3 rounded-md bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-gray-600 placeholder-gray-400"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-80 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors duration-300 font-medium"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="h-[300px] md:h-full relative bg-amber-500 rounded-md overflow-hidden">
          
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
    
<footer className="bg-gray-900 text-gray-300 py-16">
    <div className="container mx-auto px-4">
     
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready To Work With Us?</h2>
            <p className="text-lg mb-8">Experience top-notch customer and let us guide you in your property journey</p>
        </div>

        <div className="w-full h-px bg-white my-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <p className="text-gray-400 max-w-2xl mb-12">
                Cursus Quisque Lobortis, Eu Eget Felis, Viverra Scelerisque Lacus In Consectetur Morbi Donec Risus Felis, Quis Elit Lorem. Sit Ex Eget Odio Element
            </p>
        </div>
           
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Tweet us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
                </ul>
            </div>

            
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Become Teachers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">All in One</a></li>
                </ul>
            </div>

           
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="tel:03450554132" className="hover:text-white transition-colors">03450554132</a>
                    </li>
                    <li>
                        <a href="mailto:aneelaislam7@gmail.com" className="hover:text-white transition-colors">aneelaislam7@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </div>
  );
};

export default ContactFormMap;
