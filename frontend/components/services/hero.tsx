// components/about/HeroSection.js
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ServicesHero = () => {
  const [isGifComplete, setIsGifComplete] = useState(false);

  useEffect(() => {
    const gifDuration = 3000; // Adjust this to match your GIF length
    const timer = setTimeout(() => setIsGifComplete(true), gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen snap-start flex items-center relative bg-[#09090B] py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-3 items-center">
        <div className="text-left md:text-left pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Our <span className="">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Discover our comprehensive range of solutions designed to meet your
            needs. We provide cutting-edge services that help transform your
            ideas into reality.
          </motion.p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-md"
          >
            Let&apos;s Connnect
          </Button>
        </div>
        <div className="relative mt-16 md:mt-0">
          {!isGifComplete && (
            <Image
              src="/services/hero.svg"
              alt="About Section Animation"
              width={1920}
              height={1080}
              className="rounded-lg object-cover absolute top-0 left-0 z-10 w-full h-auto md:w-auto md:h-auto"
              priority
            />
          )}
          <Image
            src="/services/hero.svg"
            alt="About Section"
            width={1920}
            height={1080}
            className={`rounded-lg object-cover transition-opacity duration-300 w-full h-auto md:w-auto md:h-auto ${
              isGifComplete ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};
