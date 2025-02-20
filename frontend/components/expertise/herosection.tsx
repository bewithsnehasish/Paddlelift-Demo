"use client";

import React, { useEffect, useState } from "react";
import { Users, TrendingUp, FileCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}

interface CardData {
  heading: string;
  description: string;
}

interface ApiResponse {
  what_sets_us_apart_cards: {
    [key: string]: CardData;
  };
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
    className="group relative transition-all duration-300"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl transition-all duration-300 group-hover:from-blue-500/40 group-hover:to-purple-500/40" />
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative h-full rounded-2xl border border-white/10 bg-gray-900/40 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center space-x-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/5 p-3"
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  </motion.div>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 bg-[#09090B]"
    />
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B]" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>
);

const getIcon = (heading: string) => {
  switch (heading) {
    case "Expert Team":
      return Users;
    case "Proven Success":
      return TrendingUp;
    case "Tailored Strategy":
      return FileCheck;
    case "Personalized Approach":
      return UserCheck;
    default:
      return Users;
  }
};

export default function ExpertisePage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://paddlelift.onrender.com/components/what-sets-us-apart/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const cards = data ? Object.values(data.what_sets_us_apart_cards) : [];

  return (
    <div className="relative min-h-screen py-10 md:py-20 overflow-hidden">
      <BackgroundPattern />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-4xl font-bold text-white">
            What Sets Us
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-red-600"
            >
              {" "}
              Apart
            </motion.span>
          </h1>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <ExpertiseCard
              key={card.heading}
              title={card.heading}
              description={card.description}
              icon={getIcon(card.heading)}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
