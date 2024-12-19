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
    image: "/features/Animation.gif",
    height: 450,
    width: 450,
  },
  {
    id: "staffing",
    title: "Staffing",
    description:
      "Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions.",
    image: "/path-to-staffing.gif",
    height: 300,
    width: 300,
  },
  {
    id: "funding-gateway",
    title: "Funding Gateway",
    description:
      "Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B.",
    image: "/path-to-funding-gateway.gif",
    height: 300,
    width: 300,
  },
  {
    id: "hr-dynamics",
    title: "HR Dynamics",
    description:
      "Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, etc. different analytics support.",
    image: "/path-to-hr-dynamics.gif",
    height: 300,
    width: 300,
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <section ref={ref} className=" bg-[#09090B] p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="my-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white flex flex-wrap">
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
                className="text-emerald-400 relative mr-2 "
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                Services
                <span className="absolute inset-0 blur-md bg-emerald-400/30 z-10"></span>
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
              animate={hoveredService === service.id ? "expanded" : "collapsed"}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
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
                      hoveredService === service.id
                        ? "text-emerald-400"
                        : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {hoveredService === service.id && isClient && (
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
                        <p className="text-gray-400 text-center">
                          {service.description}
                        </p>
                      </div>
                      <motion.div
                        className="md:w-1/2 flex justify-center items-center"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={service.width}
                          height={service.height}
                          className="object-contain"
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
}
