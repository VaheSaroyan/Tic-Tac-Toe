import React from "react";
import { Cube, Row } from "../";
import { THEMES_WITHOUT_DEFAULT } from "../../constants";
import style1X from "./assets/style-1/icons/X.svg";
import style1O from "./assets/style-1/icons/O.svg";
import style2X from "./assets/style-2/icons/X.svg";
import style2O from "./assets/style-2/icons/O.svg";
import style3X from "./assets/style-3/icons/X.svg";
import style3O from "./assets/style-3/icons/O.svg";
import style4X from "./assets/style-4/icons/X.svg";
import style4O from "./assets/style-4/icons/O.svg";
import style5X from "./assets/style-5/icons/X.svg";
import style5O from "./assets/style-5/icons/O.svg";

const styles = {
  "style-1": { X: style1X, O: style1O },
  "style-2": { X: style2X, O: style2O },
  "style-3": { X: style3X, O: style3O },
  "style-4": { X: style4X, O: style4O },
  "style-5": { X: style5X, O: style5O },
};

const Cubes = ({ cube, setItem, winRow, rowPosition, context }) => {
  const { theme } = context;
  const [image, setImage] = React.useState(false);

  React.useEffect(() => {
    if (THEMES_WITHOUT_DEFAULT.includes(theme)) {
      setImage(true);
      if (theme) {
        // (async () => {
        // const [{ default: O }, { default: X }] = await Promise.all([
        //   import(`./assets/${theme}/icons/O.svg`),
        //   import(`./assets/${theme}/icons/X.svg`),
        // ]);
        const { X, O } = styles[theme];
        if (X && O) {
          setImage({ X, O });
        }
      }
      // })();
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
