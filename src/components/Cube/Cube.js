import React from "react";
import { useSpring, animated } from "react-spring";
import "./index.scss";
import { Loader } from "../";

const Cube = ({ winRow, position, rowPosition, onClick, item, image }) => {
  const [winCube, setWinCube] = React.useState(false);

  const { xyz } = useSpring({
    from: { xyz: [0, 0, 0] },
    xyz: [10, 20, 10],
  });

  React.useEffect(() => {
    setWinCube(false);
    winRow.forEach((row) => {
      if (JSON.stringify(row) === JSON.stringify(position)) {
        setWinCube(true);
      }
    });
  }, [winRow]);

  return (
    <animated.span
      className={`cube${winCube ? " winCube" : ""}`}
      style={{
        transform: xyz.interpolate(
          (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
        ),
      }}
      data-row-position={rowPosition}
      onClick={onClick}
    >
      {image && item ? (
        image[item] ? (
          <img src={image[item]} alt={image[item]} />
        ) : (
          <Loader visible isSmall />
        )
      ) : (
        item
      )}
    </animated.span>
  );
};

export default Cube;
