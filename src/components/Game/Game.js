import React from "react";
import { Cubes, Header, History } from "components";
import { __O, __X, OFF, ON } from "../../constants";
import {
  cubeIsFull,
  emptyArray,
  isWinner,
  makeCube,
  matrixDiagonal,
} from "helpers";

const Game = ({ setHistory, history }) => {
  const [cubeLength, setCubeLength] = React.useState(3);
  const [cube, setCube] = React.useState([]);
  const [winRow, setWinRow] = React.useState([]);
  const [rowPosition, setRowPosition] = React.useState("horizontal");
  const [userPlayer, setUserPlayer] = React.useState(__X);
  const [player, setPlayer] = React.useState(__X);
  const [isWined, setIsWined] = React.useState(false);
  const [cpu, setCpu] = React.useState(ON);

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
      <Header
        winner={winRow[0] && cube[winRow[0][0]][winRow[0][1]]}
        isSown={isWined}
      />
      <Cubes
        cube={cube}
        setItem={setItem}
        winRow={winRow}
        rowPosition={rowPosition}
      />
      <select
        value={userPlayer}
        onChange={(e) => {
          setUserPlayer(e.target.value);
          setPlayer(__X);
          setCube(makeCube({ cubeLength }));
        }}
      >
        <option value={__X}>User player X</option>
        <option value={__O}>User player O</option>
      </select>
      <select
        value={cpu}
        onChange={(e) => {
          setCpu(e.target.value);
        }}
      >
        <option value={ON}>CPU ON</option>
        <option value={OFF}>CPU OFF</option>
      </select>
      <select
        value={cubeLength}
        onChange={(e) => {
          setCubeLength(Number(e.target.value));
        }}
      >
        {emptyArray(10).map((item, index) => {
          if (index >= 3) {
            return (
              <option value={index} key={index}>
                {index}
              </option>
            );
          }
          return undefined;
        })}
      </select>
    </div>
  );
};

export default Game;
