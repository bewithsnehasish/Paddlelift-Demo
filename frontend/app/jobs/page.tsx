"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

const MaintenancePage: React.FC = () => {
  return (
    <BackgroundLines className="min-h-screen flex flex-col justify-center items-center p-4 text-white overflow-hidden">
      <motion.div
        className="z-10 max-w-4xl w-full text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo - Centered and Increased Size */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
            <Image
              src="/Plogo.png"
              alt="PaddleLift Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Maintenance Icon - Responsive Size */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 sm:h-32 sm:w-32 mx-auto text-yellow-400 mb-6 animate-spin-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        {/* Maintenance Text - Responsive Typography */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          This Page is Under Maintenance
        </h2>
      </motion.div>

      {/* Footer - Responsive Positioning and Text */}
      <motion.div
        className="absolute bottom-4 text-xs sm:text-sm opacity-75 text-center w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        © {new Date().getFullYear()} PaddleLift. All Rights Reserved.
      </motion.div>
    </BackgroundLines>
  );
};

export default MaintenancePage;
