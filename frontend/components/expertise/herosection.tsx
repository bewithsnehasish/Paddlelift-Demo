"use client";

import {
  Users,
  TrendingUp,
  FileCheck,
  UserCheck,
  LucideIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

interface MainHeadingProps {
  words: string[];
  highlight?: number;
}

// Animation variants
const animations = {
  wordPull: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const MainHeading = memo(({ words, highlight = -1 }: MainHeadingProps) => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <div className="space-y-2 py-8" ref={headingRef}>
      <h1
        className="text-3xl md:text-5xl font-bold text-white flex flex-wrap gap-4"
        role="heading"
        aria-level={1}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`relative ${index === highlight ? "text-emerald-400" : "text-white"}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animations.wordPull}
            custom={index}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
});

MainHeading.displayName = "MainHeading";

const ExpertiseCard = ({
  title,
  description,
  icon: Icon,
  index,
}: ExpertiseCardProps) => {
  const colors = [
    "from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30",
    "from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
    "from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30",
    "from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} blur-xl transition-all duration-500`}
      />
      <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

ExpertiseCard.displayName = "ExpertiseCard";

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#09090B] opacity-90" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center" />
    {/*
     */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B]" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
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
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <MainHeading words={["What", "Sets", "Us", "Apart"]} highlight={1} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
