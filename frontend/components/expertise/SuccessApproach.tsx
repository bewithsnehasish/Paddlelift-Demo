"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  FileSearch,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consult",
    icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7" />,
    description: "Industry Benchmarking / Market Mapping / Budgeting",
    color: "from-[#FF0080] via-[#FF00FF] to-[#8A2BE2]",
    glowColor: "group-hover:shadow-[#FF0080]/50",
  },
  {
    id: 2,
    title: "Access",
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
    description: "Recruitment Plan / Search Strategy / Sourcing & Head-hunting",
    color: "from-[#00FF00] via-[#00FFFF] to-[#0080FF]",
    glowColor: "group-hover:shadow-[#00FF00]/50",
  },
  {
    id: 3,
    title: "Assess",
    icon: <FileSearch className="w-6 h-6 sm:w-7 sm:h-7" />,
    description: "Assessment Development / Interview Service",
    color: "from-[#FF3D00] via-[#FF9100] to-[#FFEA00]",
    glowColor: "group-hover:shadow-[#FF3D00]/50",
  },
  {
    id: 4,
    title: "Select",
    icon: <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    description:
      "Candidate & Stakeholder Management / Decisioning & Negotiation",
    color: "from-[#7C4DFF] via-[#536DFE] to-[#00B0FF]",
    glowColor: "group-hover:shadow-[#7C4DFF]/50",
  },
  {
    id: 5,
    title: "Onboard",
    icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    description: "Candidate Engagements / Client Feedbacks",
    color: "from-[#FF1744] via-[#FF4081] to-[#D500F9]",
    glowColor: "group-hover:shadow-[#FF1744]/50",
  },
];

export default function SuccessApproach() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white max-w-4xl leading-[110%]">
            Our Success <span className="text-teal-400">Approach</span>
          </h2>
          <p className="text-white text-base sm:text-lg font-medium mt-2 max-w-lg">
            A comprehensive five-step methodology for exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF00FF]/10 via-[#00FFFF]/5 to-[#FF1744]/10 blur-3xl -z-10" />
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 25 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className={`group relative ${
                index % 2 === 0 ? "ml-0" : "ml-auto"
              } mb-6 w-full sm:w-[85%] md:w-[75%]`}
              style={{
                transform: `translateY(${index * 1.5}rem)`,
              }}
            >
              <Card
                className={`
                relative overflow-hidden border-0
                bg-gradient-to-r ${step.color}
                backdrop-blur-xl bg-opacity-20
                transition-all duration-300
                group-hover:translate-y-[-0.25rem]
                group-hover:shadow-xl ${step.glowColor}
                group-hover:scale-[1.01]
              `}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative p-4 sm:p-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform duration-300 group-hover:border-white/50">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:border-white/50 group-hover:bg-white/30 transition-all duration-300">
                          Step {step.id}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:scale-[1.02] transition-transform duration-300">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium tracking-wide">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:bg-white/20 transition-all duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
