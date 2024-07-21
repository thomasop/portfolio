import React, { useEffect, useState } from "react";
import styles from "./TestLoader.module.scss";
import themeContext from "../../providers/theme/themeContext";

const TestLoader = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const { theme } = React.useContext(themeContext);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    let id;

    if (loading === true) {
      id = setInterval(() => {
        if (count >= 100) {
          setAnimate(true);
          setLoading(false);
          clearInterval(id);
        } else {
          setCount(count + 1);
        }
      }, 5);
    }
    return () => {
      clearInterval(id);
    };
  }, [count, loading]);
  return (
    <>
      <div
        className={`${styles.load} ${
          theme === "dark" ? styles.load__dark : styles.load__light
        } ${animate === false ? styles.load__display : styles.load__hidden}`}
      >
        <>
          <p
            className={`${styles.load__name} ${
              theme === "dark"
                ? styles.load__name__dark
                : styles.load__name__light
            }`}
          >
            thomas
          </p>
          <p
            className={`${styles.load__percent} ${
              theme === "dark"
                ? styles.load__percent__dark
                : styles.load__percent__light
            }`}
          >
            {count}%
          </p>
          <span
            className={`${styles.load__line} ${
              theme === "dark"
                ? styles.load__line__dark
                : styles.load__line__light
            }`}
          ></span>
        </>
      </div>
    </>
  );
};

export default TestLoader;
