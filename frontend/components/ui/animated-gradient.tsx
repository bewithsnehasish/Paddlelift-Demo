"use client";

import { cn } from "@/lib/utils";

export const AnimatedGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white overflow-hidden",
        className,
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="w-[500px] h-[500px] bg-blue-500/30 blur-3xl rounded-full animate-pulse-slow self-start" />
        <div className="w-[400px] h-[400px] bg-purple-500/20 blur-2xl rounded-full animate-pulse-slower self-center" />
        <div className="w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full animate-pulse-slow self-end" />
      </div>
      {children}
    </div>
  );
};
