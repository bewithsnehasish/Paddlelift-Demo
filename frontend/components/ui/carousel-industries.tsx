import React from "react";
import Circle from "./circle";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <Circle text={item} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
