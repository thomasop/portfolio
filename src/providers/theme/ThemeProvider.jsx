import React, { useState } from "react";
import themeContext from "./themeContext";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
