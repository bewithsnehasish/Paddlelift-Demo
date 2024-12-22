import React from "react";
import Ripple from "./ripple";

interface CircleProps {
  text: string;
}

const Circle: React.FC<CircleProps> = ({ text }) => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <Ripple mainCircleSize={150} mainCircleOpacity={0.2} numCircles={5} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-center">{text}</span>
      </div>
    </div>
  );
};

export default Circle;
