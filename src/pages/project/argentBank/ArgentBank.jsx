import React from "react";
import styles from "./ArgentBank.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = [
  "../assets/projects/OCReact/argentBank/main.png",
  "../assets/projects/OCReact/argentBank/desktop1.png",
  "../assets/projects/OCReact/argentBank/desktop2.png",
  "../assets/projects/OCReact/argentBank/swagger.png",
];
const ArgentBank = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>ArgentBank</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai travaillé sur le développement front-end
              d’une application bancaire en utilisant React et Redux pour créer
              une expérience utilisateur dynamique et réactive. Ma mission
              principale a été d'intégrer le front-end avec le back-end via des
              appels API. J'ai écrit des appels à l'API REST pour connecter les
              deux parties de l'application, assurant une communication fluide
              entre le client et le serveur. J'ai utilisé React pour développer
              l'interface utilisateur de l'application bancaire, en me
              concentrant sur la création d'un tableau de bord complet et
              responsive pour les utilisateurs. Redux a été utilisé pour gérer
              les données de l'application. Cela m'a permis de maintenir un état
              global cohérent à travers l'application. Pour définir les points
              d'accès de l'API et modéliser les interactions avec les données
              des transactions, j'ai utilisé Swagger. Cet outil m'a aidé à
              décrire les différentes routes et actions nécessaires pour l'API.`}
            techs={[
              "HTML",
              "CSS",
              "JavaScript",
              "Git / Github",
              "SASS",
              "React",
              "Redux",
              "Swagger",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://cheery-meerkat-871e11.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/argent_bank",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default ArgentBank;
