import React from "react";
import styles from "./HRnet.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/hrnet/main.png",
  "../assets/projects/OCReact/hrnet/desktop1.png",
  "../assets/projects/OCReact/hrnet/desktop2.png",
  "../assets/projects/OCReact/hrnet/tablette1.png",
  "../assets/projects/OCReact/hrnet/tablette2.png",
  "../assets/projects/OCReact/hrnet/tablette3.png",
  "../assets/projects/OCReact/hrnet/mobile1.png",
  "../assets/projects/OCReact/hrnet/mobile2.png",
  "../assets/projects/OCReact/hrnet/mobile3.png",
];

const HRnet = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>HRnet</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai participé à la conversion d’une application
              de jQuery vers React pour une grande société financière. Ma
              mission principale a été de refondre les pages clés de
              l’application en remplaçant quatre plugin jQuery par des
              composants React. Cela a impliqué une compréhension approfondie
              des deux technologies et leur interaction. J'ai été chargé de
              mesurer les performances de l'application avant et après la
              conversion. Cette analyse de performance m'a permis de quantifier
              les avantages de la migration vers React. J'ai également livré un
              des composant React que j'ai converti sur Npm. La documentation du
              composant converti a été une étape importante de mon travail. Cela
              a compris la rédaction de documents techniques détaillant
              l'architecture du composant, son fonctionnement, et les raisons de
              sa conception. J'ai livré les résultats de mon travail avec des
              rapports détaillés, y compris des analyses de performance et des
              explications sur les choix techniques effectués pendant la
              conversion.`}
            techs={[
              "HTML",
              "CSS",
              "JavaScript",
              "Git / Github",
              "React",
              "Npm Package",
              "jQuery",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://idyllic-naiad-fa0bd8.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/HRnet",
              },
              {
                name: "Lien vers le package npm",
                url: "https://www.npmjs.com/package/thomasop-date-picker",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default HRnet;
