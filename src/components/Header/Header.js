import React from "react";
import "./index.scss";

const Header = ({ winner, isSown }) => {
  if (!isSown) {
    return null;
  }
  return <header>Is win from {winner}!</header>;
};

export default Header;
