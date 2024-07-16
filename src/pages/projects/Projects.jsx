import styles from "./Projects.module.scss";
import Scene from "../../components/projects/components/Scene";
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import themeContext from "../../providers/theme/themeContext";
import Contact from "../../components/contact/Contact";
import deviceContext from "../../providers/device/deviceContext";
import Device from "../../components/device/Device";
import resolutionContext from "../../providers/resolution/resolutionContext";

const OCReactProjects = [
  {
    title: "OhMyFood",
    img: "../assets/projects/OCReact/ohMyFood/main.png",
    link: "/project/ohmyfood",
  },
  {
    title: "GameOn",
    img: "../assets/projects/OCReact/gameOn/main.png",
    link: "/project/gameon",
  },
  {
    title: "fisheye",
    img: "../assets/projects/OCReact/fisheye/main.png",
    link: "/project/fisheye",
  },
  {
    title: "sportSee",
    img: "../assets/projects/OCReact/sportSee/main.png",
    link: "/project/sportsee",
  },
  {
    title: "argentBank",
    img: "../assets/projects/OCReact/argentBank/main.png",
    link: "/project/argentbank",
  },
  {
    title: "billed",
    img: "../assets/projects/OCReact/billed/main.png",
    link: "/project/billed",
  },
  {
    title: "booki",
    img: "../assets/projects/OCReact/booki/main.png",
    link: "/project/booki",
  },
  {
    title: "hrnet",
    img: "../assets/projects/OCReact/hrnet/main.png",
    link: "/project/hrnet",
  },
  {
    title: "kasa",
    img: "../assets/projects/OCReact/kasa/main.png",
    link: "/project/kasa",
  },
  {
    title: "learnAtHome",
    img: "../assets/projects/OCReact/learnAtHome/main.png",
    link: "/project/learnathome",
  },
  {
    title: "lesPetitsPlats",
    img: "../assets/projects/OCReact/lesPetitsPlats/main.png",
    link: "/project/lespetitsplats",
  },
];
/* const spacingX = 750;
const spacingY = 150;
const speedX = 15;
const speedY = 3; */

