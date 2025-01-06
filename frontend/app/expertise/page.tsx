import ExpertisePage from "@/components/expertise/herosection";
import RecruitmentProcess from "@/components/expertise/Requirement/RequirementProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrganizationalStructure from "@/components/NewHome/organisationstructure";
import React from "react";

const Expertise: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden bg-[#09090B]">
        <Navbar />
        <ExpertisePage />
        <OrganizationalStructure />
        <Footer />
        {/* 
        <RecruitmentProcess />
      Scroll-Up Button */}
      </div>
    </>
  );
};

export default Expertise;
