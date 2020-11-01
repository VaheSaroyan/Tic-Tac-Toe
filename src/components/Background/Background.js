import React from "react";
import "./index.scss";

const Background = ({ context }) => {
  const { theme } = context;
  return <div className={`background ${theme}`} />;
};

export default Background;
