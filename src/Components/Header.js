import React, { useEffect, useState } from "react";
import Logo from "../assets/McDonald_Logo.jpg";
import "../styles/Header.css";
import { MdLocationPin, MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import DropDownMenu from "../Components/DropDownMenu";

import { productListIcons } from "../data/data";
import { Link } from "react-router-dom";

// function theat impor the imgs

export const Header = ({ toggle, setToggle }) => {
  const [accordion, setAccordion] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [toggleDropDown, setToggleDropDown] = useState(true);

  const rotateTo0deg = { transform: "rotate(0deg)" };
  const rotateTo180deg = { transform: "rotate(180deg)" };
  const fontWeight = { fontWeight: "600" };

  useEffect(() => {
    // Define a function that updates the windowWidth state with the current inner width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add an event listener to the 'resize' event and attach the handleResize function
    window.addEventListener("resize", handleResize);
    // Cleanup function: Remove the 'resize' event listener when the component unmounts or the effect changes

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependencies array means this effect runs only once after initial render

  useEffect(() => {
    if (windowWidth > 950) {
      setToggle(true);
    }
  }, [windowWidth, setToggle]);

  return (
    <>
      <nav>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/">
            <img src={Logo} alt="" className="logo-nav" />
          </Link>
          <div>
            <section className="nav-first-section">
              <p>Karriere</p>
              <p>Lieferservice</p>
              <p>Fraschise Modell</p>
            </section>
            <section className="nav-second-section">
              <div
                className="rotate-arrow-div"
                onClick={() => setToggleDropDown(!toggleDropDown)}
              >
                <p style={toggleDropDown ? null : fontWeight}>Produkt</p>
                <MdOutlineKeyboardArrowDown
                  className="rotate-arrow"
                  style={toggleDropDown ? rotateTo0deg : rotateTo180deg}
                  size={23}
                />
              </div>

              <p>McCafé</p>
              <p>Familien</p>
              <p>Usere Verantwortung</p>
              <p>MyMcDonald's</p>
            </section>
          </div>
          <section className="nav-third-section">
            <span className="icon-search">
              <AiOutlineSearch size={20} color="black" />
              <p>Suche</p>
            </span>

            <span className="icon-location">
              <MdLocationPin size={20} color="red" />
              <p className="p-restautants">Restaurants</p>
            </span>
          </section>
          {/*Responsive Design  */}
          {/*This code changes the icon when clicked  */}
          {windowWidth < 950 &&
            (toggle ? (
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
            ))}
          {/*This is the List of the smallss device, it will show when clicked in the hambuger icon*/}
          {/*if toggle is not true and windowWidth is small than 768px it will show it*/}
          {!toggle && windowWidth < 950 && (
            <section className="device-list-section">
              <ul className="device-navbar">
                <li>Karriere</li>
                <li>Lieferservice</li>
                <li>Franchise Modell</li>
              </ul>
              <ul className="device-navbar device-navbar-2">
                <li className={accordion ? null : ""}>
                  <div className="span-produkt-withicons">
                    <span onClick={() => setAccordion(!accordion)}>
                      Produkte
                    </span>
                    {/*toggle the Button from - to + and so on */}
                    {accordion ? (
                      <AiOutlinePlus
                        onClick={() => setAccordion(!accordion)}
                        className="mdLocation"
                      />
                    ) : (
                      <AiOutlineMinus
                        className="mdLocation"
                        onClick={() => setAccordion(!accordion)}
                      />
                    )}
                  </div>
                  {accordion ? null : (
                    <ul>
                      <li>
                        <button className="btn-allproducts-device">
                          Alle Produkte
                        </button>
                      </li>

                      {productListIcons.map((item, index) => (
                        <li className="allprodukte-items" key={index}>
                          <img src={item.imageSrc} alt="" />
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>MacCafé®</li>
                <li>Familien</li>
                <li>Unsere Verantwortung</li>
                <li>MyMcDonald's</li>
              </ul>
              <ul className="device-navbar device-navbar-2">
                <li className="fix-icon">
                  <span>Suche</span>
                  <AiOutlineSearch
                    className="mdLocation"
                    size={20}
                    color="black"
                  />
                </li>
                <li className="p-restautants fix-icon">
                  <span>Restaurants</span>
                  <MdLocationPin
                    className="mdLocation"
                    size={20}
                    color="#bd0017"
                  />
                </li>
              </ul>
            </section>
          )}
        </div>
        {!toggleDropDown && windowWidth > 950 && <DropDownMenu />}
      </nav>
    </>
  );
};
