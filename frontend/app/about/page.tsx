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
import ManagementSection from "@/components/about/management-section";

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

  const AnimatedHeading = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          },
        },
      }}
      className={`text-4xl md:text-5xl font-bold mb-8 ${className}`}
    >
      {children}
    </motion.h2>
  );

  const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="h-full">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  );

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

        <ManagementSection />

        {/* Team Gallery Section */}
        <section className="min-h-screen snap-start py-20 bg-[#09090B]">
          <div className="container mx-auto px-4">
            <TeamGallery />
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
