"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { WordPullUp } from "../eldoraui/wordpullup";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controlsHeader = useAnimation();
  const controlsFeatures = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const features: Feature[] = [
    {
      icon: "/NewLogos/recruitment.png",
      title: "Recruitment",
      desc: "Delivering top talent across industries and skill sets, from tech to non-tech, with precision and expertise",
    },
    {
      icon: "/NewLogos/staffing.png",
      title: "Staffing",
      desc: "Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions.",
    },
    {
      icon: "/NewLogos/fgateway.png",
      title: "Funding Gateway",
      desc: "Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B.",
    },
    {
      icon: "/NewLogos/hrdynamics.png",
      title: "HR Dynamics",
      desc: "Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, etc. different analytics support.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate header
          controlsHeader.start({
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            },
          });

          // Animate features
          controlsFeatures.start({
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.4,
              staggerChildren: 0.1,
            },
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsHeader, controlsFeatures]);

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#09090B]">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={headerVariants}
          className="max-w-xl"
        >
          <WordPullUp
            text="Our Services"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
            wordClassName="first:text-teal-400"
          />
          <p className="mt-3 text-base md:text-lg">
            Our squad of seasoned specialists. With different team setups for IT
            and non-IT needs, we are equipped with street-smart knowledge and
            the know-how to serve our customers with swift turnaround times.
            This makes us your gateway to top-tier talent that aligns perfectly
            with your unique requirements.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="mt-12 lg:mt-0"
        >
          <ul className="grid gap-6 sm:grid-cols-2">
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                variants={featureVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="flex gap-x-4"
              >
                <div className="flex-none w-12 h-12 text-cyan-400 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-12 h-12"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <WordPullUp
                    text={item.title}
                    className="text-lg md:text-xl text-gray-100 font-semibold"
                  />
                  <p className="mt-2 text-base text-gray-300">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
