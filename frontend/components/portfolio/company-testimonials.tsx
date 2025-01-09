"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  companyName: string;
  logo: string;
  title: string;
  description: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    companyName: "Reevooy",
    logo: "/Partner Logos/Reevooy.jfif",
    title: "Built from the Ground Up",
    description:
      "Partnered with Reevooy at their inception, we provided comprehensive recruitment services that helped grow their team from the founding members to a strong, skilled workforce of 70+ professionals.",
    bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-600",
  },
  {
    companyName: "Otipy",
    logo: "/Partner Logos/Otipy.png",
    title: "Scaled to New Heights",
    description:
      "Collaborated with Otipy from their early stages, we implemented a strategic recruitment plan that expanded their team from the founding members to a thriving workforce of 300+, supporting their rapid growth.",
    bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const INTERSECTION_THRESHOLD = 0.1;

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: INTERSECTION_THRESHOLD },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-16 space-y-8"
    >
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold mb-4 text-white max-w-2xl leading-[1.1] text-left"
        >
          Few Success <span className="text-teal-400">Stories</span>
        </motion.h2>

        <div className="flex justify-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
              <Card className="flex flex-col h-full border-0 shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-32 flex-shrink-0">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.companyName} logo`}
                    className="object-contain"
                    height={80}
                    width={200}
                  />
                </div>
                <div
                  className={cn(
                    "p-6 text-white min-h-[250px] flex flex-col",
                    testimonial.bgColor,
                  )}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {testimonial.title}
                  </h3>
                  <div className="overflow-y-auto flex-grow">
                    <p className="text-white/90 leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
