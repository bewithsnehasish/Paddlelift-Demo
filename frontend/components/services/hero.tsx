import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Background and Main Images Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Image - Floating */}
        <div className="absolute inset-0 flex items-center justify-center animate-float">
          <Image
            src="/services/hero.svg"
            alt="Services illustration"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen">
        <div className="flex flex-col justify-center h-full pt-16 md:pt-0">
          <div className="max-w-2xl">
            <TextGenerateEffect
              words="Our Services"
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 relative z-20"
            />
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 relative z-20">
              Discover our comprehensive range of solutions designed to meet
              your needs. We provide cutting-edge services that help transform
              your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 transition-colors"
                asChild
              >
                <Link
                  className="text-base sm:text-lg text-white font-black [text-shadow:_0_0_2px_rgba(0,0,0,0.75)] flex items-center"
                  href="/contact"
                >
                  Contact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
