import ServicesHero from "@/components/services/hero";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import "./services.css";

import React from "react";
import PartnersSection from "@/components/home/Partner";
import Footer from "@/components/Footer";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <FeaturesSection />
      <PartnersSection />
      <Footer />
    </>
  );
};

export default MaintenancePage;
