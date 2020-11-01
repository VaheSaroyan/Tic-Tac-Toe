import React from "react";
import "./index.scss";

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="loader-container">
      <span className="loader" />
    </div>
  );
};

export default Loader;
