import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import { ContainerInfo } from "./ContainerInfo";
import "./Carousel.css";

import ex01 from "./carousel-imgs/ex01.jpg";
import ex02 from "./carousel-imgs/ex02.jpeg";
import ex03 from "./carousel-imgs/ex04.jpg";
import ex04 from "./carousel-imgs/ex03.jpg";
import ex05 from "./carousel-imgs/ex05jpg.jpg";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  let [count, setCount] = useState(1);

  const items = [
    {
      icon: ex01,
    },
    {
      icon: ex02,
    },
    {
      icon: ex03,
    },
    {
      icon: ex04,
    },
    {
      icon: ex05,
    },
  ];

  const updateIndex = (newIndex) => {
    // Ensure the newIndex is within valid range
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    // Handle special case when count is 5 and newIndex is 4, it skip to index 0
    if (count === 5 && newIndex === 4) {
      newIndex = 0;
      setCount(1);
    }

    /*
     * If a radio button is selected, update the count to match the index.
     * The following conditions adjust the count for specific newIndexes.
     * - When newIndex is 1, 2, or 3, set the count accordingly.
     * - When newIndex is 4, set the count to 5 for special behavior.
     */
    if (newIndex >= 1 && newIndex <= 3) {
      setCount(newIndex);
    } else if (newIndex === 4) {
      setCount(5);
    }

    // Handle wraparound from newIndex 0 to 4 with count at 1
    if (newIndex === 0 && count === 1) {
      newIndex = 4;
      setCount(5);
    }
    // If the slider is playing and newIndex is 4, reset index after delay
    if (isPlaying && newIndex === 4) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 1800);
    }
    // Set the active index to the updated newIndex
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 2000);
    } else {
      clearInterval(interval);
    } // Clear the interval if not playing

    return () => {
      clearInterval(interval); // Clear the interval on component unmount or when isPlaying changes
    };
  });

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>
      <ContainerInfo
        items={items}
        activeIndex={activeIndex}
        updateIndex={updateIndex}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};
