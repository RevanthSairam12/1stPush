'use client'

import Image from "next/image";
import { useState } from "react";

const MembersLoveEOSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Being a member of this global EO community is such a special gift! We come from every industry, every culture, every age group, and every corner of the world, and yet we're all entrepreneurs. It's this mix of diverse perspectives and shared passions that makes EO membership so enriching and magical.",
      name: "Abeer Qumsieh",
      location: "EO Jordan",
      image: "/group/group2.jpg",
      circleColor: "border-pink-500"
    },
    {
      text: "It is said, 'it's lonely at the top' and EO provided a platform where vulnerability met experience. Through forums and collective learning, I found a structured space to address challenges, gaining insights crucial for personal and business growth.",
      name: "Vipul Jain",
      location: "EO Gurgaon",
      image: "/group/group4.jpg",
      circleColor: "border-teal-500"
    }
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Members Love EO
        </h2>

        {/* Testimonial Cards Container */}
        <div className="relative">
          
          {/* First Testimonial Card */}
          <div className={`transition-all duration-500 ${currentTestimonial === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
            <div className="relative mb-8">
              {/* Blue geometric background shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background blue rectangles with layered effect */}
                <div className="relative w-full max-w-4xl h-64">
                  {/* Back blue layer */}
                  <div className="absolute inset-0 bg-blue-600 transform rotate-2 translate-x-4 translate-y-4 rounded-lg shadow-lg"></div>
                  {/* Middle blue layer */}
                  <div className="absolute inset-0 bg-blue-500 transform rotate-1 translate-x-2 translate-y-2 rounded-lg shadow-lg"></div>
                  {/* Front dark navy layer */}
                  <div className="absolute inset-0 bg-slate-900 rounded-lg shadow-2xl"></div>
                </div>
              </div>

              {/* Content container */}
              <div className="relative z-10 bg-slate-900 rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  
                  {/* Testimonial text */}
                  <div className="lg:col-span-3">
                    <p className="text-white text-lg leading-relaxed mb-6 font-light">
                      {testimonials[0].text}
                    </p>
                    
                    <div className="text-white">
                      <span className="font-bold">{testimonials[0].name}</span>
                      <span className="font-light">, {testimonials[0].location}</span>
                    </div>
                  </div>

                  {/* Profile image with decorative circles */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <div className="relative w-32 h-32">
                      {/* Outer pink circle */}
                      <div className={`absolute inset-0 w-32 h-32 rounded-full border-4 ${testimonials[0].circleColor}`}></div>
                      
                      {/* Inner pink circle */}
                      <div className={`absolute inset-2 w-28 h-28 rounded-full border-3 ${testimonials[0].circleColor}`}></div>
                      
                      {/* Profile image */}
                      <div className="absolute inset-4 w-24 h-24 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[0].image}
                          alt={testimonials[0].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial Card */}
          <div className={`transition-all duration-500 ${currentTestimonial === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10 absolute top-0 left-0 w-full'}`}>
            <div className="relative mb-8">
              {/* Blue geometric background shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background blue rectangles with layered effect */}
                <div className="relative w-full max-w-4xl h-64">
                  {/* Back blue layer */}
                  <div className="absolute inset-0 bg-blue-600 transform rotate-2 translate-x-4 translate-y-4 rounded-lg shadow-lg"></div>
                  {/* Middle blue layer */}
                  <div className="absolute inset-0 bg-blue-500 transform rotate-1 translate-x-2 translate-y-2 rounded-lg shadow-lg"></div>
                  {/* Front dark navy layer */}
                  <div className="absolute inset-0 bg-slate-900 rounded-lg shadow-2xl"></div>
                </div>
              </div>

              {/* Content container */}
              <div className="relative z-10 bg-slate-900 rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  
                  {/* Profile image with decorative circles - LEFT SIDE */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start order-2 lg:order-1">
                    <div className="relative w-32 h-32">
                      {/* Outer teal circle */}
                      <div className={`absolute inset-0 w-32 h-32 rounded-full border-4 ${testimonials[1].circleColor}`}></div>
                      
                      {/* Inner teal circle */}
                      <div className={`absolute inset-2 w-28 h-28 rounded-full border-3 ${testimonials[1].circleColor}`}></div>
                      
                      {/* Profile image */}
                      <div className="absolute inset-4 w-24 h-24 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[1].image}
                          alt={testimonials[1].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text - RIGHT SIDE */}
                  <div className="lg:col-span-3 order-1 lg:order-2">
                    <p className="text-white text-lg leading-relaxed mb-6 font-light">
                      {testimonials[1].text}
                    </p>
                    
                    <div className="text-white">
                      <span className="font-bold">{testimonials[1].name}</span>
                      <span className="font-light">, {testimonials[1].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersLoveEOSection;
