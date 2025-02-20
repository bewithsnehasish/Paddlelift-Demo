"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, ClipboardList, UserCheck } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Card {
  id: string;
  title: string;
  icon: React.ReactNode;
  video: string;
}

const cards: Card[] = [
  {
    id: "recruitment",
    title: "Recruitment",
    icon: <Users className="w-6 h-6" />,
    video: "/services/recruitment.mp4", // Replace with actual video path
  },
  {
    id: "staffing",
    title: "Staffing",
    icon: <TrendingUp className="w-6 h-6" />,
    video: "/services/staffing.mp4", // Replace with actual video path
  },
  {
    id: "funding-gateway",
    title: "Funding Gateway",
    icon: <ClipboardList className="w-6 h-6" />,
    video: "/services/funding.mp4", // Replace with actual video path
  },
  {
    id: "hr-dynamics",
    title: "HR Dynamics",
    icon: <UserCheck className="w-6 h-6" />,
    video: "/services/hrdynamics.mp4", // Replace with actual video path
  },
];

// Animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const wordPullAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const cardVariants = {
  initial: {
    height: "100px",
  },
  active: {
    height: "auto",
  },
};

const videoVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function InteractiveCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px 0px 0px 0px",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="bg-[#09090B] snap-start py-20 px-4 sm:px-6 md:px-8"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold text-white flex flex-wrap">
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
                custom={1}
              >
                of
              </motion.span>
              <motion.span
                className="text-teal-500 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={2}
              >
                Services
              </motion.span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 cursor-pointer group hover:border-teal-500 transition-colors"
              onHoverStart={() => !isMobile && setActiveCard(card.id)}
              onHoverEnd={() => !isMobile && setActiveCard(null)}
              onClick={() =>
                isMobile &&
                setActiveCard(activeCard === card.id ? null : card.id)
              }
              initial="initial"
              animate={activeCard === card.id ? "active" : "initial"}
              variants={cardVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-800/50 rounded-lg text-gray-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-teal-500 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>

              <AnimatePresence>
                {activeCard === card.id && (
                  <motion.div
                    className="px-6 pb-6 space-y-4"
                    variants={videoVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                      <video
                        src={card.video}
                        autoPlay
                        muted
                        loop
                        playsInline // Required for mobile devices
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
