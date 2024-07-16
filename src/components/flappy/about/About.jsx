import { Suspense, useContext } from "react";
import styles from "./About.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload } from "@react-three/drei";
import themeContext from "../../../providers/theme/themeContext";
import Computer from "../../about/scene/Computer";
import Card from "../../about/tilt/Card";
import Contact from "../../contact/Contact";
import Theme from "../../theme/Theme";
import flappyContext from "../../../providers/flappy/flappyContext";

const About = () => {
  const { theme } = useContext(themeContext);
  const { value, setValue } = useContext(flappyContext);
  return (
    <>
      {/* <div
        className={`${styles.about} ${
          theme === "dark" ? styles.about__dark : styles.about__light
        }`}
      > */}
      <button
        className={styles.about__back}
        onClick={() => {
          setValue((prev) => ({ ...prev, page: "game" }));
        }}
      >
        Retour au jeu
      </button>
      <h1
        className={`${styles.about__h1} ${
          theme === "dark" ? styles.about__h1__dark : styles.about__h1__light
        }`}
      >
        <span className={styles.about__h1__first}>À propos </span>
        <span className={styles.about__h1__second}>de moi</span>
      </h1>
      <div className={styles.about__scene}>
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [30, 23, 25], fov: 30 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <Computer />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
      <div
        className={`${styles.about__text} ${
          theme === "dark"
            ? styles.about__text__dark
            : styles.about__text__light
        }`}
      >
        <p className={styles.about__text__p}>
          Mon nom est Thomas et j'ai 26 ans.
        </p>
        <p className={styles.about__text__p}>
          Diplômé de deux formation OpenClassrooms (développeur d’application
          PHP/Symfony et développeur d’application Javascript/React).
        </p>
        <p className={styles.about__text__p}>
          Mes projets m’ont permis de me certifier sur plusieurs compétences,
          telles que les langages HTML5, CSS3, Javascript, PHP ainsi que dans
          les frameworks React et Symfony.
        </p>
        <p className={styles.about__text__p}>
          Je suis également autodidacte, j'aime me perfectionner, et apprendre.
        </p>
        <p className={styles.about__text__p}>
          Et j'ai également des connaissances en PHP / Symfony, Nextjs et nodejs
          ce qui me permet de réaliser des sites web fullstack et des API
        </p>
      </div>

      <div className={styles.about__techno}>
        <Card img={"react.png"} />
        <Card img={"next.svg"} />
        <Card img={"mysql.png"} />
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
