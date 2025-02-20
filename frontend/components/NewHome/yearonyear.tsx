"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const YearGrowthCard: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50, transition: { duration: 0 } },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      className="max-w-7xl py-20 mx-auto px-4 sm:px-6 md:px-8 bg-[#09090B]"
    >
      {/* Header */}
      <div className="space-y-2 mb-12">
        <motion.h1 className="text-5xl md:text-6xl font-bold text-white flex flex-wrap">
          <motion.span
            className="text-white relative mr-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={0}
          >
            Year On Year
          </motion.span>
          <motion.span
            className="text-teal-400 relative mr-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={1}
          >
            Growth
          </motion.span>
        </motion.h1>
      </div>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
      >
        It was just an inception with our vision to assist small businesses
        during the tough times of the COVID-19 pandemic.
      </motion.p>

      {/* Desktop and Tablet Image */}
      <div className="hidden md:block">
        <Image
          src="/images/Roadmap.gif"
          alt="Desktop Image"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          unoptimized
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden">
        <Image
          src="/images/mobileRoadmap.gif"
          alt="Mobile Image"
          height={1080}
          width={1920}
          layout="responsive"
          objectFit="cover"
          unoptimized
        />
      </div>
    </motion.div>
  );
};

export default YearGrowthCard;
