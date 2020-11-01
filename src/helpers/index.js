import { __O, __X } from "../constants";

/**
 * make empty array
 * @param length
 * @returns {any[]}
 */
export const emptyArray = (length) => {
  return Array(length).fill(null);
};
/**
 * matrix is full
 * @param cube
 * @returns {*|boolean}
 */
export const cubeIsFull = ({ cube }) => {
  return cube.length ? cube.every((item) => item.every((item) => item)) : false;
};
/**
 * make matrix with length
 * @param cubeLength
 * @returns {*[][]}
 */
export const makeCube = ({ cubeLength = 3 } = {}) => {
  return emptyArray(cubeLength).map(() => emptyArray(cubeLength));
};
/**
 * count all results
 * @param history
 * @returns {string}
 */
export const countAllResult = ({ history }) => {
  const xoArray = Object.keys(history).map((item) => {
    const { cube, row } = history[item];
    return cube[row[0][0]][row[0][1]];
  });
  const xArray = xoArray.filter((item) => item === __X);
  const oArray = xoArray.filter((item) => item === __O);
  return `Result: X:${xArray.length} - O:${oArray.length}`;
};
/**
 * make time with date
 * @returns {string}
 * @param date
 */
export const makeTime = (date) => {
  let time;
  if (date instanceof Date) {
    time = date;
  } else {
    time = new Date(date);
  }
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(time);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(time);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(time);
  const hr = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    hour12: false,
  }).format(time);
  const mn = new Intl.DateTimeFormat("en", { minute: "numeric" }).format(time);
  const sc = new Intl.DateTimeFormat("en", { second: "2-digit" }).format(time);
  return `${ye}-${mo}-${da} ${hr}:${mn}:${sc}`;
};

/**
 * find item inside matrix
 * @param item
 * @param cube
 * @returns {boolean}
 */
export const findItem = ({ item, cube }) =>
  !!item.reduce((a, b) =>
    a
      ? cube[a[0]][a[1]] !== null && cube[a[0]][a[1]] === cube[b[0]][b[1]]
        ? a
        : NaN
      : a
  );

/**
 * win row position calculation
 * @param row
 * @param winPosition
 * @returns {[]}
 */
export const calculateRowPosition = ({ row, winPosition }) => {
  let rowPosition = [];
  Object.keys(winPosition).forEach((item) => {
    winPosition[item].forEach((child) => {
      if (JSON.stringify(row) === JSON.stringify(child)) {
        rowPosition = item;
      }
    });
  });
  return rowPosition;
};

/**
 * check is win
 * @param cube
 * @param winPosition
 * @returns {{isWined: boolean, row: *, rowPosition: *}|{}}
 */
export const isWinner = (cube, winPosition) => {
  const { horizontal, vertical, leftFromRight, rightFromLeft } = winPosition;
  const rows = [...horizontal, ...vertical, ...leftFromRight, ...rightFromLeft];

  if (cube.length >= 3) {
    const findItemCb = (item) => findItem({ item, cube });
    const row = rows.find(findItemCb);
    const isWined = rows.some(findItemCb);
    const rowPosition = calculateRowPosition({ row, winPosition });

    return {
      isWined,
      row,
      rowPosition,
    };
  }

  return {};
};

/**
 * count matrix diagonals
 * @param matrix
 * @returns {{leftFromRight: [], rightFromLeft: []}}
 */
export const matrixDiagonal = (matrix) => {
  let leftFromRight = [],
    rightFromLeft = [];

  for (let row = 0; row < matrix.length; row++) {
    leftFromRight.push(matrix[row][row]);
    rightFromLeft.push(matrix[row][matrix.length - row - 1]);
  }
  return {
    leftFromRight,
    rightFromLeft,
  };
};
