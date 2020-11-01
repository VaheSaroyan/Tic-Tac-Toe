import React from "react";
import { History, Game, Footer, Header, MainContainer } from "components";
import Context from "context";
import "index.css";

const App = () => {
  return (
    <Context>
      <Header />
      <MainContainer>
        <History />
        <Game />
      </MainContainer>
      <Footer />
    </Context>
  );
};

export default App;
