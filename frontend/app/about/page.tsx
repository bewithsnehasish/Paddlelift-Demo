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
import NewTimeline from "@/components/about/new-timeline";
import SubHeading from "@/components/about/SubHeading";
import Link from "next/link";

const teamMembers = [
  {
    name: "Utkarsh Rastogi",
    title: "Co-Founder ",
    position: "Director Head of Growth & Ops",
    photo: "/founder-images/Utkarsh.png",
    description:
      "Utkarsh Rastogi, a BITS Pilani alumnus with 15+ years of experience and leadership in top recruitment firms, drives Paddlelift’s growth. His strategic expertise ensures Paddlelift stays at the forefront of the recruitment industry.",
    socials: {
      linkedin: "https://www.linkedin.com/in/utkarsh-rastogi-02801024/",
    },
  },
  {
    name: "Kanika Mahajan",
    title: "Co-Founder",
    position: "Director Head of Non-Tech Recruitment",
    photo: "/founder-images/Kanika.png",
    description:
      "Kanika Mahajan, an MBA-HR with 16+ years in business administration and NonIT hiring, excels in understanding diverse business talent needs. Her strategic vision and market insights have significantly elevated Paddlelift, showcasing her pivotal role in the company's success.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kanika-mahajan-67978a1aa/",
    },
  },
  {
    name: "Rohit Dutt",
    title: "Co-Founder",
    position: "Director Head of Tech Recruitment",
    photo: "/founder-images/Rohit.png",
    description:
      "Rohit Dutt, with 14+ years in software development and tech recruitment, leads Paddlelift’s tech hiring. His industry experience and strategic foresight deliver top tech talent, ensuring Paddlelift connects cutting-edge companies with exceptional professionals.",
    socials: {
      linkedin: "https://www.linkedin.com/in/rodutt/",
    },
  },
  {
    name: "Sanjay Amar",
    title: "Co-Founder",
    position: "Director Head of Global Partnerships",
    photo: "/founder-images/Sanjay.png",
    description:
      "Sanjay Amar, with 37+ years of experience and 26 years in Dubai, has held leadership roles including CEO, CFO, and Board Advisor, driving diversified conglomerates across the Middle East, Africa, and Asia. A Chartered Accountant with an Honorary Doctorate in Organizational Leadership, he is a Fellow of the Institute of Directors and a member of WHRPC.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sanjayamar/",
    },
  },
];

export default function AboutPage() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollUp(currentScrollY < lastScrollY && currentScrollY > 200);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#09090B] min-h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center text-left relative overflow-hidden bg-black">
          {/* Background Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent opacity-70" />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  About <span className="text-red-600">PaddleLift</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Paddlelift, founded in 2020, is a global recruitment and HR
                  firm committed to providing streamlined, personalized talent
                  solutions.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-md"
                  >
                    Let&apos;s Connect
                  </Button>
                </Link>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full h-auto flex justify-center p-6"
              >
                <Image
                  src="/about/about.svg"
                  alt="About Section"
                  width={1200} // Increased size
                  height={600} // Increased size
                  className="rounded-lg object-cover w-full h-auto md:w-auto md:h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <ManagementSection />

        {/* Core Values */}
        <section className="snap-start py-20 bg-[#09090B] sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-left">
              <SubHeading>Core Values</SubHeading>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Image
                src="/about/order.gif"
                alt="Core Values"
                unoptimized
                className="object-contain"
                width={1200}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Management Section */}
        <section className="snap-start py-20 bg-[#09090B] px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white"
              >
                Meet the <span className="text-emerald-400">Management</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <ManagementCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="snap-start py-20 bg-[#09090B]">
          <div className="container mx-auto px-4">
            <NewTimeline />
          </div>
        </section>

        {/* Team Gallery Section */}
        <section className="snap-start bg-[#09090B]">
          <div className="container mx-auto px-4">
            <TeamGallery />
          </div>
        </section>
      </div>
      <Footer />

      {/* Scroll-Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-8 w-12 h-12 bg-blue-500 text-white text-6xl rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ease-in-out"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
