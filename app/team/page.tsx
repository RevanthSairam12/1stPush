'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";
import TeamRender from "../team-cmp/TeamRender";

export default function Team() {
  const [showFoundingTeam, setShowFoundingTeam] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Passionate students and alumni driving entrepreneurial excellence at REC
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Users className="w-6 h-6" />
              <span>15+ Active Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with same UI as homepage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button
              variant={!showFoundingTeam ? "default" : "outline"}
              onClick={() => setShowFoundingTeam(false)}
              className="w-full sm:w-auto"
            >
              Current Team
            </Button>
            <Button
              variant={showFoundingTeam ? "default" : "outline"}
              onClick={() => setShowFoundingTeam(true)}
              className="w-full sm:w-auto"
            >
              Founding Team
            </Button>
          </div>

          {/* Team Content */}
          <motion.div
            key={showFoundingTeam ? 'founding' : 'current'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f1f4f9] rounded-lg overflow-hidden"
          >
            <TeamRender TeamContainer={showFoundingTeam ? "FormerTeam" : "CurrentTeam"} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
