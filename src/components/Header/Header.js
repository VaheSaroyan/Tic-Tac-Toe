import React from "react";
import "./index.scss";
import { countAllResult } from "../../helpers";
import { THEMES } from "../../constants";

console.log(THEMES);
const Header = ({ context = { history: {} } }) => {
  const { history, setTheme, theme } = context;
  return (
    <header>
      <h1>{countAllResult({ history })}</h1>
      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        {THEMES.map(({ theme, name }) => (
          <option key={theme} value={theme}>
            {name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
