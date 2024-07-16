import React, { useContext, useEffect } from "react";
import flappyContext from "../../../../../../providers/flappy/flappyContext";

const useBackgroundMove = () => {
  const { value, setValue } = useContext(flappyContext);
  useEffect(() => {
    const animate = () => {
      if (value.posXBackground === -100) {
        setValue((prev) => ({
          ...prev,
          posXBackground: 0,
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          posXBackground: prev.posXBackground - 2,
        }));
      }
    };
    let id = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [setValue, value.posXBackground]);
};

export default useBackgroundMove;
