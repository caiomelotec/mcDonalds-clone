import React from "react";
import "../styles/Home.css";

import { Carousel } from "../Components/Carousel-Components/Carousel";

import teaser01 from "../assets/teaser01.jpg";
import teaser02 from "../assets/teaser02.jpg";
import teaser03 from "../assets/teaser03.jpg";

export const Home = ({ toggle }) => {
  return (
    <>
      {toggle ? <Carousel /> : null}
      <div className="h1-neues">
        <h1>Was gibt's Neues?</h1>
      </div>
      <div className="container">
        <div className="teaser-content">
          <img src={teaser01} alt="" />
          <div className="sub-teaser-content">
            <h1 className="teaser-h1">
              Einfach in der App vorbestellen und bezahlen
            </h1>
            <p className="teaser-p">
              Du liebst es entspannt? Dann bestelle deine Lieblingsprodukte
              jetzt bequem vor und bezahle über die McDonald’s App.
            </p>
            <div className="teaser-btn-div">
              <button>Mehr zur App</button>
            </div>
            <span className="teaser-span">
              Nur für registrierte App-User in ausgewählten Restaurants. App
              erhältlich im Apple App Store und Google Play Store.
            </span>
          </div>
        </div>
        <div className="teaser-content">
          <img src={teaser02} alt="" />
          <div className="sub-teaser-content">
            <h1 className="teaser-h1">Da kommt Freude an</h1>
            <p className="teaser-p">
              Du liebst es entspannt? Dann bestelle deine Lieblingsprodukte
              jetzt bequem vor und bezahle über die McDonald’s App.
            </p>
            <div className="teaser-btn-div">
              <button>Zu McDelivery®</button>
            </div>
            <span className="teaser-span">
              Nur für registrierte App-User in ausgewählten Restaurants. App
              erhältlich im Apple App Store und Google Play Store.
            </span>
          </div>
        </div>
        <div className="teaser-content">
          <img src={teaser03} alt="" />
          <div className="sub-teaser-content">
            <h1 className="teaser-h1">
              Es braucht nicht viel. Es braucht viele.
            </h1>
            <p className="teaser-p">
              Du liebst es entspannt? Dann bestelle deine Lieblingsprodukte
              jetzt bequem vor und bezahle über die McDonald’s App.
            </p>
            <div className="teaser-btn-div">
              <button>Zu Better M</button>
            </div>
            <span className="teaser-span">
              Nur für registrierte App-User in ausgewählten Restaurants. App
              erhältlich im Apple App Store und Google Play Store.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
