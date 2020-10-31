import React from "react";
import { makeTime } from "helpers";
import { Cubes } from "../";
import "./index.scss";

const History = ({ history }) => {
  return Object.keys(history).map((item) => {
    const { cube, row, rowPosition, time } = history[item];

    return (
      <div
        className={`container size-${cube.length}-container history`}
        key={item}
      >
        <h1>Winner is {cube[row[0][0]][row[0][1]]}</h1>
        <h2>{makeTime(time)}</h2>
        <Cubes cube={cube} winRow={row} rowPosition={rowPosition} />
      </div>
    );
  });
};

export default History;
