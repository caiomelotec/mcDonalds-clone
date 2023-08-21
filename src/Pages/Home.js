import React from "react";
import "../styles/Home.css";

import { Carousel } from "../Components/Carousel-Components/Carousel";

import teaser01 from "../assets/teaser01.jpg";
import teaser02 from "../assets/teaser02.jpg";
import teaser03 from "../assets/teaser03.jpg";

export const Home = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div>
          <Carousel />
          <div className="h1-neues">
            <h1>Was gibt's Neues?</h1>
          </div>
          <div className="test">
            <div className="container">
              <div className="teaser-content">
                <div className="img-div">
                  <img src={teaser01} alt="" />
                </div>
                <h1 className="teaser-h1">
                  Einfach in der App vorbestellen und bezahlen
                </h1>
                <div className="sub-teaser-content sub-teaser-1">
                  <p className="teaser-p">
                    Du liebst es entspannt? Dann bestelle deine
                    Lieblingsprodukte jetzt bequem vor und bezahle über die
                    McDonald’s App.
                  </p>
                  <div className="teaser-btn-div">
                    <button className="btn-1">Mehr zur App</button>
                  </div>
                </div>
                <span className="teaser-span">
                  Nur für registrierte App-User in ausgewählten Restaurants. App
                  erhältlich im Apple App Store und Google Play Store.
                </span>
              </div>
              <div className="teaser-content">
                <div className="img-div">
                  <img src={teaser02} alt="" />
                </div>
                <h1 className="teaser-h1">
                  Da kommt Freude <br /> an
                </h1>
                <div className="sub-teaser-content sub-teaser-2">
                  <p className="teaser-p">
                    Familienabend? Romantisches Date? Oder einfach nur gönnen?
                    Mit McDelivery® liefern wir dir jetzt für jeden Anlass das
                    passende Menü oder Bundle. Schnell, einfach und lecker.
                    Jetzt bei Lieferando bestellen und genießen!
                  </p>
                  <div className="teaser-btn-div">
                    <button className="btn-2">Zu McDelivery®</button>
                  </div>
                </div>
              </div>
              <div className="teaser-content">
                <div className="img-div">
                  <img src={teaser03} alt="" />
                </div>
                <h1 className="teaser-h1">
                  Es braucht nicht viel. Es braucht viele.
                </h1>
                <div className="sub-teaser-content sub-teaser-3">
                  <p className="teaser-p">
                    Verpackungen können überraschend schön sein. Wenn wir sie
                    gemeinsam richtig entsorgen und in die Kreisläufe
                    zurückbringen. Erfahre hier alles über unseren Plan für
                    weniger Müll und Plastik!
                  </p>
                  <div className="teaser-btn-div">
                    <button className="btn-3">Zu Better M</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
