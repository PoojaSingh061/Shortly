import React, { useState } from "react";
import styled from "styled-components";

import shortly from "../../images/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav style={{ display: "flex" }}>
      <img src={shortly} alt="Shortly" />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Left>
          <MenuLink href="">Features</MenuLink>
          <MenuLink href="">Pricing</MenuLink>
          <MenuLink href="">Resources</MenuLink>
        </Left>
        <Left>
          <MenuButton href="">Login</MenuButton>
          <MenuButton className="active" href="">
            Sign Up
          </MenuButton>
        </Left>
      </Menu>
    </Nav>
  );
}

export default Navbar;

const Left = styled.span`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const MenuLink = styled.a`
  padding: 0.75rem;
  text-decoration: none;
  color: #9e9aa7;
  text-align: center;
  min-width: fit-content;
  &:hover {
    color: #34313c;
  }
  @media (max-width: 900px) {
    &:hover {
      color: #ffffff;
    }
  }
`;

const MenuButton = styled.a`
  text-decoration: none;
  color: #9e9aa7;
  min-width: fit-content;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-align: center;
  &:hover {
    background: #2acfcf;
    color: #ffffff;
    width: 70%;
    opacity: 0.5;
  }
`;

const Nav = styled.div`
	padding: 2.5rem 0;
	align-items: center;
	font-weight: 700
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: white;
`;

const Menu = styled.div`
  display: flex;
  flex-grow: 100;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .active {
    background: #2acfcf;
    color: #ffffff;
  }
  @media (max-width: 900px) {
    overflow: hidden;
    background: #3b3054;
    border-radius: 10px;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    .active {
      width: 70%;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #9e9aa7;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;
