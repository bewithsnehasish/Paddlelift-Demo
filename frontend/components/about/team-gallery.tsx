"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainHeading from "./main-heading"; // Import the MainHeading component

// Sample images array - replace with your actual images
const photos = [
  { src: "/about/LifePaddlelift/IMG_1501.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3096.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3249.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3701.JPEG" },
  { src: "/about/LifePaddlelift/IMG_3955.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4133.JPG" },
  { src: "/about/LifePaddlelift/IMG_4472.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4497.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4520.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4524.JPEG" },
  { src: "/about/LifePaddlelift/IMG_4836.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6310.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6507.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6536.JPEG" },
  { src: "/about/LifePaddlelift/IMG_6932.JPEG" },
  { src: "/about/LifePaddlelift/IMG_7428.JPEG" },
];

// Variants for Framer Motion animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable ImageRow component
const ImageRow = ({
  images,
  direction,
}: {
  images: typeof photos;
  direction: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        className={`inline-flex ${direction === "left" ? "animate-scrollLeft" : "animate-scrollRight"}`}
      >
        {/* Original Images */}
        {images.map((photo, index) => (
          <motion.div
            key={`left-${index}`}
            variants={itemVariants}
            className="relative min-w-[300px] aspect-video mx-4"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={`Team photo ${index + 1}`}
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              loading="eager"
            />
          </motion.div>
        ))}
        {/* Duplicate Images for Seamless Looping */}
        {images.map((photo, index) => (
          <motion.div
            key={`dup-${index}`}
            variants={itemVariants}
            className="relative min-w-[300px] aspect-video mx-4"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={`Team photo ${index + 1}`}
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              loading="eager"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const LifeAtPaddleLift = () => {
  return (
    <section className="snap-start py-20 bg-[#09090B] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-left">
        {/* Use the MainHeading component */}
        <MainHeading words={["Life", "at PaddleLift"]} highlight={0} />

        {/* Image Rows */}
        <div className="mt-8 space-y-8">
          <ImageRow images={photos} direction="left" />
          <ImageRow images={[...photos].reverse()} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default LifeAtPaddleLift;
