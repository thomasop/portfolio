import React from "react";
import styles from "./Booki.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/booki/main.png",
  "../assets/projects/OCReact/booki/tablette1.png",
  "../assets/projects/OCReact/booki/tablette2.png",
  "../assets/projects/OCReact/booki/mobile.png",
];
const Booki = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Booki</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai créé la page d'accueil d'une agence de voyage
              en utilisant HTML et CSS. Ma mission principale a été d'intégrer
              l'interface responsive de leur site. J'ai eu à disposition les
              maquettes Figma pour mobile, tablette et desktop, ainsi que les
              images et une note de synthèse sur les spécificités du projet.
              J'ai été encouragé à ne pas me fier à l'outil code de Figma, mais
              plutôt à écrire mon propre code HTML et CSS. Cela m'a donné une
              compréhension plus profonde de la manière dont le code est
              structuré et stylisé pour répondre aux exigences de design. En
              travaillant sur ce projet, j'ai développé des compétences
              essentielles en design responsive, assurant que la page d'accueil
              fonctionne bien sur tous les appareils et tailles d'écran.`}
            techs={["HTML", "CSS", "Git / Github", "Figma", "Responsive"]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://jolly-semifreddo-70977f.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/booki",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default Booki;
