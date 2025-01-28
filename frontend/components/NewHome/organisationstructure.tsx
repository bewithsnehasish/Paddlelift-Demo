"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { MainMenusGradientCard } from "../eldoraui/animatedcard";

interface CardData {
  heading: string;
  description: string;
}

interface OrganizationalStructureData {
  organizational_structure_cards: {
    [key: string]: CardData;
  };
}

export default function OrganizationalStructure() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [cardsData, setCardsData] =
    useState<OrganizationalStructureData | null>(null);
  const controlsImage = useAnimation();
  const controlsCards = useAnimation();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://paddlelift.onrender.com/components/organizational-structure/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate image and cards
            controlsImage.start({
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            });
            controlsCards.start({
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              },
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controlsImage, controlsCards]);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <div className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl font-bold mb-4 text-white max-w-4xl leading-[110%]">
          Organizational <span className="text-teal-400">Structure</span>
        </h2>
        <p className="text-white text-lg font-semibold mt-4 max-w-lg">
          Dedicated Customized Solution for clients
        </p>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-[60vh] flex justify-center items-center">
        {/* Centered Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsImage}
          className="absolute w-full h-auto flex justify-center items-center"
        >
          <Image
            src="/Plogo.png"
            alt="Organizational Structure"
            className="w-1/6 h-auto object-contain"
            width={200}
            height={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </motion.div>

        {/* Corner Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsCards}
          className="absolute top-4 left-4"
          style={{ width: "400px" }}
        >
          {/*
          <MainMenusGradientCard
            title="Technology / IT Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Tech Hiring for Clients."
          />
          */}
          <MainMenusGradientCard
            title={
              cardsData?.organizational_structure_cards.card1.heading ?? "Title"
            }
            description={
              cardsData?.organizational_structure_cards.card1.description ??
              "Default Description"
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsCards}
          className="absolute top-4 right-4"
          style={{ width: "400px" }}
        >
          {/*
          <MainMenusGradientCard
            title="Non-Tech / Functional Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Non-Tech Hiring for Clients."
          />
          */}
          <MainMenusGradientCard
            title={
              cardsData?.organizational_structure_cards.card2.heading ?? "Title"
            }
            description={
              cardsData?.organizational_structure_cards.card2.description ??
              "Default Description"
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsCards}
          className="absolute bottom-4 left-4"
          style={{ width: "400px" }}
        >
          {/*
          <MainMenusGradientCard
            title="Staffing / Payroll / HR Management Vertical"
            description="Dedicated team for managing Payroll & Ops for domestic & international clients."
          />
          */}
          <MainMenusGradientCard
            title={
              cardsData?.organizational_structure_cards.card3.heading ?? "Title"
            }
            description={
              cardsData?.organizational_structure_cards.card3.description ??
              "Default Description"
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controlsCards}
          className="absolute bottom-4 right-4"
          style={{ width: "400px" }}
        >
          {/*
          <MainMenusGradientCard
            title="Customer Success / Growth Management Vertical"
            description="Dedicated vertical to ensure smooth business engagement with clients."
          />
          */}
          <MainMenusGradientCard
            title={
              cardsData?.organizational_structure_cards.card4.heading ?? "Title"
            }
            description={
              cardsData?.organizational_structure_cards.card4.description ??
              "Default Description"
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
