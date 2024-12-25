"use client";

import Image from "next/image";
import React, { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../ui/card";

// Types
interface MainHeadingProps {
  words: string[];
  highlight?: number;
}

interface SubHeadingProps {
  children: React.ReactNode;
}

interface AnimatedCardProps {
  children: React.ReactNode;
}

// Animation variants
const animations = {
  wordPull: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

// Memoized components
const MainHeading = memo(({ words, highlight = -1 }: MainHeadingProps) => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <div className="space-y-2 py-8" ref={headingRef}>
      <h1
        className="text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-4"
        role="heading"
        aria-level={1}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`relative ${index === highlight ? "text-emerald-400" : "text-white"}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animations.wordPull}
            custom={index}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
});

const SubHeading = memo(({ children }: SubHeadingProps) => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <motion.h3
      ref={headingRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations.fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold mb-6 text-emerald-400 relative"
      role="heading"
      aria-level={3}
    >
      {children}
      <span
        className="absolute inset-0 blur-lg bg-emerald-500/20 -z-10"
        aria-hidden="true"
      ></span>
    </motion.h3>
  );
});

const AnimatedCard = memo(({ children }: AnimatedCardProps) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations.fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="h-full bg-gray-900/50 backdrop-blur-sm border-gray-800">
        <CardContent className="p-8">{children}</CardContent>
      </Card>
    </motion.div>
  );
});

const ImageSection = memo(({ src, alt }: { src: string; alt: string }) => {
  const imgRef = useRef(null);
  const inView = useInView(imgRef, { once: true });

  return (
    <motion.div
      ref={imgRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations.scaleUp}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative max-w-md mx-auto"
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-xl object-cover w-full h-auto"
        loading="lazy"
      />
      <div
        className="absolute inset-0 blur-2xl bg-emerald-500/10 -z-10"
        aria-hidden="true"
      ></div>
    </motion.div>
  );
});

// Set display names for memo components
MainHeading.displayName = "MainHeading";
SubHeading.displayName = "SubHeading";
AnimatedCard.displayName = "AnimatedCard";
ImageSection.displayName = "ImageSection";

export default function NewTimeline() {
  return (
    <>
      <section className="snap-start py-20">
        <div className="container mx-auto px-4">
          <MainHeading words={["Our", "Journey"]} highlight={1} />
          <div className="relative">
            <Image
              src="/about/timeline.gif"
              alt="Company Timeline"
              width={1920}
              height={1080}
              className="rounded-lg object-cover w-full shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
