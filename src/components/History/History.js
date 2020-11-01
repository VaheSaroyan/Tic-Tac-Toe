import React from "react";
import { findCube, makeTime } from "helpers";
import { Cubes } from "../";
import "./index.scss";

const History = ({ context = { history: {} } }) => {
  const { history } = context;
  return Object.keys(history).map((item) => {
    const { cube, row, rowPosition, time } = history[item];

    return (
      <div
        className={`container size-${cube.length}-container history`}
        key={item}
      >
        <h1>Winner is {findCube({ cube, row })}</h1>
        <h2>{makeTime(time)}</h2>
        <Cubes
          cube={cube}
          winRow={row}
          rowPosition={rowPosition}
          context={context}
        />
      </div>
    );
  });
};

export default History;
