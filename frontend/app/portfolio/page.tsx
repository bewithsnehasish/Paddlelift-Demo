import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/portfolio/herosection";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import Testimonials from "@/components/portfolio/testimonial";
import CompanyTestimonials from "@/components/portfolio/company-testimonials";
import ElfsightReviews from "@/components/services/elfsight";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <PortfolioSection />
        <Testimonials />
        <CompanyTestimonials />
        <ElfsightReviews />
        <Footer />
      </div>
    </>
  );
};

export default MaintenancePage;
