import React from "react";
import styles from "./SnowTricks.module.scss";
import Content from "../../../components/project/Content";
import Carousel from "../../../components/project/Carousel";

const arrayImg = [
  "../assets/projects/OCPHP/snowTricks/main.png",
  "../assets/projects/OCPHP/snowTricks/desktop1.png",
  "../assets/projects/OCPHP/snowTricks/desktop2.png",
  "../assets/projects/OCPHP/snowTricks/desktop3.png",
  "../assets/projects/OCPHP/snowTricks/desktop4.png",
  "../assets/projects/OCPHP/snowTricks/desktop5.png",
  "../assets/projects/OCPHP/snowTricks/mobile1.png",
  "../assets/projects/OCPHP/snowTricks/mobile2.png",
  "../assets/projects/OCPHP/snowTricks/mobile3.png",
  "../assets/projects/OCPHP/snowTricks/mobile4.png",
  "../assets/projects/OCPHP/snowTricks/mobile5.png",
];
const SnowTricks = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>SnowTricks</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai créé un site communautaire sur le snowboard. J'ai utilisé le framework Symfony pour le back-end. J'ai utilisé Composer pour gérer mes dépendances. J'ai utilisé Twig pour gérer mes vues. J'ai utilisé MySQL pour gérer ma base de données. J'ai utilisé Git et Github pour gérer mon code. J'ai utilisé HTML et CSS pour le front-end. J'ai utilisé PHP pour le back-end.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "Symfony",
              "Responsive",
              "MySQL",
              "Composer",
              "Twig",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://snowtricks.thomas-dasilva.fr",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/SnowTricks",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default SnowTricks;
