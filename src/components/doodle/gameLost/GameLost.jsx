import React, { useRef, useEffect, useState, useContext } from "react";
import styles from "./gameLost.module.scss";
import doodleContext from "../../../providers/doodle/doodleContext";

const GameLost = () => {
  const { value, setValue } = useContext(doodleContext);

  const canvasRef = useRef(null);
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    let img = new Image();

    img.onload = function () {
      ctx.save();
      ctx.drawImage(img, 0, 0, 250, 650);
      ctx.rotate((-10 * Math.PI) / 180);
      ctx.font = "42px test";
      ctx.textAlign = "center";
      ctx.fillStyle = "#a90001";
      ctx.fillText("game over!", 90, 140);

      ctx.restore();
      ctx.font = "22px test";
      ctx.textAlign = "center";
      ctx.fillStyle = "#000000";
      ctx.fillText(value.score, 10, 35);
      ctx.fillText("your score : " + value.score, 90, 180);
    };

    img.setAttribute("src", "./assets/doodle/doodlejumpbg4.png");

    let img4 = new Image();
    img4.setAttribute("src", "./assets/doodle/mob1.png");
    img4.onload = function () {
      ctx.drawImage(img4, 175, 400, 35, 25);
    };
    let img5 = new Image();
    img5.setAttribute("src", "./assets/doodle/mob2.png");
    img5.onload = function () {
      ctx.drawImage(img5, 25, 550, 35, 25);
    };
    let img6 = new Image();
    img6.setAttribute("src", "./assets/doodle/mob3.png");
    img6.onload = function () {
      ctx.drawImage(img6, 75, 320, 35, 25);
    };
    let img7 = new Image();
    img7.setAttribute("src", "./assets/doodle/mob4.png");
    img7.onload = function () {
      ctx.drawImage(img7, 160, 230, 35, 25);
    };
    let img8 = new Image();
    img8.setAttribute("src", "./assets/doodle/mob5.png");
    img8.onload = function () {
      ctx.drawImage(img8, 35, 70, 35, 25);
    };
    let img9 = new Image();
    img9.setAttribute("src", "./assets/doodle/playagain.png");
    img9.onload = function () {
      ctx.drawImage(img9, 25, 470, 120, 60);
    };
    let img10 = new Image();
    img10.setAttribute("src", "./assets/doodle/menu.png");
    img10.onload = function () {
      ctx.drawImage(img10, 125, 550, 100, 50);
    };
    if (canvasRef.current) {
      canvasRef.current.addEventListener("click", (event) => {
        if (
          event.offsetY > 550 &&
          event.offsetY < 600 &&
          event.offsetX > 125 &&
          event.offsetX < 225
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
          event.offsetY > 480 &&
          event.offsetY < 520 &&
          event.offsetX > 35 &&
          event.offsetX < 140
        ) {
          setValue((prev) => ({
            ...prev,
            doodlePos: { x: 160, y: 600 },
            dy: -1,
            start: true,
            dx: 0,
            allPlateform: [],
            direction: "down",
            hDirection: "doodler-right.png",
            currentH: 630 - 70,
            heightPlat: 630,
            currentId: 0,
            score: 0,
            diff: 0,
            test: 0,
            lost: false,
          }));
        }
      });
    }
  }, [value.doodlePos.x, value.doodlePos.y]);

  return (
    <>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        id="canvas"
        width={250}
        height={650}
      ></canvas>
    </>
  );
};

export default GameLost;
