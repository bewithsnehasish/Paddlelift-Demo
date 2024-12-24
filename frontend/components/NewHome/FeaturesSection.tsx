"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  height: number;
  width: number;
}

const services: Service[] = [
  {
    id: "recruitment",
    title: "Recruitment",
    description:
      "Delivering top talent across industries and skill sets, from tech to non-tech, with precision and expertise.",
    image: "/features/recruitment.gif",
    height: 250,
    width: 250,
  },
  {
    id: "staffing",
    title: "Staffing",
    description:
      "Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions.",
    image: "/features/Staffing.gif",
    height: 350,
    width: 350,
  },
  {
    id: "funding-gateway",
    title: "Funding Gateway",
    description:
      "Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B.",
    image: "/features/funding.png",
    height: 250,
    width: 250,
  },
  {
    id: "hr-dynamics",
    title: "HR Dynamics",
    description:
      "Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, etc. different analytics support.",
    image: "/features/hr.gif",
    height: 250,
    width: 250,
  },
];

function useHoverState() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleHoverStart = (id: string) => setHoveredService(id);
  const handleHoverEnd = () => setHoveredService(null);

  return { hoveredService, handleHoverStart, handleHoverEnd };
}
const ServicesSection = () => {
  const { hoveredService, handleHoverStart, handleHoverEnd } = useHoverState();
  const [isClient, setIsClient] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (id: string) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      ref={ref}
      className="bg-[#09090B] snap-start py-20 px-4 sm:px-6 md:px-8"
    >
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
                What
              </motion.span>
              <motion.span
                className="text-teal-500 relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                Services
              </motion.span>
              <motion.span
                className="text-white mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={2}
              >
                We&apos;re
              </motion.span>
              <motion.span
                className="text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={3}
              >
                Offering
              </motion.span>
            </h1>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl">
            We offer a range of features designed to streamline your business
            operations and drive growth. From talent acquisition to funding
            support, our comprehensive solutions cater to diverse needs.
          </p>
        </div>

        <div className="space-y-1">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="border-b border-gray-800 overflow-hidden"
              initial="collapsed"
              animate={
                (isMobile && activeService === service.id) ||
                (!isMobile && hoveredService === service.id)
                  ? "expanded"
                  : "collapsed"
              }
              onClick={isMobile ? () => handleClick(service.id) : undefined}
              onHoverStart={
                !isMobile ? () => handleHoverStart(service.id) : undefined
              }
              onHoverEnd={!isMobile ? handleHoverEnd : undefined}
            >
              <motion.div
                className="py-4 cursor-pointer flex items-center justify-between"
                variants={{
                  expanded: { paddingBottom: "1rem" },
                  collapsed: { paddingBottom: "1rem" },
                }}
              >
                <motion.h3
                  className="text-xl font-medium transition-colors duration-300"
                  variants={{
                    expanded: {
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "rgb(255, 255, 255)",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                    collapsed: {
                      fontSize: "1.25rem",
                      fontWeight: "normal",
                      color: "rgb(156, 163, 175)",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  variants={{
                    expanded: { rotate: 90 },
                    collapsed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight
                    className={`w-6 h-6 transition-colors duration-300 ${
                      (isMobile && activeService === service.id) ||
                      (!isMobile && hoveredService === service.id)
                        ? "text-emerald-400"
                        : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {((isMobile && activeService === service.id) ||
                  (!isMobile && hoveredService === service.id)) &&
                  isClient && (
                    <motion.div
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={{
                        expanded: {
                          height: "auto",
                          opacity: 1,
                          marginBottom: "1rem",
                        },
                        collapsed: { height: 0, opacity: 0, marginBottom: "0" },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-8 pb-4">
                        <div className="md:w-1/2 flex items-center justify-center">
                          <p className="text-white text-xl text-left">
                            {service.description}
                          </p>
                        </div>
                        <motion.div
                          className="md:w-1/2 flex justify-center items-center relative"
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <div className="absolute w-64 h-64 bg-white/40 blur-2xl rounded-full"></div>
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={service.width}
                            height={service.height}
                            unoptimized
                            className="relative z-10 object-contain"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
