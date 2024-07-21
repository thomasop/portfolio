import React from "react";
import scrollDownContext from "./scrollDownContext";
import PropTypes from "prop-types";

const ScrollDownProvider = ({ children }) => {
  const [display, setDisplay] = React.useState(true);
  return (
    <>
      <scrollDownContext.Provider value={{ display, setDisplay }}>
        {children}
      </scrollDownContext.Provider>
    </>
  );
};

export default ScrollDownProvider;

ScrollDownProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
