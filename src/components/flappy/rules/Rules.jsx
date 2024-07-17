import React, { useContext, Suspense } from "react";
import styles from "./Rules.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import themeContext from "../../../providers/theme/themeContext";
import Computer from "../../about/scene/Computer";
import Card from "../../about/tilt/Card";
import flappyContext from "../../../providers/flappy/flappyContext";

const Rules = () => {
  console.log("Rules");
  const { theme } = useContext(themeContext);
  const { value, setValue } = useContext(flappyContext);
  return (
    <>
      <section
        className={`${styles.rules} ${
          theme === "dark" ? styles.rules__dark : styles.rules__light
        } ${value.rules ? styles.rules__show : styles.rules__hide}`}
      >
        <img
          onClick={() => {
            setValue((prev) => ({ ...prev, rules: false }));
          }}
          className={styles.rules__close}
          src={
            theme === "light"
              ? "/assets/icone/xmark-solid.svg"
              : "/assets/icone/xmark-solid-white.svg"
          }
          alt=""
          width={30}
          height={30}
        />
        <h1
          className={`${styles.rules__h1} ${
            theme === "dark" ? styles.rules__h1__dark : styles.rules__h1__light
          }`}
        >
          <span className={styles.rules__h1__first}>Les règles du jeu </span>
        </h1>
        <div
          className={`${styles.rules__text} ${
            theme === "dark"
              ? styles.rules__text__dark
              : styles.rules__text__light
          }`}
        >
          <h3 className={styles.rules__text__title}>Touche : </h3>
          <p className={styles.rules__text__p}>
            Sur ordinateur : Espace ou click sur l'écran de jeu pour faire sauté
            le bird
          </p>
          <p className={styles.rules__text__p}>
            Sur téléphone : click sur l'écran de jeu pour faire sauté le bird
          </p>
          <h3 className={styles.rules__text__title}>But de jeu :</h3>
          <p className={styles.rules__text__p}>
            Le but du jeu est de passer entre les tuyaux sans les toucher
          </p>
          <p className={styles.rules__text__p}>
            Si vous touchez un tuyau ou le sol, vous perdez
          </p>
          <p className={styles.rules__text__p}>
            Pour chaque tuyau passé, vous gagnez 1 point et vous gagnez 5 points
            pour chaque monstre mangé
          </p>
          <h3 className={styles.rules__text__title}>Spécificité : </h3>
          <p className={styles.rules__text__p}>
            Pour changer le contenu de la page (règles, à propos, projets), il
            faut mangé un monstre sur le chemin.
          </p>
        </div>
      </section>
    </>
  );
};

export default Rules;
