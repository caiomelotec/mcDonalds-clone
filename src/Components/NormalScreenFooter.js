import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

export const NormalScreenFooter = ({ smalllogo, googleplay, apple }) => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-pt1">
        <ul>
          <li className="first-item">Familien</li>
          <li>Familien</li>
          <li>Kindergeburtstag</li>
          <li>Happy Meal®</li>
          <li>Junior Club</li>
          <li>Geschenke</li>
          <li>Happy Meal App</li>
        </ul>
        <ul>
          <li className="first-item">Über uns</li>
          <li>Über uns</li>
          <li>Geschichte</li>
          <li>Vorstand</li>
          <li>Unsere Verantwortung</li>
          <li>Das Unternehmen</li>
          <li>HDrivers VIP Card Busfahrer</li>
          <li>Franchise Modell</li>
          <li>Newsletter</li>
        </ul>
        <ul>
          <li className="first-item">Kontakt</li>
          <li>Kontakt</li>
          <li>Presse & Mediencenter</li>
        </ul>

        <ul>
          <li className="first-item">Karriere</li>
          <li>Karriere</li>
          <li>Jobs im Restaurant</li>
          <li>Management</li>
          <li>Minijobs</li>
          <li>Ausbildung</li>
          <li>Duales Studium</li>
          <li>Jobs in der Verwaltung</li>
        </ul>
      </div>
      <div className="footer-pt2">
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
      </div>
      <div className="footer-pt3">
        <div className="div-lists">
          <ul className="ul-1">
            <li>Datenschutz</li>
            <li>Impressum und AGB</li>
            <li>Meldungen zu Menschen- und Umweltrechten</li>
          </ul>
          <ul className="ul-2">
            <li>Reports on Human and Environmental Rights</li>
            <li>Privatsphäre Einstellungen</li>
          </ul>
        </div>
        <div className="copyright-div">
          <img src={smalllogo} alt="" />
          <p>©2023 McDonald’s. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
