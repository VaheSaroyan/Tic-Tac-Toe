import React from "react";
import "./index.scss";

const Cube = ({ winRow, position, rowPosition, onClick, item }) => {
  const [winCube, setWinCube] = React.useState(false);
  React.useEffect(() => {
    setWinCube(false);
    winRow.forEach((row) => {
      if (JSON.stringify(row) === JSON.stringify(position)) {
        setWinCube(true);
      }
    });
  }, [winRow]);

  return (
    <span
      className={`cube${winCube ? " winCube" : ""}`}
      data-row-position={rowPosition}
      onClick={onClick}
    >
      {item}
    </span>
  );
};

export default Cube;
