import React from "react";
import "./index.css";
import { History, Game } from "components";

import { countAllResult } from "helpers";

const App = () => {
  const [history, setHistory] = React.useState([]);

  return (
    <>
      <h1>{countAllResult({ history })}</h1>
      <div className="main-container">
        <History history={history} />
        <Game setHistory={setHistory} history={history} />
      </div>
    </>
  );
};

export default App;
