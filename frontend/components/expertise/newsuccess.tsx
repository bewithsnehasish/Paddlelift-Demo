"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewSuccess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stages = [
    {
      number: 1,
      title: "Consult",
      description: "Industry Benchmarking / Market Mapping / Budgeting",
      color: "bg-zinc-800",
      descColor: "bg-zinc-700",
    },
    {
      number: 2,
      title: "Access",
      description:
        "Recruitment Plan / Search Strategy / Sourcing & Head-hunting",
      color: "bg-cyan-700",
      descColor: "bg-cyan-600",
    },
    {
      number: 3,
      title: "Assess",
      description: "Assessment Development / Interview Service",
      color: "bg-emerald-700",
      descColor: "bg-emerald-600",
    },
    {
      number: 4,
      title: "Select",
      description:
        "Candidate & Stakeholder Management / Decisioning & Negotiation.",
      color: "bg-amber-600",
      descColor: "bg-amber-500",
    },
    {
      number: 5,
      title: "Onboard",
      description: "Candidate Engagements / Client Feedbacks",
      color: "bg-orange-700",
      descColor: "bg-orange-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
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
    <div className="min-h-screen bg-[#09090B] p-8" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-6">
        <motion.div
          className="mb-8 sm:mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white max-w-4xl leading-[110%]">
            Our Success <span className="text-teal-400">Approach</span>
          </h2>
          <p className="text-white text-base sm:text-lg font-medium mt-2 max-w-lg">
            A comprehensive five-step methodology for exceptional results
          </p>
        </motion.div>

        <motion.div
          className="relative mt-12 flex items-end justify-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              className="relative w-1/5 shadow-xl transition-all duration-300 hover:brightness-110"
              style={{
                height: `${Math.max(160, (index + 1) * 100)}px`,
              }}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className={`${stage.color} absolute top-0 left-0 right-0 p-4 z-10`}
              >
                <h3 className="text-xl font-bold text-white">{stage.title}</h3>
              </div>
              <div
                className={`${stage.descColor} absolute bottom-0 left-0 right-0 top-[52px] p-4 overflow-hidden`}
              >
                <p className="text-white/90 text-sm font-semibold break-words">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewSuccess;
