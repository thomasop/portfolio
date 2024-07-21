import React, { useEffect } from "react";
import styles from "./Navigation.module.scss";
import themeContext from "../../providers/theme/themeContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const { theme } = React.useContext(themeContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <nav
        className={`${
          location.pathname.split("/")[1] === "projet"
            ? styles.nav__project
            : styles.nav
        }`}
      >
        <ul
          className={`${
            location.pathname.split("/")[1] === "projet"
              ? styles.nav__ul__project
              : styles.nav__ul
          }`}
        >
          <li
            className={`${styles.nav__ul__li} ${
              location.pathname.split("/")[1] === "projet" &&
              styles.nav__ul__li__project
            } ${
              theme === "dark"
                ? location.pathname === "/"
                  ? styles.nav__ul__li__dark__active
                  : styles.nav__ul__li__dark
                : location.pathname === "/"
                ? styles.nav__ul__li__light__active
                : styles.nav__ul__li__light
            }`}
            onClick={() => {
              let html = document.querySelector("html");
              html.style.height = "unset";
              html.style.overflow = "unset";
              let root = document.querySelector("#root");
              root.style.height = "unset";
              window.scrollTo({ top: 0, behavior: "instant" });
              navigate("/");
            }}
          >
            About
            <span
              className={`${styles.nav__ul__li__span} ${
                location.pathname.split("/")[1] === "projet" &&
                styles.nav__ul__li__span__project
              } ${
                theme === "dark"
                  ? styles.nav__ul__li__span__dark
                  : styles.nav__ul__li__span__light
              }`}
            ></span>
          </li>
          <li
            className={`${styles.nav__ul__li} ${
              location.pathname.split("/")[1] === "projet" &&
              styles.nav__ul__li__project
            } ${
              theme === "dark"
                ? location.pathname === "/projets"
                  ? styles.nav__ul__li__dark__active
                  : styles.nav__ul__li__dark
                : location.pathname === "/projets"
                ? styles.nav__ul__li__light__active
                : styles.nav__ul__li__light
            }`}
            onClick={() => {
              let html = document.querySelector("html");
              html.style.height = "100%";
              html.style.overflow = "hidden";
              let root = document.querySelector("#root");
              root.style.height = "100%";
              navigate("/projets");
            }}
          >
            Projets
            <span
              className={`${styles.nav__ul__li__span} ${
                location.pathname.split("/")[1] === "projet" &&
                styles.nav__ul__li__span__project
              } ${
                theme === "dark"
                  ? styles.nav__ul__li__span__dark
                  : styles.nav__ul__li__span__light
              }`}
            ></span>
          </li>
          <li
            className={`${styles.nav__ul__li} ${
              location.pathname.split("/")[1] === "projet" &&
              styles.nav__ul__li__project
            } ${
              theme === "dark"
                ? location.pathname === "/contact"
                  ? styles.nav__ul__li__dark__active
                  : styles.nav__ul__li__dark
                : location.pathname === "/contact"
                ? styles.nav__ul__li__light__active
                : styles.nav__ul__li__light
            }`}
            onClick={() => {
              let html = document.querySelector("html");
              html.style.height = "unset";
              html.style.overflow = "unset";
              let root = document.querySelector("#root");
              root.style.height = "unset";
              window.scrollTo({ top: 0, behavior: "instant" });
              navigate("/contact");
            }}
          >
            Contact
            <span
              className={`${styles.nav__ul__li__span} ${
                location.pathname.split("/")[1] === "projet" &&
                styles.nav__ul__li__span__project
              } ${
                theme === "dark"
                  ? styles.nav__ul__li__span__dark
                  : styles.nav__ul__li__span__light
              }`}
            ></span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
