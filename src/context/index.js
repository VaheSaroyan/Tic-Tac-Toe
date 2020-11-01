import * as React from "react";
import { GameContext, HistoryContext } from "./mainContexts";
import createGameContext from "./createGameContext";
import { __X, ON } from "../constants";
import createHistoryContext from "./createHistoryContext";

const Context = ({ children }) => {
  const [cubeLength, setCubeLength] = React.useState(3);
  const [userPlayer, setUserPlayer] = React.useState(__X);
  const [cpu, setCpu] = React.useState(ON);
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    const history = localStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history));
    }
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
        {children}
      </HistoryContext.Provider>
    </GameContext.Provider>
  );
};

export default Context;
