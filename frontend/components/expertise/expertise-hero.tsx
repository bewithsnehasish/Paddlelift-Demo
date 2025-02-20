"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Expertisehero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/expertise/Expertise.svg"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl">
              <TextGenerateEffect
                words="Expertise"
                className="text-4xl md:text-6xl font-bold mb-6"
              />
              <p className="text-xl text-muted-foreground mb-8">
                What all Expertise we offer in this Area......
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

          {/* Right Column - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full min-h-[400px] lg:min-h-[600px] relative"
          >
            <Image
              src="/portfolio/Portfolio.gif"
              alt="Portfolio"
              width={1280}
              height={1280}
              className="rounded-xl object-cover w-full h-full"
              unoptimized
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
