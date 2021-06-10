import React from "react";
import styled from "styled-components";

import Card from "./Card";

import icon1 from "../../../images/icon-brand-recognition.svg";
import icon2 from "../../../images/icon-detailed-records.svg";
import icon3 from "../../../images/icon-fully-customizable.svg";

const content = [
  {
    icon: icon1,
    title: "Brand Recognition",
    description: `Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.`,
  },
  {
    icon: icon2,
    title: "Detailed Records",
    description: `Gain insights into who is clicking your links. Knowing when and
    where people engage with your content helps inform better
    decisions.`,
  },
  {
    icon: icon3,
    title: "Fully Customizable",
    description: `Improve brand awareness and content discoverability through
    customizable links, supercharging audience engagement.`,
  },
];

function CardRow() {
  return (
    <Statistics>
      <div className="stats-title">
        <Title>Advanced Statistics</Title>
        <SubTitle>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SubTitle>
      </div>
      <Row>
        {content.map((cardContent, index) => (
          <div key={index} className={`c${index + 1}`}>
            <Card
              key={index}
              icon={cardContent.icon}
              title={cardContent.title}
              description={cardContent.description}
            />
          </div>
        ))}
      </Row>
    </Statistics>
  );
}

export default CardRow;

const Title = styled.h1`
  font-weight: 700;
  margin: 1rem auto;
  font-size: 2.5rem;
  text-align: center;
`;

const SubTitle = styled.p`
  color: #9e9aa7;
  line-height: 1.5rem;
`;

const Statistics = styled.div`
    margin: 6rem auto;
    padding: 2rem 0;
    display: grid;
    justify-items: center;

    .stats-title {
        margin: 1rem auto;
        width: 50%;
        text-align: center;

    @media (max-width: 900px) {
        .stats-title {
            width: 100%;
        }
    }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5rem;
  margin: 50px auto;

  .c2 {
    margin-top: 15%;
  }

  .c3 {
    margin-top: 30%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 70%;
    height: 0.5rem;
    background: hsl(180, 66%, 49%);
    z-index: -1;
    margin-top: 10%;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 5rem;
    .c2,
    .c3 {
      margin: 0;
    }

    &::after {
      content: "";
      position: absolute;
      width: 0.5rem;
      height: 150%;
      background: hsl(180, 66%, 49%);
      z-index: -1;
      margin-left: 35%;
    }
  }
`;
