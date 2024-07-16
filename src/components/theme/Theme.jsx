import React, { useContext } from "react";
import styles from "./Theme.module.scss";
import themeContext from "../../providers/theme/themeContext";

const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <>
      <div className={styles.theme}>
        <div
          className={styles.theme__theme}
          onClick={(e) => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          <input type="checkbox" className={styles.theme__theme__input} />
          <label htmlFor="" className={styles.theme__theme__label}>
            <span className={`${styles.theme__theme__label__span}`}></span>
            <img
              className={`${styles.theme__theme__label__span__img} ${
                theme === "dark"
                  ? styles.theme__theme__label__span__img__dark
                  : styles.theme__theme__label__span__img__light
              }`}
              src={
                theme === "dark"
                  ? `../assets/icone/moon-regular.svg`
                  : `../assets/icone/icons8-sun.svg`
              }
              alt=""
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Theme;
