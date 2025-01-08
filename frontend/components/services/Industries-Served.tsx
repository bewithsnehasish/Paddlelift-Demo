"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselIndustries from "../ui/carousel-industries";

const items = [
  "IT",
  "SaaS",
  "AgriTech",
  "HealthTech",
  "EV",
  "FinTech",
  "EdTech",
  "E-Commerce",
  "Semiconductor",
  "FoodTech",
  "D2C",
  "Automobile",
  "HRTech",
  "Energy & Utilities",
  "SportsTech",
  "InsureTech",
  "Manufacturing",
  "Media",
  "Entertainment",
  "InsurTech",
  "FMCG",
  "Logistics",
  "Supply Chain",
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
            <h1 className="text-3xl md:text-5xl font-bold text-white flex flex-wrap mb-4">
              <motion.span
                className="text-teal-400 relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={0}
              >
                Industries
              </motion.span>
              <motion.span
                className="text-white relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                We
                <span className="absolute inset-0  z-10"></span>
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
          >
            We partner with diverse industries, delivering innovative solutions
            that drive digital transformation and sustainable growth. Our
            expertise spans across multiple sectors, enabling businesses to
            thrive in the modern marketplace.
          </motion.p>
        </div>

        {/* Industries Grid with Navigation */}
        <div className="relative">
          <CarouselIndustries items={items} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
