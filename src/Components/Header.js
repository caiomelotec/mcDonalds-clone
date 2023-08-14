import React from "react";
import Logo from "../assets/McDonald_Logo.jpg";
import "../styles/Header.css";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
export const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="" className="logo-nav" />
      <div>
        <section className="nav-first-section">
          <p>Karriere</p>
          <p>Lieferservice</p>
          <p>Fraschise Modell</p>
        </section>
        <section className="nav-second-section">
          <p>Produkt</p>
          <p>McCafé</p>
          <p>Familien</p>
          <p>Usere Verantwortung</p>
          <p>MyMcDonald's</p>
        </section>
      </div>
      <section className="nav-third-section">
        <p className="icon-search">
          <AiOutlineSearch size={20} color="black" />
          <p>Suche</p>
        </p>

        <p className="icon-location">
          <MdLocationPin size={20} color="red" />{" "}
          <p className="p-restautants">Restaurants</p>
        </p>
      </section>
      <FaBars className="ham-icon" size={20} color="black" />
    </nav>
  );
};
