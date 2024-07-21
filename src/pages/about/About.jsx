import React, { Suspense, useContext, useEffect, useState } from "react";
import themeContext from "../../providers/theme/themeContext";
import Theme from "../../components/theme/Theme";
import Device from "../../components/device/Device";
import styles from "./About.module.scss";
import Navigation from "../../components/navigation/Navigation";
import BallCanvas from "./components/scene/ball/BallCanvas";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Computer from "./components/scene/computer/Computer";
const technologies = [
  {
    name: "HTML 5",
    icon: "../assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "../assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "../assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "../assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "../assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "../assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "../assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "../assets/tech/nodejs.png",
  },
  {
    name: "git",
    icon: "../assets/tech/git.png",
  },
  {
    name: "figma",
    icon: "../assets/tech/figma.png",
  },
];
const About = () => {
  const { theme } = useContext(themeContext);
  const elementRef = React.useRef(null);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const handlerScroll = (e) => {
      let posElement = elementRef.current.getBoundingClientRect();
      if (e.layerY > posElement.top && e.deltaY > 0) {
        if (display === true) setDisplay(false);
      } else if (Math.abs(e.layerY) < posElement.top && e.deltaY < 0) {
        if (display === false) setDisplay(true);
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => {
      window.removeEventListener("wheel", handlerScroll);
    };
  }, [display, setDisplay]);
  return (
    <>
      <Theme />
      <Device />
      <Navigation />
      <>
        <main
          className={`${styles.about}
             ${theme === "dark" ? styles.about__dark : styles.about__light}`}
        >
          <>
            <h1
              className={`${styles.about__h1} ${
                theme === "dark"
                  ? styles.about__h1__dark
                  : styles.about__h1__light
              }`}
            >
              DÉVELOPPEUR FRONTEND
              <div
                ref={elementRef}
                className={`${styles.about__h1__discover} ${
                  display === false
                    ? styles.about__h1__discover__hidden
                    : styles.about__h1__discover__visible
                }`}
                onClick={() => {
                  elementRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setDisplay(false);
                }}
              >
                <span
                  className={`${styles.about__h1__discover__span} ${
                    theme === "dark"
                      ? styles.about__h1__discover__span__dark
                      : styles.about__h1__discover__span__light
                  }`}
                >
                  Me découvrir
                </span>
                <img
                  className={styles.about__h1__discover__img}
                  src={`${
                    theme === "light"
                      ? `./assets/icone/arrow-down-solid.svg`
                      : `./assets/icone/arrow-down-solid-light.svg`
                  }`}
                  alt=""
                />
              </div>
            </h1>
            <div
              ref={elementRef}
              className={`${styles.about__text} ${
                theme === "dark"
                  ? styles.about__text__dark
                  : styles.about__text__light
              }`}
            >
              <p className={styles.about__text__p}>THOMAS DA SILVA</p>
              <span
                className={`${styles.about__text__line} ${
                  theme === "dark"
                    ? styles.about__text__line__dark
                    : styles.about__text__line__light
                }`}
              ></span>

              <p className={styles.about__text__p}>
                Je suis un développeur web frontend passionné par la création de
                sites web modernes et performants.
              </p>
              <p className={styles.about__text__p}>
                Je suis diplomé de deux formation OpenClassrooms (développeur
                d’application PHP/Symfony et développeur d’application
                Javascript/React).
              </p>
              <p className={styles.about__text__p}>
                Je suis actuellement en recherche d'emploi, n'hésitez pas à me
                contacter.
              </p>
              <p></p>
              <a
                className={`${styles.about__text__a} ${
                  theme === "dark"
                    ? styles.about__text__a__dark
                    : styles.about__text__a__light
                }`}
                target="_blank"
                href="./assets/pdf/CV_Thomas_Da_Silva_Seabra.pdf"
                //download="CV_Thomas_Da_Silva_Seabra.pdf"
              >
                Voir mon CV
              </a>
            </div>
            <div className={styles.about__balls}>
              {technologies.map((technology) => (
                <div className="h-28 w-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} size={"normal"} />
                </div>
              ))}
            </div>
            <div className={styles.about__scene}>
              <Canvas
                frameloop="demand"
                dpr={[1, 2]}
                camera={{ position: [30, 23, 25], fov: 30 }}
                gl={{ preserveDrawingBuffer: true }}
              >
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} autoRotate={false} />
                  <Computer />
                </Suspense>

                <Preload all />
              </Canvas>
            </div>
          </>
        </main>
      </>
    </>
  );
};

export default About;
