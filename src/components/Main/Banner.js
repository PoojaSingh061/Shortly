import React from "react";
import styled from "styled-components";

import banner from "../../images/bg-boost-desktop.svg";

function Banner() {
  return (
    <BannerDiv>
      Boost your links today
      <Button>Get Started</Button>
    </BannerDiv>
  );
}

export default Banner;

const BannerDiv = styled.div`
  background: #3b3054;
  background-image: url(${banner});
  padding: 3.5rem;
  align-items: center;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #2acfcf;
  border-radius: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  color: #ffffff;
  border: none;
  min-width: fit-content;
  margin-top: 1rem;
  &:hover {
    opacity: 0.5;
  }
`;
