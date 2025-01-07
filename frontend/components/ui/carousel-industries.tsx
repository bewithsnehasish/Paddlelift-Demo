import React, { useState } from "react";

interface IndustriesGridProps {
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

const IndustriesGrid: React.FC<IndustriesGridProps> = ({ items }) => {
  const [currentColumn, setCurrentColumn] = useState(0);
  const itemsPerColumn = 15; // 5x3 grid
  const totalColumns = Math.ceil(items.length / itemsPerColumn);

  const handleNext = () => {
    setCurrentColumn((prev) => (prev + 1) % totalColumns);
  };

  const handlePrevious = () => {
    setCurrentColumn((prev) => (prev - 1 + totalColumns) % totalColumns);
  };

  const startIndex = currentColumn * itemsPerColumn;
  const endIndex = startIndex + itemsPerColumn;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300"
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
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-300"
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

      {/* Grid of Cards */}
      <div className="grid grid-cols-5 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2 transform transition-transform duration-300 hover:scale-125"
          >
            <div
              className="relative h-32 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg overflow-hidden"
              style={{
                background: colors[index % colors.length],
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>

              {/* Rings Pulse Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full border-2 border-white/20 animate-ping"></div>
                <div className="absolute w-20 h-20 rounded-full border-2 border-white/30 animate-ping"></div>
              </div>

              {/* Text */}
              <span className="relative z-20">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesGrid;
