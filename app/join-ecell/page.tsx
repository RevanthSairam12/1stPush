'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Mail, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function JoinECellPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Clock className="w-4 h-4 mr-2" />
            Registration Status
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join E-Cell REC
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Be part of the entrepreneurial revolution at Raghu Engineering College
          </p>
        </div>
      </section>

      {/* Registration Closed Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center border-2 border-destructive/20 bg-destructive/5">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Registrations Are Currently Closed
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Thank you for your interest in joining E-Cell REC! We're currently not accepting new registrations, 
                but we'll be opening applications soon for the next batch of aspiring entrepreneurs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm">
                    Follow our social media channels and website for announcements about the next registration period.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Get Notified</h3>
                  <p className="text-muted-foreground text-sm">
                    Subscribe to our newsletter to be the first to know when registrations open again.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Past Events
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Can Do Now */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Can Do Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While you wait for registrations to open, here are some ways to stay connected and prepare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow Our Journey</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest activities, events, and success stories through our social media channels.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-innovation/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-innovation" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prepare Yourself</h3>
              <p className="text-muted-foreground mb-4">
                Explore our resources section to learn about entrepreneurship, startup fundamentals, and business planning.
              </p>
              <Link href="/resources">
                <Button variant="outline" size="sm">View Resources</Button>
              </Link>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Notified</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to receive updates about registration openings and upcoming events.
              </p>
              <Button variant="outline" size="sm">Subscribe</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about E-Cell REC or future registration opportunities, 
            feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-hero-gradient hover:opacity-90">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Link href="/team">
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
