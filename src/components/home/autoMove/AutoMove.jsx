import React, { useContext, useEffect } from "react";
import GameContext from "../../../providers/game/Context";

const AutoMove = () => {
  const { value, setValue } = useContext(GameContext);
  useEffect(() => {
    const move = () => {
      const arraySnake = value.snake.map((s, i) => {
        if (i !== 0) {
          return value.snake[i - 1];
        } else {
          if (value.direction === "right") {
            if (s.x === 19) {
              return { x: 0, y: s.y };
            } else {
              return { x: s.x + 1, y: s.y };
            }
          } else if (value.direction === "left") {
            if (s.x === 0) {
              return { x: 19, y: s.y };
            } else {
              return { x: s.x - 1, y: s.y };
            }
          } else if (value.direction === "up") {
            if (s.y === 0) {
              return { x: s.x, y: 19 };
            } else {
              return { x: s.x, y: s.y - 1 };
            }
          } else if (value.direction === "down") {
            if (s.y === 19) {
              return { x: s.x, y: 0 };
            } else {
              return { x: s.x, y: s.y + 1 };
            }
          }
        }
      });
      setValue({ ...value, snake: arraySnake });
    };
    const interval = window.setInterval(move, 500);
    return () => clearInterval(interval);
  }, [setValue, value, value.snake]);
  return null;
};

export default AutoMove;
