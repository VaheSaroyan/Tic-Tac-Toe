import React from "react";
import "./index.scss";
import { __O, __X, OFF, ON } from "../../constants";
import { emptyArray } from "helpers";
import { GameContext } from "context/mainContexts";

const Footer = () => {
  const {
    cubeLength,
    changeCubeLength,
    userPlayer,
    changeUserPlayer,
    cpu,
    changeCpu,
  } = React.useContext(GameContext);

  return (
    <footer>
      <select
        value={userPlayer}
        onChange={(e) => changeUserPlayer(e.target.value)}
      >
        <option value={__X}>User player X</option>
        <option value={__O}>User player O</option>
      </select>
      <select value={cpu} onChange={(e) => changeCpu(e.target.value)}>
        <option value={ON}>CPU ON</option>
        <option value={OFF}>CPU OFF</option>
      </select>
      <select
        value={cubeLength}
        onChange={(e) => changeCubeLength(e.target.value)}
      >
        {emptyArray(10).map((item, index) => {
          if (index >= 3) {
            return (
              <option value={index} key={index}>
                {index}
              </option>
            );
          }
          return undefined;
        })}
      </select>
    </footer>
  );
};

export default Footer;
