import React from "react";
import { Link } from "react-router-dom";
import { FooterDiv, FooterImg } from "../styles/footer";

const Footer = ({ onHomeButtonClick }) => {
  return (
    <footer>
      <FooterDiv>
        <Link to="/meal" onClick={onHomeButtonClick}>
          <FooterImg src="/images/common/home.svg"></FooterImg>
        </Link>
        <Link to="/meal/write">
          <FooterImg src="/images/common/write.svg"></FooterImg>
        </Link>
        <Link to="/meal/bookmark">
          <FooterImg src="/images/common/book_mark.svg"></FooterImg>
        </Link>
        <Link to="/meal/member">
          <FooterImg src="/images/common/logo.svg"></FooterImg>
        </Link>
      </FooterDiv>
    </footer>
  );
};

export default Footer;
