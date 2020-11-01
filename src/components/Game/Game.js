import React from "react";
import { Cubes, GameHeader } from "components";
import { __O, __X, ON } from "../../constants";
import {
  cubeIsFull,
  emptyArray,
  isWinner,
  makeCube,
  matrixDiagonal,
} from "helpers";
import "./index.scss";

const Game = ({ context = { history: {}, setHistory: () => {} } }) => {
  const { cubeLength, userPlayer, cpu, history, setHistory } = context;

  const [cube, setCube] = React.useState([]);
  const [winRow, setWinRow] = React.useState([]);
  const [rowPosition, setRowPosition] = React.useState("horizontal");
  const [player, setPlayer] = React.useState(__X);
  const [isWined, setIsWined] = React.useState(false);

  React.useEffect(() => {
    setCube(makeCube({ cubeLength }));
  }, [cubeLength]);

  React.useEffect(() => {
    if (player !== userPlayer && cpu === ON && !cubeIsFull({ cube })) {
      cpMove();
    }
  }, [player, userPlayer, cpu]);

  React.useEffect(() => {
    const { isWined, row, rowPosition } = isWinner(cube, WIN_POSITIONS);
    if (isWined) {
      setRowPosition(rowPosition);
      setWinRow(row);
      setIsWined(true);
      setTimeout(() => {
        setHistory({
          ...history,
          [Object.keys(history).length + 1]: {
            cube,
            row,
            rowPosition,
            time: new Date(),
          },
        });
        window.scrollTo(
          0,
          document.querySelector(".main-container").scrollHeight
        );
        setCube(makeCube({ cubeLength }));
        setWinRow([]);
        setIsWined(false);
      }, 2000);
    } else if (cubeIsFull({ cube })) {
      setTimeout(() => {
        setCube(makeCube({ cubeLength }));
      }, 1000);
    }
  }, [cube]);

  React.useEffect(() => {
    setPlayer(__X);
    setCube(makeCube({ cubeLength }));
  }, [cubeLength]);

  const setItem = React.useCallback(
    (x, y) => () => {
      const isNull = cube[x][y];
      if (!isNull && !isWined) {
        let newArray = [...cube];
        newArray[x][y] = player;
        setCube(newArray);
        setPlayer(player === __X ? __O : __X);
        return false;
      }
      return true;
    },
    [cube, isWined, player]
  );

  const WIN_POSITIONS = React.useMemo(() => {
    const positions = {
      horizontal: [],
      vertical: [],
      leftFromRight: [],
      rightFromLeft: [],
    };

    positions.horizontal = emptyArray(cubeLength).map((item, x) =>
      emptyArray(cubeLength).map((item, y) => [x, y])
    );
    positions.vertical = emptyArray(cubeLength).map((item, x) =>
      emptyArray(cubeLength).map((item, y) => [y, x])
    );
    const { leftFromRight, rightFromLeft } = matrixDiagonal(
      positions.horizontal
    );
    positions.leftFromRight = [leftFromRight];
    positions.rightFromLeft = [rightFromLeft];
    return positions;
  }, [cubeLength]);

  const EMPTY_CUBE = React.useMemo(
    () =>
      emptyArray(cubeLength).map((item, x) =>
        emptyArray(cubeLength).map((item, y) => [x, y])
      ),
    [cubeLength]
  );

  const cpMove = () => {
    const item = EMPTY_CUBE[Math.floor(Math.random() * EMPTY_CUBE.length)];
    const [x, y] = item[Math.floor(Math.random() * item.length)];

    if (setItem(x, y)()) {
      cpMove();
    }
  };

  return (
    <div className="game-container">
      <GameHeader
        winner={winRow[0] && cube[winRow[0][0]][winRow[0][1]]}
        isSown={isWined}
      />
      <Cubes
        cube={cube}
        setItem={setItem}
        winRow={winRow}
        rowPosition={rowPosition}
      />
    </div>
  );
};

export default Game;
