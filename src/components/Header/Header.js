import React from "react";
import "./index.scss";
import { HistoryContext } from "context/mainContexts";
import { countAllResult } from "../../helpers";
const Header = () => {
  const { history } = React.useContext(HistoryContext);
  return (
    <header>
      <h1>{countAllResult({ history })}</h1>
    </header>
  );
};

export default Header;
