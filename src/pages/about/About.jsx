import styles from "./About.module.scss";
import { Suspense, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/about/tilt/Card";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload } from "@react-three/drei";
import Computer from "../../components/about/scene/Computer";
import Contact from "../../components/contact/Contact";
import themeContext from "../../providers/theme/themeContext";

const About = () => {
  const { theme } = useContext(themeContext);
  let navigate = useNavigate();
  return (
    <>
      <main
        className={`${styles.about} ${
          theme === "dark" ? styles.about__dark : styles.about__light
        }`}
      >
        <div className={styles.about__back}>
          <Link className={styles.about__back__link} to={"/"}>
            Retour vers le jeu
          </Link>
        </div>

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
              <OrbitControls enableZoom={false} autoRotate={true} />
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
            Je suis également autodidacte, j'aime me perfectionner, et
            apprendre.
          </p>
          <p className={styles.about__text__p}>
            Et j'ai également des connaissances en PHP / Symfony, Nextjs et
            nodejs ce qui me permet de réaliser des sites web fullstack et des
            API
          </p>
        </div>

        <div className={styles.about__techno}>
          <Card img={"react.png"} />
          <Card img={"next.svg"} />
          <Card img={"mysql.png"} />
        </div>
        <Contact />
      </main>
    </>
  );
};

export default About;
