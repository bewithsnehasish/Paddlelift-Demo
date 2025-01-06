import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
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

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to create a seamless loop
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 1; // Adjust scroll speed (higher = faster)

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;

        // Reset scroll position to create a seamless loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      <div className="flex w-max">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] p-2" // Responsive sizes
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

export default Carousel;
