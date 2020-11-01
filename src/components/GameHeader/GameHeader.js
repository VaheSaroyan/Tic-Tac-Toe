import React from "react";
import "./index.scss";

const GameHeader = ({ winner, isSown }) => {
  if (!isSown) {
    return null;
  }
  return <div>Is win from {winner}!</div>;
};

export default GameHeader;
