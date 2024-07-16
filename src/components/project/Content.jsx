import { useContext } from "react";
import styles from "./Content.module.scss";
import PropTypes from "prop-types";
import themeContext from "../../providers/theme/themeContext";

const Content = ({ description, techs, links }) => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <div className={styles.content}>
        <h2
          className={`${styles.content__title} ${
            theme === "dark"
              ? styles.content__title__dark
              : styles.content__title__light
          }`}
        >
          Description
        </h2>
        <p
          className={`${styles.content__p} ${
            theme === "dark"
              ? styles.content__title__dark
              : styles.content__title__light
          }`}
        >
          {description}
        </p>
        <h2
          className={`${styles.content__title} ${
            theme === "dark"
              ? styles.content__title__dark
              : styles.content__title__light
          }`}
        >
          Technologie
        </h2>
        <ul
          className={`${
            theme === "dark"
              ? styles.content__tech__dark
              : styles.content__tech__light
          }`}
        >
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h2
          className={`${styles.content__title} ${
            theme === "dark"
              ? styles.content__title__dark
              : styles.content__title__light
          }`}
        >
          Lien
        </h2>

        <ul
          className={`${
            theme === "dark"
              ? styles.content__link__dark
              : styles.content__link__light
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className={`${
                  theme === "dark"
                    ? styles.content__link__a__dark
                    : styles.content__link__a__light
                }`}
                target={link.target === "_blank" ? "_blank" : "_self"}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Content;

Content.propTypes = {
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};
