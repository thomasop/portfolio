import React, { useState } from "react";
import doodleContext from "./doodleContext";
import PropTypes from "prop-types";

const initialState = {
  doodlePos: { x: 60, y: 600 },
  dx: 0,
  dy: -6.25,
  allPlateform: [],
  direction: "down",
  hDirection: "doodler-right.png",
  currentH: 630 - 70,
  heightPlat: 630,
  currentId: 0,
  score: 0,
  diff: 0,
  start: false,
  pause: false,
  info: false,
  test: 0,
  lost: false,
};

const DoodleProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  return (
    <doodleContext.Provider value={{ value, setValue }}>
      {children}
    </doodleContext.Provider>
  );
};

export default DoodleProvider;

DoodleProvider.propTypes = {
  children: PropTypes.node,
};
