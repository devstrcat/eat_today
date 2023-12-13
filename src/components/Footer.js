import React from "react";
import { Link } from "react-router-dom";
import { FooterDiv, FooterImg } from "../styles/footerStyle";

const Footer = () => {
  return (
    <FooterDiv>
      <Link to="/meal">
        <FooterImg src="/images/common/home.svg"></FooterImg>
      </Link>
      <Link to="/meal/write">
        <FooterImg src="/images/common/write.svg"></FooterImg>
      </Link>
      <Link to="/meal/bookmark">
        <FooterImg src="/images/common/book_mark.svg"></FooterImg>
      </Link>
      <Link to="/">
        <FooterImg src="/images/common/logo.svg"></FooterImg>
      </Link>
    </FooterDiv>
  );
};

export default Footer;
