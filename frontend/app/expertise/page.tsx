"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpertisePage from "@/components/expertise/herosection";
import OrganizationalStructure from "@/components/NewHome/organisationstructure";
import RecruitmentProcess from "@/components/expertise/Requirement/RequirementProcess";

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
      <ExpertisePage />
      <OrganizationalStructure />
      <RecruitmentProcess />
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
