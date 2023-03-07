import FooterNavbar from "./footer-components/footerNavbar";
import React from "react";
import FooterBlack from "./footer-components/FooterBlack";
import FooterADS from "./footer-components/FooterADS";
import FooterText from "./footer-components/FooterText";
const Footer = () => {
  return (
    <div>
      <FooterText />
      <FooterADS />
      <FooterNavbar />
      <FooterBlack />
    </div>
  );
};

export default Footer;
