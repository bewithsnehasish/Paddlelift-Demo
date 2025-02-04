"use client";

import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Review {
  Username: string;
  rating: string;
  description: string;
  date: string;
}

export default function GoogleReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch reviews from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://paddlelift.onrender.com/components/reviews",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        if (result.reviews && Array.isArray(result.reviews)) {
          setReviews(result.reviews);
        } else {
          throw new Error("Expected an array of reviews in the response");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle carousel animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || reviews.length === 0) return;

    const totalWidth = container.scrollWidth;
    const viewportWidth = container.offsetWidth;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 1; // Adjust this value to control scroll speed
      if (scrollPosition >= totalWidth - viewportWidth) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    let animation = setInterval(animate, 30); // Adjust interval for smoother animation

    const handleMouseEnter = () => clearInterval(animation);
    const handleMouseLeave = () => {
      clearInterval(animation);
      animation = setInterval(animate, 30);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(animation);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reviews.length]);

  if (isLoading) {
    return <div className="text-center text-gray-400">Loading reviews...</div>;
  }

  if (error) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Animation variants for the heading
  const wordPullAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <div className="w-full bg-[#09090B] p-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Add the heading here */}
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-white flex flex-wrap">
            <motion.span
              className="text-teal-400 relative mr-2"
              initial="hidden"
              animate="visible"
              variants={wordPullAnimation}
              custom={0}
            >
              Google
            </motion.span>
            <motion.span
              className="text-white relative mr-2"
              initial="hidden"
              animate="visible"
              variants={wordPullAnimation}
              custom={1}
            >
              Reviews
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-end mb-6">
          <Button
            className="bg-white hover:bg-gray-100 text-gray-900"
            onClick={() =>
              window.open(
                "https://www.google.com/search?hl=en-IN&gl=in&q=B-4,+First+Floor,+PaddleLift+Pvt.+Ltd.,+Workspaces+By+Innova,+B+Block,+Sector+63,+Noida,+Uttar+Pradesh+201301&ludocid=11106796390469403321&lsig=AB86z5WTX6FixA3GMKucpnV1PwX7#lrd=0x390ce59d969ba857:0x9a234478868502b9,3",
                "_blank",
              )
            }
          >
            Review us on Google
          </Button>
        </div>

        {duplicatedReviews.length > 0 ? (
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-gray-900 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white">
                    {review.Username.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold capitalize text-white">
                      {review.Username}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Number.parseInt(review.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm mb-2 line-clamp-3">
                  {review.description || "No description provided."}
                </p>

                {review.description && review.description.length > 150 && (
                  <button className="text-blue-400 text-sm hover:underline">
                    Read more
                  </button>
                )}

                <p className="text-gray-400 text-xs mt-2">{review.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">No reviews available.</div>
        )}
      </div>
    </div>
  );
}
