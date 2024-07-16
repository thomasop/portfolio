import React, { useContext } from "react";
import styles from "./Project.module.scss";
import Content from "../../project/Content";
import Carousel from "../../project/Carousel";
import projectContext from "../../../providers/project/projectContext";
import flappyContext from "../../../providers/flappy/flappyContext";
import projectsContext from "../../../providers/projects/projectsContext";

export const Project = () => {
  const { project, setProject } = useContext(projectContext);
  const { projects, setProjects } = useContext(projectsContext);
  const { value, setValue } = useContext(flappyContext);
  return (
    <>
      <section className={styles.project}>
        <button
          onClick={() => {
            setProject((prev) => ({
              ...prev,
              img: [],
              description: "",
              techs: [],
              links: [],
            }));
            setValue((prev) => ({
              ...prev,
              page: "projects",
            }));
          }}
        >
          Retour all projects
        </button>
        <button
          onClick={() => {
            setProject((prev) => ({
              ...prev,
              img: [],
              description: "",
              techs: [],
              links: [],
            }));
            setValue((prev) => ({
              ...prev,
              page: "game",
            }));
          }}
        >
          retour game
        </button>
        <h1 className={styles.project__h1}>BileMo</h1>
        <div className={styles.project__container}>
          <Content
            description={project.description}
            techs={project.techs}
            links={project.links}
          />
          <Carousel arrayImg={project.img} />
        </div>
      </section>
    </>
  );
};
