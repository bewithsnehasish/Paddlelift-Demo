"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Our journey began with a vision to transform the industry",
  },
  {
    year: "2016",
    title: "First Major Project",
    description: "Successfully launched our flagship product to market",
  },
  {
    year: "2017",
    title: "International Expansion",
    description: "Opened new offices in Europe and Asia",
  },
  {
    year: "2018",
    title: "Innovation Award",
    description: "Recognized for breakthrough technology achievements",
  },
  {
    year: "2019",
    title: "Global Recognition",
    description: "Reached 1 million users worldwide",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineEvent;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="absolute top-8 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
        <Card
          className={`w-80 mx-auto ${index % 2 === 0 ? "-mt-8" : "mt-24"} transform transition-all duration-300 hover:scale-105`}
        >
          <CardContent className="p-4">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {item.year}
            </span>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-muted-foreground mt-1">{item.description}</p>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
          <div className="w-[2px] h-full bg-gradient-to-b from-purple-400 to-pink-600" />
        </div>
        <Card className="flex-1 transform transition-all duration-300 hover:scale-105">
          <CardContent className="p-4">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {item.year}
            </span>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-muted-foreground mt-1">{item.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>

      {/* Desktop Version */}
      <div className="hidden md:block relative py-20">
        {/* Horizontal Line */}
        <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-600" />

        {/* Timeline Items */}
        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div key={item.year} className="flex-1">
              <TimelineItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden space-y-8">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.year} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
