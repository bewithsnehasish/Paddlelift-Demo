"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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
};

interface MainHeadingProps {
  words: string[];
  highlight?: number;
}

export default function MainHeading({
  words,
  highlight = -1,
}: MainHeadingProps) {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <div className="space-y-2 py-8" ref={headingRef}>
      <h1
        className="text-3xl font-bold text-white flex flex-wrap gap-4"
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
}
