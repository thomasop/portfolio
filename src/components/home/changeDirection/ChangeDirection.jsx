import React, { useContext, useEffect } from "react";
import GameContext from "../../../providers/game/Context";

const ChangeDirection = () => {
  const { value, setValue } = useContext(GameContext);
  useEffect(() => {
    const key = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (value.direction !== "down" && value.direction !== "up")
            setValue({ ...value, direction: "up" });
          break;
        case "ArrowDown":
          if (value.direction !== "up" && value.direction !== "down")
            setValue({ ...value, direction: "down" });
          break;
        case "ArrowLeft":
          if (value.direction !== "right" && value.direction !== "left")
            setValue({ ...value, direction: "left" });
          break;
        case "ArrowRight":
          if (value.direction !== "left" && value.direction !== "right")
            setValue({ ...value, direction: "right" });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [setValue, value]);
  return null;
};

export default ChangeDirection;
