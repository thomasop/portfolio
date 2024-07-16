import React from "react";
import styles from "./LearnAtHome.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/learnAtHome/main.png",
  "../assets/projects/OCReact/learnAtHome/diagramme1.png",
  "../assets/projects/OCReact/learnAtHome/diagramme2.png",
  "../assets/projects/OCReact/learnAtHome/diagramme3.png",
  "../assets/projects/OCReact/learnAtHome/kanban1.png",
  "../assets/projects/OCReact/learnAtHome/kanban2.png",
  "../assets/projects/OCReact/learnAtHome/maquette1.png",
  "../assets/projects/OCReact/learnAtHome/maquette2.png",
  "../assets/projects/OCReact/learnAtHome/maquette3.png",
];
const LearnAtHome = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>LearnAtHome</h1>
        <div className={styles.project__container}>
          <Content
            description={`Ce projet m'a impliqué dans la définition des besoins et la
              modélisation d'une solution technique pour une association de
              soutien scolaire, en adoptant une méthodologie agile. j'ai été
              chargé de créer des diagrammes de cas d'usage pour chaque
              fonctionnalité majeure des différentes pages du site. J'ai
              developpé des User Stories pour cerner les attentes des
              utilisateurs et définir clairement les objectifs à atteindre. J'ai
              créé des maquettes du site en utilisant Figma. Elles ont servi de
              guide visuel pour le développement et faciliteront la
              communication des idées au client et à l'équipe de développement.
              J'ai élaboré un tableau Kanban détaillé, divisant le projet en
              blocs de fonctionnalités et sous-fonctionnalités. Cela structurera
              le développement et facilitera le suivi du projet.`}
            techs={[
              "Figma",
              "Diagramme de cas d'usage",
              "User Stories",
              "Maquette",
              "Tableau Kanban (Trello)",
            ]}
            links={[
              {
                name: "Lien vers le tableau Kanban",
                url: "https://trello.com/invite/b/L4UrU5vZ/ATTI21e4d555d7a60dd54c8246906ea7c8c3DE044576/kanban",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default LearnAtHome;
