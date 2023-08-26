import React from "react";
import mccafeImage from "../../assets/mccafePage.jpg";

export const SummerMcCafe = () => {
  return (
    <>
      <h1 className="title">Sommerhighlights im McCafé®</h1>
      <img className="mccafe-img" src={mccafeImage} alt="" />
      <div className="cold-drinks-info">
        <h1>
          Entdecke die McCafé® Cold <br /> Drinks
        </h1>
        <p>
          Wenn dir die Hitze zu Kopf steigt, wird es höchste Zeit für eine
          leckere Abkühlung im McCafé®! Entdecke jetzt <br /> unsere
          erfrischenden Cold Drinks für heiße Tage. So vielseitig wie der
          Sommer, so vielseitig ist auch unser <br /> McCafé® Sortiment. Ob Iced
          Coffee Shake oder Cold Brew - wähle jetzt deinen himmlisch leckeren
          und <br />
          eiskalten McCafé® Favoriten.
        </p>
      </div>
    </>
  );
};
