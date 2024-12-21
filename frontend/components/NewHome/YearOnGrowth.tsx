"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearGrowthCard: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setChartData({
        chart: { type: "area", height: 350, toolbar: { show: false } },
        series: [{ name: "Yearly Growth", data: [0, 161, 143, 151, 193] }],
        xaxis: {
          categories: ["2020", "2021", "2022", "2023", "2024"],
          labels: { style: { colors: "#9ca3af", fontSize: "20px" } },
        },
        yaxis: {
          labels: { style: { colors: "#9ca3af", fontSize: "18px" } },
        },
        fill: { gradient: { shadeIntensity: 1, opacity: 1, stops: [0, 100] } },
        stroke: { curve: "smooth", width: 2 },
        tooltip: { enabled: false },
        colors: ["#2563eb"],
      });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

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
        <motion.h1 className="text-5xl md:text-6xl font-bold text-white flex flex-wrap">
          <motion.span
            className="text-white relative mr-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={0}
          >
            Year On Year
          </motion.span>
          <motion.span
            className="text-teal-400 relative mr-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={1}
          >
            Growth
            <span className="absolute inset-0 blur-md bg-teal-400/30 z-10"></span>
          </motion.span>
        </motion.h1>
      </div>

      <motion.p
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
      >
        It was just an inception with our vision to assist small businesses
        during the tough times of the COVID-19 pandemic.
      </motion.p>

      {/* Growth Grid */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mb-6"
      >
        {/* Year Cards */}
        {[
          {
            year: "2020",
            label: "Inception Year",
            bg: "bg-orange-600",
            text: "text-white",
          },
          {
            year: "2021",
            label: "161% Growth",
            bg: "bg-green-600",
            text: "text-white",
          },
          {
            year: "2022",
            label: "-18% Dip",
            bg: "bg-red-600",
            text: "text-white",
          },
          {
            year: "2023",
            label: "8% Growth",
            bg: "bg-blue-600",
            text: "text-white",
          },
          {
            year: "2024",
            label: "42% Anticipated",
            bg: "bg-teal-600",
            text: "text-white",
          },
        ].map(({ year, label, bg, text }) => (
          <motion.div
            key={year}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
            className={`${bg} ${text} p-4 rounded-lg transition-transform transform hover:scale-105`}
          >
            <h3 className="text-lg font-bold sm:text-base md:text-lg">
              {year}
            </h3>
            <p className="text-sm sm:text-xs md:text-sm">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.6 },
          },
        }}
      >
        {chartData && (
          <Chart
            options={chartData}
            series={chartData.series}
            type="area"
            height={350}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default YearGrowthCard;
