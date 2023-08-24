import React from "react";
import "../styles/Footer.css";

import { useResize } from "../Context/ContextResize";

import googleplay from "../assets/googleplay.jpg";
import apple from "../assets/apple.jpg";
import smalllogo from "../assets/smalllogo.jpg";
import { NormalScreenFooter } from "./NormalScreenFooter";
import { FooterMobile } from "./FooterMobile";

export const Footer = ({ toggle }) => {
  const { windowWidth } = useResize();

  return (
    <>
      {windowWidth < 1025 && toggle && (
        <FooterMobile
          googleplay={googleplay}
          apple={apple}
          smalllogo={smalllogo}
        />
      )}
      {windowWidth > 1025 && (
        <NormalScreenFooter
          googleplay={googleplay}
          apple={apple}
          smalllogo={smalllogo}
        />
      )}
    </>
  );
};
