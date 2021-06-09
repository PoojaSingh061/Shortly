import React from "react";
import CardRow from "./components/Main/Stats/CardRow";
import Landing from "./components/Main/Landing";
import styled from "styled-components";

import Banner from "./components/Main/Banner";
import Footer from "./components/Footer/Footer";
import LinkShortener from "./components/Shortener/LinkShortener";

function App() {
  return (
    <Main>
      <Landing />
      <div className="container">
        <LinkShortener />
        <CardRow />
      </div>
      <Banner />
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  font-family: "Poppins", sans-serif;

  * {
    box-sizing: border-box;
  }
`;
