// components/about/HeroSection.js
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ServicesHero = () => {
  const [isGifComplete, setIsGifComplete] = useState(false);

  useEffect(() => {
    const gifDuration = 3000; // Adjust this to match your GIF length
    const timer = setTimeout(() => setIsGifComplete(true), gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center text-left relative overflow-hidden bg-[#09090B]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent opacity-70" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-lg md:text-lg text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive range of solutions designed to meet
              your needs. We provide cutting-edge services that help transform
              your ideas into reality.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-md"
              >
                Let&apos;s Connect
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-auto flex justify-center p-6"
          >
            {!isGifComplete && (
              <Image
                src="/services/hero.svg"
                alt="About Section Animation"
                width={1080}
                height={1080}
                className="rounded-lg object-cover absolute top-0 left-0 z-10 w-full h-auto md:w-auto md:h-auto"
                priority
              />
            )}
            <Image
              src="/services/hero.svg"
              alt="About Section"
              width={1080}
              height={1080}
              className={`rounded-lg object-cover transition-opacity duration-300 w-full h-auto md:w-auto md:h-auto ${
                isGifComplete ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
