import React, { useState } from "react";
import projectContext from "./projectContext";
import PropTypes from "prop-types";

const InitialValue = {
  img: [],
  description: "",
  techs: [],
  links: [],
};

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(InitialValue);
  return (
    <projectContext.Provider value={{ project, setProject }}>
      {children}
    </projectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
