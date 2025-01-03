"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProcessTimelineProps } from "./types";

export function ProcessTimeline({
  activeStep,
  progress,
}: ProcessTimelineProps) {
  return (
    <div className="fixed left-24 top-1/2 -translate-y-1/2 h-[60vh] w-1 hidden lg:block">
      <div className="relative h-full bg-gray-200 rounded-full">
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-violet-500 to-rose-500 rounded-full"
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {[0, 25, 50, 75, 100].map((position, index) => (
          <motion.div
            key={position}
            className={cn(
              "absolute w-4 h-4 -left-1.5 rounded-full border-2 border-white",
              index + 1 <= activeStep ? "bg-violet-500" : "bg-gray-200",
            )}
            style={{ bottom: `${position}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
