"use client";

// src/components/GrowthTimeline.tsx
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion, useAnimation, useInView } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Growth Rate",
      data: [0, 161, 143, 151, 193],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const, // Ensure the type is correct
    },
    title: {
      display: true,
      text: "Company Growth Timeline",
    },
  },
};

const GrowthTimeline: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50, transition: { duration: 0 } },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      className="max-w-7xl py-20 mx-auto px-4 sm:px-6 md:px-8 bg-[#09090B]"
    >
      {/* Header */}
      <div className="space-y-2 mb-12">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white flex flex-wrap"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-white relative mr-2">Year On Year</span>
          <span className="text-teal-400 relative">Growth</span>
        </motion.h1>
      </div>

      <motion.p
        className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
      >
        It was just an inception with our vision to assist small businesses
        during the tough times of the COVID-19 pandemic.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
        className="mb-8"
      >
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Line data={data} options={options} />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative border-l border-gray-700"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.6, staggerChildren: 0.3 },
          },
        }}
      >
        {[
          { year: "2020", label: "Initial Company Start", color: "blue" },
          { year: "2021", label: "Exponential 161% Growth", color: "green" },
          { year: "2022", label: "Dip of 18%", color: "red" },
          { year: "2023", label: "8% Growth", color: "yellow" },
          { year: "2024", label: "Growth 42%", color: "purple" },
        ].map((event, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className={`absolute w-3 h-3 bg-${event.color}-500 rounded-full mt-1.5 -left-1.5 border border-white`}
            ></div>
            <div className="ml-6 p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className={`text-xl font-semibold text-${event.color}-300`}>
                {event.year} - {event.label}
              </h2>
              {event.year === "2022" && (
                <p className="text-gray-400">
                  Faces dip in business by 18% due to market turbulence.
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GrowthTimeline;
