import React from "react";
import "./index.css";
import { History, Game, Footer, Header } from "components";
import { countAllResult } from "helpers";
import Context from "./context";

const App = () => {
  const [history, setHistory] = React.useState([]);

  return (
    <Context>
      <Header text={countAllResult({ history })} />
      <div className="main-container">
        <History history={history} />
        <Game setHistory={setHistory} history={history} />
      </div>
      <Footer />
    </Context>
  );
};

export default App;
