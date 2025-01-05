import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { fadeInUp, expandDetails, listItem } from "./animations/variants";
import type { StepCardProps } from "./types";
import type { LucideIcon } from "lucide-react"; // Import the LucideIcon type

export function StepCard({
  title,
  subtitle,
  description,
  color,
  iconColor,
  gradient,
  icon,
  index,
  isActive,
  onClick,
}: StepCardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as LucideIcon; // Explicitly type the Icon variable
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group cursor-pointer",
        "p-8 rounded-2xl transition-all duration-300",
        isActive ? gradient : "hover:bg-gray-50/20",
        "border-2 border-transparent",
        isActive && "border-current",
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-6">
        <motion.div
          className={cn(
            "relative flex items-center justify-center",
            "w-16 h-16 rounded-2xl shadow-lg",
            `bg-gradient-to-br ${iconColor}`,
          )}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 400 },
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <div className="flex-1 space-y-3">
          <motion.div
            className="flex items-baseline gap-3"
            animate={{ scale: isActive ? 1.05 : 1 }}
          >
            <h3 className="text-2xl font-bold ">{title}</h3>
            <span className="text-sm font-medium ">0{index + 1}</span>
          </motion.div>

          <p className="text-lg ">{subtitle}</p>

          <motion.ul
            variants={expandDetails}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="space-y-2 origin-top overflow-hidden"
          >
            {description.map((item, i) => (
              <motion.li
                key={item}
                variants={listItem}
                className="flex items-center gap-3"
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    `bg-gradient-to-r ${color}`,
                  )}
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
            `bg-gradient-to-r ${color} opacity-5`,
          )}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}
    </motion.div>
  );
}
