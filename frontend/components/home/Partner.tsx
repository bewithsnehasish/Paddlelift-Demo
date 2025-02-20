"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface PartnerLogo {
  id: number;
  src: string;
  name: string;
}

const partnerLogos: PartnerLogo[] = [
  { id: 1, src: "/Partner Logos/Royal_Enfield.png", name: "Royal Enfield" },
  { id: 2, src: "/Partner Logos/Gruner.png", name: "Gruner" },
  { id: 3, src: "/Partner Logos/ITC.png", name: "ITC" },
  { id: 4, src: "/Partner Logos/Sanskriti.png", name: "Sanskriti" },
  { id: 5, src: "/Partner Logos/ximkart.png", name: "ximkart" },
  { id: 6, src: "/Partner Logos/Stancebeam.png", name: "Stancebeam" },
  { id: 7, src: "/Partner Logos/WazirX.png", name: "WazirX" },
  { id: 9, src: "/Partner Logos/liquiloans.png", name: "liquiloans" },
  { id: 10, src: "/Partner Logos/park.png", name: "park" },
  { id: 11, src: "/Partner Logos/werize_logo.png", name: "werize_logo" },
  { id: 12, src: "/Partner Logos/Terra_Motors.png", name: "Terra Motors" },
  { id: 14, src: "/Partner Logos/Otipy.png", name: "Otipy" },
  { id: 16, src: "/Partner Logos/Healthkart.png", name: "Healthkart" },
  { id: 17, src: "/Partner Logos/Farmley.png", name: "Farmley" },
  { id: 18, src: "/Partner Logos/Field Assist.png", name: "Field Assist" },
  { id: 19, src: "/Partner Logos/Draup.png", name: "Draup" },
  { id: 20, src: "/Partner Logos/Locofast.png", name: "Locofast" },
  { id: 21, src: "/Partner Logos/Eureka Forbes.png", name: "Eureka Forbes" },
  { id: 23, src: "/Partner Logos/Fresh_to_home.png", name: "Fresh_to_home" },
  { id: 24, src: "/Partner Logos/Getsupp.png", name: "Getsupp" },
  { id: 25, src: "/Partner Logos/Aditya Birls.png", name: "Aditya Birla" },
  { id: 26, src: "/Partner Logos/Lifelong.png", name: "Lifelong" },
  { id: 27, src: "/Partner Logos/Lendingkart.png", name: "Lendingkart" },
  { id: 28, src: "/Partner Logos/Mindtickle.png", name: "Mindtickle" },
  { id: 29, src: "/Partner Logos/NoBroker.png", name: "NoBroker" },
  {
    id: 30,
    src: "/Partner Logos/Battery_Smart_Logo.png",
    name: "Battery Smart",
  },
  { id: 31, src: "/Partner Logos/Blinkit_Logo.png", name: "Blinkit" },
  { id: 32, src: "/Partner Logos/Joveo.png", name: "Joveo" },
  { id: 33, src: "/Partner Logos/Coverfox.png", name: "Coverfox" },
  { id: 34, src: "/Partner Logos/DG Liger.png", name: "DG Liger" },
  { id: 35, src: "/Partner Logos/Bharat agri.png", name: "Bharat agri" },
];

const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controlsHeader = useAnimation();
  const controlsPartners = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate header
          controlsHeader.start({
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            },
          });

          // Animate partners
          controlsPartners.start({
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.4,
              staggerChildren: 0.1,
            },
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsHeader, controlsPartners]);

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  // Divide the partnerLogos array into two parts
  const firstRowLogos = partnerLogos.slice(0, 17);
  const secondRowLogos = partnerLogos.slice(17);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-[#09090B] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="pb-4 md:pb-20">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={headerVariants}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
              <span className="text-teal-400">Our</span> Clients
            </h2>
            <p className="mt-3 text-base md:text-lg">
              Our squad of seasoned specialists. With different team setups for
              IT and non-IT needs, we are equipped with street-smart knowledge
              and the know-how to serve our customers with swift turnaround
              times. This makes us your gateway to top-tier talent that aligns
              perfectly with your unique requirements.
            </p>
          </motion.div>

          {/* Marquee effect with two rows */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            className="relative overflow-hidden mt-12"
          >
            <MarqueeRow logos={firstRowLogos} direction="left" />
            <MarqueeRow logos={secondRowLogos} direction="right" />
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay and Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top and Bottom gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-950 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-950 to-transparent"></div>

        {/* Glowing Circular Spots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -left-1/4 top-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

interface MarqueeRowProps {
  logos: PartnerLogo[];
  direction: "left" | "right";
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, direction }) => {
  return (
    <div className="flex overflow-hidden py-8">
      <div
        className={`flex animate-marquee${direction === "right" ? "-reverse" : ""} gap-12`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <LogoCard key={`${logo.id}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

interface LogoCardProps {
  logo: PartnerLogo;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  return (
    <div className="group relative flex-shrink-0 w-32 h-32">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-200 to-gray-500"></div>
      <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
        <Image
          src={logo.src}
          alt={logo.name}
          className="max-h-28 max-w-28 object-contain group-hover:scale-110 transition-transform duration-300"
          width={144}
          height={144}
        />
      </div>
    </div>
  );
};

export default PartnersSection;
