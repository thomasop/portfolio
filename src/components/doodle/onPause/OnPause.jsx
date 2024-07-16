import React, { useRef, useEffect, useContext } from "react";
import styles from "./OnPause.module.scss";
import doodleContext from "../../../providers/doodle/doodleContext";

const OnPause = () => {
  const canvasRef = useRef(null);
  const { value, setValue } = useContext(doodleContext);
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    //ctx.clearRect(0, 0, 250, 650);
    /* ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 50);
    ctx.globalCompositeOperation = "destination-over"; */

    let img = new Image();

    img.onload = function () {
      ctx.save();
      ctx.drawImage(img, 0, 0, 250, 650);
      ctx.translate(0, 0);
      ctx.rotate((-10 * Math.PI) / 180);

      ctx.font = "22px test";
      ctx.fillText(value.score, 10, 35);

      ctx.font = "42px test";
      ctx.textAlign = "center";
      ctx.fillStyle = "#a90001";
      ctx.font = "42px test";

      ctx.fillText("doodle jump", 50, 305);

      ctx.font = "42px test";
      ctx.fillStyle = "#000000";
      ctx.fillText("paused", 50, 335);
      ctx.translate(20, 0);
      ctx.restore();
    };

    img.setAttribute("src", "./assets/doodle/doodlejumpbg4.png");
    if (value.allPlateform.length === 1 && value.allPlateform[0].length > 0) {
      for (let i = 0; i < value.allPlateform[0].length; i++) {
        let plateform = new Image();
        plateform.setAttribute("src", "./assets/doodle/platform.png");
        plateform.onload = function () {
          ctx.globalAlpha = 0.3;
          ctx.drawImage(
            plateform,
            value.allPlateform[0][i].x,
            value.allPlateform[0][i].y,
            value.allPlateform[0][i].w,
            value.allPlateform[0][i].h
          );
          ctx.rotate(0);
          ctx.globalAlpha = 1;
        };
      }
    }
    let img2 = new Image();
    img2.setAttribute("src", "./assets/doodle/" + value.hDirection);

    img2.onload = function () {
      ctx.globalAlpha = 0.2;
      ctx.drawImage(img2, value.doodlePos.x, value.doodlePos.y, 30, 30);
      ctx.globalAlpha = 1;
    };
    let img3 = new Image();
    img3.setAttribute("src", "./assets/doodle/pause.png");

    img3.onload = function () {
      ctx.globalAlpha = 1;
      ctx.drawImage(img3, 120, 550, 120, 50);
    };
    let img10 = new Image();
    img10.setAttribute("src", "./assets/doodle/menu.png");
    img10.onload = function () {
      ctx.globalAlpha = 1;
      ctx.drawImage(img10, 80, 500, 100, 50);
    };
    let img11 = new Image();
    img11.setAttribute("src", "./assets/doodle/info.png");
    img11.onload = function () {
      ctx.globalAlpha = 1;
      ctx.drawImage(img11, 10, 430, 145, 85);
    };
    if (canvasRef.current) {
      canvasRef.current.addEventListener("click", (event) => {
        if (
          event.offsetY > 550 &&
          event.offsetY < 600 &&
          event.offsetX > 120 &&
          event.offsetX < 220
        ) {
          setValue((prev) => ({
            ...prev,
            pause: false,
          }));
        } else if (
          event.offsetY > 505 &&
          event.offsetY < 545 &&
          event.offsetX > 90 &&
          event.offsetX < 175
        ) {
          setValue((prev) => ({
            ...prev,
            doodlePos: { x: 60, y: 600 },
            dx: 0,
            dy: -6.25,
            allPlateform: [],
            direction: "down",
            hDirection: "doodler-right.png",
            currentH: 630 - 70,
            heightPlat: 630,
            currentId: 0,
            score: 0,
            diff: 0,
            start: false,
            pause: false,
            info: false,
            test: 0,
            lost: false,
          }));
        } else if (
          event.offsetY > 450 &&
          event.offsetY < 495 &&
          event.offsetX > 25 &&
          event.offsetX < 105
        ) {
          setValue((prev) => ({
            ...prev,
            info: true,
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
      <canvas
        className={styles.canvas}
        width={250}
        height={650}
        ref={canvasRef}
      ></canvas>
    </>
  );
};

export default OnPause;
