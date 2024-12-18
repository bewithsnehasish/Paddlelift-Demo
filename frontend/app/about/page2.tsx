"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { TeamMemberCard } from "@/components/ui/GradientCard";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Co-founder",
    imageUrl: "https://picsum.photos/200/300?grayscale&random=1",
    description:
      "Driving the company vision and strategy with a focus on growth and innovation.",
    about:
      "The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    name: "Michael Chen",
    position: "CTO & Co-founder",
    imageUrl: "https://picsum.photos/200/300?grayscale&random=2",
    description:
      "Leading our technical teams and ensuring the implementation of cutting-edge technologies.",
    about:
      "The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.",
    socials: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
    },
  },
  {
    name: "Emily Rodriguez",
    position: "COO & Co-founder",
    imageUrl: "https://picsum.photos/200/300?grayscale&random=3",
    description:
      "Overseeing daily operations and ensuring smooth collaboration across all teams.",
    about:
      "The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.",
    socials: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
    },
  },
  {
    name: "Sneha Singh",
    position: "COO & Co-founder",
    imageUrl: "https://picsum.photos/200/300?grayscale&random=3",
    description:
      "Overseeing daily operations and ensuring smooth collaboration across all teams.",
    about:
      "The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.The team at JobHub has been instrumental in our growth. Their innovative solutions have streamlined our hiring process.",
    socials: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
  },
];

const services = [
  {
    title: "Recruitment",
    description: "Find the perfect talent for your organization.",
  },

  {
    title: "Staffing",
    description: "Flexible staffing solutions for your business needs.",
  },
  {
    title: "HR Dynamics",
    description: "Streamline your HR processes and operations.",
  },
  {
    title: "Funding Gateway",
    description: "Connect with investors and secure funding.",
  },
];

export default function AboutPage() {
  return (
    <AnimatedGradient>
      {/* Header Section */}
      <section className="relative py-20 text-center">
        <BackgroundBeams />
        <div className="relative z-10 container mx-auto px-8">
          <h1 className="text-5xl font-extrabold mb-8 bg-clip-text text-white">
            About <span className="text-red-600">PaddleLift</span>
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300 mb-8">
            Transforming HR & Recruitment through innovation, collaboration, and
            global expertise.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Learn More About Our Story
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800/50 border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-400">
                Streamline hiring, tackle bottlenecks, and offer global
                expertise with tailored strategies.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-400">
                Be the bridge between opportunities and talent globally, setting
                new HR standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-20">
            Founders & Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                description={member.description}
                socials={member.socials}
                about={member.about}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-gray-800/50 border-0 transform transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section 
      <section className="relative py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex items-center mb-8">
                <div className="w-24 text-right mr-4">
                  <span className="text-blue-400 font-bold">{item.year}</span>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative">
                  <div className="absolute w-px h-full bg-blue-500/50 left-1/2 transform -translate-x-1/2" />
                </div>
                <Card className="ml-4 flex-1 bg-gray-800/50 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Testimonials Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-0">
              <CardContent className="p-6">
                <p className="text-gray-400 italic mb-4">
                  &quot;The team at JobHub has been instrumental in our growth.
                  Their innovative solutions have streamlined our hiring
                  process.&quot;
                </p>
                <p className="text-gray-300">
                  - Alex Thompson, Tech Innovators Inc
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-0">
              <CardContent className="p-6">
                <p className="text-gray-400 italic mb-4">
                  &quot;Working with JobHub has been a game changer for our HR
                  operations.&quot;
                </p>
                <p className="text-gray-300">
                  - Sarah Chen, Global Solutions Ltd
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative mt-16 bg-black/60 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>
            Like what you see? Reach out via{" "}
            <a
              href="mailto:info@jobhub.com"
              className="text-blue-400 underline"
            >
              email
            </a>{" "}
            to collaborate!
          </p>
        </div>
      </section>
    </AnimatedGradient>
  );
}
