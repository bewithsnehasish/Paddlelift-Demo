"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Sample images array - replace with your actual images
const photos = Array(8).fill("/placeholder.svg?height=300&width=400");

export function TeamGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#09090B] py-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="mb-12">
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
              Life
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
              at PaddleLift
              <span className="absolute inset-0 blur-md bg-emerald-400/30 z-10"></span>
            </motion.span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-16">
          {/* Left to Right Row */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            >
              {[...photos, ...photos].map((photo, index) => (
                <motion.div
                  key={`left-${index}`}
                  variants={itemVariants}
                  className="relative min-w-[300px] aspect-video"
                >
                  <Image
                    src={photo}
                    alt={`Team photo ${index + 1}`}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right to Left Row */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            >
              {[...photos, ...photos].map((photo, index) => (
                <motion.div
                  key={`right-${index}`}
                  variants={itemVariants}
                  className="relative min-w-[300px] aspect-video"
                >
                  <Image
                    src={photo}
                    alt={`Team photo ${index + 1}`}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#09090B] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
