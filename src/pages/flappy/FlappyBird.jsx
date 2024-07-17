import React, { Suspense, useContext, useEffect } from "react";
import flappyContext from "../../providers/flappy/flappyContext";
import "../../test.css";

import styles from "./FlappyBird.module.scss";
import Rules from "../../components/flappy/rules/Rules";
import About from "../../components/flappy/about/About";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/flappy/projects/Projects";
import OnTheMenu from "../../components/flappy/game/onTheMenu/OnTheMenu";
import OnPlay from "../../components/flappy/game/onPlay/OnPlay";
import OnGameOver from "../../components/flappy/game/onGameOver/OnGameOver";
import OnPause from "../../components/flappy/game/onPause/OnPause";
import themeContext from "../../providers/theme/themeContext";
import deviceContext from "../../providers/device/deviceContext";
import projectsContext from "../../providers/projects/projectsContext";
import Device from "../../components/device/Device";
import Theme from "../../components/theme/Theme";
import { Project } from "../../components/flappy/project/Project";

const FlappyBird = () => {
  const { theme } = useContext(themeContext);
  const { value, setValue } = useContext(flappyContext);
  const { device, setDevice } = useContext(deviceContext);
  const { projects, setProjects } = useContext(projectsContext);
  /* useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice((prev) => ({
          ...prev,
          device: "mobile",
        }));
      } else {
        setDevice((prev) => ({
          ...prev,
          device: "desktop",
        }));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setDevice]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDevice((prev) => ({
        ...prev,
        device: "mobile",
      }));
    } else {
      setDevice((prev) => ({
        ...prev,
        device: "desktop",
      }));
    }
  }, [setDevice]); */
  return (
    <>
      {/* <Suspense fallback={<p>load</p>}>
        <Theme />
      </Suspense>
      <Device /> */}
      <>
        <main
          className={`${styles.container} ${
            value.page === "game" || value.page === "projects"
              ? styles.container__fullHeight
              : styles.container__height
          } ${
            theme === "dark" ? styles.container__dark : styles.container__light
          }`}
        >
          {value.page === "game" && (
            <>
              {value.start === false && <OnTheMenu />}
              {value.start === true &&
                value.gameOver === false &&
                value.pause === false && <OnPlay />}
              {value.start === true &&
                value.gameOver === false &&
                value.pause === true && <OnPause />}
              {value.gameOver === true && <OnGameOver />}
              <Rules />
            </>
          )}

          {value.page === "rules" && device.device === "desktop" && <Rules />}
          {value.page === "about" && device.device === "desktop" && <About />}
          {value.page === "projects" && (
            <>
              <Projects />
              <div
                className={`${styles.container__test} ${
                  theme === "light"
                    ? styles.container__test__light
                    : styles.container__test__dark
                }`}
              >
                <div
                  style={{
                    width: `${projects.percent}%`,
                    background: theme === "light" ? "#171933" : "#e8e9f8",
                    height: "3px",
                    borderRadius: "5px",
                    boxShadow:
                      theme === "light"
                        ? "0px 0px 5px 0px rgba(0, 0, 0, 0.75)"
                        : "0px 0px 5px 0px rgba(255, 255, 255, 0.75)",
                  }}
                ></div>
              </div>
            </>
          )}
          {value.page !== "projects" &&
            value.page !== "game" &&
            value.page !== "rules" &&
            value.page !== "about" && <Project />}
        </main>
      </>
      {/* {device.device === "mobile" && (
        <>
          <main
            className={`${styles.container} ${
              theme === "dark"
                ? styles.container__dark
                : styles.container__light
            }`}
          >
            {value.page === "game" && (
              <>
                {value.start === false && <OnTheMenu />}
                {value.start === true &&
                  value.gameOver === false &&
                  value.pause === false && <OnPlay />}
                {value.start === true &&
                  value.gameOver === false &&
                  value.pause === true && <OnPause />}
                {value.gameOver === true && <OnGameOver />}
              </>
            )}
            {value.page === "rules" && <Rules />}
            {value.page === "about" && <About />}
            {value.page === "projects" && <Projects />}
            {/* </div> */}

      {/* <Contact /> */}
    </>
  );
};

export default FlappyBird;
