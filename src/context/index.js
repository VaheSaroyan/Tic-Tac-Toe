import * as React from "react";
import { GameContext } from "./mainContexts";
import createGameContext from "./createGameContext";
import { __X, ON } from "../constants";

const Context = ({ children }) => {
  const [cubeLength, setCubeLength] = React.useState(4);
  const [userPlayer, setUserPlayer] = React.useState(__X);
  const [cpu, setCpu] = React.useState(ON);
  const gameContext = createGameContext({
    cubeLength,
    setCubeLength,
    userPlayer,
    setUserPlayer,
    cpu,
    setCpu,
  });
  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

export default Context;