const Projects = () => {
  const { theme } = useContext(themeContext);
  const { resolution } = useContext(resolutionContext);
  const [spacingX, setSpacingX] = useState(0);
  const [spacingY, setSpacingY] = useState(0);
  const [speedX, setSpeedX] = useState(0);
  const [test, setTest] = useState(0);
  const [speedY, setSpeedY] = useState(0);
  const [lengthOfAllScreen, setLengthOfAllScreen] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const refEl = useRef(null);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const xRef = useRef(x);
  const yRef = useRef(y);
  useEffect(() => {
    const totalScrollWidth = spacingX * (OCReactProjects.length - 1);

    const updateScrollProgress = () => {
      const progress = (Math.abs(x) / totalScrollWidth) * 100;
      if (progress > 100) {
        setScrollProgress(100);
      } else {
        setScrollProgress(progress);
      }
    };

    window.addEventListener("wheel", updateScrollProgress);

    return () => {
      window.removeEventListener("wheel", updateScrollProgress);
    };
  }, [x]);

  useEffect(() => {
    if (resolution > 700) {
      setSpacingX(750);
      setSpacingY(150);
      setSpeedX(15);
      setSpeedY(3);
    } else if (resolution < 425) {
      setSpacingX(250);
      setSpacingY(50);
      setSpeedX(2.5);
      setSpeedY(0.5);
    } else {
      setSpacingX(500);
      setSpacingY(100);
      setSpeedX(10);
      setSpeedY(2);
    }
  }, [resolution]);

  let navigate = useNavigate();
  /* const [resolution, setResolution] = useState(0); */
  const [projects, setProjects] = useState(OCReactProjects);
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflowY = "hidden";
    html.style.overflowX = "hidden";
    const root = document.querySelector("#root");
    root.style.overflowY = "hidden";
    root.style.overflowX = "hidden";
    return () => {
      html.style.overflowY = "auto";
      html.style.overflowX = "auto";
      root.style.overflowY = "auto";
      root.style.overflowX = "auto";
    };
  });

  useEffect(() => {
    if (spacingX !== 0 || spacingY !== 0 || speedX !== 0 || speedY !== 0) {
      setX(
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2
      );
      xRef.current =
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2;
      setY(
        (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2
      );
      yRef.current =
        (document.documentElement.clientHeight - refEl.current.offsetHeight) /
        2;
    }
  }, [spacingX, spacingY, speedX, speedY]);
  useEffect(() => {
    const updateScrollDown = () => {
      if (
        xRef.current + spacingX * (OCReactProjects.length - 1) >
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2
      ) {
        setX(xRef.current - speedX);
        xRef.current = xRef.current - speedX;
      }
      if (
        yRef.current - spacingY * (OCReactProjects.length - 1) <
        (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2
      ) {
        setY(yRef.current + speedY);
        yRef.current = yRef.current + speedY;
      }
    };
    const updateScrollUp = () => {
      if (
        xRef.current <
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2
      ) {
        setX(xRef.current + speedX);
        xRef.current = xRef.current + speedX;
      }
      if (
        yRef.current >
        (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2
      ) {
        setY(yRef.current - speedY);
        yRef.current = yRef.current - speedY;
      }
    };

    const handlerScroll = (e) => {
      if (spacingX !== 0 || spacingY !== 0 || speedX !== 0 || speedY !== 0) {
        if (e.deltaY < 0) {
          updateScrollUp();
        } else {
          updateScrollDown();
        }
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => window.removeEventListener("wheel", handlerScroll);
  }, [spacingX, spacingY, speedX, speedY]);
  console.log("refEl", refEl.current && refEl.current.offsetWidth);
  console.log(
    "document.documentElement.clientWidth",
    document.documentElement.clientWidth
  );
  console.log("x + spacingX * index", x);
  return (
    <>
      <section className={styles.projects}>
        <h1
          className={`${styles.projects__h1} ${
            theme === "dark"
              ? styles.projects__h1__dark
              : styles.projects__h1__light
          }`}
        >
          Mes projects
        </h1>
        <button className={styles.projects__back} onClick={() => navigate("/")}>
          Retour vers la page d'accueil
        </button>
        <select
          className={styles.projects__select}
          name=""
          id=""
          onChange={(e) => {
            if (e.target.value === "js") {
              setProjects(OCReactProjects);
            }
            if (e.target.value === "php") {
              setProjects([]);
            }
            if (e.target.value === "perso") {
              setProjects([]);
            }
          }}
        >
          <option value="js">OpenClassrooms - JavaScript/React</option>
          <option value="php">OpenClassrooms - PHP/Symfony</option>
          <option value="perso">Personnel</option>
        </select>
        <Contact />
        <div
          className={`${styles.projects__container} ${
            theme === "dark"
              ? styles.projects__container__dark
              : styles.projects__container__light
          }`}
        >
          {spacingX !== 0 && spacingY !== 0 && speedX !== 0 && speedY !== 0 && (
            <>
              {projects.map((p, index) => (
                <div
                  key={index}
                  ref={refEl}
                  style={{
                    transform: `perspective(90px) translate3d(${
                      index === 0 ? x : x + spacingX * index
                    }px, ${index === 0 ? y : y - spacingY * index}px, 0px)`,
                  }}
                  className={`${styles.projects__container__card}`}
                >
                  <div
                    className={styles.projects__container__card__div}
                    onClick={() => {
                      navigate(p.link);
                    }}
                  ></div>
                  <>
                    <Scene
                      //resolution={resolution}
                      img={p.img}
                      x={index === 0 ? x : x + spacingX * index}
                      y={index === 0 ? y : y - spacingY * index}
                      domX={
                        refEl.current &&
                        (document.documentElement.clientWidth -
                          refEl.current.offsetWidth) /
                          2
                      }
                    />
                  </>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          className={`${styles.projects__test} ${
            theme === "light"
              ? styles.projects__test__light
              : styles.progress__test__dark
          }`}
        >
          <div
            style={{
              width: `${scrollProgress}%`,
              background: theme === "light" ? "#171933" : "#e8e9f8",
              height: "3px",
              borderRadius: "5px",
              boxShadow:
                theme === "light"
                  ? "0px 0px 5px 0px rgba(0, 0, 0, 0.75)"
                  : "0px 0px 5px 0px rgba(255, 255, 255, 0.75)",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
