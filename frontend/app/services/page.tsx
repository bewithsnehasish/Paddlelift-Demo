"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/services/Industries-Served";
import PartnersSection from "@/components/NewHome/new-partner";
import { ServicesHero } from "@/components/services/hero";
import "./services.css";
import Navbar from "@/components/Navbar";
import InteractiveCards from "@/components/NewHome/newFeaturesection";
import GoogleReviewsCarousel from "@/components/services/GoogleReviews";

const ServicesPage: React.FC = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-hidden bg-[#09090B]">
        <Navbar />
        <ServicesHero />
        <InteractiveCards />
        <PartnersSection />
        <IndustriesServed />
        <GoogleReviewsCarousel />
        <div className="pt-20">
          <Footer />
        </div>
      </div>
      {/* 
      <ElfsightReviews /
      <FeaturesSection />
      Scroll-Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-8 w-12 h-12 bg-blue-500 text-white text-6xl rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ease-in-out"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ServicesPage;
