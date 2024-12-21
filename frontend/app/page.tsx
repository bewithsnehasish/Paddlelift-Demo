import HeroSection from "@/components/home/HeroSection";
import "./globals.css";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import VisitorsCard from "@/components/NewHome/YearOnGrowth";
import ApproachSection from "@/components/NewHome/Usp";
import PartnersSection from "@/components/home/Partner";
import OrganizationalStructure from "@/components/NewHome/organisationstructure";
import WorldMapSection from "@/components/NewHome/maps";
import Testimonials from "@/components/NewHome/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YearGrowthCard from "@/components/NewHome/yearonyear";

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
        */}

      <FeaturesSection />
      <YearGrowthCard />
      <ApproachSection />
      <OrganizationalStructure />
      <WorldMapSection />
      <PartnersSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
