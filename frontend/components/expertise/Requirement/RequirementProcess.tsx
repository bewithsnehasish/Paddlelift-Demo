"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "./data";
import { StepCard } from "./StepCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { containerVariants } from "./animations";

export default function RecruitmentProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / documentHeight) * 100;

      // Smoother step calculation
      const step = Math.min(Math.max(Math.round((progress / 100) * 5), 1), 5);

      if (step !== activeStep) {
        setActiveStep(step);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep]);

  return (
    <section className="relative min-h-screen py-20">
      <ProcessTimeline
        activeStep={activeStep}
        progress={(activeStep / 5) * 100}
      />

      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive approach to finding and nurturing top talent
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative space-y-6"
          >
            {processSteps.map((step, index) => (
              <StepCard
                key={step.id}
                {...step}
                index={index}
                isActive={activeStep === step.id}
                onClick={() => setActiveStep(step.id)}
                total={processSteps.length}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
