import React from "react";
import { Carousel } from "../Components/Carousel-Components/Carousel";

export const Home = ({ toggle }) => {
  return <div>{toggle ? <Carousel /> : null}</div>;
};
