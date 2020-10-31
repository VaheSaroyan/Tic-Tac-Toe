import React from "react";
import { Cube, Row } from "../index";

const Cubes = ({ cube, setItem, winRow, rowPosition }) => {
  return cube.map((item, rowIndex) => {
    return (
      <Row key={rowIndex}>
        {item.map((childItem, index) => {
          return (
            <Cube
              key={index}
              onClick={
                typeof setItem === "function" ? setItem(rowIndex, index) : null
              }
              item={childItem}
              winRow={winRow}
              position={[rowIndex, index]}
              rowPosition={rowPosition}
            />
          );
        })}
      </Row>
    );
  });
};

export default Cubes;
