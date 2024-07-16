import React, { useEffect, useState } from "react";
import resolutionContext from "./resolutionContext";
import PropTypes from "prop-types";

const ResolutionProvider = ({ children }) => {
  const [resolution, setResolution] = useState(0);
  useEffect(() => {
    setResolution(document.body.clientWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setResolution(document.body.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resolution]);
  return (
    <resolutionContext.Provider value={{ resolution, setResolution }}>
      {children}
    </resolutionContext.Provider>
  );
};

export default ResolutionProvider;

ResolutionProvider.propTypes = {
  children: PropTypes.node,
};
