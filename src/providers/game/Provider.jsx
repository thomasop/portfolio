import React, { useState } from "react";
import GameContext from "./Context";
import PropTypes from "prop-types";

const InitialValue = {
  snake: [
    { x: 4, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 5 },
  ],
  start: false,
  direction: "right",
  food: null,
  link: null,
  linkTest: null,
  score: 0,
  speed: 500,
  rules: false,
};

const Provider = ({ children }) => {
  const [value, setValue] = useState(InitialValue);
  return (
    <GameContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
