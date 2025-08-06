'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  // Current Team Data - Keeping your existing team members
  const currentTeam = [
    {
      name: "Sriram Vishal Epu",
      role: "President",
      subtitle: "Leading the entrepreneurial revolution at REC",
      image: "/vishal.jpg"
    },
    {
      name: "I.Sree Venkat Nadh",
      role: "Vice President",
      subtitle: "Driving strategic initiatives and startup culture",
      image: "/venky.jpg"
    },
    {
      name: "Aamuktha Malyadha",
      role: "Vice President",
      subtitle: "Empowering students to transform ideas into ventures",
      image: "/aamukta.jpg"
    },
    {
      name: "G.V Santosh",
      role: "Startup Assistance & Program Head",
      subtitle: "Guiding startups from ideation to execution",
      image: "/santosh.jpg"
    },
    {
      name: "Tappiti Ganesh",
      role: "Startup Assistance & Program Head",
      subtitle: "Building bridges between innovation and implementation",
      image: "/ganesh.jpg"
    },
    {
      name: "Ponugupati Sai Pawan",
      role: "Startup Assistance & Program Head",
      subtitle: "Nurturing entrepreneurial talent and innovation",
      image: "/Pawan2.jpg"
    },
    {
      name: "Ujjesha Nitya Routhu",
      role: "Alumni & Community Relations Head",
      subtitle: "Connecting past, present, and future entrepreneurs",
      image: "/nitya.jpg"
    },
    {
      name: "Jeevan Sai Eddipilli",
      role: "Web Tech Head",
      subtitle: "Building digital solutions for entrepreneurs",
      image: "/EJeevan.jpg"
    },
    {
      name: "Revanth Sai Ram",
      role: "Web Tech Head",
      subtitle: "Creating innovative web experiences",
      image: "/Revanth.jpg"
    },
    {
      name: "Sai Sashank Nath",
      role: "Designing & Branding Head",
      subtitle: "Crafting visual identities that inspire",
      image: "/sashank.jpg"
    },
    {
      name: "Vineela Vadrevu",
      role: "Marketing & Outreach Head",
      subtitle: "Amplifying entrepreneurial voices",
      image: "/vineela.jpg"
    },
    {
      name: "Sagi Sanvitha",
      role: "Marketing & Outreach Head",
      subtitle: "Spreading the entrepreneurial spirit",
      image: "/sanvitha.jpg"
    },
    {
      name: "Mohammad Shahidulla",
      role: "Events & Management Head",
      subtitle: "Orchestrating memorable events",
      image: "/shahid.jpg"
    },
    {
      name: "Shazia Sadaf",
      role: "Events & Management Head",
      subtitle: "Creating impactful experiences",
      image: "/shazia.jpg"
    },
    {
      name: "Enduga Ramya",
      role: "Events & Management Head",
      subtitle: "Bringing creative vision to life",
      image: "/ramya.jpg"
    },
    {
      name: "Jeevan Kurmadasu",
      role: "Events & Management Head",
      subtitle: "Ensuring seamless execution",
      image: "/KJeevan.jpg"
    },
    {
      name: "Renitha Ashwa",
      role: "Club Chronicles Head",
      subtitle: "Documenting the entrepreneurial journey",
      image: "/renitha.jpeg"
    },
    {
      name: "Shaik Karishma",
      role: "Club Chronicles Head",
      subtitle: "Capturing moments that inspire future entrepreneurs",
      image: "/karishma.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Meet Our Team Section - Exact same design as Global Board */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">

          {/* Header - Exact same styling */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
          </div>

          {/* Team Members Grid - 4 columns layout exactly as shown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentTeam.map((member, index) => (
              <div key={member.name} className="text-center">
                {/* Profile Image with rounded corners - exact same styling */}
                <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={index < 8}
                  />
                </div>

                {/* Member Info - exact same styling */}
                <div className="text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 text-sm font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {member.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}