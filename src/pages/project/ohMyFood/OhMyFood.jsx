import React, { useContext } from "react";
import styles from "./OhMyFood.module.scss";
import Carousel from "../../../components/project/Carousel";
import Content from "../../../components/project/Content";
import Contact from "../../../components/contact/Contact";
import themeContext from "../../../providers/theme/themeContext";

const arrayImg = [
  "../assets/projects/OCReact/ohMyFood/main.png",
  "../assets/projects/OCReact/ohMyFood/load.png",
  "../assets/projects/OCReact/ohMyFood/mobile1.png",
  "../assets/projects/OCReact/ohMyFood/mobile2.png",
  "../assets/projects/OCReact/ohMyFood/mobile3.png",
  "../assets/projects/OCReact/ohMyFood/tablette.png",
];
const OhMyFood = () => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <section
        className={`${styles.project} ${
          theme === "dark" ? styles.project__dark : styles.project__light
        }`}
      >
        <h1
          className={`${styles.project__h1} ${
            theme === "dark"
              ? styles.project__h1__dark
              : styles.project__h1__light
          }`}
        >
          OhMyFood
        </h1>
        <div className={styles.project__container}>
          <Content
            description={`Ma tâche principale a été d'intégrer une maquette en mobile-first.
              J'avais à disposition des maquettes pour mobile et desktop, des
              prototype sur Figma, ainsi que des images et textes nécessaires.
              Cette approche mobile-first m'a permit de comprendre l'importance
              de concevoir des sites web adaptatifs et réactifs. J'ai apprit à
              mettre en œuvre des animations CSS en utilisant SASS pour enrichir
              l'expérience utilisateur du site. Ces animations donneront vie à
              l'interface et rendront la navigation plus interactive et
              engageante. Enfin, j'ai versionné mon projet avec Git et GitHub,
              ce qui m'a permit de me familiariser ainsi avec ces outils
              essentiels pour la gestion et la collaboration sur des projets de
              développement web.`}
            techs={["HTML", "CSS", "Git / Github", "SASS"]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://thomasop.github.io/DaSilva_Thomas_3_code_082022/",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/DaSilva_Thomas_3_code_082022",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
        <Contact />
      </section>
    </>
  );
};

export default OhMyFood;
