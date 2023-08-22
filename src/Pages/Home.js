import React from "react";
import "../styles/Home.css";

import { Carousel } from "../Components/Carousel-Components/Carousel";

import { TeaserComponent } from "../Components/HomeComponents/TeaserComponent";

export const Home = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div>
          <Carousel />
          <TeaserComponent />
        </div>
      ) : null}
    </>
  );
};
