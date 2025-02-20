"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

interface PartnerLogo {
  id: number;
  src: string;
  name: string;
}

const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controlsHeader = useAnimation();
  const controlsPartners = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogo[]>([]);

  useEffect(() => {
    // Fetch client logos from the API
    const fetchClientLogos = async () => {
      try {
        const response = await axios.get(
          "https://paddlelift.onrender.com/components/clients/",
        );
        setPartnerLogos(response.data.clients_logos);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      }
    };

    fetchClientLogos();
  }, []);

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
  const firstRowLogos = partnerLogos.slice(
    0,
    Math.ceil(partnerLogos.length / 2),
  );
  const secondRowLogos = partnerLogos.slice(Math.ceil(partnerLogos.length / 2));

  return (
    <section
      ref={sectionRef}
      className="bg-[#09090B] snap-start py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="pb-4">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={headerVariants}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
              Our <span className="text-teal-400">Clients</span>
            </h2>
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
    <div className="group relative flex-shrink-0 w-40 h-40">
      <div className="absolute inset-0 bg-white rounded-full"></div>
      <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-28 max-w-28 m-8 object-contain group-hover:scale-102 transition-transform duration-300"
          width={196}
          height={196}
        />
      </div>
    </div>
  );
};

export default PartnersSection;
