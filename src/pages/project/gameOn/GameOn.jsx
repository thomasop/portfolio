import React from "react";
import styles from "./GameOn.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/gameOn/main.png",
  "../assets/projects/OCReact/gameOn/desktop1.png",
  "../assets/projects/OCReact/gameOn/desktop2.png",
  "../assets/projects/OCReact/gameOn/desktop3.png",
  "../assets/projects/OCReact/gameOn/mobile.png",
  "../assets/projects/OCReact/gameOn/tablette.png",
];
const GameOn = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>GameOn</h1>
        <div className={styles.project__container}>
          <Content
            description={`Ce projet a été une introduction au développement avec JavaScript,
              où j'ai travaillé pour une entreprise organisant des concours de
              jeux. Ma mission principale a été de réaliser un formulaire avec
              JavaScript. J'ai eu le code HTML et CSS du site ainsi que les
              maquettes à ma disposition. Ce projet m'a permis de comprendre
              comment JavaScript, HTML, et CSS interagissent pour créer des
              pages web dynamiques. J'ai appris les bases de JavaScript Vanilla,
              le JavaScript pur sans l'utilisation de bibliothèques ou de
              frameworks. Cela m'a donné une compréhension solide des
              fondamentaux de la programmation en JavaScript. J'ai travaillé sur
              la validation du formulaire pour garantir que les données saisies
              par les utilisateurs étaient correctes et répondaient aux critères
              établis. J'ai également géré les événements JavaScript, tels que
              les clics de bouton ou les entrées de formulaire, pour créer une
              interaction dynamique avec les utilisateurs. J'ai utilisé Figma
              pour accéder aux maquettes du projet, Visual Studio Code pour
              l'écriture et la gestion du code, et GitHub pour le versionnement
              de mon projet.`}
            techs={[
              "HTML",
              "CSS",
              "JavaScript",
              "Git / Github",
              "SASS",
              "Figma",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://genuine-kulfi-f33b49.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/GameOn-website-FR",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default GameOn;
