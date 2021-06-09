import React from "react";
import styled from "styled-components";

function Card({ icon, title, description }) {
  return (
    <Block>
      <Icon src={icon} alt="icon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Block>
  );
}

export default Card;

const Block = styled.div`
  padding: 2rem;
  background: #ffffff;
`;

const Icon = styled.img`
  background-color: #3b3054;
  border-radius: 50%;
  width: fit-content;
  padding: 1rem;
  margin-top: -70px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.2rem;
  color: #34313c;
  padding: 1rem 0;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-weight: 500;
  color: #9e9aa7;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 900px) {
    text-align: center;
    -webkit-line-clamp: 6;
  }
`;
