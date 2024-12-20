"use client";

import { motion } from "framer-motion";

const growthData = [
  {
    year: 2020,
    text: "It was just an Inception with our Vision & offer small businesses in tough time of Covid Pandemic.",
  },
  { year: 2021, growth: "161%" },
  {
    year: 2022,
    growth: "-18%",
    text: "Faced dip in business due to market turbulence",
  },
  { year: 2023, growth: "8%" },
  { year: 2024, growth: "42%", text: "Anticipating growth" },
];

export function GrowthChart() {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-8">
        YEAR ON YEAR GROWTH
      </h2>
      <div className="flex items-center justify-between relative">
        {growthData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div
              className={`rounded-full w-24 h-24 flex items-center justify-center 
              ${index % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"}`}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{data.year}</div>
                {data.growth && <div className="text-sm">{data.growth}</div>}
              </div>
            </div>
            {data.text && (
              <div className="absolute top-full mt-2 text-sm text-white max-w-[200px]">
                {data.text}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
