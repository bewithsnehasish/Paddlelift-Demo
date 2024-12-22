"use client";

// components/ElfsightReviews.tsx
import React, { useEffect } from "react";

const ElfsightReviews: React.FC = () => {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-8aaf202a-f137-4cc5-bb51-0077c72e6366"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfsightReviews;
