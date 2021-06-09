import React from "react";
import styled from "styled-components";

import imagepath from "../../images/illustration-working.svg";
import Navbar from "../Header/Navbar";

function Landing() {
  return (
    <LandingBlock>
      <Navbar />
      <Row>
        <LandingDiv>
          <Title>More than just shorter links</Title>
          <SubTitle>
            Build your brand recognition and get detailed insights on how your
            links are performing.
          </SubTitle>
          <Button>Get Started</Button>
        </LandingDiv>
        <Illustration src={imagepath} alt="background" />
      </Row>
    </LandingBlock>
  );
}

export default Landing;

const Title = styled.div`
  margin: 1rem auto;
  font-size: 5rem;
  font-weight: 700;
  color: #34313c;
  line-height: 5.5rem;
  @media (max-width: 900px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

const SubTitle = styled.div`
  width: 85%;
  color: #9e9aa7;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #2acfcf;
  border-radius: 3rem;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: fit-content;
  margin: 3rem auto;
  &:hover {
    opacity: 0.5;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1rem;
  }
`;

const Illustration = styled.img`
  min-width: 300px;
  margin-right: -35%;
  max-height: 100%;
  @media (max-width: 900px) {
    grid-row: -1;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const LandingDiv = styled.div`
  margin: 5rem auto;
`;

const LandingBlock = styled.div`
  background: #ffffff;
  padding: 0 12.5%;
  padding-bottom: 5%;

  @media (max-width: 900px) {
    padding-bottom: 10%;
  }
`;
