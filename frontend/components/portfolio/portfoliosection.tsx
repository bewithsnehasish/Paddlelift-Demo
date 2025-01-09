"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

const STATS_DATA: StatItem[] = [
  {
    title: "Clients Served",
    value: 150,
    suffix: "+",
    description: "Empowering Businesses",
  },
  {
    title: "Candidates Placed",
    value: 1250,
    suffix: "+",
    description: "Redefining Recruitment",
  },
  {
    title: "Client Retention Rate (CRR)",
    prefix: ">",
    value: 75,
    suffix: "%",
    description: "Connecting Top Talent",
  },
  {
    title: "Turn Around Time (TAT)",
    prefix: "<",
    value: 48,
    suffix: "Hrs",
    description: "Connecting Top Talent",
  },
  {
    title: "Joining Ratio",
    prefix: ">",
    value: 80,
    suffix: "%",
    description: "Connecting Top Talent",
  },
  {
    title: "Candidate Satisfaction Rate (CSR)",
    prefix: ">",
    value: 80,
    suffix: "%",
    description: "Connecting Top Talent",
  },
];

const ANIMATION_DURATION = 3000; // Increased duration for slower animation
const FRAME_RATE = 30; // Adjusted frame rate for smoother animation
const INTERSECTION_THRESHOLD = 0.1;

const CARD_COLORS = [
  "bg-teal-600",
  "bg-sky-600",
  "bg-orange-600",
  "bg-green-600",
  "bg-yellow-500",
  "bg-red-500",
];

const wordPullAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(
    new Array(STATS_DATA.length).fill(0),
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: INTERSECTION_THRESHOLD },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals: NodeJS.Timeout[] = [];

    STATS_DATA.forEach((data, index) => {
      let start = 0;
      const end = data.value;
      const increment = end / (ANIMATION_DURATION / FRAME_RATE);

      const interval = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.round(start);
          return newCounters;
        });
      }, FRAME_RATE);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  const renderStatCard = (data: StatItem, index: number) => {
    const cardColor = CARD_COLORS[index % CARD_COLORS.length]; // Cycle through colors

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className={`rounded-lg p-6 text-center transform transition-all hover:scale-105 hover:brightness-110 ${cardColor}`}
      >
        <h4 className="text-xl font-semibold text-white mb-2">{data.title}</h4>
        <p className="text-4xl sm:text-4xl font-bold text-white mb-2">
          {data.prefix}
          {counters[index]}
          {data.suffix}
        </p>
      </motion.div>
    );
  };

  return (
    <div
      className="bg-[#09090B] snap-start py-20 px-4 sm:px-6 md:px-8"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold text-white flex flex-wrap mb-4">
          <motion.span
            className="text-white relative mr-2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={0}
          >
            Our
          </motion.span>
          <motion.span
            className="text-teal-400 relative mr-2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={1}
          >
            Statistics
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
        >
          Our Numbers Speak it all
        </motion.p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {STATS_DATA.map((data, index) => renderStatCard(data, index))}
        </div>
      </div>
    </div>
  );
}
