'use client'

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Clock, Star, Trophy, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "../BlurFadeCollage";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from '../pages/EventsVideo';


import Image from "next/image";

export default function PastEventsPage() {
  const highlights = [
    {
      title: "500+",
      subtitle: "Students Reached",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "50+",
      subtitle: "Events Conducted",
      icon: Calendar,
      color: "text-innovation"
    },
    {
      title: "25+",
      subtitle: "Startups Mentored",
      icon: Target,
      color: "text-success"
    },
    {
      title: "10+",
      subtitle: "Awards Won",
      icon: Trophy,
      color: "text-destructive"
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Past Events & Highlights
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Celebrating our journey of fostering entrepreneurship and innovation at REC
          </p>
        </div>
      </section>

      {/* Highlights Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase our commitment to building the entrepreneurial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${highlight.color.replace('text-', 'bg-')}/10`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{highlight.title}</div>
                <div className="text-sm text-muted-foreground">{highlight.subtitle}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <div className="mb-20 sm:mb-64 m-2 sm:m-44" id="events">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Past Events
          </h2>
        </div>
        <EventsVideo />
        <div className="flex justify-center p-4 sm:p-10" onClick={() => window.location.href = "https://esummit-rec.vercel.app/"}>
          <RainbowButton>Visit E-SUMMIT&apos;25 site</RainbowButton>
        </div>
      </div>

      {/* Highlights */}
      <div className="m-2 sm:m-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Highlights
          </h2>
        </div>
        <BlurFade />

      </div>



      <Footer />
    </div>
  );
}
