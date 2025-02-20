"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselIndustriesProps {
  items: string[];
}

const colors = [
  "linear-gradient(135deg, #00C9FF, #92FE9D)",
  "linear-gradient(135deg, #FF9A9E, #FAD0C4)",
  "linear-gradient(135deg, #FDC830, #F37335)",
  "linear-gradient(135deg, #00B4DB, #0083B0)",
  "linear-gradient(135deg, #FFD700, #FF8C00)",
  "linear-gradient(135deg, #6A11CB, #2575FC)",
  "linear-gradient(135deg, #FF416C, #FF4B2B)",
  "linear-gradient(135deg, #1D976C, #93F9B9)",
];

const CarouselIndustries: React.FC<CarouselIndustriesProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleColumns, setVisibleColumns] = useState(5);
  const [itemsPerColumn, setItemsPerColumn] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleColumns(1);
        setItemsPerColumn(1);
      } else if (window.innerWidth < 768) {
        setVisibleColumns(2);
        setItemsPerColumn(2);
      } else if (window.innerWidth < 1024) {
        setVisibleColumns(3);
        setItemsPerColumn(3);
      } else {
        setVisibleColumns(5);
        setItemsPerColumn(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, items.length / itemsPerColumn - visibleColumns),
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getColorForItem = (index: number) => {
    return colors[index % colors.length];
  };

  const columnVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        disabled={
          currentIndex >= items.length / itemsPerColumn - visibleColumns
        }
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div
        className="grid gap-4 overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${visibleColumns}, 1fr)` }}
      >
        <AnimatePresence initial={false} custom={currentIndex}>
          {[...Array(visibleColumns)].map((_, columnIndex) => (
            <motion.div
              key={currentIndex + columnIndex}
              custom={currentIndex}
              variants={columnVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {[...Array(itemsPerColumn)].map((_, rowIndex) => {
                const itemIndex =
                  (currentIndex + columnIndex) * itemsPerColumn + rowIndex;
                const item = items[itemIndex];
                return item ? (
                  <motion.div
                    key={item}
                    className="flex-shrink-0 p-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="relative h-32 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden"
                      style={{
                        background: getColorForItem(itemIndex),
                      }}
                    >
                      {/* Rings Pulse Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-24 h-24 rounded-full border-2 border-white/40 animate-ping"></div>
                        <div className="absolute w-20 h-20 rounded-full border-2 border-white/50 animate-ping"></div>
                      </div>
                      <span className="relative z-20">{item}</span>
                    </div>
                  </motion.div>
                ) : null;
              })}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselIndustries;
