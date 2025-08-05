'use client'

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/group/group1.jpg"
          alt="Entrepreneurs Organization Group Photo"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content - Center Aligned */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Entrepreneurs Organization
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light">
            Find your place among the world's leaders
          </p>
        </div>
      </div>

      {/* Language Selector Button - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/95 backdrop-blur-sm border-white/30 text-gray-700 hover:bg-white transition-all duration-300 rounded-md px-3 py-2 text-sm font-medium"
        >
          <Globe className="w-4 h-4 mr-2" />
          English
        </Button>
      </div>
    </section>
  );
};

export default Hero;