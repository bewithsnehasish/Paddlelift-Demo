import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const colors = [
  "linear-gradient(135deg, #1A2980, #26D0CE)", // Deep Blue to Cyan
  "linear-gradient(135deg, #8E2DE2, #4A00E0)", // Purple Combo
  "linear-gradient(135deg, #2C3E50, #3498DB)", // Navy to Blue
  "linear-gradient(135deg, #4B134F, #C94B4B)", // Purple to Red
  "linear-gradient(135deg, #00467F, #A5CC82)", // Ocean Blue to Green
  "linear-gradient(135deg, #1f4037, #99f2c8)", // Dark Green to Mint
  "linear-gradient(135deg, #5614B0, #DBD65C)", // Purple to Yellow
  "linear-gradient(135deg, #00C9FF, #92FE9D)",
  "linear-gradient(135deg, #FF9A9E, #FAD0C4)",
  "linear-gradient(135deg, #FDC830, #F37335)",
  "linear-gradient(135deg, #00B4DB, #0083B0)",
  "linear-gradient(135deg, #FFD700, #FF8C00)",
  "linear-gradient(135deg, #6A11CB, #2575FC)",
  "linear-gradient(135deg, #FF416C, #FF4B2B)",
  "linear-gradient(135deg, #1D976C, #93F9B9)",
];

const CarouselCard = ({ item, color }: { item: string; color: string }) => (
  <div
    className="flex-shrink-0 w-48 h-32 flex items-center justify-center rounded-lg text-white font-bold text-lg relative overflow-hidden"
    style={{ background: color }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-24 h-24 rounded-full border-2 border-white/30 animate-ping"></div>
      <div className="absolute w-20 h-20 rounded-full border-2 border-white/40 animate-ping delay-150"></div>
      <div className="absolute w-16 h-16 rounded-full border-2 border-white/50 animate-ping delay-300"></div>
    </div>
    <span className="relative z-20">{item}</span>
  </div>
);

const CarouselRow = ({
  items,
  speed = 80, // Increased base speed for slower movement
}: {
  items: Array<{ item: string; color: string }>;
  speed?: number;
}) => (
  <div className="flex space-x-4 animate-scroll">
    <motion.div
      className="flex space-x-4"
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {/* Double the items to ensure smooth infinite scroll */}
      {[...items, ...items].map((data, index) => (
        <CarouselCard
          key={`${data.item}-${index}`}
          item={data.item}
          color={data.color}
        />
      ))}
    </motion.div>
  </div>
);

// Rest of the components remain the same...
const CarouselIndustries: React.FC<{ items: string[] }> = ({ items }) => {
  const [rowData, setRowData] = useState<
    Array<Array<{ item: string; color: string }>>
  >([]);

  useEffect(() => {
    // Function to ensure different colors for consecutive items
    const getUniqueColor = (usedColors: Set<string>) => {
      let color;
      do {
        color = colors[Math.floor(Math.random() * colors.length)];
      } while (usedColors.has(color));
      usedColors.add(color);
      if (usedColors.size >= colors.length / 2) {
        usedColors.clear();
      }
      return color;
    };

    const generateRowData = () => {
      const usedColors = new Set<string>();

      const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      return Array(3)
        .fill(null)
        .map(() =>
          shuffleArray(items).map((item) => ({
            item,
            color: getUniqueColor(usedColors),
          })),
        );
    };

    setRowData(generateRowData());
  }, []); // Empty dependency array ensures this only runs once

  if (!rowData.length) return null;

  return (
    <div className="overflow-hidden space-y-4">
      {rowData.map((row, index) => (
        <CarouselRow
          key={index}
          items={row}
          speed={80 + index * 10} // Slower speeds with bigger differences between rows
        />
      ))}
    </div>
  );
};

const MainSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeInOut" },
    }),
  };

  const items = [
    "IT",
    "SaaS",
    "AgriTech",
    "HealthTech",
    "EV",
    "FinTech",
    "EdTech",
    "E-Commerce",
    "Semiconductor",
    "FoodTech",
    "D2C",
    "Automobile",
    "HRTech",
    "Energy & Utilities",
    "SportsTech",
    "InsureTech",
    "Manufacturing",
    "Media",
    "Entertainment",
    "InsurTech",
    "FMCG",
    "Logistics",
    "Supply Chain",
  ];

  return (
    <section ref={ref} className="bg-[#09090B] py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white flex flex-wrap mb-4">
              <motion.span
                className="text-teal-400 relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={0}
              >
                Industries
              </motion.span>
              <motion.span
                className="text-white relative mr-2"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={1}
              >
                We
              </motion.span>
              <motion.span
                className="text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={wordPullAnimation}
                custom={2}
              >
                Serve
              </motion.span>
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-xl font-semibold md:text-sm my-4 max-w-lg"
          >
            We partner with diverse industries, delivering innovative solutions
            that drive digital transformation and sustainable growth. Our
            expertise spans across multiple sectors, enabling businesses to
            thrive in the modern marketplace.
          </motion.p>
        </div>

        <div className="relative">
          <CarouselIndustries items={items} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
