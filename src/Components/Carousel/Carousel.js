import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CaroulselItem";

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

  updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    if (count === 5 && newIndex === 4) {
      newIndex = 0;
      setCount(1);
    }

    if (newIndex === 0 && count === 1) {
      newIndex = 4;
      setCount(5);
    }

    if (isPlaying && newIndex === 4) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 1800);
    }
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
