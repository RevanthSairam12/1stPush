'use client'

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
      {/* Blue Background with rounded corners */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left Side - Text Content and Bottom Image */}
            <div className="text-white space-y-8">
              {/* Main Text Block */}
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed font-normal">
                  Welcome to EO, where successful entrepreneurs connect, learn and grow together. Join a
                  global community by entrepreneurs, for entrepreneurs, designed to help business owners like
                  you, who are taking their leadership and companies to the next level. Discover the power of
                  shared experiences, world-class resources, and a network that spans the globe.
                </p>
              </div>

              {/* Bottom Left Image with decorative element */}
              <div className="relative mt-8">
                <div className="relative w-full max-w-sm h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/group/group2.jpg"
                    alt="EO Members celebrating outdoors"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative yellow diamond */}
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-400 rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Right Side - Image and Text */}
            <div className="space-y-8">
              {/* Top Right Image */}
              <div className="relative">
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/group/group3.jpg"
                    alt="EO Members networking and connecting"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative yellow diamond */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 rotate-45 rounded-sm"></div>
              </div>

              {/* Bottom Right Text */}
              <div className="text-white">
                <p className="text-base md:text-lg leading-relaxed font-normal">
                  We focus support on the whole entrepreneur—beyond just the enterprise—
                  because business and life are not separate first things. And we believe that magic
                  comes from the continuous sharing of one's journey and the collective wisdom
                  of learning from peers.
                </p>
              </div>
            </div>
          </div>

          {/* Language Selector - Bottom Right */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2 text-sm font-medium text-gray-800 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
