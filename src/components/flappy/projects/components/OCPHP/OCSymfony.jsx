import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./OCSymfony.module.scss";
import { useNavigate } from "react-router-dom";
import themeContext from "../../../../../providers/theme/themeContext";
import Scene from "../../../../projects/components/Scene";
import flappyContext from "../../../../../providers/flappy/flappyContext";

const spacingX = 750;
const spacingY = 150;
const speedX = 14;
const speedY = 3;
const OCSymfony = () => {
  const { theme } = useContext(themeContext);
  const [projects, setProjects] = useState([
    {
      title: "Les Films de Plein Air",
      img: "../assets/projects/OCPHP/lesFilmsEnPleinAir/main.png",
      link: "/project/lesfilmsenpleinair",
    },
    {
      title: "ExpressFood",
      img: "../assets/projects/OCPHP/expressFood/main.png",
      link: "/project/expressfood",
    },
    {
      title: "Blog",
      img: "../assets/projects/OCPHP/blog/main.png",
      link: "/project/blog",
    },
    {
      title: "SnowTricks",
      img: "../assets/projects/OCPHP/snowTricks/main.png",
      link: "/project/snowtricks",
    },
    {
      title: "BileMo",
      img: "../assets/projects/OCPHP/bileMo/main.png",
      link: "/project/bilemo",
    },
    {
      title: "ToDoCo",
      img: "../assets/projects/OCPHP/toDoCo/main.png",
      link: "/project/todoco",
    },
  ]);
  const refEl = useRef(null);
  let navigate = useNavigate();
  const [resolution, setResolution] = useState(0);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const xRef = useRef(x);
  const yRef = useRef(y);
  const { value, setValue } = useContext(flappyContext);
  useEffect(() => {
    setX(
      (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2 -
        160
    );
    xRef.current =
      (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2 -
      160;
    setY(
      (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2
    );
    yRef.current =
      (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2;
  }, []);
  useEffect(() => {
    const updateScrollDown = () => {
      if (
        xRef.current + spacingX * (projects.length - 1) >
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2 -
          160
      ) {
        setX(xRef.current - speedX);
        xRef.current = xRef.current - speedX;
      }
      if (
        yRef.current - spacingY * (projects.length - 1) <
        (document.documentElement.clientHeight - refEl.current.offsetHeight) / 2
      ) {
        setY(yRef.current + speedY);
        yRef.current = yRef.current + speedY;
      }
    };
    const updateScrollUp = () => {
      if (
        xRef.current <
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2 -
          160
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
      if (e.deltaY < 0) {
        setValue((prev) => ({
          ...prev,
          stopAnimation: true,
        }));
        updateScrollUp();
      } else {
        setValue((prev) => ({
          ...prev,
          stopAnimation: true,
        }));

        updateScrollDown();
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => window.removeEventListener("wheel", handlerScroll);
  }, [projects.length, setValue]);
  useEffect(() => {
    setResolution(document.body.clientWidth);
  }, []);
  useEffect(() => {
    if (value.stopAnimation) {
      window.setTimeout(() => {
        setValue((prev) => ({
          ...prev,
          stopAnimation: false,
        }));
      }, 1000);
    }
  }, [setValue, value.stopAnimation]);
  return (
    <>
      <div
        className={`${styles.container} ${
          theme === "dark" ? styles.container__dark : styles.container__light
        }`}
      >
        {projects.map((p, index) => (
          <div
            key={index}
            ref={refEl}
            style={{
              transform: `perspective(90px) translate3d(${
                index === 0 ? x : x + spacingX * index
              }px, ${index === 0 ? y : y - spacingY * index}px, 0px)`,
            }}
            className={`${styles.container__card}`}
          >
            <div
              className={styles.container__card__div}
              onClick={() => {
                navigate(p.link);
              }}
            ></div>
            <>
              <Scene
                resolution={resolution}
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
      </div>
    </>
  );
};

export default OCSymfony;
