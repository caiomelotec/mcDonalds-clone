import React from "react";
import "../styles/McCafe.css";
import mccafe from "../assets/mccafePage.jpg";
import mccafeHighlights from "../assets/hightlightsMccafe.jpg";

export const McCafe = () => {
  return (
    <div className="mccafe-wrapper">
      <div className="mccafe-pt1">
        <h1 className="title">Sommerhighlights im McCafé®</h1>
        <img className="mccafe-img" src={mccafe} alt="" />
        <div className="cold-drinks-info">
          <h1>
            Entdecke die McCafé® Cold <br /> Drinks
          </h1>
          <p>
            Wenn dir die Hitze zu Kopf steigt, wird es höchste Zeit für eine
            leckere Abkühlung im McCafé®! Entdecke jetzt <br /> unsere
            erfrischenden Cold Drinks für heiße Tage. So vielseitig wie der
            Sommer, so vielseitig ist auch unser <br /> McCafé® Sortiment. Ob
            Iced Coffee Shake oder Cold Brew - wähle jetzt deinen himmlisch
            leckeren und <br />
            eiskalten McCafé® Favoriten.
          </p>
        </div>
        <h1 className="title-2">
          Entdecke unsere neuen McCafé® Food Highlights
        </h1>
        <div className="cafe-highlights">
          <img src={mccafeHighlights} alt="" />
          <div className="highlights-info-div">
            <h1>McCafé® Sweets</h1>
            <p>
              Probiere den leckeren McCafé® Kuchen N.Y. Style Cheesecake mit
              OREO®-Topping und Schoko-Sauce oder unseren Cookie Dough Donut.
            </p>
            <button>Jetzt genießen</button>
          </div>
        </div>
      </div>
    </div>
  );
};
