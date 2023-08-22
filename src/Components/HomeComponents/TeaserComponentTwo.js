import React from "react";
import teaser01 from "../../assets/teaser201.jpg";

import "../../styles/Teaser2.css";

export const TeaserComponentTwo = () => {
  return (
    <>
      <div className="h1-div">
        <h2>Schon probiert?</h2>
      </div>
      <div className="container-wrapper-02">
        <div className="container-02">
          <div className="teaser-content-02">
            <div className="img-div-02">
              <img src={teaser01} alt="" />
            </div>
            <div className="h2-teaser">
              <h2>McCrispy® Homestyle</h2>
            </div>
            <div className="div-p-02">
              <p>
                Wer es crispy mag, wird den hier lieben: den McCrispy® Homestyle
                mit extra-crispy Chicken.
              </p>
            </div>
            <div className="div-btn-02">
              <button>Zu McCrispy® Homestyle</button>
            </div>
          </div>
          <div className="teaser-content-02">
            <div className="img-div-02">
              <img src={teaser01} alt="" />
            </div>
            <div className="h2-teaser">
              <h2>McCrispy® Homestyle</h2>
            </div>
            <div className="div-p-02">
              <p>
                Wer es crispy mag, wird den hier lieben: den McCrispy® Homestyle
                mit extra-crispy Chicken.
              </p>
            </div>
            <div className="div-btn-02">
              <button>Zu McCrispy® Homestyle</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
