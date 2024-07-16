import React from "react";
import styles from "./Fisheye.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/fisheye/main.png",
  "../assets/projects/OCReact/fisheye/desktop1.png",
  "../assets/projects/OCReact/fisheye/desktop2.png",
  "../assets/projects/OCReact/fisheye/desktop3.png",
  "../assets/projects/OCReact/fisheye/desktop4.png",
  "../assets/projects/OCReact/fisheye/tablette1.png",
  "../assets/projects/OCReact/fisheye/tablette2.png",
  "../assets/projects/OCReact/fisheye/tablette3.png",
  "../assets/projects/OCReact/fisheye/mobile1.png",
  "../assets/projects/OCReact/fisheye/mobile2.png",
  "../assets/projects/OCReact/fisheye/mobile3.png",
  "../assets/projects/OCReact/fisheye/mobile4.png",
  "../assets/projects/OCReact/fisheye/mobile5.png",
];
const Fisheye = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Fisheye</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai travaillé sur le développement d'un site web
              pour une plateforme d’artistes. L'accent a été mis sur la création
              d'une application web accessible, modulaire et utilisant des
              design patterns en JavaScript. J'ai commencé par créer un
              prototype fonctionnel du site web en utilisant HTML, CSS et
              JavaScript. J'ai eu à ma disposition des maquettes, des données
              JSON et un code de base pour démarrer. Ma tâche a consisté à
              intégrer diverses fonctionnalités telles que la récupération et
              l'affichage des données, la navigation entre les pages des
              photographes, une modale de contact, une LightBox pour les médias,
              et la gestion des likes. L'accessibilité a été une priorité
              absolue dans ce projet. J'ai appris à développer une application
              web modulaire, en utilisant des design patterns en JavaScript.
              Cela a impliqué l'écriture de code maintenable et la gestion des
              événements du site.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "JavaScript",
              "API Fetch",
              "Accessibilité",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://serene-tartufo-4605bf.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/Front-End-Fisheye",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default Fisheye;
