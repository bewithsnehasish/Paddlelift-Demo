"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center text-left relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/portfolio/bgportfolio.svg"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent opacity-70" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-red-600">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Tailor-made solutions for Startups to Enterprises. Let us help you
              bring your vision to life with our expertise and dedication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link
                  className="text-lg md:text-xl text-white font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md flex items-center"
                  href="/contact"
                >
                  Connect Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-auto max-h-[500px] lg:max-h-[600px] flex justify-center"
          >
            <Image
              src="/portfolio/portfolio.svg"
              alt="Portfolio"
              width={720}
              height={720}
              className="rounded-lg object-cover w-full h-auto shadow-lg"
              unoptimized
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
