import React from "react";
import "./index.scss";

const Loader = ({ visible, isSmall }) => {
  if (!visible) {
    return null;
  }
  return (
    <div
      className={`loader-container loader-container${isSmall ? "--small" : ""}`}
    >
      <span className={`loader loader${isSmall ? "--small" : ""}`} />
    </div>
  );
};

export default Loader;
