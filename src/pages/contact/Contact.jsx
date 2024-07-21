import React, { useContext, useEffect } from "react";
import Theme from "../../components/theme/Theme";
import Device from "../../components/device/Device";
import styles from "./Contact.module.scss";
import themeContext from "../../providers/theme/themeContext";
import scrollDownContext from "../../providers/scrollDown/scrollDownContext";
import Navigation from "../../components/navigation/Navigation";
import Form from "./components/form/Form";

const Contact = () => {
  const elementRef = React.useRef(null);
  const { theme } = useContext(themeContext);
  const { display, setDisplay } = useContext(scrollDownContext);

  useEffect(() => {
    const handlerScroll = (e) => {
      let posElement = elementRef.current.getBoundingClientRect();
      if (e.layerY > posElement.top && e.deltaY > 0) {
        if (display === true) setDisplay(false);
      } else if (Math.abs(e.layerY) < posElement.top && e.deltaY < 0) {
        if (display === false) setDisplay(true);
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => {
      window.removeEventListener("wheel", handlerScroll);
    };
  }, [display, setDisplay]);
  return (
    <>
      <Theme />
      <Device />
      <Navigation />
      <>
        <main
          className={`${styles.contact}
             ${
               theme === "dark" ? styles.contact__dark : styles.contact__light
             }`}
        >
          <h1
            className={`${styles.contact__h1} ${
              theme === "dark"
                ? styles.contact__h1__dark
                : styles.contact__h1__light
            }`}
          >
            Contact
            <div
              ref={elementRef}
              className={`${styles.contact__h1__discover} ${
                display === false
                  ? styles.contact__h1__discover__hidden
                  : styles.contact__h1__discover__visible
              }`}
              onClick={() => {
                elementRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setDisplay(false);
              }}
            >
              <span
                className={`${styles.contact__h1__discover__span} ${
                  theme === "dark"
                    ? styles.contact__h1__discover__span__dark
                    : styles.contact__h1__discover__span__light
                }`}
              >
                Me contacter
              </span>
              <img
                className={styles.contact__h1__discover__img}
                src={`${
                  theme === "light"
                    ? `./assets/icone/arrow-down-solid.svg`
                    : `./assets/icone/arrow-down-solid-light.svg`
                }`}
                alt=""
              />
            </div>
          </h1>
          <p
            ref={elementRef}
            className={`${styles.contact__p} ${styles.contact__p__first} ${
              theme === "dark"
                ? styles.contact__p__dark
                : styles.contact__p__light
            }`}
          >
            Vous pouvez me retrouver et me contacter sur mes réseaux pour plus
            d'interactions et d'informations, ainsi que consulter mon CV.
          </p>
          <div className={styles.contact__social}>
            <a
              href="https://www.linkedin.com/in/thomas-da-silva-seabra/"
              target="_blank"
              className={`${styles.contact__social__a} ${
                theme === "dark"
                  ? styles.contact__social__a__dark
                  : styles.contact__social__a__light
              }`}
            >
              <img
                className={styles.contact__img}
                width={30}
                height={30}
                src={`../assets/icone/linkedin.png`}
                alt=""
              />
            </a>
            <a
              href="https://github.com/thomasop"
              target="_blank"
              className={`${styles.contact__social__a} ${
                theme === "dark"
                  ? styles.contact__social__a__dark
                  : styles.contact__social__a__light
              }`}
            >
              <img
                className={styles.contact__img}
                width={30}
                height={30}
                src={`${
                  theme === "light"
                    ? "../assets/icone/github.svg"
                    : "../assets/icone/github-light.svg"
                }`}
                alt=""
              />
            </a>
            <a
              href="https://www.codingame.com/profile/d363aa925b9e7d024ce3207b20b90dae0469115"
              target="_blank"
              className={`${styles.contact__social__a} ${
                theme === "dark"
                  ? styles.contact__social__a__dark
                  : styles.contact__social__a__light
              }`}
            >
              <img
                className={styles.contact__img}
                width={30}
                height={30}
                src={`../assets/icone/codingame.png`}
                alt=""
              />
            </a>
          </div>
          <span
            className={`${styles.contact__line} ${
              theme === "dark"
                ? styles.contact__line__dark
                : styles.contact__line__light
            }`}
          ></span>
          <p
            className={`${styles.contact__p} ${
              theme === "dark"
                ? styles.contact__p__dark
                : styles.contact__p__light
            }`}
          >
            Merci de votre visite ! Pour toute question ou demande
            d'information, n'hésitez pas à me contacter en remplissant le
            formulaire ci-dessous.
          </p>
          <Form />
        </main>
      </>
    </>
  );
};

export default Contact;
