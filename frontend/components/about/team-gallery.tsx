"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Sample images array - replace with your actual images
const photos = [
  { src: "/about/LifePaddlelift/IMG_1501.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3096.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3249.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3701.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3955.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4133.JPG" },
  { src: "/about/LifePaddlelift/IMG_4472.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4497.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4520.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4524.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4836.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6310.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6507.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6536.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6932.JPEG" },
  { src: "/about/LifePaddlelift/IMG_7428.JPEG" },
];

export function TeamGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
      className="relative w-full bg-[#09090B] py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Title Section */}
        <div className="mb-12 text-left">
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
            className="text-3xl font-bold text-white flex flex-wrap gap-2"
          >
            <motion.span
              className="text-emerald-400 relative"
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
              className="text-white relative"
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
              {""}at PaddleLift
            </motion.span>
          </motion.h2>
        </div>

        {/* Gallery Rows */}
        <div className="flex flex-col gap-16">
          {/* Left to Right Row */}
          <motion.div
            className="relative overflow-hidden"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-6"
              animate={isInView ? { x: ["0%", "-50%"] } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={`left-${index}`}
                  variants={itemVariants}
                  className="relative min-w-[300px] aspect-video"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={photo.src}
                    alt={`Team photo ${index + 1}`}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    loading="eager"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right to Left Row */}
          <motion.div
            className="relative overflow-hidden"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-6"
              animate={isInView ? { x: ["-50%", "0%"] } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...photos].reverse().map((photo, index) => (
                <motion.div
                  key={`right-${index}`}
                  variants={itemVariants}
                  className="relative min-w-[300px] aspect-video"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={photo.src}
                    alt={`Team photo ${index + 1}`}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    loading="eager"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#09090B] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
