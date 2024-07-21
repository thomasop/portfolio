import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./OCReact.module.scss";
import themeContext from "../../../../providers/theme/themeContext";
import resolutionContext from "../../../../providers/resolution/resolutionContext";
import projectsContext from "../../../../providers/projects/projectsContext";
import Container from "../scene/Container";

const OCReactProjects = [
  {
    title: "OhMyFood",
    img: "../assets/projects/OCReact/ohMyFood/main.png",
  },
  {
    title: "GameOn",
    img: "../assets/projects/OCReact/gameOn/main.png",
  },
  {
    title: "Fisheye",
    img: "../assets/projects/OCReact/fisheye/main.png",
  },
  {
    title: "SportSee",
    img: "../assets/projects/OCReact/sportSee/main.png",
  },
  {
    title: "ArgentBank",
    img: "../assets/projects/OCReact/argentBank/main.png",
  },
  {
    title: "Billed",
    img: "../assets/projects/OCReact/billed/main.png",
  },
  {
    title: "Booki",
    img: "../assets/projects/OCReact/booki/main.png",
  },
  {
    title: "Hrnet",
    img: "../assets/projects/OCReact/hrnet/main.png",
  },
  {
    title: "Kasa",
    img: "../assets/projects/OCReact/kasa/main.png",
  },
  {
    title: "LearnAtHome",
    img: "../assets/projects/OCReact/learnAtHome/main.png",
  },
  {
    title: "LesPetitsPlats",
    img: "../assets/projects/OCReact/lesPetitsPlats/main.png",
  },
];
const OCReact = () => {
  const { theme } = useContext(themeContext);
  const refEl = useRef();
  const [newArray, setNewArray] = useState([]);
  const { resolution } = useContext(resolutionContext);
  const { projects, setProjects } = useContext(projectsContext);
  const xRef = useRef(projects.x);
  const yRef = useRef(projects.y);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const totalScrollWidth = projects.spacingX * (OCReactProjects.length - 1);

    const updateScrollProgress = () => {
      const progress = (Math.abs(projects.x) / totalScrollWidth) * 100;
      if (progress > 100) {
        setProjects((prev) => ({
          ...prev,
          percent: 100,
        }));
      } else {
        setProjects((prev) => ({
          ...prev,
          percent: progress,
        }));
      }
    };

    window.addEventListener("wheel", updateScrollProgress);

    return () => {
      window.removeEventListener("wheel", updateScrollProgress);
    };
  }, [projects.spacingX, projects.x, setProjects]);
  useEffect(() => {
    if (resolution > 700) {
      setProjects((prev) => ({
        ...prev,
        speedX: 12.5,
        speedY: 2.5,
        spacingX: 625,
        spacingY: 125,
      }));
    } else if (resolution < 425) {
      setProjects((prev) => ({
        ...prev,
        speedX: 7,
        speedY: 1.4,
        spacingX: 300,
        spacingY: 60,
      }));
    } else {
      setProjects((prev) => ({
        ...prev,
        speedX: 10,
        speedY: 2,
        spacingX: 500,
        spacingY: 100,
      }));
    }
  }, [resolution, setProjects]);
  useEffect(() => {
    if (refEl.current) {
      setProjects((prev) => ({
        ...prev,
        x:
          (document.documentElement.clientWidth - refEl.current.offsetWidth) /
            2 -
          0,
        y:
          (document.documentElement.clientHeight - refEl.current.offsetHeight) /
          2,
      }));
      xRef.current =
        (document.documentElement.clientWidth - refEl.current.offsetWidth) / 2 -
        0;
      yRef.current =
        (document.documentElement.clientHeight - refEl.current.offsetHeight) /
        2;
    }
  }, [setProjects]);
  useEffect(() => {
    const updateScrollDown = () => {
      if (refEl.current) {
        if (
          xRef.current + projects.spacingX * (OCReactProjects.length - 1) >
          (document.documentElement.clientWidth - refEl.current.offsetWidth) /
            2 -
            0
        ) {
          setProjects((prev) => ({
            ...prev,
            x: xRef.current - projects.speedX,
          }));
          xRef.current = xRef.current - projects.speedX;
        }
        if (
          yRef.current - projects.spacingY * (OCReactProjects.length - 1) <
          (document.documentElement.clientHeight - refEl.current.offsetHeight) /
            2
        ) {
          setProjects((prev) => ({
            ...prev,
            y: yRef.current + projects.speedY,
          }));
          yRef.current = yRef.current + projects.speedY;
        }
      }
    };
    const updateScrollUp = () => {
      if (refEl.current) {
        if (
          xRef.current <
          (document.documentElement.clientWidth - refEl.current.offsetWidth) /
            2 -
            0
        ) {
          setProjects((prev) => ({
            ...prev,
            x: xRef.current + projects.speedX,
          }));
          xRef.current = xRef.current + projects.speedX;
        }
        if (
          yRef.current >
          (document.documentElement.clientHeight - refEl.current.offsetHeight) /
            2
        ) {
          setProjects((prev) => ({
            ...prev,
            y: yRef.current - projects.speedY,
          }));
          yRef.current = yRef.current - projects.speedY;
        }
      }
    };

    const handlerScroll = (e) => {
      if (refEl.current) {
        if (e.deltaY < 0) {
          /* setValue((prev) => ({
            ...prev,
            stopAnimation: true,
          })); */
          if (!projects.isModalOpen) {
            updateScrollUp();
          }
        } else {
          /* setValue((prev) => ({
            ...prev,
            stopAnimation: true,
          })); */
          if (!projects.isModalOpen) {
            updateScrollDown();
          }
        }
      }
    };
    window.addEventListener("wheel", handlerScroll);
    return () => window.removeEventListener("wheel", handlerScroll);
  }, [
    projects.isModalOpen,
    projects.spacingX,
    projects.spacingY,
    projects.speedX,
    projects.speedY,
    setProjects,
  ]);
  /* useEffect(() => {
    if (value.stopAnimation) {
      window.setTimeout(() => {
        setValue((prev) => ({
          ...prev,
          stopAnimation: false,
        }));
      }, 1000);
    }
  }, [setValue, value.stopAnimation]); */
  useEffect(() => {
    if (projects.spacingX !== 0) {
      let array = [];
      OCReactProjects.map((p, index) => {
        array.push([
          {
            index: index,
            ref: refEl,
            projects: projects,
            rotate: Math.abs(
              ((index === 0 && refEl.current
                ? projects.x
                : projects.x + projects.spacingX * index) -
                (refEl.current &&
                  (document.documentElement.clientWidth -
                    refEl.current.offsetWidth) /
                    2)) /
                5
            ),
          },
        ]);
      });
      setNewArray(array);
    }
  }, [projects, projects.x]);

  useEffect(() => {
    if (newArray.length === OCReactProjects.length) {
      let sortByRotate = newArray.sort((a, b) => a[0].rotate - b[0].rotate);
      setCurrentIndex(sortByRotate[0][0].index);
    }
  }, [newArray, setCurrentIndex]);
  return (
    <>
      <div
        className={`${styles.container} ${
          theme === "dark" ? styles.container__dark : styles.container__light
        }`}
      >
        {OCReactProjects.map((p, index) => (
          <React.Fragment key={index}>
            <>
              <Container
                currentIndex={currentIndex === index ? true : false}
                ref={refEl}
                p={p}
                projects={projects}
                index={index}
                resolution={resolution}
              />
            </>
          </React.Fragment>
        ))}
      </div>
      <div
        className={`${styles.progressBar} ${
          theme === "dark"
            ? styles.progressBar__dark
            : styles.progressBar__light
        }`}
      >
        <div
          style={{
            transition: "backgroundColor 0.6s ease 0s",
            height: "3px",
            borderRadius: "5px",
            boxShadow: `${
              theme === "dark"
                ? "0px 0px 3px 1px rgba(255,255,255,0.75)"
                : "0px 0px 3px 1px rgba(0,0,0,0.75)"
            }`,
            backgroundColor: `${theme === "dark" ? "white" : "black"}`,
            width: `${projects.percent}%`,
          }}
        ></div>
      </div>
    </>
  );
};

export default OCReact;
