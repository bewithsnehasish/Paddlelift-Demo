"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import AnimatedGridPattern from "../ui/animated-grid-pattern";

export default function HeroSection() {
  return (
    <section className="min-h-screen snap-start flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid Pattern */}
      <AnimatedGridPattern
        className="absolute inset-0 z-0 bg-gray-900"
        width={40}
        height={40}
        numSquares={200}
        maxOpacity={0.5}
        duration={1}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 to-background z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full min-h-[400px] lg:min-h-[600px] relative lg:order-2 order-1"
          >
            <iframe
              src="https://lottie.host/embed/02be32b0-c139-431f-8603-18d84095a083/DQuIuCRLtU.lottie"
              className="w-full h-full absolute inset-0"
            />
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl lg:order-1 order-2"
          >
            <div className="max-w-2xl">
              <TextGenerateEffect
                words="From Seed to Scale, We Fuel Your Journey"
                className="text-3xl md:text-5xl font-bold mb-6"
              />
              <p className="text-xl text-muted-foreground mb-8">
                Tailor made solutions for Startups to Enterprises....
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link
                    className="text-xl text-white font-black [text-shadow:_0_0_2px_rgba(0,0,0,0.75)]"
                    href="/contact"
                  >
                    Connect Us <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
