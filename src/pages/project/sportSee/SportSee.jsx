import React from "react";
import styles from "./SportSee.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/sportSee/main.png",
  "../assets/projects/OCReact/sportSee/desktop1.png",
  "../assets/projects/OCReact/sportSee/desktop2.png",
  "../assets/projects/OCReact/sportSee/desktop3.png",
];
const SportSee = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>SportSee</h1>
        <div className={styles.project__container}>
          <Content
            description={`Ma mission a été d'intégrer des graphiques et des diagrammes pour
              présenter les données d'analyse sportive d'un utilisateur en
              utilisant React et de récupérer des données via une API. J'ai
              utiliseré React pour construire l'interface utilisateur. Pour les
              graphiques, j'ai utilisé la bibliothèque Recharts. J'ai été en
              charge de la gestion des appels HTTP, en utilisant l'API Fetch
              pour interagir avec le back-end et récupérer les données
              nécessaires. Une partie importante du projet a été de développer
              une documentation complète comprenant un Readme, JSDoc, et les
              proptypes. Ceci est essentiel pour faciliter la collaboration et
              la compréhension du code au sein de l'équipe. Pas de version
              mobile et tablette pour ce projet (minimun : 1024 par 780 pixels).`}
            techs={[
              "HTML",
              "CSS",
              "JavaScript",
              "Git / Github",
              "TypeScript",
              "JSDoc",
              "Figma",
              "Appels HTTP",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://fancy-fenglisu-a92a4c.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/sportsee",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default SportSee;
