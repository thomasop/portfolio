import React from "react";
import styles from "./ToDoCo.module.scss";
import Content from "../../../components/project/Content";
import Carousel from "../../../components/project/Carousel";

const arrayImg = [
  "../assets/projects/OCPHP/toDoCo/main.png",
  "../assets/projects/OCPHP/toDoCo/desktop1.png",
  "../assets/projects/OCPHP/toDoCo/desktop2.png",
  "../assets/projects/OCPHP/toDoCo/desktop3.png",
  "../assets/projects/OCPHP/toDoCo/mobile1.png",
  "../assets/projects/OCPHP/toDoCo/mobile2.png",
  "../assets/projects/OCPHP/toDoCo/mobile3.png",
];
const ToDoCo = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>ToDoCo</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai créé une application de gestion de tâches. J'ai utilisé le framework Symfony pour le back-end. J'ai utilisé Composer pour gérer mes dépendances. J'ai utilisé Git et Github pour gérer mon code. J'ai utilisé CodeClimate pour vérifier la qualité de mon code. J'ai utilisé PHPUnit pour tester mon code. J'ai utilisé Blackfire pour vérifier les performances de mon code. J'ai utilisé MySQL pour gérer ma base de données.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "Symfony",
              "CodeClimate",
              "PHPUnit",
              "Blackfire",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://todoco.thomas-dasilva.fr",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/ToDoAndCo",
              },
              {
                name: "Lien vers rapport de performance",
                url: "../assets/projects/OCPHP/toDoCo/blackfire.pdf",
                target: "_blank",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default ToDoCo;
