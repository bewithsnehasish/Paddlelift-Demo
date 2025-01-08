"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { MainMenusGradientCard } from "../eldoraui/animatedcard";

export default function MobileOrgainsation() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const controlsImage = useAnimation();
  const controlsCards = useAnimation();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate image and cards
            controlsImage.start({
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            });
            controlsCards.start({
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              },
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controlsImage, controlsCards]);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl py-12 md:py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <div className="mb-8 md:mb-12 lg:mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-[110%]">
          Organizational <span className="text-teal-400">Structure</span>
        </h2>
        <p className="text-white text-base md:text-lg font-semibold mt-4 max-w-lg mx-auto md:mx-0">
          Dedicated Customized Solution for clients
        </p>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-auto md:h-[60vh] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
        {/* Centered Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsImage}
          className="w-full md:w-1/3 lg:w-1/4 flex justify-center items-center"
        >
          <Image
            src="/Plogo.png"
            alt="Organizational Structure"
            className="w-1/2 md:w-full h-auto object-contain"
            width={200}
            height={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Top Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controlsCards}
          >
            <MainMenusGradientCard
              title="Technology / IT Recruitment Vertical"
              description="Where team is dedicatedly focusing to cater Tech Hiring for Clients."
            />
          </motion.div>

          {/* Top Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controlsCards}
          >
            <MainMenusGradientCard
              title="Non-Tech / Functional Recruitment Vertical"
              description="Where team is dedicatedly focusing to cater Non-Tech / Functional Hiring for Clients."
            />
          </motion.div>

          {/* Bottom Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controlsCards}
          >
            <MainMenusGradientCard
              title="Staffing / Payroll / HR Management Vertical"
              description="Dedicated team for managing Payroll & Ops for domestic & international clients."
            />
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controlsCards}
          >
            <MainMenusGradientCard
              title="Customer Success / Growth Management Vertical"
              description="Dedicated vertical to ensure smooth & productive business engagement with clients."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
