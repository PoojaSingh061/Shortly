import React from "react";
import styled from "styled-components";

import shortly from "../../images/whitelogo.svg";
import FooterList from "./FooterList";

import icon0 from "../../images/icon-facebook.svg";
import icon1 from "../../images/icon-twitter.svg";
import icon2 from "../../images/icon-pinterest.svg";
import icon3 from "../../images/icon-instagram.svg";

const iconContent = [icon0, icon1, icon2, icon3];


const footerMenuList = {
  Features: ["link shortening", "branded links", "analytics"],
  Resources: ["blog", "developers", "support"],
  Company: ["about", "our team", "careers", "contact"],
};

function Footer() {
  return (
    <FooterDiv>
      <Container className="container">
        <img src={shortly} alt="Shortly" />
        {Object.entries(footerMenuList).map(([heading, listItems], index) => (
          <FooterList key={index} heading={heading} listItems={listItems} />
        ))}
        <Icons>
          {iconContent.map((icon, index) => (
            <img key={index} src={icon} alt="icon" />
          ))}
        </Icons>
      </Container>
    </FooterDiv>
  );
}

export default Footer;

const FooterDiv = styled.div`
  background: #34313c;
  color: #bfbfbf;
  img {
    margin-top: 2rem;
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  align-items: flex-start;
  img {
    &:hover {
      background: #2acfcf;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  padding: 2rem 0;
  align-items: baseline;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;