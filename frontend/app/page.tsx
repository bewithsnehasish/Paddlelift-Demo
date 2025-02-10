"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import WorldMapSection from "@/components/NewHome/maps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import PartnersSection from "@/components/NewHome/new-partner";
import NewHeroSection from "@/components/NewHome/new-herosection";
import InteractiveCards from "@/components/NewHome/newFeaturesection";
import Testimonials from "@/components/portfolio/testimonial";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <div className="overflow-hidden bg-[#09090B]">
        <Navbar />
        <NewHeroSection />
        {/*
          <HeroSection />
          <GrowthTimeline />
          <ApproachSection />
          <OrganizationalStructure />
          <CompanyTimeline />
        <FeaturesSection />
          */}
        <InteractiveCards />
        <WorldMapSection />
        <PortfolioSection />
        <PartnersSection />
        <Testimonials />
        <div className="pt-20">
          <Footer />
        </div>

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
    </QueryClientProvider>
  );
}
