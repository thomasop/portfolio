import React from "react";
import styles from "./Blog.module.scss";
import Content from "../../../components/project/Content";
import Carousel from "../../../components/project/Carousel";

const arrayImg = [
  "../assets/projects/OCPHP/blog/main.png",
  "../assets/projects/OCPHP/blog/desktop1.png",
  "../assets/projects/OCPHP/blog/desktop2.png",
  "../assets/projects/OCPHP/blog/desktop3.png",
  "../assets/projects/OCPHP/blog/mobile1.png",
  "../assets/projects/OCPHP/blog/mobile2.png",
  "../assets/projects/OCPHP/blog/mobile3.png",
  "../assets/projects/OCPHP/blog/mobile4.png",
  "../assets/projects/OCPHP/blog/mobile5.png",
];
const Blog = () => {
  return (
    <>
      <section className={styles.project}>
        <h1 className={styles.project__h1}>Blog</h1>
        <div className={styles.project__container}>
          <Content
            description={`Dans ce projet, j'ai créé un blog en PHP. J'ai utilisé le modèle MVC pour structurer mon code. J'ai utilisé Composer pour gérer mes dépendances. J'ai utilisé Twig pour gérer mes vues. J'ai utilisé MySQL pour gérer ma base de données. J'ai utilisé codeclimate pour vérifier la qualité de mon code. J'ai utilisé Git et Github pour gérer mon code. J'ai utilisé HTML et CSS pour le front-end. J'ai utilisé PHP pour le back-end.`}
            techs={[
              "HTML",
              "CSS",
              "Git / Github",
              "Responsive",
              "PHP",
              "MySQL",
              "POO",
              "MVC",
              "Composer",
              "Twig",
              "codeclimate",
            ]}
            links={[
              {
                name: "Lien vers le site",
                url: "https://monblog.thomas-dasilva.fr/",
              },
              {
                name: "Lien vers le repository Github",
                url: "https://github.com/thomasop/monBlog",
              },
              {
                name: "Lien vers codeclimate",
                url: "https://codeclimate.com/github/thomasop/monBlog",
              },
            ]}
          />
          <Carousel arrayImg={arrayImg} />
        </div>
      </section>
    </>
  );
};

export default Blog;
