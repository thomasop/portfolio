import React, { useState } from "react";
import PropTypes from "prop-types";
import projectsContext from "./projectsContext";

const initialState = {
  type: "js",
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,
  spacingX: 0,
  spacingY: 0,
  percent: 0,
  current: 0,
};

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialState);
  return (
    <projectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </projectsContext.Provider>
  );
};

export default ProjectsProvider;

ProjectsProvider.propTypes = {
  children: PropTypes.node,
};
