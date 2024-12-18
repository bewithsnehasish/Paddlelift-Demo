"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import AnimatedGridPattern from "../ui/animated-grid-pattern";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
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
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-2xl">
          <TextGenerateEffect
            words="Elevate Your Recruitment Strategy with Paddlelift"
            className="text-4xl md:text-6xl font-bold mb-6"
          />
          <p className="text-xl text-muted-foreground mb-8">
            Connecting Top Talent Globally - From Startups to Enterprises.....
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link
                className="text-xl text-white font-black [text-shadow:_0_0_2px_rgba(0,0,0,0.75)]"
                href="/jobs"
              >
                Explore Jobs <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link className="font-black " href="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
