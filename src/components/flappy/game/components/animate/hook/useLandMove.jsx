import React, { useContext, useEffect } from "react";
import flappyContext from "../../../../../../providers/flappy/flappyContext";

const useLandMove = () => {
  const { value, setValue } = useContext(flappyContext);
  useEffect(() => {
    let id;
    const animate = () => {
      if (value.posXLand === -100) {
        setValue((prev) => ({
          ...prev,
          posXLand: 0,
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          posXLand: prev.posXLand - 2,
        }));
      }
    };
    if (value.stopAnimation === false && value.rules === false) {
      id = window.requestAnimationFrame(animate);
    }

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [setValue, value.posXLand, value.rules, value.stopAnimation]);
};

export default useLandMove;
