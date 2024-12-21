import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background and Main Images Container */}
      <Navbar />
      <div className="absolute inset-0">
        {/* Background Image */}
        <Image
          src="/services/herobg.svg"
          alt="Background"
          className="w-full h-full object-cover"
          height={1920}
          width={1080}
          priority
        />
        {/* Main Image */}
        <Image
          src="/services/hero.svg"
          alt="Services illustration"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            <TextGenerateEffect
              words="Our Services"
              className="text-4xl md:text-6xl font-bold text-purple-900 mb-6"
            />
            <p className="text-xl text-white mb-8">
              Discover our comprehensive range of solutions designed to meet
              your needs. We provide cutting-edge services that help transform
              your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link
                  className="text-xl text-white font-black [text-shadow:_0_0_2px_rgba(0,0,0,0.75)]"
                  href="/contact"
                >
                  Contact <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
