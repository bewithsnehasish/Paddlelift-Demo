import ServicesHero from "@/components/services/hero";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import "./services.css";

import React from "react";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/services/Industries-Served";
import ElfsightReviews from "@/components/services/elfsight";
import PartnersSection from "@/components/NewHome/new-partner";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden">
        <ServicesHero />
        <FeaturesSection />
        <PartnersSection />
        <IndustriesServed />
        <ElfsightReviews />
        <Footer />
      </div>
    </>
  );
};

export default MaintenancePage;
