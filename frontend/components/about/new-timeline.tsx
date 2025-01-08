"use client";

import Image from "next/image";
import React from "react";
import MainHeading from "./main-heading";

export default function NewTimeline() {
  return (
    <section className="snap-start py-20 bg-[#09090B] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-left">
        {/* Use the reusable MainHeading component */}
        <MainHeading words={["Our", "Journey"]} highlight={1} />
        <div className="relative mt-8">
          <Image
            src="/about/timeline.gif"
            alt="Company Timeline"
            width={1920}
            height={1080}
            priority
            className="rounded-lg object-cover w-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
