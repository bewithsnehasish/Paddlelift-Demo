"use client";

import React from "react";
import Image from "next/image";

interface PartnerLogo {
  id: number;
  src: string;
  name: string;
}

const partnerLogos = [
  {
    id: 1,
    src: "/Partner Logos/Royal_Enfield.png",
    name: "Royal Enfield",
  },
  {
    id: 2,
    src: "/Partner Logos/Gruner.png",
    name: "Gruner",
  },
  {
    id: 3,
    src: "/Partner Logos/ITC.png",
    name: "ITC",
  },
  {
    id: 4,
    src: "/Partner Logos/Sanskriti.png",
    name: "Sanskriti",
  },
  {
    id: 5,
    src: "/Partner Logos/ximkart.png",
    name: "ximkart",
  },
  {
    id: 6,
    src: "/Partner Logos/Stancebeam.png",
    name: "Stancebeam",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 7,
    src: "/Partner Logos/WazirX.png",
    name: "WazirX",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 9,
    src: "/Partner Logos/liquiloans.png",
    name: "liquiloans",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 10,
    src: "/Partner Logos/park.png",
    name: "park",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 11,
    src: "/Partner Logos/werize_logo.png",
    name: "werize_logo",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 12,
    src: "/Partner Logos/Terra_Motors.png",
    name: "Terra Motors",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 14,
    src: "/Partner Logos/Otipy.png",
    name: "Otipy",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 16,
    src: "/Partner Logos/Healthkart.png",
    name: "Healthkart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 17,
    src: "/Partner Logos/Farmley.png",
    name: "Farmley",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 18,
    src: "/Partner Logos/Field Assist.png",
    name: "Field Assist",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 19,
    src: "/Partner Logos/Draup.png",
    name: "Draup",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 20,
    src: "/Partner Logos/Locofast.png",
    name: "Locofast",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 21,
    src: "/Partner Logos/Eureka Forbes.png",
    name: "Eureka Forbes",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 23,
    src: "/Partner Logos/Fresh_to_home.png",
    name: "Fresh_to_home",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 24,
    src: "/Partner Logos/Getsupp.png",
    name: "Getsupp",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 25,
    src: "/Partner Logos/Aditya Birls.png",
    name: "Aditya Birla",
    originalColor: "rgb(255,0,0)",
  },
  {
    id: 26,
    src: "/Partner Logos/Lifelong.png",
    name: "Lifelong",
    originalColor: "rgb(255,0,0)",
  },
  {
    id: 27,
    src: "/Partner Logos/Lendingkart.png",
    name: "Lendingkart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 28,
    src: "/Partner Logos/Mindtickle.png",
    name: "Mindtickle",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 29,
    src: "/Partner Logos/NoBroker.png",
    name: "NoBroker",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 30,
    src: "/Partner Logos/Battery_Smart_Logo.png",
    name: "Battery Smart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 31,
    src: "/Partner Logos/Blinkit_Logo.png",
    name: "Blinkit",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 32,
    src: "/Partner Logos/Joveo.png",
    name: "Joveo",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 33,
    src: "/Partner Logos/Coverfox.png",
    name: "Coverfox",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 34,
    src: "/Partner Logos/DG Liger.png",
    name: "DG Liger",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 35,
    src: "/Partner Logos/Bharat agri.png",
    name: "Bharat agri",
    originalColor: "rgb(0, 0, 255)",
  },
];
const PartnersSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="pb-4 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Trusted Partners
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Collaborative Network
            </h2>
            <p className="text-lg text-indigo-200/65">
              Empowering innovation through strategic partnerships that drive
              technological advancement
            </p>
          </div>

          {/* Marquee effect with three rows */}
          <div className="relative overflow-hidden">
            <MarqueeRow logos={partnerLogos} direction="left" />
            <MarqueeRow logos={partnerLogos} direction="right" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay and Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top and Bottom gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-950 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-950 to-transparent"></div>

        {/* Glowing Circular Spots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -left-1/4 top-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

interface MarqueeRowProps {
  logos: PartnerLogo[];
  direction: "left" | "right";
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, direction }) => {
  return (
    <div className="flex overflow-hidden py-8">
      <div
        className={`flex animate-marquee${direction === "right" ? "-reverse" : ""} gap-12`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <LogoCard key={`${logo.id}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

interface LogoCardProps {
  logo: PartnerLogo;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  return (
    <div className="group relative flex-shrink-0 w-32 h-32">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-200 to-gray-500"></div>
      <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
        <Image
          src={logo.src}
          alt={logo.name}
          className="max-h-28 max-w-28 object-contain group-hover:scale-110 transition-transform duration-300"
          width={144}
          height={144}
        />
      </div>
    </div>
  );
};

export default PartnersSection;
