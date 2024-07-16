import styles from "./Projects.module.scss";
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../../projects/components/Scene";
import themeContext from "../../../providers/theme/themeContext";
import flappyContext from "../../../providers/flappy/flappyContext";
import OCReact from "./components/OCReact/OCReact";
import OCSymfony from "./components/OCPHP/OCSymfony";

const Projects = () => {
  const { theme } = useContext(themeContext);
  let navigate = useNavigate();
  const [projects, setProjects] = useState("js");
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflowY = "hidden";
    html.style.overflowX = "hidden";
    const root = document.querySelector("#root");
    root.style.overflowY = "hidden";
    root.style.overflowX = "hidden";
    return () => {
      html.style.overflowY = "auto";
      html.style.overflowX = "auto";
      root.style.overflowY = "auto";
      root.style.overflowX = "auto";
    };
  });

  return (
    <>
      <section className={styles.projects}>
        <h1
          className={`${styles.projects__h1} ${
            theme === "dark"
              ? styles.projects__h1__dark
              : styles.projects__h1__light
          }`}
        >
          Mes projects
        </h1>
        <button className={styles.projects__back} onClick={() => navigate("/")}>
          Retour vers la page d'accueil
        </button>
        <select
          className={styles.projects__select}
          name=""
          id=""
          onChange={(e) => {
            if (e.target.value === "js") {
              setProjects("js");
            }
            if (e.target.value === "php") {
              setProjects("php");
            }
            if (e.target.value === "perso") {
              setProjects("perso");
            }
          }}
        >
          <option value="js">OpenClassrooms - JavaScript/React</option>
          <option value="php">OpenClassrooms - PHP/Symfony</option>
          <option value="perso">Personnel</option>
        </select>
        {projects === "js" && <OCReact />}
        {projects === "php" && <OCSymfony />}
      </section>
    </>
  );
};

export default Projects;
