import React, { useState } from "react";
import Logo from "../assets/McDonald_Logo.jpg";
import "../styles/Header.css";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
export const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className={toggle ? null : "navbar-active"}>
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
      {/*Responsive Design  */}
      {/*This code changes the icon when clicked  */}
      {toggle ? (
        <FaBars
          className="ham-icon"
          size={20}
          color="black"
          onClick={() => setToggle(false)}
        />
      ) : (
        <AiOutlineClose
          className="close-icon"
          size={20}
          color="black"
          onClick={() => setToggle(true)}
        />
      )}
      {/*This is the List of the smallss device, it will show when clicked in the hambuger icon*/}
      {toggle ? null : (
        <section className="device-list-section">
          <ul className="device-navbar">
            <li>Karriere</li>
            <li>Lieferservice</li>
            <li>Franchise Modell</li>
          </ul>
          <ul className="device-navbar device-navbar-2">
            <li>Produkte</li>
            <li>MacCafé®</li>
            <li>Familien</li>
            <li>Unsere Verantwortung</li>
            <li>MyMcDonald's</li>
          </ul>
          <ul className="device-navbar device-navbar-2">
            <li>Suche</li>
            <li className="p-restautants">Restaurants</li>
          </ul>
        </section>
      )}
    </nav>
  );
};
