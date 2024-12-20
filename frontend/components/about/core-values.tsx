"use client";

import { motion } from "framer-motion";

const values = [
  { key: "O", text: "wnership" },
  { key: "R", text: "espect" },
  { key: "D", text: "edication" },
  { key: "E", text: "xpertise" },
  { key: "R", text: "esult Driven" },
];

export function CoreValues() {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      {values.map((value, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center bg-blue-400 rounded-full w-16 h-16 text-white"
          >
            <span className="text-2xl font-bold">{value.key}</span>
            <span className="text-sm ml-1">{value.text}</span>
          </motion.div>
          {index < values.length - 1 && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "2rem" }}
              transition={{ delay: index * 0.1 }}
              className="h-1 bg-yellow-400 ml-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}
