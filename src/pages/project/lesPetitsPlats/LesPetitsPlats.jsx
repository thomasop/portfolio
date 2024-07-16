import React from "react";
import styles from "./LesPetitsPlats.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/lesPetitsPlats/main.png",
  "../assets/projects/OCReact/lesPetitsPlats/desktop1.png",
  "../assets/projects/OCReact/lesPetitsPlats/desktop2.png",
  "../assets/projects/OCReact/lesPetitsPlats/desktop3.png",
  "../assets/projects/OCReact/lesPetitsPlats/tablette1.png",
  "../assets/projects/OCReact/lesPetitsPlats/tablette2.png",
  "../assets/projects/OCReact/lesPetitsPlats/mobile.png",
];

const LesPetitsPlats = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Les petits plats</h1>
        <div className={styles.project__container}>
          <Content
            description={`Ce projet me met au défi de développer un algorithme de recherche
              efficace pour une plateforme de recettes de cuisine. Ma première
              tâche a été de concevoir l'interface utilisateur du site en
              utilisant CSS. Cela comprendra la création d'une interface
              intuitive et réactive pour la fonction de recherche des recettes.
              J'ai ensuite développé deux versions d'un algorithme de recherche,
              capables de parcourir et de filtrer efficacement un fichier JSON.
              Après avoir implémenté ces algorithmes, j'ai analysé et comparé
              leurs performances. J'ai utilisé des outils comme Jsben.ch ou
              d'autres outils de test de performances pour identifier
              l'algorithme le plus efficace. Une fois l'algorithme optimal
              choisi, j'ai documenté mon travail et expliqué pourquoi cet
              algorithme est le plus adapté pour le site. Durant tout le projet,
              j'ai prit en compte les principes du Green Code, afin de
              développer un algorithme qui soit non seulement performant mais
              aussi respectueux de l'environnement.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "JavaScript",
              "Algorithme",
              "Jsben",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://willowy-marzipan-1c0142.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/Les_petits_plats",
              },
              {
                name: "Lien vers le Jsben",
                url: "https://jsben.ch/Gsaj8",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default LesPetitsPlats;
