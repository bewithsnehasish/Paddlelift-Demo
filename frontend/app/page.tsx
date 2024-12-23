import HeroSection from "@/components/home/HeroSection";
import "./globals.css";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import WorldMapSection from "@/components/NewHome/maps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/portfolio/portfoliosection";
import PartnersSection from "@/components/NewHome/partner-new";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      {/*
      <Workflows />
      <PartnersSection />
        <Features />
        <CompanyTimeline />
        <YearGrowthCard />
        <GrowthTimeline />
        <ApproachSection />
        <OrganizationalStructure />
        <CompanyTimeline />
        */}

      <FeaturesSection />
      <WorldMapSection />
      <PartnersSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
