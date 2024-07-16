import React from "react";
import styles from "./ExpressFood.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCPHP/expressFood/main.png",
  "../assets/projects/OCPHP/expressFood/diagramme1.png",
  "../assets/projects/OCPHP/expressFood/diagramme2.png",
  "../assets/projects/OCPHP/expressFood/diagramme3.png",
  "../assets/projects/OCPHP/expressFood/diagramme4.png",
  "../assets/projects/OCPHP/expressFood/diagramme5.png",
  "../assets/projects/OCPHP/expressFood/diagramme6.png",
  "../assets/projects/OCPHP/expressFood/diagramme7.png",
  "../assets/projects/OCPHP/expressFood/diagramme8.png",
  "../assets/projects/OCPHP/expressFood/diagramme9.png",
];
const ExpressFood = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>ExpressFood</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai dû créer une base de donnée pour une startup. J'ai commencé par réaliser un diagramme de classe pour modéliser les données de l'application. J'ai ensuite réalisé un diagramme de cas d'utilisation pour décrire les fonctionnalités de l'application. J'ai également réalisé un diagramme de séquence pour décrire le déroulement des actions de l'application. J'ai ensuite créé la base de donnée en utilisant MySQL et MAMP. J'ai créé les tables et les relations entre les tables. J'ai également inséré des données dans les tables. J'ai enfin exporté la base de donnée en fichier SQL.`}
            techs={[
              "MAMP",
              "MySQL",
              "Diagramme de classe",
              "Diagramme de cas d'utilisation",
              "Diagramme de séquence",
            ]}
            links={[
              {
                name: "Lien vers le fichier SQL",
                url: "http://localhost:5173/assets/projects/OCPHP/expressFood/Express_Food.sql",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default ExpressFood;
