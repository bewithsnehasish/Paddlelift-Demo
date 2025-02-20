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

interface SuccessStory {
  image_url: string;
  heading: string;
  response: string;
}

interface ApiResponse {
  few_success_stories: SuccessStory[];
}

const gradients = [
  "bg-gradient-to-br from-cyan-400 to-cyan-600",
  "bg-gradient-to-br from-emerald-400 to-emerald-600",
  "bg-gradient-to-br from-purple-400 to-purple-600",
  "bg-gradient-to-br from-orange-400 to-orange-600",
  "bg-gradient-to-br from-pink-400 to-pink-600",
  "bg-gradient-to-br from-indigo-400 to-indigo-600",
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const INTERSECTION_THRESHOLD = 0.1;

  // Fetch data from API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(
          "https://paddlelift.onrender.com/components/few-success-stories/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch success stories");
        }
        const data: ApiResponse = await response.json();
        setStories(data.few_success_stories);
      } catch (err) {
        console.error(`Unknown error occurred + ${err}`);
      }
    };

    fetchStories();
  }, []);

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

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, [api, isPaused]);

  // Get gradient based on index
  const getGradient = (index: number) => {
    return gradients[index % gradients.length];
  };

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
          {stories.map((story, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
              <Card className="flex flex-col h-full border-0 shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-32 flex-shrink-0">
                  <Image
                    src={story.image_url}
                    alt={`${story.heading} image`}
                    className="object-contain"
                    height={80}
                    width={200}
                    unoptimized
                  />
                </div>
                <div
                  className={cn(
                    "p-6 text-white min-h-[250px] flex flex-col",
                    getGradient(index),
                  )}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {story.heading}
                  </h3>
                  <div className="overflow-y-auto flex-grow">
                    <p className="text-white/90 leading-relaxed">
                      {story.response}
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
