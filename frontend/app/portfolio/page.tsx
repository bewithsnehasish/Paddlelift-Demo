import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/portfolio/herosection";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import Testimonials from "@/components/portfolio/testimonial";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default MaintenancePage;
