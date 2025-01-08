"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Service {
  id: string;
  title: string;
  video: string;
  height: number;
  width: number;
}

const services: Service[] = [
  {
    id: "recruitment",
    title: "Recruitment",
    video: "/services/recruitment.mp4",
    height: 400,
    width: 400,
  },
  {
    id: "staffing",
    title: "Staffing",
    video: "/services/staffing.mp4",
    height: 400,
    width: 400,
  },
  {
    id: "funding-gateway",
    title: "Funding Gateway",
    video: "/services/funding.mp4",
    height: 400,
    width: 400,
  },
  {
    id: "hr-dynamics",
    title: "HR Dynamics",
    video: "/services/hrdynamics.mp4",
    height: 400,
    width: 400,
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
  const [contentHeights, setContentHeights] = useState<{
    [key: string]: number;
  }>({});
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
            <h1 className="text-3xl md:text-5xl font-bold text-white flex flex-wrap">
              <motion.span
                className="text-white relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={0}
              >
                Range
              </motion.span>
              <motion.span
                className="text-white relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={0}
              >
                of
              </motion.span>
              <motion.span
                className="text-teal-500 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                Services
              </motion.span>
            </h1>
          </div>
          <p className="text-base mt-6 max-w-2xl">
            We offer a range of Services designed to streamline your business
            operations and drive growth. From Talent Acquisition to Funding
            Support, our comprehensive solutions cater to diverse needs.
          </p>
        </div>

        <div className="space-y-1">
          {services.map((service) => {
            const isExpanded =
              (isMobile && activeService === service.id) ||
              (!isMobile && hoveredService === service.id);

            return (
              <motion.div
                key={service.id}
                className="border-b border-gray-800 overflow-hidden"
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
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
                        isExpanded ? "text-emerald-400" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && isClient && (
                    <motion.div
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={{
                        expanded: {
                          height: service.height,
                          opacity: 1,
                          marginBottom: "1rem",
                        },
                        collapsed: { height: 0, opacity: 0, marginBottom: "0" },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-8 h-full">
                        <motion.div
                          className="md:w-1/2 flex justify-center items-center relative"
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <div className="absolute w-64 h-64 bg-white/40 blur-2xl rounded-full"></div>
                          <video
                            src={service.video}
                            muted
                            loop
                            autoPlay
                            className="relative z-10 object-contain"
                            style={{
                              width: service.width,
                              height: service.height,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
