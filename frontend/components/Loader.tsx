// components/LoadingAnimation.tsx
import React from "react";
import dynamic from "next/dynamic";
import loadingAnimation from "../public/Loader.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LoadingAnimationProps {
  width?: number;
  height?: number;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  width = 200,
  height = 200,
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#09090B]">
      <div style={{ width, height }}>
        <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
