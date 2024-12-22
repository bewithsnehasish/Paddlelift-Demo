"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "../ui/carousel-industries";

const items = [
  "IT",
  "SaaS",
  "AgriTech",
  "HealthTech",
  "EV",
  "PinTech",
  "EdTech",
  "E-Commerce",
  "Semiconductor",
  "FoodTech",
  "D2C",
  "Automobile",
  "HRTech",
  "SportsTech",
  "Manufacturing",
  "Media & Entertainment",
  "InsurTech",
  "Energy & Utilities",
];

const MainSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <section ref={ref} className="bg-[#09090B] py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-white flex flex-wrap">
              <motion.span
                className="text-white relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={0}
              >
                Industries
              </motion.span>
              <motion.span
                className="text-emerald-400 relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                We
                <span className="absolute inset-0 blur-md bg-emerald-400/30 z-10"></span>
              </motion.span>
              <motion.span
                className="text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={2}
              >
                Serve
              </motion.span>
            </h1>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl">
            We partner with diverse industries, delivering innovative solutions
            that drive digital transformation and sustainable growth. Our
            expertise spans across multiple sectors, enabling businesses to
            thrive in the modern marketplace.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => (
            <Carousel key={index} items={[item]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
