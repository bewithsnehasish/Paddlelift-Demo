"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { cardVariants, detailsVariants, itemVariants } from "./animations";
import type { StepCardProps } from "./types";

export function StepCard({
  title,
  subtitle,
  description,
  color,
  gradient,
  icon,
  index,
  isActive,
  onClick,
  total,
}: StepCardProps) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      className={cn(
        "relative group cursor-pointer",
        "p-8 rounded-2xl transition-all duration-500",
        isActive ? gradient : "hover:bg-gray-50",
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-6">
        <motion.div
          className={cn(
            "relative flex items-center justify-center",
            "w-16 h-16 rounded-2xl bg-white shadow-lg",
            `bg-gradient-to-br ${color}`,
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <div className="flex-1 space-y-2">
          <motion.div
            initial={false}
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <span className="text-sm font-medium text-gray-500">
              0{total - index}
            </span>
          </motion.div>

          <p className="text-lg text-gray-600">{subtitle}</p>

          <motion.ul
            variants={detailsVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="mt-4 space-y-2 origin-top"
          >
            {description.map((item, i) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-600"
              >
                <motion.div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    `bg-gradient-to-r ${color}`,
                  )}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className={cn(
            "absolute inset-0 rounded-2xl",
            "border-2 border-transparent",
            `bg-gradient-to-r ${color} opacity-10`,
          )}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        />
      )}
    </motion.div>
  );
}
