import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import navigationContext from "./navigationContext";

const NavigationProvider = ({ children }) => {
  const [page, setPage] = useState("about");
  return (
    <>
      <navigationContext.Provider value={{ page, setPage }}>
        {" "}
        {children}
      </navigationContext.Provider>
    </>
  );
};

export default NavigationProvider;

NavigationProvider.propTypes = {
  children: PropTypes.node,
};
