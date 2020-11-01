const createHistoryContext = ({ history, setHistory }) => ({
  history,
  setHistory(history) {
    setHistory(history);
    localStorage.setItem("history", JSON.stringify(history));
  },
});

export default createHistoryContext;
