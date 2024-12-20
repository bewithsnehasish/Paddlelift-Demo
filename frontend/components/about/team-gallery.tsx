"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const photos = Array(8).fill("/placeholder.svg");

export function TeamGallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 4;

  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold mb-8">Life at PaddleLift</h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: -currentPage * 100 + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="min-w-[calc(25%-12px)] aspect-video">
              <Image
                src={photo}
                alt={`Team photo ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
          disabled={currentPage === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            setCurrentPage(
              Math.min(
                Math.floor(photos.length / photosPerPage) - 1,
                currentPage + 1,
              ),
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
          disabled={
            currentPage >= Math.floor(photos.length / photosPerPage) - 1
          }
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
