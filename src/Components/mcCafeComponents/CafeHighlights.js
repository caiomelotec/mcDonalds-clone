import React from "react";
import mccafeHighlightsImage from "../../assets/hightlightsMccafe.jpg";

export const CafeHighlights = () => {
  return (
    <>
      <h1 className="title-2">Entdecke unsere neuen McCafé® Food Highlights</h1>
      <div className="cafe-highlights">
        <img src={mccafeHighlightsImage} alt="" />
        <div className="highlights-info-div">
          <h1>McCafé® Sweets</h1>
          <p>
            Probiere den leckeren McCafé® Kuchen N.Y. Style Cheesecake mit
            OREO®-Topping und Schoko-Sauce oder unseren Cookie Dough Donut.
          </p>
          <button>Jetzt genießen</button>
        </div>
      </div>
    </>
  );
};
