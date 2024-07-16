import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./NotStart.module.scss";
import doodleContext from "../../../providers/doodle/doodleContext";

const NotStart = () => {
  const { value, setValue } = useContext(doodleContext);

  const canvasRef = useRef(null);
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");

    let img = new Image();

    img.onload = function () {
      ctx.save();
      ctx.drawImage(img, 0, 0, 350, 650);
      ctx.rotate((-10 * Math.PI) / 180);
      ctx.font = "42px test";
      ctx.textAlign = "center";
      ctx.fillStyle = "#a90001";
      ctx.fillText("doodle jump", 90, 140);
      ctx.restore();
    };

    img.setAttribute("src", "./assets/doodle/doodlejumpbg.png");
    let img2 = new Image();
    img2.setAttribute("src", "./assets/doodle/doodler-right.png");
    img2.onload = function () {
      ctx.drawImage(img2, value.doodlePos.x, value.doodlePos.y, 30, 30);
    };
    let img3 = new Image();
    img3.setAttribute("src", "./assets/doodle/platform.png");
    img3.onload = function () {
      ctx.drawImage(img3, 55, 630, 40, 10);
    };
    let img4 = new Image();
    img4.setAttribute("src", "./assets/doodle/mob1.png");
    img4.onload = function () {
      ctx.drawImage(img4, 175, 500, 35, 25);
    };
    let img5 = new Image();
    img5.setAttribute("src", "./assets/doodle/mob2.png");
    img5.onload = function () {
      ctx.drawImage(img5, 25, 470, 35, 25);
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
      ctx.drawImage(img8, 35, 50, 35, 25);
    };
    let img9 = new Image();
    img9.setAttribute("src", "./assets/doodle/play.png");
    img9.onload = function () {
      ctx.drawImage(img9, 75, 150, 130, 70);
    };
    let img10 = new Image();
    img10.setAttribute("src", "./assets/doodle/info.png");
    img10.onload = function () {
      ctx.drawImage(img10, 105, 400, 170, 80);
    };
    if (canvasRef.current) {
      const handlerClick = (event) => {
        if (
          event.offsetY >= 163 &&
          event.offsetY < 210 &&
          event.offsetX > 85 &&
          event.offsetX < 195
        ) {
          setValue((prev) => ({
            ...prev,
            doodlePos: { x: 160, y: 600 },
            dy: -1,
            start: true,
            dx: 0,
            allPlateform: [],
            direction: "up",
            hDirection: "doodler-right.png",
            currentH: 630 - 70,
            heightPlat: 630,
            currentId: 0,
            score: 0,
            diff: 0,
            test: 0,
          }));
          //canvasRef.current.removeEventListener("click", handlerClick);
        } else if (
          event.offsetY >= 420 &&
          event.offsetY < 460 &&
          event.offsetX > 125 &&
          event.offsetX < 220
        ) {
          setValue((prev) => ({ ...prev, info: true }));
        }
      };
      canvasRef.current.addEventListener("click", handlerClick);
    }
  }, [setValue, value.doodlePos.x, value.doodlePos.y]);
  useEffect(() => {
    let id;
    const animate = () => {
      if (
        value.direction === "down" &&
        value.doodlePos.y + 40 >= 630 &&
        value.doodlePos.y < 600 &&
        value.doodlePos.x > 30 &&
        value.doodlePos.x < 80
      ) {
        setValue((prev) => ({ ...prev, dy: -6.75, direction: "up" }));
      }
      if (value.doodlePos.y < 630) {
        if (value.doodlePos.y + 30 < 630 || value.doodlePos.y + 30 > 630 - 70) {
          if (value.direction === "down") {
            setValue((prev) => ({ ...prev, dy: (prev.dy += 0.2) }));
          }
          if (value.direction === "up") {
            setValue((prev) => ({ ...prev, dy: -Math.abs(prev.dy + 0.2) }));
          }
        }

        // go down
        if (value.doodlePos.y <= value.currentH - 60) {
          setValue((prev) => ({ ...prev, dy: 2, direction: "down" }));
        }
        setValue((prev) => ({
          ...prev,
          doodlePos: { x: prev.doodlePos.x, y: prev.doodlePos.y + prev.dy },
        }));
      }
    };
    id = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(id);
    };
  }, [
    value.doodlePos.x,
    value.doodlePos.y,
    value.dy,
    value.doodlePos,
    value,
    setValue,
  ]);
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

export default NotStart;
