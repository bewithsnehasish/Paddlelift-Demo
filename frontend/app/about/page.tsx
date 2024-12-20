"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ManagementCard } from "@/components/about/management-card";
import { TeamGallery } from "@/components/about/team-gallery";
import { CoreValues } from "@/components/about/core-values";
import { GrowthChart } from "@/components/about/growth-chart";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "CEO & Co-founder",
    photo: "https://picsum.photos/600/400",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas consectetur officia quas, deserunt corrupti voluptatum laudantium veritatis quae aut quam at? ",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    name: "Michael Chen",
    title: "CTO & Co-founder",
    photo: "https://picsum.photos/600/400",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas consectetur officia quas, deserunt corrupti voluptatum laudantium veritatis quae aut quam at? ",
    socials: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
    },
  },
  {
    name: "Emily Rodriguez",
    title: "COO & Co-founder",
    photo: "https://picsum.photos/600/400",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas consectetur officia quas, deserunt corrupti voluptatum laudantium veritatis quae aut quam at? ",
    socials: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
    },
  },
  {
    name: "Sneha Singh",
    title: "COO & Co-founder",
    photo: "https://picsum.photos/600/400",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas consectetur officia quas, deserunt corrupti voluptatum laudantium veritatis quae aut quam at? ",
    socials: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
    },
  },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center relative">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                About <span className="text-red-600">PaddleLift</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Text about what we do and our mission to help businesses grow.
              </motion.p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Connect With Us
              </Button>
            </div>

            <Image
              src="/about/about.png"
              alt="About Section"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Management Section */}
        <section className="min-h-screen snap-start py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Key People / Meet the Management
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <ManagementCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Gallery Section */}
        <section className="min-h-screen snap-start py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <TeamGallery />
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="min-h-screen snap-start py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Mission</h2>
                  <p className="text-gray-600">
                    Our mission is to be the guiding light for start-ups,
                    offering them not just advice, but tangible, hands-on
                    support to propel their businesses to new heights...
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Vision</h2>
                  <p className="text-gray-600">
                    To establish our presence in the market as unrivaled
                    leaders, offering the ultimate solution to overcome the
                    hiring bottlenecks faced by start-ups...
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">
                Core Values
              </h2>
              <CoreValues />
            </div>
          </div>
        </section>

        {/* Growth Section */}
        <section className="min-h-screen snap-start py-20">
          <div className="container mx-auto px-4">
            <GrowthChart />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
