import React, { useEffect, useState, useRef } from "react";
import styles from "./Doodle.module.scss";
import Contact from "../components/contact/Contact";

const Doodle = () => {
  const canvasRef = useRef(null);

  const [doodlePos, setDoodlePos] = useState({ x: 160, y: 600 });
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(-1);

  const [allPlateform, setAllPlateform] = useState([]);
  const [direction, setDirection] = useState("down");
  const [hDirection, setHDirection] = useState("doodler-right.png");
  const [currentH, setCurrentH] = useState(630 - 70);
  const [heightPlat, setHeightPlat] = useState(630);
  const [currentId, setCurrentId] = useState(0);
  const [score, setScore] = useState(0);
  const [diff, setDiff] = useState(0);
  const [start, setStart] = useState(false);
  const [test, setTest] = useState(0);

  useEffect(() => {
    if (start === true) {
      let ctx = canvasRef.current.getContext("2d");
      if (doodlePos.y > 620) {
        ctx.clearRect(0, 0, 250, 650);
      }
      ctx.clearRect(0, 0, 250, 650);
      let img = new Image();
      img.setAttribute("src", "./assets/doodle/doodlejumpbg.png");

      img.onload = function () {
        ctx.drawImage(img, 0, 0, 250, 650);
      };
      let img2 = new Image();
      img2.setAttribute("src", "./assets/doodle/" + hDirection);

      img2.onload = function () {
        ctx.drawImage(img2, doodlePos.x, doodlePos.y, 30, 30);
      };
      if (allPlateform.length === 1 && allPlateform[0].length > 0) {
        for (let i = 0; i < allPlateform[0].length; i++) {
          let plateform = new Image();
          plateform.setAttribute("src", "./assets/doodle/platform.png");
          plateform.onload = function () {
            ctx.drawImage(
              plateform,
              allPlateform[0][i].x,
              allPlateform[0][i].y,
              allPlateform[0][i].w,
              allPlateform[0][i].h
            );
          };
        }
      }
    }
  }, [doodlePos, start, allPlateform]);
  useEffect(() => {
    if (start === true) {
      let array = [];

      const kkk = () => {
        return Math.floor(Math.random() * 70);
      };
      let current = 0;
      for (let i = 0; i < 20; i++) {
        if (i === 0) {
          let min = Math.floor(Math.random() * 100);
          array.push({ x: 155, y: 630, w: 40, h: 10 });
        } else {
          let min = Math.floor(Math.random() * 60);

          let test = Math.floor(Math.random() * 2);
          let test2 = 0;
          if (current === 0) {
            test2 = Math.floor(Math.random() * 60) + 10;
          } else {
            test2 = Math.floor(Math.random() * 60) + current + 30;
          }

          current = test2;
          if (test === 0) {
            array.push({ x: 155 + min, y: 630 - test2, w: 40, h: 10 });
          } else {
            array.push({ x: 65 - min, y: 630 - test2, w: 40, h: 10 });
          }
        }
      }
      setAllPlateform([array]);
    }
  }, [start]);
  useEffect(() => {
    let timerId;

    const animate = () => {
      if (doodlePos.y > 630) {
        setAllPlateform([]);
        setDoodlePos({ x: 160, y: 600 });
        setDx(0);
        setDirection("down");
        setDy(-6.75);
        setHDirection("doodler-right.png");
        setCurrentH(630 - 70);
        setCurrentId(0);
        setScore(0);
        setStart(false);
        cancelAnimationFrame(timerId);
      }

      //go up
      // if doodle touch plateform

      if (allPlateform.length === 1 && allPlateform[0].length > 0) {
        for (let i = 0; i < allPlateform[0].length; i++) {
          if (
            doodlePos.x > allPlateform[0][i].x - 25 &&
            doodlePos.x < allPlateform[0][i].x + 25 &&
            doodlePos.y + 40 >= allPlateform[0][i].y &&
            doodlePos.y < allPlateform[0][i].y - 30 &&
            direction === "down"
          ) {
            setCurrentId(i);
            setDiff(allPlateform[0][0].y - allPlateform[0][i].y - 10);
            setScore(
              (prev) =>
                prev + Math.floor(allPlateform[0][0].y - allPlateform[0][i].y)
            );
            if (allPlateform[0][i].y - 630 === 0) {
              setCurrentH(allPlateform[0][i].y - 70);
            }
            setTest(dy);
            setHeightPlat(allPlateform[0][i].y);
            setDy(-2);
            setDirection("up");
          }
        }
      }

      if (allPlateform.length === 1 && allPlateform[0].length > 0) {
        if (currentId !== 0) {
          let array = [];
          let n = 630 - allPlateform[0][currentId].y;
          for (let i = 0; i < allPlateform[0].length; i++) {
            array.push({
              x: allPlateform[0][i].x,
              y: allPlateform[0][i].y + test,
              w: 40,
              h: 10,
            });
          }
          setTest(test + 100 / diff);
          setAllPlateform([array]);
        }
      }

      if (doodlePos.y < 630) {
        if (doodlePos.y + 30 < 630 || doodlePos.y + 30 > 630 - 70) {
          if (direction === "down") {
            setDy(dy + 0.2);
          }
          if (direction === "up") {
            setDy(-Math.abs(dy + 0.2));
          }
        }

        // go down
        if (doodlePos.y <= currentH - 60) {
          setDy(2);
          setDirection("down");
        }
        setDoodlePos({ x: doodlePos.x + dx, y: doodlePos.y + dy });

        timerId = requestAnimationFrame(animate);
      }
    };
    if (start === true) {
      timerId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(timerId);
  }, [
    start,
    allPlateform,
    currentH,
    currentId,
    direction,
    doodlePos.x,
    doodlePos.y,
    dx,
    dy,
    doodlePos,
  ]);
  useEffect(() => {
    if (allPlateform.length === 1 && allPlateform[0].length > 0) {
      if (
        allPlateform[0][currentId].y > 630 &&
        allPlateform[0][currentId].y < 650 &&
        currentId !== 0
      ) {
        let array = [];
        for (let i = 0; i < allPlateform[0].length; i++) {
          array.push({
            x: allPlateform[0][i].x,
            y: allPlateform[0][i].y,
            w: 40,
            h: 10,
          });
        }
        array.splice(0, currentId);
        let min = Math.floor(Math.random() * 60);
        let test2 = Math.floor(Math.random() * 60);
        let test = Math.floor(Math.random() * 2);
        if (test === 0) {
          array.push({
            x: 155 + min,
            y: array[array.length - 1].y - (test2 + 30),
            w: 40,
            h: 10,
          });
        } else {
          array.push({
            x: 65 - min,
            y: array[array.length - 1].y - (test2 + 30),
            w: 40,
            h: 10,
          });
        }

        setAllPlateform([array]);
        setCurrentId(0);
      }
    }
  }, [allPlateform]);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "ArrowLeft") {
        setHDirection("doodler-left.png");

        if (doodlePos.x < 0) {
          setDoodlePos({ ...doodlePos, x: 250 });
          setDx(-3);
        } else {
          setDx(-3);
        }
      } else if (e.key === "ArrowRight") {
        setHDirection("doodler-right.png");
        if (doodlePos.x > 250) {
          setDoodlePos({ ...doodlePos, x: 0 });
          setDx(3);
        } else {
          setDx(3);
        }
      }
    };
    window.addEventListener("keydown", test);
    return () => removeEventListener("keydown", test);
  }, [doodlePos, dx]);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "ArrowLeft") {
        setHDirection("doodler-left.png");
        setDx(0);
      } else if (e.key === "ArrowRight") {
        setHDirection("doodler-right.png");
        setDx(0);
      }
    };
    window.addEventListener("keyup", test);
    return () => removeEventListener("keyup", test);
  }, [doodlePos]);
  return (
    <>
      <div className={styles.doodle}>
        <h1 className={styles.doodle__h1}>Doodle</h1>
        {start === true && (
          <>
            <p>score : {score}</p>
            <canvas width={250} height={650} ref={canvasRef}></canvas>
          </>
        )}
        {start === false && (
          <>
            <button
              onClick={() => {
                setStart(true);
                setAllPlateform([]);
                setDoodlePos({ x: 160, y: 600 });
                setDx(0);
                setDirection("down");
                setDy(-6.25);
                setHDirection("doodler-right.png");
                setCurrentH(630 - 70);
                setCurrentId(0);
                setScore(0);
              }}
            >
              Play
            </button>
            <div className={styles.doodle__wait}></div>
          </>
        )}
      </div>
      <Contact />
    </>
  );
};

export default Doodle;
