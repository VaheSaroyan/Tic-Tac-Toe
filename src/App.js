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
} from "./context/mainContexts";

const App = () => {
  const historyContext = React.useContext(HistoryContext);
  const gameContext = React.useContext(GameContext);
  const { loaderVisible } = React.useContext(LoaderContext);

  return (
    <>
      <Background />
      <Header context={historyContext} />
      <MainContainer>
        <History context={historyContext} />
        <Game context={{ ...gameContext, ...historyContext }} />
      </MainContainer>
      <Footer />
      <Loader visible={loaderVisible} />
    </>
  );
};

export default App;
