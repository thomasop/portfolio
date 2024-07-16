import React, { useState } from "react";
import PropTypes from "prop-types";
import deviceContext from "./deviceContext";

const initialState = {
  device: "",
};
const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(initialState);
  return (
    <deviceContext.Provider value={{ device, setDevice }}>
      {children}
    </deviceContext.Provider>
  );
};

export default DeviceProvider;

DeviceProvider.propTypes = {
  children: PropTypes.node,
};
