"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";

// Types
interface MainHeadingProps {
  words: string[];
  highlight?: number;
}

interface SubHeadingProps {
  children: React.ReactNode;
}

interface AnimatedTextProps {
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
  slideInFromLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  slideInFromRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
};

// Memoized components
const MainHeading = memo(({ words, highlight = -1 }: MainHeadingProps) => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <div className="space-y-2 py-8" ref={headingRef}>
      <h1
        className="text-3xl md:text-3xl font-bold text-white flex flex-wrap gap-4"
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
      className="text-2xl font-bold mb-6 text-emerald-400 relative"
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

const AnimatedText = memo(({ children }: AnimatedTextProps) => {
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations.fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
});

const ImageSection = memo(
  ({
    src,
    alt,
    direction,
  }: {
    src: string;
    alt: string;
    direction: "left" | "right";
  }) => {
    const imgRef = useRef(null);
    const inView = useInView(imgRef, { once: true });

    return (
      <motion.div
        ref={imgRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={
          direction === "left"
            ? animations.slideInFromLeft
            : animations.slideInFromRight
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-md mx-auto"
      >
        <Image
          src={src}
          alt={alt}
          width={300} // Reduced size
          height={225} // Reduced size
          className="rounded-xl object-cover w-full md:w-3/4 "
          loading="lazy"
        />
        <div
          className="absolute inset-0 blur-2xl bg-emerald-500/10 -z-10"
          aria-hidden="true"
        ></div>
      </motion.div>
    );
  },
);

// Set display names for memo components
MainHeading.displayName = "MainHeading";
SubHeading.displayName = "SubHeading";
AnimatedText.displayName = "AnimatedText";
ImageSection.displayName = "ImageSection";

export default function ManagementSection() {
  const sectionRef = useRef(null);

  return (
    <section
      className="bg-[#09090B] snap-start py-10 px-4 sm:px-6 md:px-8"
      ref={sectionRef}
      role="region"
      aria-label="Management Section"
    >
      <div className="max-w-7xl mx-auto">
        <MainHeading
          words={["Our", "Vision,", "Mission", "& Core Values"]}
          highlight={1}
        />

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ImageSection
            src="/about/vision.svg"
            alt="Vision Graphic"
            direction="left"
          />
          <AnimatedText>
            <SubHeading>Vision</SubHeading>
            <p className="text-gray-300 text-base leading-relaxed">
              To establish our presence in the market as unrivaled leaders,
              offering the ultimate solution to overcome the hiring bottlenecks
              faced by start-ups. We envision a future where every innovative
              idea has the opportunity to flourish, supported by a robust
              ecosystem of talent and resources that we facilitate.
            </p>
          </AnimatedText>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-12">
          <AnimatedText>
            <SubHeading>Mission</SubHeading>
            <p className="text-gray-300 text-base leading-relaxed">
              Our mission is to be the guiding light for start-ups, offering
              them not just advice, but tangible, hands-on support to propel
              their businesses to new heights. We strive to empower
              entrepreneurs with the resources, knowledge, and connections they
              need to overcome challenges and achieve sustainable growth.
            </p>
          </AnimatedText>
          <ImageSection
            src="/about/mission.svg"
            alt="Mission Graphic"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
