"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import "./globals.css";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import WorldMapSection from "@/components/NewHome/maps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import PartnersSection from "@/components/NewHome/new-partner";
import NewHeroSection from "@/components/NewHome/new-herosection";

export default function Home() {
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
    <div className="overflow-hidden">
      <Navbar />
      <NewHeroSection />
      {/*
      <HeroSection />
        <GrowthTimeline />
        <ApproachSection />
        <OrganizationalStructure />
        <CompanyTimeline />
        */}
      <FeaturesSection />
      <WorldMapSection />
      <PortfolioSection />
      <PartnersSection />
      <Footer />

      {/* Scroll-Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-8 w-12 h-12 bg-blue-500 text-white text-6xl rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
}
