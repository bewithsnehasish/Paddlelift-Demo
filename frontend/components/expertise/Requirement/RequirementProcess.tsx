"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "./data";
import { StepCard } from "./StepCard";
import { useScrollProgress } from "@/lib/hooks/useScrollProgress";
import { staggerContainer } from "./animations/variants";

export default function RecruitmentProcess() {
  const { progress, activeStep } = useScrollProgress();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B] overflow-hidden"
    >
      <motion.div className="container mx-auto" style={{ opacity, scale }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-4xl leading-[110%]">
            Our Recruitment <span className="text-teal-400">Process</span>
          </h2>
          <p className="text-white text-lg md:text-xl font-semibold mt-4 max-w-lg">
            A comprehensive approach to finding and nurturing top talent
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-6 ml-16 lg:ml-24"
        >
          {processSteps.map((step, index) => (
            <div key={step.id} id={`step-${step.id}`}>
              <StepCard
                {...step}
                index={index}
                isActive={activeStep === step.id}
                onClick={() => {
                  const element = document.getElementById(`step-${step.id}`);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                total={processSteps.length}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
