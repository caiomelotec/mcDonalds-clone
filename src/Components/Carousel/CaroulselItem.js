import React from "react";

export const CaroulselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img id="carousel-img" src={item.icon} alt="" />
    </div>
  );
};
