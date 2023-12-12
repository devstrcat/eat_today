import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FooterButton, FooterDiv, FooterImg } from "../styles/footerStyle";

const Footer = props => {
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
      <FooterButton onClick={props.handleClick}></FooterButton>
    </FooterDiv>
  );
};

export default Footer;
