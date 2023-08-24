import React from "react";
import AccordionSection from "./AccordionSection"; // Adjust the path as needed
import "../styles/FooterMobile.css";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

export const FooterMobile = ({ smalllogo, googleplay, apple }) => {
  const familyItems = [
    "Familien",
    "Kindergeburtstag",
    "Happy Meal®",
    "Junior Club",
    "Geschenke",
    "Happy Meal App",
  ];
  const aboutUsItems = [
    "Über uns",
    "Geschichte",
    "Vorstand",
    "Unsere Verantwortung",
    "Das Unternehmen",
    "HDrivers VIP Card Busfahrer",
    "Franchise Modell",
    "Newsletter",
  ];
  const careerItems = [
    "Karriere",
    "Jobs im Restaurant",
    "Management",
    "Minijobs",
    "Ausbildung",
    "Duales Studium",
    "Jobs in der Verwaltung",
  ];
  const contactItems = ["Kontakt", "Presse & Mediencenter"];

  return (
    <footer className="footer-mobile-wrapper">
      <AccordionSection title="Familien" items={familyItems} />
      <AccordionSection title="Über uns" items={aboutUsItems} />
      <AccordionSection title="Kontakt" items={contactItems} />
      <AccordionSection title="Karriere" items={careerItems} />
      <div className="icons-div">
        <FaFacebookF className="facebook-icon" size={42} />
        <AiFillInstagram className="instagram-icon" size={42} />
        <AiFillYoutube className="youtube-icon" size={42} />
        <AiOutlineTwitter className="twitter-icon" size={42} />
      </div>
      <div className="div-imgs">
        <img src={apple} alt="" />
        <img src={googleplay} alt="" />
      </div>
      <div className="div-lists">
        <ul>
          <li>Datenschutz</li>
          <li>Impressum und AGB</li>
          <li>Meldungen zu Menschen- und Umweltrechten</li>
          <li>Reports on Human and Environmental Rights</li>
          <li>Privatsphäre Einstellungen</li>
        </ul>
        <div className="copyright-div">
          <img src={smalllogo} alt="" />
          <p>©2023 McDonald’s. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
