"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "Partnering with Paddlelift for our hiring needs at Otipy/Crofarm was exceptional. Their industry knowledge and commitment ensured highly qualified candidates who fit our team perfectly. Their thorough vetting and proactive communication saved us time and addressed our concerns, helping us fill critical positions with outstanding individuals. We highly recommend Paddlelift for reliable hiring consulting.",
    name: "Sandeep Kumar",
    title: "AVP – Human Resources | Otipy",
    avatar:
      "https://drive.google.com/thumbnail?id=1WroSFIWOIzZUMdC57vLj91JbM2DlvYSq&sz=s4000",
  },
  {
    quote:
      "Collaborating with Paddlelift has been a game-changer for our recruitment strategy at ITC. Their deep understanding of our business needs and meticulous approach have led to the seamless onboarding of high-caliber professionals who align perfectly with our company culture. Paddlelift's dedication to excellence, proactive communication, and quick turnaround time make them a trusted partner, and we look forward to continuing our successful collaboration.",
    name: "Mrinal Pallial",
    title: "Sr. HR – Business Partner | ITC",
    avatar:
      "https://drive.google.com/thumbnail?id=1Pnx_7YkewgEdmR4K9VX0NLb5-nqlbAzl&sz=s4000",
  },
  {
    quote:
      "I loved the pace at which Paddlelift works, their quick turnaround time with relevant profiles, and the high quality of candidates they provide. This sets them apart from other recruitment agencies. I wish the Paddlelift team all the best and urge them to continue their excellent work, as it greatly helps us founders.",
    name: "Mayank Bhawsinghka",
    title: "Founder & CEO | Nirmaan e-store",
    avatar:
      "https://drive.google.com/thumbnail?id=1MxN--Xo2WEhFUM_ePZi5hmYSDz6gfQKe&sz=s4000",
  },
];

const SLIDE_INTERVAL = 5000;
const INTERSECTION_THRESHOLD = 0.1;

const slideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length,
    );
  }, []);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: INTERSECTION_THRESHOLD },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(handleNext, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const NavButton = ({
    onClick,
    direction,
    children,
  }: {
    onClick: () => void;
    direction: "left" | "right";
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-2 md:left-4" : "right-2 md:right-4"
      } bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full 
      shadow-lg transition-all transform hover:scale-110 focus:outline-none 
      focus:ring-2 focus:ring-teal-400 z-10`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
    >
      {children}
    </button>
  );

  return (
    <div ref={sectionRef} className="overflow-hidden bg-[#09090B]">
      <div className="relative max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-3xl font-bold mb-4 text-white max-w-2xl leading-[1.1]"
        >
          What Our <span className="text-teal-400">Clients</span> Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl md:text-sm font-semibold my-4 pb-5 max-w-lg"
        >
          Global Reach, Local Expertise
        </motion.p>

        <div
          className="relative mt-8 md:mt-16 px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <NavButton onClick={handlePrev} direction="left">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </NavButton>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto">
                    <Image
                      src={TESTIMONIALS_DATA[currentIndex].avatar}
                      alt={TESTIMONIALS_DATA[currentIndex].name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 192px"
                      priority
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-gray-700 text-base md:text-lg lg:text-xl italic mb-6">
                    {TESTIMONIALS_DATA[currentIndex].quote}
                  </p>
                  <div className="text-right">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                      {TESTIMONIALS_DATA[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <NavButton onClick={handleNext} direction="right">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </NavButton>
        </div>
      </div>
    </div>
  );
}
