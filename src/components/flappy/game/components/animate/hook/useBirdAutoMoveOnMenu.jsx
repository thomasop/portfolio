import React, { useContext, useEffect } from "react";
import flappyContext from "../../../../../../providers/flappy/flappyContext";

const useBirdAutoMoveOnMenu = () => {
  const { value, setValue } = useContext(flappyContext);
  useEffect(() => {
    let id;
    const animate = () => {
      if (value.start === false) {
        if (value.posYBird > 190) {
          setValue((prev) => ({
            ...prev,
            dyBird: -1,
          }));
        } else if (value.posYBird < 180) {
          setValue((prev) => ({
            ...prev,
            dyBird: 1,
          }));
        }
        setValue((prev) => ({
          ...prev,
          posYBird: prev.posYBird + prev.dyBird,
        }));
      }
    };
    if (value.stopAnimation === false && value.rules === false) {
      id = window.requestAnimationFrame(animate);
    }

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [setValue, value.posYBird, value.rules, value.start, value.stopAnimation]);
};

export default useBirdAutoMoveOnMenu;
