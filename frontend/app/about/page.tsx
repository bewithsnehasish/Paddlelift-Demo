"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ManagementCard } from "@/components/about/management-card";
import { TeamGallery } from "@/components/about/team-gallery";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ManagementSection from "@/components/about/management-section";
import { useEffect, useState } from "react";

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

  const [isGifComplete, setIsGifComplete] = useState(false);

  useEffect(() => {
    // Set a timer to match your GIF duration
    const gifDuration = 3000; // Adjust this to match your GIF length in milliseconds
    const timer = setTimeout(() => {
      setIsGifComplete(true);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

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
            <div className="relative">
              {!isGifComplete && (
                <Image
                  src="/about/Aboutus.gif"
                  alt="About Section Animation"
                  width={1000}
                  height={500}
                  className="rounded-lg object-cover absolute top-0 left-0 z-10"
                  priority
                />
              )}
              <Image
                src="/about/Aboutus.png"
                alt="About Section"
                width={1000}
                height={500}
                className={`rounded-lg object-cover transition-opacity duration-300 ${
                  isGifComplete ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <ManagementSection />

        {/* Management Section */}
        <section className="snap-start py-20 bg-[#09090B]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
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
                className="text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center"
              >
                <motion.span
                  className="text-white relative mr-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }),
                  }}
                  custom={0}
                >
                  Key
                </motion.span>
                <motion.span
                  className="text-emerald-400 relative mr-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }),
                  }}
                  custom={1}
                >
                  People
                  <span className="absolute inset-0 blur-md bg-emerald-400/30 z-10"></span>
                </motion.span>
                <motion.span
                  className="text-white mr-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }),
                  }}
                  custom={2}
                >
                  / Meet the
                </motion.span>
                <motion.span
                  className="text-white"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }),
                  }}
                  custom={3}
                >
                  Management
                </motion.span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <ManagementCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Gallery Section */}
        <section className=" snap-start  bg-[#09090B]">
          <div className="container mx-auto px-4">
            <TeamGallery />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
