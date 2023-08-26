import React from "react";
import "../styles/McCafe.css";

import { CafeHighlights } from "../Components/mcCafeComponents/CafeHighlights";
import { SummerMcCafe } from "../Components/mcCafeComponents/SummerMcCafe";

export const McCafe = ({ toggle }) => {
  return (
    <div className="mccafe-wrapper">
      <div className="mccafe-pt1">
        <SummerMcCafe />
        {toggle ? <CafeHighlights /> : null}
      </div>
    </div>
  );
};
