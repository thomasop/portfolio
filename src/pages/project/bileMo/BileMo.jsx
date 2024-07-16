import React from "react";
import styles from "./BileMo.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";

const arrayImg = ["../assets/projects/OCPHP/bileMo/main.png"];
const BileMo = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>BileMo</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai créé une API RESTful pour une entreprise fictive qui propose des téléphones mobiles à ses clients. J'ai utilisé le framework Symfony pour le back-end. J'ai utilisé Composer pour gérer mes dépendances. J'ai utilisé Git et Github pour gérer mon code. J'ai utilisé JWT pour gérer l'authentification. J'ai utilisé MySQL pour gérer ma base de données.`}
            techs={["Git / Github", "Symfony", "API", "JWT"]}
            links={[
              {
                name: "Lien vers la documentation technique de l’API",
                url: "https://bilemo.thomas-dasilva.fr/BileMo/doc",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/BileMo",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default BileMo;
