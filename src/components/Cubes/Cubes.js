import React from "react";
import { Cube, Row } from "../index";
import { THEMES_WITHOUT_DEFAULT } from "../../constants";

const Cubes = ({ cube, setItem, winRow, rowPosition, context }) => {
  const { theme } = context;
  const [image, setImage] = React.useState(false);

  React.useEffect(() => {
    if (THEMES_WITHOUT_DEFAULT.includes(theme)) {
      setImage(true);
      if (theme)
        (async () => {
          const [{ default: O }, { default: X }] = await Promise.all([
            import(`./assets/${theme}/icons/O.svg`),
            import(`./assets/${theme}/icons/X.svg`),
          ]);
          if (X && O) {
            setImage({ X, O });
          }
        })();
    } else {
      setImage(false);
    }
  }, [theme]);

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
              image={image}
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
