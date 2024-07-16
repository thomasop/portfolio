import React from "react";
import styles from "./Kasa.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/kasa/main.png",
  "../assets/projects/OCReact/kasa/desktop1.png",
  "../assets/projects/OCReact/kasa/desktop2.png",
  "../assets/projects/OCReact/kasa/desktop3.png",
  "../assets/projects/OCReact/kasa/desktop4.png",
  "../assets/projects/OCReact/kasa/tablette1.png",
  "../assets/projects/OCReact/kasa/tablette2.png",
  "../assets/projects/OCReact/kasa/tablette3.png",
  "../assets/projects/OCReact/kasa/tablette4.png",
  "../assets/projects/OCReact/kasa/mobile1.png",
  "../assets/projects/OCReact/kasa/mobile2.png",
  "../assets/projects/OCReact/kasa/mobile3.png",
];
const Kasa = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Kasa</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai implémenté le front-end d’une application en
              utilisant React et React Router pour créer une expérience
              utilisateur moderne et réactive. J'ai travaillé sur la logique de
              présentation des données et les composants React, une bibliothèque
              JavaScript populaire pour la création d'interfaces utilisateur.
              J'ai appris à mettre en œuvre des animations CSS et à développer
              l'interface avec SASS, un préprocesseur CSS, pour améliorer
              l'expérience visuelle de l'application. J'ai utilisé React Router
              pour configurer la navigation entre les différentes pages de
              l'application. Cela m'a permis de comprendre comment gérer
              efficacement le routage dans une application web moderne. Le
              projet s'est concentré exclusivement sur le développement
              front-end, en se basant sur les maquettes fournies et en utilisant
              des données simulées extraites d'un fichier JSON. J'ai débuté le
              projet avec Create React App, un outil qui simplifie la
              configuration initiale d'une application React.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "SASS",
              "JavaScript",
              "React",
              "React Router",
              "API Fetch",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://chimerical-lebkuchen-8e4b73.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/kasa",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default Kasa;
