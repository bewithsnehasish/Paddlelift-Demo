"use client";

import { motion } from "framer-motion";
import { Construction, Rocket } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09090B] text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Construction className="w-16 h-16 mb-4 mx-auto text-yellow-400" />
        <h1 className="text-4xl font-bold mb-2">Under Construction</h1>
        <p className="text-xl mb-8">
          We're working hard to bring you something amazing!
        </p>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="mb-8"
      >
        <Rocket className="w-12 h-12 text-blue-400" />
      </motion.div>

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="text-lg font-semibold"
      >
        Coming Soon!
      </motion.p>
    </div>
  );
}
