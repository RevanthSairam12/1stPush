'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import TestimonialSection from "@/components/TestimonialSection";
import EOExperienceSection from "@/components/EOExperienceSection";
import MembersLoveEOSection from "@/components/MembersLoveEOSection";
import EOByTheNumbers from "@/components/EOByTheNumbers";
import Footer from "@/components/Footer";

export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <VideoSection />
      <ConnectLearnGrowSection />
      <EOByTheNumbers />
      <TestimonialSection />
      <EOExperienceSection />
      <MembersLoveEOSection />
      <Footer />
    </div>
  );
}
