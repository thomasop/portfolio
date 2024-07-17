import React, { useState } from "react";
import PropTypes from "prop-types";
import flappyContext from "./flappyContext";

const posXPipe = 400;

const initialState = {
  posXLand: 0,
  birdFlyRatio: 0,
  posYBird: 200,
  posXBird: 120,
  start: false,
  dyBird: 0,
  dxBird: 0,
  rules: false,
  posXBackground: 0,
  pause: false,
  animateBeforeGameOver: false,
  score: 0,
  currentPipe: 0,
  rotate: 0,
  gameOver: false,
  birdImg: "bird-1",
  page: "projects",
  posYMob: 100,
  stopAnimation: false,
  posXMob: -100,
  userTapOnScreen: false,
  posXPipe: posXPipe,
  maxXPipe: posXPipe + 400,
  pipe: [
    [
      { x: posXPipe, y: 325, type: "up" },
      { x: posXPipe, y: -225, type: "down" },
    ],
    [
      { x: posXPipe + 200, y: 225, type: "up" },
      { x: posXPipe + 200, y: -325, type: "down" },
    ],
    [
      { x: posXPipe + 400, y: 325, type: "up" },
      { x: posXPipe + 400, y: -225, type: "down" },
    ],
  ],
};

const FlappyProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  return (
    <flappyContext.Provider value={{ value, setValue }}>
      {children}
    </flappyContext.Provider>
  );
};

export default FlappyProvider;

FlappyProvider.propTypes = {
  children: PropTypes.node,
};
