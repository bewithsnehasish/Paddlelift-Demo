import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselIndustriesProps {
  items: string[];
}

const colors = [
  "linear-gradient(135deg, #00C9FF, #92FE9D)", // Teal to Green
  "linear-gradient(135deg, #FF9A9E, #FAD0C4)", // Pink to Peach
  "linear-gradient(135deg, #FDC830, #F37335)", // Yellow to Orange
  "linear-gradient(135deg, #00B4DB, #0083B0)", // Sky Blue to Dark Blue
  "linear-gradient(135deg, #FFD700, #FF8C00)", // Gold to Dark Orange
  "linear-gradient(135deg, #6A11CB, #2575FC)", // Purple to Blue
  "linear-gradient(135deg, #FF416C, #FF4B2B)", // Red to Orange
  "linear-gradient(135deg, #1D976C, #93F9B9)", // Green to Light Green
];

const CarouselIndustries: React.FC<CarouselIndustriesProps> = ({ items }) => {
  const [currentColumn, setCurrentColumn] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const itemsPerRow = 5; // 5 columns per row
  const rowsPerView = 3; // 3 rows
  const itemsPerColumn = itemsPerRow; // 5 items per column
  const totalColumns = Math.ceil(items.length / itemsPerColumn);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentColumn((prev) => (prev + 1) % totalColumns);
  };

  const handlePrevious = () => {
    setCurrentColumn((prev) => (prev - 1 + totalColumns) % totalColumns);
  };

  // Assign a fixed color to each item based on its name
  const getColorForItem = (item: string) => {
    const itemIndex = items.indexOf(item);
    return colors[itemIndex % colors.length];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div className="relative" ref={carouselRef}>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        disabled={currentColumn === 0}
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
        disabled={currentColumn === totalColumns - 1}
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

      {/* Grid of Cards with Motion Animation */}
      <div className="grid grid-cols-5 gap-4 overflow-hidden">
        {isInView &&
          Array.from({ length: itemsPerRow }).map((_, colIndex) => {
            const columnItems = [];
            for (let row = 0; row < rowsPerView; row++) {
              const index =
                ((currentColumn + colIndex) % totalColumns) + row * itemsPerRow;
              columnItems.push(items[index % items.length]);
            }

            return (
              <motion.div
                key={`column-${currentColumn}-${colIndex}`}
                className="flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {columnItems.map((item, rowIndex) => (
                  <motion.div
                    key={`${item}-${rowIndex}`}
                    className="flex-shrink-0 p-2"
                    initial={{ opacity: 0, x: currentColumn > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: currentColumn > 0 ? -100 : 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div
                      className="relative h-32 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden"
                      style={{
                        background: getColorForItem(item),
                      }}
                    >
                      {/* Rings Pulse Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-24 h-24 rounded-full border-2 border-white/40 animate-ping"></div>
                        <div className="absolute w-20 h-20 rounded-full border-2 border-white/50 animate-ping"></div>
                      </div>
                      {/* Text */}
                      <span className="relative z-20">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default CarouselIndustries;
