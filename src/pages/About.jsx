import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import Card from "../components/about/tilt/Card";

const About = () => {
  return (
    <>
      <main className={styles.about}>
        <Link to={"/"}>Retour vers le jeu</Link>
        <h1 className={styles.about__h1}>About me</h1>
        <p>Mon nom est Thomas et j'ai 26 ans.</p>
        <p>
          Diplômé de deux formation OpenClassrooms (développeur d’application
          PHP/Symfony et développeur d’application Javascript/React), mes
          projets m’ont permis de me certifier sur plusieurs compétences, telles
          que les langages HTML5, CSS3, Javascript, PHP ainsi que dans les
          frameworks React et Symfony.
        </p>
        <p>
          Je suis également autodidacte, j'aime me perfectionner, et apprendre.
        </p>
        <p>
          Et j'ai également des connaissances en PHP / Symfony, Nextjs et nodejs
          ce qui me permet de réaliser des sites web fullstack et des API
        </p>

        <div className={styles.about__techno}>
          <Card img={"react.png"} />
          <Card img={"next.svg"} />
          <Card img={"mysql.png"} />
        </div>
      </main>
    </>
  );
};

export default About;
