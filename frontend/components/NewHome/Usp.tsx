"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ApproachStep {
  number: number;
  title: string;
  description: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: 1,
    title: "Expert Team",
    description:
      "Our squad of seasoned specialists, Tier 1 pedigree holders, 3 seasoned Co-Founders with combined 45+ years of product HR & recruitment expertise, different team setup for different needs of IT or NonIT, equipped with street smart knowledge, expertise & what all it takes to serve our customers with lesser TAT, is your gateway to top-tier talent.",
  },
  {
    number: 2,
    title: "Tailored Strategy",
    description:
      "We masterfully guide you from initial team setup (0 to 1) through rapid scaling (1 to 100), ensuring your hires align with your vision & fuel your expansion.",
  },
  {
    number: 3,
    title: "Proven Success",
    description:
      "Our deep industry insights and dedication to excellence have consistently delivered high-quality talent & HR practices, positioning our clients for unprecedented success. Within short span of time we have scaled our operations globally in multiple fields.",
  },
  {
    number: 4,
    title: "Personalized Approach",
    description:
      "We do not just only provide candidates, we promotes customer's branding amongst the market and pull out crème who will be eligible to get hired.",
  },
];

const ApproachSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      className="bg-[#09090B]"
    >
      <div className="max-w-6xl mx-6 sm:mx-auto px-4 xl:px-0">
        {/* Section Header */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
        >
          What Sets Us <span className="text-teal-400">Apart</span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
          className="text-white text-xl font-semibold md:text-base my-4 pb-5 max-w-lg"
        >
          Why you should choose us over the competition.
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
            className="order-2 md:order-1 w-full h-full"
          >
            <div className="w-full h-full min-h-[400px] max-h-[600px]">
              <Image
                src="/USP.avif"
                alt="Approach Illustration"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                width={480}
                height={600}
              />
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
            className="order-1 md:order-2"
          >
            <div className="space-y-6">
              {APPROACH_STEPS.map((step) => (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="relative pl-12 pb-6 border-l-2 border-neutral-800 last:border-transparent"
                >
                  <div className="absolute -left-5 top-0 bg-neutral-900 border-2 border-neutral-700 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.7 },
                },
              }}
              className="mt-8"
            >
              <Link href="/contact" className="block">
                <button className="group flex items-center gap-3 bg-yellow-400 text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all">
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Let&apos;s Connect
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApproachSection;
