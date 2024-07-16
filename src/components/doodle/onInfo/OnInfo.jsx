import React, { useContext, useEffect, useRef } from "react";
import styles from "./OnInfo.module.scss";
import doodleContext from "../../../providers/doodle/doodleContext";

const OnInfo = () => {
  const canvasRef = useRef(null);
  const { value, setValue } = useContext(doodleContext);
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
      ctx.fillText("info", 40, 100);
      ctx.restore();

      ctx.font = "22px test";
      ctx.textAlign = "left";
      ctx.fillStyle = "#000000";
      ctx.fillText("Touche : ", 30, 140);
      ctx.fillText("Sur ordinateur : <- ->", 30, 160);
      ctx.fillText(`Sur mobile :`, 30, 180);
      ctx.fillText(`orientation de l'appareil`, 30, 200);

      ctx.fillText("Principe du jeu :", 30, 260);
      ctx.fillText("obtenez les objets pour", 30, 280);
      ctx.fillText("accèder au autres pages", 30, 300);

      ctx.fillText("about page (/about)", 30, 325);

      ctx.fillText("project page (/projects)", 30, 345);

      ctx.fillText("Le but du jeu :", 30, 400);
      ctx.fillText("est d'aller le plus haut", 30, 420);
      ctx.fillText("avec le doodle", 30, 440);
      ctx.fillText("mais également d'obtenir", 30, 460);
      ctx.fillText("les objets pour aller", 30, 480);
      ctx.fillText("sur les autres page", 30, 500);
    };

    img.setAttribute("src", "./assets/doodle/doodlejumpbg.png");

    let user = new Image();
    user.setAttribute("src", "./assets/doodle/user.png");
    user.onload = function () {
      ctx.drawImage(user, 5, 307, 20, 20);
    };
    let project = new Image();
    project.setAttribute("src", "./assets/doodle/project.png");
    project.onload = function () {
      ctx.drawImage(project, 5, 327, 20, 20);
    };
    let back = new Image();
    back.setAttribute("src", "./assets/doodle/back.png");
    back.onload = function () {
      ctx.drawImage(back, 15, 537, 140, 70);
    };
    let img4 = new Image();
    img4.setAttribute("src", "./assets/doodle/mob1.png");
    img4.onload = function () {
      ctx.drawImage(img4, 175, 520, 35, 25);
    };
    let img6 = new Image();
    img6.setAttribute("src", "./assets/doodle/mob3.png");
    img6.onload = function () {
      ctx.drawImage(img6, 75, 355, 35, 25);
    };
    let img7 = new Image();
    img7.setAttribute("src", "./assets/doodle/mob4.png");
    img7.onload = function () {
      ctx.drawImage(img7, 170, 220, 35, 25);
    };
    let img8 = new Image();
    img8.setAttribute("src", "./assets/doodle/mob5.png");
    img8.onload = function () {
      ctx.drawImage(img8, 135, 50, 35, 25);
    };
    if (canvasRef.current) {
      canvasRef.current.addEventListener("click", (event) => {
        if (
          event.offsetY > 550 &&
          event.offsetY < 593 &&
          event.offsetX > 25 &&
          event.offsetX < 150
        ) {
          setValue((prev) => ({ ...prev, info: false }));
        }
      });
    }
  }, []);
  return (
    <>
      <canvas
        className={styles.canvas}
        width={250}
        id="canvas"
        height={650}
        ref={canvasRef}
      ></canvas>
      -touche pour jouer -regle / principe - but du jeu
    </>
  );
};

export default OnInfo;
