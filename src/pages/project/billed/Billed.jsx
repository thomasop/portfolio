import React from "react";
import styles from "./Billed.module.scss";
import Content from "../../../components/project/Content";

const Billed = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Billed</h1>
        <div className={styles.project__container}>
          <Content
            description={` Ce projet m'a confié la tâche de débugger et tester une
              application. J'ai travaillé sur des tests unitaires et
              d'intégration en JavaScript, ainsi que des tests end-to-end
              manuels. Ma mission principale a été de corriger les bugs d’un
              système RH et de finaliser les tests. J'ai commencé par installer
              le back-end et le front-end depuis des repos spécifiques. Ensuite,
              j'ai été chargé de déboguer certaines parties de l’application.
              J'ai rédigé et implémenté des tests unitaires en JavaScript pour
              vérifier la validité et la fiabilité des différentes composantes
              de l'application. J'ai également élaboré un plan de test
              end-to-end manuel pour assurer le bon fonctionnement du parcours
              employé de l'application. J'ai utilisé le Chrome Debugger pour le
              débogage de l'application, me permettant de détecter et de
              résoudre les problèmes de manière efficace. En plus des tests
              unitaires, j'ai écrit des tests d'intégration en JavaScript pour
              vérifier l'interaction entre les différentes parties de
              l'application.`}
            techs={[
              "Test unitaire",
              "Test d'intégration",
              "Test end-to-end",
              "Chrome Debugger",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://rococo-florentine-ee5596.netlify.app",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/Billed",
              },
            ]}
          />
          <div className={styles.project__container__right}>
            <img
              className={styles.project__container__right__img}
              src={"../assets/projects/OCReact/billed/main.png"}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billed;
