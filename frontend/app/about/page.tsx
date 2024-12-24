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
    name: "Utkarsh Rastogi",
    title: "Co-Founder & Director Head of Growth & Ops",
    photo: "https://picsum.photos/600/400",
    description:
      "Utkarsh Rastogi, a BITS Pilani alumnus with 15+ years of experience and leadership in top recruitment firms, drives Paddlelift’s growth. His strategic expertise ensures Paddlelift stays at the forefront of the recruitment industry.",
    socials: {
      linkedin: "https://www.linkedin.com/in/utkarsh-rastogi-02801024/",
    },
  },
  {
    name: "Kanika Mahajan",
    title: "Co-Founder & Director Head of Non-Tech Recruitment",
    photo: "https://picsum.photos/600/400",
    description:
      "Kanika Mahajan, an MBA-HR with 16+ years in business administration and NonIT hiring, excels in understanding diverse business talent needs. Her strategic vision and market insights have significantly elevated Paddlelift, showcasing her pivotal role in the company's success.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kanika-mahajan-67978a1aa/",
    },
  },
  {
    name: "Rohit Dutt",
    title: "Co-Founder & Director Head of Tech Recruitment",
    photo: "https://picsum.photos/600/400",
    description:
      "Rohit Dutt, with 14+ years in software development and tech recruitment, leads Paddlelift’s tech hiring. His industry experience and strategic foresight deliver top tech talent, ensuring Paddlelift connects cutting-edge companies with exceptional professionals.",
    socials: {
      linkedin: "https://www.linkedin.com/in/rodutt/",
    },
  },
  {
    name: "Sneha Singh",
    title: "COO & Co-founder",
    photo: "https://picsum.photos/600/400",
    description:
      "Sanjay Amar, with 37+ years experience, based in Dubai for 26 years, has played roles as Board Advisor, Corporate Advisor, M&A and Fund Raise Specialist, Business Leader, Group - CEO/ COO/ CFO, Commodity Broker, & Talent Acquisition Specialist, spearheading large diversified family owned conglomerates in the Middle East, Africa & Asia in multi-country, multi-business environments. Awarded an Honorary Doctorate in Organizational Leadership, he is a Chartered Accountant, Fellow Member of the Institute of Directors, & an active member of the World Human Rights Protection Commission (WHRPC).",
    socials: {
      linkedin: "https://www.linkedin.com/in/sanjayamar/",
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
                className="text-xl text-gray-400 mb-8"
              >
                Paddlelift, founded in 2020, is a global recruitment and HR firm
                committed to providing streamlined, personalized talent
                solutions. Our focus is on helping companies grow by
                transforming recruitment challenges into opportunities.
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
                  Meet the
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
