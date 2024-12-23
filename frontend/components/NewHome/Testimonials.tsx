"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
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

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length,
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  return (
    <div ref={sectionRef} className="overflow-hidden bg-[#09090B] ">
      <div className="relative max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
        >
          What Our <span className="text-teal-400">Clients</span> Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl font-semibold md:text-base my-4 pb-5 max-w-lg"
        >
          Global Reach, Local Expertise
        </motion.p>

        {/* Carousel */}
        <div
          className="relative mt-16 px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center p-8 gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <Image
                    src={testimonialsData[currentIndex].avatar}
                    alt={testimonialsData[currentIndex].name}
                    className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto"
                    width={192}
                    height={192}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                    {testimonialsData[currentIndex].quote}
                  </p>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      {testimonialsData[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonialsData[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
