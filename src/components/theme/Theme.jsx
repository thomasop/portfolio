import React, { useContext, useEffect } from "react";
import styles from "./Theme.module.scss";
import themeContext from "../../providers/theme/themeContext";
import scrollDownContext from "../../providers/scrollDown/scrollDownContext";
import { useLocation } from "react-router-dom";

const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);
  const location = useLocation();
  const elementRef = React.useRef(null);
  const [changeBackground, setChangeBackground] = React.useState(null);
  const { display } = useContext(scrollDownContext);

  useEffect(() => {
    if (location.pathname.split("/")[1] === "projet") {
      const handlerScroll = (e) => {
        if (theme === "dark") {
          console.log("test2");
          const imgElement = document.getElementById("project-img");
          if (imgElement.getBoundingClientRect().top <= -35) {
            setChangeBackground(false);
          } else if (imgElement.getBoundingClientRect().top >= -40) {
            setChangeBackground(true);
          }
        }
      };

      window.addEventListener("wheel", handlerScroll);
      return () => {
        window.removeEventListener("wheel", handlerScroll);
      };
    }
  }, [location.pathname, theme]);
  useEffect(() => {
    if (location.pathname.split("/")[1] === "projet") {
      if (theme === "dark") {
        console.log("test");
        const imgElement = document.getElementById("project-img");
        if (imgElement.getBoundingClientRect().top >= -50) {
          setChangeBackground(true);
        }
      }
    }
  }, [location.pathname, theme]);
  useEffect(() => {
    console.log(location.pathname.split("/")[1]);
    if (location.pathname.split("/")[1] === "projet") {
      if (theme === "dark") {
        console.log("test1");
        if (display === false) {
          setChangeBackground(false);
        }
      } else {
        const imgElement = document.getElementById("project-img");
        if (imgElement.getBoundingClientRect().top <= -50) {
          setChangeBackground(true);
        }
      }
    }
  }, [display, location.pathname, theme]);
  return (
    <>
      <div className={styles.theme} ref={elementRef}>
        <div
          style={{
            backgroundColor:
              changeBackground === true
                ? "black"
                : changeBackground === false
                ? "white"
                : "",
          }}
          className={`${styles.theme__circle} ${
            theme === "dark"
              ? styles.theme__circle__dark
              : styles.theme__circle__light
          }`}
          onClick={(e) => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        ></div>
      </div>
    </>
  );
};

export default Theme;
