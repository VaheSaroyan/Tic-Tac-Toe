import React from "react";
import {
  History,
  Game,
  Footer,
  Header,
  MainContainer,
  Background,
  Loader,
} from "components";

import "index.css";
import {
  GameContext,
  HistoryContext,
  LoaderContext,
  ThemeContext,
} from "./context/mainContexts";

const App = () => {
  const historyContext = React.useContext(HistoryContext);
  const gameContext = React.useContext(GameContext);
  const themeContext = React.useContext(ThemeContext);
  const { loaderVisible } = React.useContext(LoaderContext);

  return (
    <>
      <Background context={themeContext} />
      <Header context={{ ...historyContext, ...themeContext }} />
      <MainContainer>
        <History context={{ ...historyContext, ...themeContext }} />
        <Game
          context={{ ...gameContext, ...historyContext, ...themeContext }}
        />
      </MainContainer>
      <Footer />
      <Loader visible={loaderVisible} />
    </>
  );
};

export default App;
