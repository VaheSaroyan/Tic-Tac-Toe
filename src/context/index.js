import * as React from "react";
import { GameContext, HistoryContext, LoaderContext } from "./mainContexts";
import createGameContext from "./createGameContext";
import { __X, ON } from "../constants";
import createHistoryContext from "./createHistoryContext";

const Context = ({ children }) => {
  const [cubeLength, setCubeLength] = React.useState(3);
  const [userPlayer, setUserPlayer] = React.useState(__X);
  const [cpu, setCpu] = React.useState(ON);
  const [history, setHistory] = React.useState([]);
  const [loaderVisible, setLoaderVisible] = React.useState(true);

  React.useEffect(() => {
    const history = localStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history));
    }
    setTimeout(() => setLoaderVisible(false), 500);
  }, []);

  const gameContext = createGameContext({
    cubeLength,
    setCubeLength,
    userPlayer,
    setUserPlayer,
    cpu,
    setCpu,
  });

  const historyContext = createHistoryContext({
    history,
    setHistory,
  });

  return (
    <GameContext.Provider value={gameContext}>
      <HistoryContext.Provider value={historyContext}>
        <LoaderContext.Provider value={{ loaderVisible }}>
          {children}
        </LoaderContext.Provider>
      </HistoryContext.Provider>
    </GameContext.Provider>
  );
};

export default Context;
