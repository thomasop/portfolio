import React from "react";
import styles from "./LesFilmsEnPleinAir.module.scss";
import Content from "../../../components/project/Content";
import Carousel from "../../../components/project/Carousel";

const arrayImg = [
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/main.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/desktop1.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/desktop2.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/desktop3.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/desktop4.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/desktop5.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/mobile1.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/mobile2.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/mobile3.png",
  "../assets/projects/OCPHP/lesFilmsEnPleinAir/mobile4.png",
];
const LesFilmsEnPleinAir = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Les films en plein air</h1>
        <div className={styles.project__container}>
          <Content
            description={`Ma mission a été de réaliser un cahier des charges pour répondre au besoin du client. J'ai tout d'abord dans ce cahier des charges rappeler le cadre du projet, puis fait la conception graphique, les spécifications fonctionnelles et techniques. J'ai également réalisé une maquette du site en utilisant HTML et CSS. Ce qui m'a permis d'apprendre les bases de HTML et CSS. Pas de version
                  mobile pour ce projet (min-width : 510 pixels).`}
            techs={["HTML", "CSS", "Cahier des charges"]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://festival-des-films-en-plein-air.thomas-dasilva.fr",
              },
              {
                name: "Lien vers le cahier des charges",
                url: "http://localhost:5173/assets/projects/OCPHP/lesFilmsEnPleinAir/cahierDesCharges.pdf",
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

export default LesFilmsEnPleinAir;
