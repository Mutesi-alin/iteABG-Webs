'use client';

import React from 'react';

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

interface StarRatingProps {
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Choosing this estate services was the best descision I ever made. Their demanstrated exceptional professionalism and expertise. I highly recpmmend their services to anyone.",
      author: "Louse Hadid",
      rating: 5,
    },
    {
      text: "Choosing this estate services was the best descision I ever made. Their demanstrated exceptional professionalism and expertise. I highly recpmmend their services to anyone.",
      author: "Louse Hadid",
      rating: 5,
    }
  ];

  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/lady.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-4">
                  {testimonial.text}
                </p>
                <h3 className="font-bold text-lg text-gray-900">
                  {testimonial.author}
                </h3>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Contact Us
        </h2>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Ac mi cras luctus lectus adipiscing massa libero. Turpis donec arcu sit et donec egestas massa enim. Platea.
        </p>
      </div>
    </section>
    </div>
  );
};

export default TestimonialsSection;