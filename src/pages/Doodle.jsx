import React, { useEffect, useState, useRef } from "react";
import styles from "./Doodle.module.scss";

const Doodle = () => {
  const canvasRef = useRef(null);

  const [doodlePos, setDoodlePos] = useState({ x: 160, y: 600 });
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(-6.75);

  const [allPlateform, setAllPlateform] = useState([]);
  const [direction, setDirection] = useState("down");
  const [hDirection, setHDirection] = useState("doodler-right.png");
  const [currentH, setCurrentH] = useState(630 - 70);
  const [currentId, setCurrentId] = useState(0);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start === true) {
      let ctx = canvasRef.current.getContext("2d");
      if (doodlePos.y > 620) {
        ctx.clearRect(0, 0, 350, 650);
      }
      ctx.clearRect(0, 0, 350, 650);
      let img = new Image();
      img.setAttribute("src", "./assets/doodle/doodlejumpbg.png");

      img.onload = function () {
        ctx.drawImage(img, 0, 0, 350, 650);
      };
      let img2 = new Image();
      img2.setAttribute("src", "./assets/doodle/" + hDirection);

      img2.onload = function () {
        ctx.drawImage(img2, doodlePos.x, doodlePos.y, 30, 30);
      };
      /* const test = () => {
        let img2 = new Image();
        img2.setAttribute("src", "./assets/doodle/" + hDirection);
  
        ctx.drawImage(img2, doodlePos.x, doodlePos.y, 30, 30);
        // setDoodlePos({ ...doodlePos, y: doodlePos.y });
        if (doodlePos.y > 620) {
          //console.log("game over");
        }
  
        //go up
        // if doodle touch plateform
  
        if (doodlePos.y + 30 >= 615) {
          if (doodlePos.x > 130 && doodlePos.x < 190) {
            setDy(-7);
            setDirection("up");
          } else {
            console.log("game over");
          }
        }
  
        if (doodlePos.y + 30 < 630 || doodlePos.y + 30 > 630 - 70) {
          if (direction === "down") {
            setDy(dy + 0.4);
          }
          if (direction === "up") {
            if (dy === 0.4) {
              setDy(-7);
            } else {
              setDy(-Math.abs(dy + 0.2));
            }
          }
        }
  
        // go down
        if (doodlePos.y + 30 <= 630 - 70) {
          setDy(1);
          setDirection("down");
        }
        setDoodlePos({ x: doodlePos.x + dx, y: doodlePos.y + dy });
      };
      console.log(doodlePos.x); */
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
    //setAllPlateform([...allPlateform, { x: 155, y: 630, w: 40, h: 10 }]);
    if (start === true) {
      let array = [];

      let max = Math.floor(Math.random() * 100);
      for (let i = 0; i < 10; i++) {
        if (i === 0) {
          let min = Math.floor(Math.random() * 100);
          array.push({ x: 155, y: 630, w: 40, h: 10 });
        } else {
          let min = Math.floor(Math.random() * 160);
          let test = Math.floor(Math.random() * 2);
          if (test === 0) {
            array.push({ x: 155 + min, y: 630 - i * 70, w: 40, h: 10 });
          } else {
            array.push({ x: 155 - min, y: 630 - i * 70, w: 40, h: 10 });
          }
        }
      }
      setAllPlateform([array]);
    }
  }, [start]);
  console.log(dy);
  useEffect(() => {
    let timerId;

    const animate = () => {
      /* let img2 = new Image();
        img2.setAttribute("src", "./assets/doodle/" + hDirection);
  
        ctx.drawImage(img2, doodlePos.x, doodlePos.y, 30, 30); */
      // setDoodlePos({ ...doodlePos, y: doodlePos.y });
      if (doodlePos.y > 620) {
        //console.log("game over");

        setDoodlePos({ x: 160, y: 500 });
        setDx(0);
        setDirection("down");
        setDy(0);
        setHDirection("doodler-right.png");
        setCurrentH(630 - 70);
        setCurrentId(0);
        setScore(0);
        setStart(false);
      }

      //go up
      // if doodle touch plateform

      //if (doodlePos.y + 30 >= 615) {

      if (allPlateform.length === 1 && allPlateform[0].length > 0) {
        for (let i = 0; i < allPlateform[0].length; i++) {
          if (
            doodlePos.x > allPlateform[0][i].x - 25 &&
            doodlePos.x < allPlateform[0][i].x + 25 &&
            doodlePos.y + 40 >= allPlateform[0][i].y &&
            doodlePos.y + 30 <= allPlateform[0][i].y &&
            direction === "down"
          ) {
            setCurrentId(i);
            //setDy(-105);
            setCurrentH(allPlateform[0][i].y - 70);
            setDy(-6.75);
            setDirection("up");
          } else {
            //setDy(-Math.abs(dy + 1));
            //setDirection("down");
            //console.log("game over");
          }
        }
      }

      /* if (doodlePos.x > 130 && doodlePos.x < 190) {
            setDy(-7);
            setDirection("up");
          } else {
            console.log("game over");
          } */
      //}

      if (doodlePos.y < 625) {
        if (doodlePos.y + 30 < 630 || doodlePos.y + 30 > 630 - 70) {
          if (direction === "down") {
            setDy(dy + 0.25);
            //setDy(1);
          }
          if (direction === "up") {
            setDy(-Math.abs(dy + 0.25));
            //setDy(-1);
            if (currentId !== 0) {
              let array = [];
              for (let i = 0; i < allPlateform[0].length; i++) {
                /* if (i !== 0) {
                  let test = {
                    x: allPlateform[0][i].x,
                    y: allPlateform[0][i].y - dy,
                    w: 40,
                    h: 10,
                  };
                  array.push(test);
                  if (allPlateform[0].length - 1 === i) {
                    let min = Math.floor(Math.random() * 160);
                    let test = Math.floor(Math.random() * 2);
                    if (test === 0) {
                      let sss = {
                        x: 155 + min,
                        y: allPlateform[0][i].y,
                        w: 40,
                        h: 10,
                      };
                      array.push(sss);
                    } else {
                      let sss = {
                        x: 155 - min,
                        y: allPlateform[0][i].y,
                        w: 40,
                        h: 10,
                      };
                      array.push(sss);
                    }
                  }
                  setAllPlateform([array]);
                  //}
                } */
                //if (i !== 0) {
                array.push({
                  x: allPlateform[0][i].x,
                  y: allPlateform[0][i].y - (dy + 0.1),
                  w: 40,
                  h: 10,
                });
                //}
              }
              //
              let min = Math.floor(Math.random() * 160);
              let test3 = Math.floor(Math.random() * 2);
              let sss;
              if (test3 === 0) {
                sss = {
                  x: 155 + min,
                  y: 0,
                  w: 40,
                  h: 10,
                };
                // array.push(sss);
              } else {
                sss = {
                  x: 155 - min,
                  y: 0,
                  w: 40,
                  h: 10,
                };
                // array.push(sss);
              }
              setAllPlateform([array]);
              //setCurrentId(0);
            }
          }
        }

        // go down
        if (doodlePos.y + 30 <= currentH - 10) {
          //setDy(2);

          //setDy(6.5);
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
      if (allPlateform[0][0].y > 630) {
        let array = [];
        for (let i = 0; i < allPlateform[0].length; i++) {
          array.push({
            x: allPlateform[0][i].x,
            y: allPlateform[0][i].y,
            w: 40,
            h: 10,
          });
        }
        array.splice(0, 1);
        array.push({
          x: 150,
          y: -70,
          w: 40,
          h: 10,
        });
        setAllPlateform([array]);
      }
    }
  }, [allPlateform]);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "ArrowLeft") {
        setHDirection("doodler-left.png");

        if (doodlePos.x < 0) {
          setDoodlePos({ ...doodlePos, x: 350 });
          setDx(-4);
        } else {
          setDx(-4);
        }
      } else if (e.key === "ArrowRight") {
        setHDirection("doodler-right.png");
        if (doodlePos.x > 350) {
          setDoodlePos({ ...doodlePos, x: 0 });
          setDx(4);
        } else {
          setDx(4);
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
            <canvas width={350} height={650} ref={canvasRef}></canvas>
          </>
        )}
        {start === false && (
          <>
            <button
              onClick={() => {
                setStart(true);
              }}
            >
              Play
            </button>
            <div className={styles.doodle__wait}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Doodle;
