"use client";
import React from "react";
import { motion } from "framer-motion";

interface WordPullUpProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export const WordPullUp: React.FC<WordPullUpProps> = ({
  text,
  className = "",
  wordClassName = "",
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className={`inline-block pr-[15px] ${wordClassName}`}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
};
