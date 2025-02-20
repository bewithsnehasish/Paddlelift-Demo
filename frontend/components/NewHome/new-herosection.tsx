"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Function to handle video playback
    const handlePlayback = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.defaultMuted = true;
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Video autoplay failed:", err);
      }
    };

    // Call handlePlayback when component mounts
    handlePlayback();

    // Handle visibility change events
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else {
        videoRef.current
          ?.play()
          .catch((err) => console.log("Error resuming video playback:", err));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="min-h-screen snap-start relative overflow-hidden flex flex-col justify-between">
      {/* Preload the video in the background */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        loop
        muted
        preload="auto" // Preload the video as soon as the page loads
        className="absolute inset-0 object-cover w-full h-full opacity-100 z-0"
      >
        <source src="/background7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to make the background dull */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-1"></div>

      {/* Main content area */}
      <div className="mt-44 flex items-center">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 gap-6 ">
            {" "}
            {/* Reduced padding-top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-left" // Changed to text-left and removed mx-auto
              style={{ marginLeft: "2rem" }} // Adjust the margin as needed
            >
              <div className="max-w-3xl mt-6">
                {" "}
                {/* Reduced margin-top */}{" "}
                <div className="text-4xl md:text-4xl font-semibold md:font-bold">
                  <div className="text-white">From Seed to Scale</div>
                  <div className="text-red-700 py-4 rounded-md">
                    We Fuel Your Journey
                  </div>
                </div>
                <p
                  className="text-xl font-bold mb-4 text-white"
                  style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.8)" }}
                >
                  Tailor made solutions for Startups to Enterprises....
                </p>
              </div>
            </motion.div>
            {/* Button container at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-start pl-8"
            >
              <AnimatedButton href="/contact">
                Let&apos;s Connect
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
