import ExpertisePage from "@/components/expertise/herosection";
import MobileOrgainsation from "@/components/expertise/MobileOrgainsation";
import NewSuccess from "@/components/expertise/newsuccess";
import NewSuccessApproach from "@/components/expertise/NewSuccessApproach";
import SuccessApproach from "@/components/expertise/SuccessApproach";
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
        {/* Visible only on desktop and tablet */}
        <div className="hidden md:block">
          <OrganizationalStructure />
        </div>
        {/* Visible only on mobile */}
        <div className="block md:hidden">
          <MobileOrgainsation />
        </div>
        <NewSuccessApproach />
        <SuccessApproach />
        <div className="pt-20">
          <Footer />
        </div>
        {/* 
        <NewSuccess />
        <RecruitmentProcess />
      Scroll-Up Button */}
      </div>
    </>
  );
};

export default Expertise;
