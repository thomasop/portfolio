import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "./IsStarted.module.scss";
import doodleContext from "../../../providers/doodle/doodleContext";
import HorizontalDirection from "./components/HorizontalDirection";
import AddAndRemovePlat from "./components/AddAndRemovePlat";
import CreateInitialPlat from "./components/CreateInitialPlat";
import AnimateDoodle from "./components/AnimateDoodle";

const IsStarted = ({ setPause }) => {
  const { value, setValue } = useContext(doodleContext);
  const canvasRef = useRef(null);
  //console.log(value);
  /* const [doodlePos, setDoodlePos] = useState({ x: 160, y: 600 });
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(-6.25);

  const [allPlateform, setAllPlateform] = useState([]);
  const [direction, setDirection] = useState("down");
  const [hDirection, setHDirection] = useState("doodler-right.png");
  const [currentH, setCurrentH] = useState(630 - 70);
  const [heightPlat, setHeightPlat] = useState(630);
  const [currentId, setCurrentId] = useState(0);
  const [score, setScore] = useState(0);
  const [diff, setDiff] = useState(0);
  const [test, setTest] = useState(0); 
  const [allPlateform, setAllPlateform] = useState([]);*/
  //console.log(allPlateform);

  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    //ctx.clearRect(0, 0, 250, 650);
    /* ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 50);
    ctx.globalCompositeOperation = "destination-over"; */
    let img = new Image();

    img.onload = function () {
      ctx.drawImage(img, 0, 0, 250, 650);
      ctx.font = "22px test";
      ctx.fillText(value.score, 10, 35);
    };
    img.setAttribute("src", "./assets/doodle/doodlejumpbg4.png");

    if (value.allPlateform.length === 1 && value.allPlateform[0].length > 0) {
      for (let i = 0; i < value.allPlateform[0].length; i++) {
        if (value.allPlateform[0][i].type === "plat") {
          let plateform = new Image();
          plateform.setAttribute("src", "./assets/doodle/platform.png");
          /* if (value.allPlateform[0][i].y < 50) {
            plateform.onload = function () {
              ctx.globalAlpha = 0;
              ctx.drawImage(
                plateform,
                value.allPlateform[0][i].x,
                value.allPlateform[0][i].y,
                value.allPlateform[0][i].w,
                value.allPlateform[0][i].h
              );
              ctx.globalAlpha = 1;
            };
          } else { */
          plateform.onload = function () {
            ctx.drawImage(
              plateform,
              value.allPlateform[0][i].x,
              value.allPlateform[0][i].y,
              value.allPlateform[0][i].w,
              value.allPlateform[0][i].h
            );
          };
          //}
        } else if (value.allPlateform[0][i].type === "linkAbout") {
          let plateform = new Image();
          plateform.setAttribute("src", "./assets/doodle/platformUser2.png");
          plateform.onload = function () {
            ctx.drawImage(
              plateform,
              value.allPlateform[0][i].x,
              value.allPlateform[0][i].y,
              55,
              55
            );
          };
        } else if (value.allPlateform[0][i].type === "linkProject") {
          let plateform = new Image();
          plateform.setAttribute("src", "./assets/doodle/platformUser.png");
          plateform.onload = function () {
            ctx.drawImage(
              plateform,
              value.allPlateform[0][i].x,
              value.allPlateform[0][i].y,
              60,
              25
            );
          };
        }
      }
    }
    let img2 = new Image();
    img2.setAttribute("src", "./assets/doodle/" + value.hDirection);

    img2.onload = function () {
      ctx.drawImage(img2, value.doodlePos.x, value.doodlePos.y, 30, 30);
    };
    if (canvasRef.current) {
      canvasRef.current.addEventListener("click", (event) => {
        if (
          event.offsetY > 20 &&
          event.offsetY < 50 &&
          event.offsetX > 225 &&
          event.offsetX < 240
        ) {
          setValue((prev) => ({
            ...prev,
            pause: true,
          }));
        }
      });
    }

    //ctx.globalCompositeOperation = "destination-over";
  }, [
    value.doodlePos,
    value.allPlateform,
    value.hDirection,
    value.score,
    setValue,
  ]);

  return (
    <>
      <HorizontalDirection />
      <AddAndRemovePlat />
      <CreateInitialPlat />
      <AnimateDoodle />
      <canvas
        className={styles.canvas}
        width={250}
        height={650}
        ref={canvasRef}
      ></canvas>
    </>
  );
};

export default IsStarted;
