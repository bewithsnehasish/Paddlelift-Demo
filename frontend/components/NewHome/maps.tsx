"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ApiResponse {
  description: string;
}

export default function WorldMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { data } = useQuery<ApiResponse>({
    queryKey: ["global-expansion"],
    queryFn: async () => {
      const response = await axios.get(
        "https://paddlelift.onrender.com/components/operations-around-the-world/",
      );
      return response.data;
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const growthData = [
    { year: "Europe", color: "bg-[#ef1f5b] text-[#09090B]" },
    { year: "Middle East", color: "bg-[#eff610] text-[#09090B]" },
    { year: "India", color: "bg-[#029081] text-[#09090B]" },
    { year: "Africa", color: "bg-[#0065e1] text-[#09090B]" },
    { year: "Australia", color: "bg-[#f9b600] text-[#09090B]" },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#09090B] snap-start py-10 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-3xl font-bold mb-4 text-white max-w-3xl leading-[110%]"
        >
          Operations Around the <span className="text-teal-400">World</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl font-semibold md:text-xs my-4 max-w-lg"
        >
          {data?.description}
        </motion.p>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/images/map.gif"
            alt="World Map"
            unoptimized
            className="object-contain"
            width={800} // Adjust the width here
            height={300} // Adjust the height here
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBzdHlsZT0iIiBmaWxsPSIjZmZmIiAvPgo="
          />
        </motion.div>

        {/* Year Data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mb-6">
          {growthData.map((data) => (
            <motion.div
              key={data.year}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.4 }}
              className={`p-4 ${data.color} rounded-lg transition-transform transform hover:scale-105`}
            >
              <h3 className="text-lg font-bold">{data.year}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
