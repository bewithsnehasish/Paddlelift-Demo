import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import Testimonials from "@/components/portfolio/testimonial";
import CompanyTestimonials from "@/components/portfolio/company-testimonials";
import Expertisehero from "@/components/expertise/expertise-hero";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Expertisehero />
      <PortfolioSection />
      <Testimonials />
      <CompanyTestimonials />
      <Footer />
    </>
  );
};

export default MaintenancePage;
