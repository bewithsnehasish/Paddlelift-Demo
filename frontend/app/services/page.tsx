import ServicesHero from "@/components/services/hero";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import "./services.css";

import React from "react";
import PartnersSection from "@/components/home/Partner";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/services/Industries-Served";
import ElfsightReviews from "@/components/services/elfsight";

const MaintenancePage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <FeaturesSection />
      <PartnersSection />
      <IndustriesServed />
      <ElfsightReviews />
      <Footer />
    </>
  );
};

export default MaintenancePage;
