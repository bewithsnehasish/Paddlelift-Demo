"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
}

const AnimatedButton = ({ children, href }: AnimatedButtonProps) => {
  return (
    <Link href={href} className="inline-block">
      <button className="font-bold text-white bg-[#171717] px-6 py-3 rounded-lg relative cursor-pointer overflow-hidden group">
        <span className="absolute left-1/2 top-1/2 h-6 w-6 bg-[#0c66ed] rounded-full transition-all duration-600 ease-in-out -translate-x-[3.3em] -translate-y-[4em]" />
        <span className="absolute left-1/2 top-1/2 h-6 w-6 bg-[#0c66ed] rounded-full transition-all duration-600 ease-in-out -translate-x-[6em] translate-y-[1.3em]" />
        <span className="absolute left-1/2 top-1/2 h-6 w-6 bg-[#0c66ed] rounded-full transition-all duration-600 ease-in-out -translate-x-[0.2em] translate-y-[1.8em]" />
        <span className="absolute left-1/2 top-1/2 h-6 w-6 bg-[#0c66ed] rounded-full transition-all duration-600 ease-in-out translate-x-[3.5em] translate-y-[1.4em]" />
        <span className="absolute left-1/2 top-1/2 h-6 w-6 bg-[#0c66ed] rounded-full transition-all duration-600 ease-in-out translate-x-[3.5em] -translate-y-[3.8em]" />
        <span className="relative flex items-center justify-center gap-2 text-base">
          {children}
        </span>
      </button>
      <style jsx>{`
        button {
          transition: background-color 0.3s ease;
        }
        button:hover span:not(:last-child) {
          transform: translate(-50%, -50%) scale(4);
          transition: all 1.5s ease;
        }
        button:hover {
          animation: backgroundChange 1s forwards;
        }
        button:not(:hover) {
          animation: backgroundRevert 0.3s forwards;
        }
        @keyframes backgroundChange {
          0% {
            background-color: #171717;
          }
          83.33% {
            background-color: #171717;
          }
          100% {
            background-color: #0c66ed;
          }
        }
        @keyframes backgroundRevert {
          0% {
            background-color: #0c66ed;
          }
          100% {
            background-color: #171717;
          }
        }
      `}</style>
    </Link>
  );
};

export default function NewHeroSection() {
  return (
    <section className="min-h-screen snap-start relative overflow-hidden flex flex-col justify-between">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full opacity-100 z-0"
      >
        <source src="/background6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0" />

      {/* Main content area */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 gap-12 items-center pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="max-w-3xl mt-18">
                <div className="text-4xl md:text-6xl font-semibold md:font-bold">
                  <div className="text-white">From Seed to Scale</div>
                  <div className="text-red-700 py-4 rounded-md">
                    We Fuel Your Journey
                  </div>
                </div>
                <p className="text-xl mb-8 text-black">
                  Tailor made solutions for Startups to Enterprises....
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Button container at bottom */}
      <div className="relative z-10 w-full pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <AnimatedButton href="/contact">Let&apos;s Connect</AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
