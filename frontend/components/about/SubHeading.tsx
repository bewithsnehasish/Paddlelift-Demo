"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SubHeadingProps {
  children: React.ReactNode;
}

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function SubHeading({ children }: SubHeadingProps) {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <motion.h3
      ref={headingRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations.fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-2xl md:text-3xl font-bold mb-6 text-emerald-400 relative "
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
}
