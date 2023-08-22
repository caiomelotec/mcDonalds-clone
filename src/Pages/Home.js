import React from "react";

import { Carousel } from "../Components/Carousel-Components/Carousel";

import { TeaserComponent } from "../Components/HomeComponents/TeaserComponent";
import { TeaserComponentTwo } from "../Components/HomeComponents/TeaserComponentTwo";

export const Home = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div>
          <Carousel />
          <TeaserComponent />
          <TeaserComponentTwo />
        </div>
      ) : null}
    </>
  );
};
