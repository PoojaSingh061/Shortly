import React from "react";
import styled from "styled-components";

function FooterList({ heading, listItems }) {
  return (
    <ListContainer>
      <ListTitle href="/features">{heading}</ListTitle>
      <List>
        {listItems.map((item, index) => (
          <ListItem href="/" key={index}>
            {item}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
}

export default FooterList;

const List = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const ListContainer = styled.div`
  margin-top: 2rem;
  @media (max-width: 900px) {
    display: grid;
    justify-items: center;
  }
`;

const ListItem = styled.li`
  list-style: none;
  color: #bfbfbf;
  font-weight: 500;
  line-height: 2rem;
  text-decoration: none;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: #2acfcf;
  }
`;

const ListTitle = styled.a`
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: #2acfcf;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;
