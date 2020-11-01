import React from "react";
import "./index.scss";
import { countAllResult } from "../../helpers";

const Header = ({ context = { history: {} } }) => {
  const { history } = context;
  return (
    <header>
      <h1>{countAllResult({ history })}</h1>
      <select name="" id="">
        <option value="">style1</option>
        <option value="">style2</option>
      </select>
    </header>
  );
};

export default Header;
