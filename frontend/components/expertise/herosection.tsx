"use client";

import React from "react";
import { Users, TrendingUp, FileCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

// Define the interface for the props
interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
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

export default function ExpertisePage() {
  const expertiseData = [
    {
      title: "Expert Team",
      description:
        "Our squad of seasoned specialists, Tier 1 pedigree holders with 45+ years of combined expertise in talent acquisition and HR management.",
      icon: Users,
    },
    {
      title: "Proven Success",
      description:
        "Deep industry insights delivering high-quality talent & HR practices, with global scale across multiple fields and consistent success rates.",
      icon: TrendingUp,
    },
    {
      title: "Tailored Strategy",
      description:
        "Masterfully guiding from initial setup to rapid scaling, ensuring hires align with your vision and organizational goals.",
      icon: FileCheck,
    },
    {
      title: "Personalized Approach",
      description:
        "Beyond candidates, we promote your brand and identify crème talent eligible for hiring, ensuring perfect cultural and skill matches.",
      icon: UserCheck,
    },
  ];

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
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
