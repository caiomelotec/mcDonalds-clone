import React from "react";

import "../styles/DropDownMenu.css";

import { productListIcons } from "../data/data";

export default function DropDownMenu() {
  return (
    <div className="dropdownmenu-icons">
      <ul className="grid-container">
        {productListIcons.map((item, index) => (
          <li className="grid-item" key={index}>
            <img src={item.imageSrc} alt="" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <div>
        <button className="btn-allproducts">Alle Produkte</button>
      </div>
    </div>
  );
}
