"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from({ length: 5 }, (_, i) =>
        document.getElementById(`step-${i + 1}`),
      );

      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollProgress = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, scrollProgress)));

      // Find the active section based on viewport position
      const activeSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      });

      if (activeSection !== -1) {
        setActiveStep(activeSection + 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, activeStep };
}
