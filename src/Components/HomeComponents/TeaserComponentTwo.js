import React from "react";
import teaser01 from "../../assets/teaser201.jpg";
import teaser02 from "../../assets/teaser202.jpg";
import teaser03 from "../../assets/teaser203.jpg";
import teaser04 from "../../assets/teaser204.jpg";

import "../../styles/Teaser2.css";

export const TeaserComponentTwo = () => {
  const infos = [
    {
      img: teaser01,
      h2: "McCrispy® Homestyle",
      p: "Wer es crispy mag, wird den hier lieben: den McCrispy® Homestyle mit extra-crispy Chicken.",
      btn: "Zu McCrispy® Homestyle",
    },
    {
      img: teaser02,
      h2: "McDonald’s Supreme",
      p: "100 % Rindfleisch und Hofmilchkäse aus Deutschland, 100 % McDonald‘s Geschmack. Life is GRAND mit McDonald’s Supreme.",
      btn: "Zu Supreme",
    },
    {
      img: teaser03,
      h2: "McPlant® und McPlant® Nuggets",
      p: "Probiere jetzt unseren neuen McPlant® mit pflanzlichem Beyond Meat Patty und die neuen pflanzlichen McPlant® Nuggets. ",
      btn: "Zu McPlant®",
    },
    {
      img: teaser04,
      h2: "McMenü®",
      p: "Stell dir dein ganz eigenes McMenü® aus einem Klassiker und zwei Beilagen nach Wahl zusammen!",
      btn: "Zum McMenü®",
    },
  ];

  return (
    <>
      <div className="h1-div">
        <h2>Schon probiert?</h2>
      </div>
      <div className="container-wrapper-02">
        <div className="container-02">
          {infos.map((info) => (
            <div className="teaser-content-02">
              <div className="img-div-02">
                <img src={info.img} alt="" />
              </div>
              <div className="h2-teaser">
                <h2>{info.h2}</h2>
              </div>
              <div className="div-p-02">
                <p>{info.p}</p>
              </div>
              <div className="div-btn-02">
                <button>{info.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
