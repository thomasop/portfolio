import React, { useContext, useEffect, useState } from "react";
import Device from "../../components/device/Device";
import Theme from "../../components/theme/Theme";
import styles from "./Projects.module.scss";
import themeContext from "../../providers/theme/themeContext";
import Navigation from "../../components/navigation/Navigation";
/* import OCReact from "./components/OCReact/OCReact";
import OCSymfony from "./components/OCPHP/OCSymfony"; */
import OCReact from "./components/OCReact/OCReact";
import OCSymfony from "./components/OCPHP/OCSymfony";
import deviceContext from "../../providers/device/deviceContext";

const Projects = () => {
  const { theme } = useContext(themeContext);
  const [projectsType, setProjectsType] = useState(
    "OpenClassrooms - JavaScript/React"
  );
  const [openList, setOpenList] = useState(false);
  const [arrayProjects, setArrayProjects] = useState([
    "OpenClassrooms - PHP/Symfony",
    "Personnel",
  ]);
  const { device } = useContext(deviceContext);
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.height = "100%";
    html.style.overflow = "hidden";
    const root = document.querySelector("#root");
    root.style.height = "100%";
    root.style.overflow = "hidden";
  }, []);
  console.log(device);
  return (
    <>
      <Theme />
      <Device />
      <Navigation />
      <>
        <main
          className={`${styles.about}
             ${theme === "dark" ? styles.about__dark : styles.about__light}`}
        >
          <section className={styles.projects}>
            <div
              className={`${styles.projects__select} ${
                theme === "dark"
                  ? styles.projects__select__dark
                  : styles.projects__select__light
              }`}
              name=""
              id=""
              onClick={() => {
                setOpenList(!openList);
              }}
            >
              {projectsType}
              <img
                className={`${styles.projects__select__icon}
             ${
               openList
                 ? styles.projects__select__icon__open
                 : styles.projects__select__icon__close
             }`}
                src="./assets/icone/arrow-down-solid.svg"
                alt=""
              />
            </div>
            <>
              {arrayProjects.map(
                (project, visibleIndex) =>
                  project !== projectsType && (
                    <div
                      key={visibleIndex}
                      style={{
                        transition: "all 0.6s ease 0s",

                        top: `${
                          device.device === "mobile"
                            ? openList
                              ? `${visibleIndex * 45 + 105}px`
                              : "60px"
                            : openList
                            ? `${visibleIndex * 45 + 65}px`
                            : "20px"
                        }`,
                        zIndex: `${openList ? `999` : "0"}`,
                        opacity: `${openList ? `1` : "0"}`,
                      }}
                      className={`${styles.projects__choice} ${
                        theme === "dark"
                          ? styles.projects__choice__dark
                          : styles.projects__choice__light
                      } ${
                        openList
                          ? styles.projects__choice__open
                          : styles.projects__choice__close
                      }`}
                      onClick={() => {
                        let newarray = [...arrayProjects];
                        newarray.splice(visibleIndex, 1);
                        newarray.push(projectsType);
                        setProjectsType(project);
                        setOpenList(false);
                        setArrayProjects(newarray);
                      }}
                    >
                      {project}
                    </div>
                  )
              )}
            </>
            {projectsType === "OpenClassrooms - JavaScript/React" && (
              <OCReact />
            )}
            {projectsType === "OpenClassrooms - PHP/Symfony" && <OCSymfony />}
          </section>
        </main>
      </>
    </>
  );
};

export default Projects;
