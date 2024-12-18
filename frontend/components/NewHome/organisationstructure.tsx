"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { MainMenusGradientCard } from "../eldoraui/animatedcard";

export default function OrganizationalStructure() {
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
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            });
            controlsCards.start({
              opacity: 1,
              x: 0,
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
      className="w-full max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <div className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
          Organizational <span className="text-teal-400">Structure</span>
        </h2>
        <p className="text-white text-lg md:text-xl font-semibold mt-4 max-w-lg">
          Dedicated Customized Solution for clients
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={controlsImage}
          className="w-full h-auto"
        >
          <Image
            src="/images/organisationstructure.svg"
            alt="Organizational Structure"
            className="w-full h-auto object-contain"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          />
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={controlsCards}
          className="flex flex-col space-y-6"
        >
          <MainMenusGradientCard
            title="Technology / IT Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Tech Hiring for Clients."
          />
          <MainMenusGradientCard
            title="Non-Tech / Functional Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Non-Tech / Functional Hiring for Clients."
          />
          <MainMenusGradientCard
            title="Staffing / Payroll / HR Management Vertical"
            description="Dedicated team for managing Payroll & Ops for domestic & international clients."
          />
          <MainMenusGradientCard
            title="Customer Success / Growth Management Vertical"
            description="Dedicated vertical to ensure smooth & productive business engagement with clients."
          />
        </motion.div>
      </div>
    </section>
  );
}
