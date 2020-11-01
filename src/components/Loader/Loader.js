import React from "react";
import "./index.scss";

const Loader = ({ visible, isSmall }) => {
  if (!visible) {
    return null;
  }
  return (
    <div
      className={`loader-container ${isSmall ? "loader-container--small" : ""}`}
    >
      <span className={`loader ${isSmall ? "loader--small" : ""}`} />
    </div>
  );
};

export default Loader;
