import React, { useEffect, useRef, useContext, useState } from "react";
import flappyContext from "../../../../providers/flappy/flappyContext";
import styles from "./OnPlay.module.scss";
import themeContext from "../../../../providers/theme/themeContext";
import Contact from "../../../contact/Contact";
import Theme from "../../../theme/Theme";
import { drawElement } from "../components/draw/function";

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};

const OnPlay = () => {
  const { value, setValue } = useContext(flappyContext);
  const canvasRef = useRef(null);
  const images = useRef({});
  const { theme } = useContext(themeContext);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imageNames = [
        "sky",
        "night",
        "land",
        "getready",
        "taptap",
        "PipeUp",
        "PipeDown",
        "pause",
        "play",
        "mob1",
        "bird-1-2",
        "bird-1-3",
        "bird-1",
        "0",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];
      const loadPromises = imageNames.map((name) =>
        loadImage(`./assets/flappy/${name}.png`).then((img) => {
          images.current[name] = img;
        })
      );
      await Promise.all(loadPromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const draw = (ctx) => {
      const backgroundImage =
        theme === "light" ? images.current.sky : images.current.night;

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (backgroundImage) {
        ctx.drawImage(backgroundImage, 0, 0, 320, 400);
      }
      if (value.userTapOnScreen === false) {
        if (images.current.getready) {
          ctx.drawImage(images.current.getready, 70, 80, 180, 60);
        }
        if (images.current.taptap) {
          ctx.drawImage(images.current.taptap, 120, 200, 120, 120);
        }
      } else {
        for (let i = 0; i < value.pipe.length; i++) {
          Object.entries(value.pipe[i]).map(([key, val]) => {
            if (key === "0") {
              if (images.current.PipeUp) {
                ctx.drawImage(images.current.PipeUp, val.x, val.y, 40, 400);
              }
            } else {
              if (images.current.PipeDown) {
                ctx.drawImage(images.current.PipeDown, val.x, val.y, 40, 400);
              }
            }
          });
        }
      }
      const pause =
        value.pause === false ? images.current.pause : images.current.play;
      if (pause) {
        ctx.drawImage(pause, 265, 20, 35, 35);
      }
      if (images.current.mob1) {
        ctx.drawImage(
          images.current.mob1,
          value.posXMob,
          value.posYMob,
          40,
          40
        );
      }
      if (images.current.land) {
        ctx.drawImage(images.current.land, value.posXLand, 400, 500, 100);
      }
      if (images.current[value.birdImg]) {
        ctx.drawImage(
          images.current[value.birdImg],
          140,
          value.posYBird,
          35,
          30
        );
      }
      if (value.score > 9) {
        let start = 20;
        let strScore = value.score
          .toString()
          .split("")
          .reverse()
          .map((Number, index) => {
            if (images.current[Number]) {
              ctx.drawImage(
                images.current[Number],
                start + index * 30,
                20,
                25,
                25
              );
            }
          });
      } else {
        if (images.current[value.score]) {
          ctx.drawImage(images.current[value.score], 20, 20, 25, 25);
        }
      }
      /* if (images.current.start) {
        ctx.drawImage(images.current.start, 40, 340, 100, 40);
      }
      if (images.current.flappy) {
        ctx.drawImage(images.current.flappy, 60, 80, 200, 60);
      }
      if (images.current.rules) {
        ctx.drawImage(images.current.rules, 180, 340, 100, 40);
      } */
    };
    if (imagesLoaded) {
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.height = 500;
      canvasRef.current.width = 320;
      draw(ctx);
    }
  }, [
    imagesLoaded,
    theme,
    value.birdImg,
    value.pause,
    value.pipe,
    value.posXLand,
    value.posXMob,
    value.posYBird,
    value.posYMob,
    value.score,
    value.userTapOnScreen,
  ]);

  useEffect(() => {
    const drawImage = async () => {
      await drawElement(
        ctx,
        theme === "light" ? "sky" : "night",
        0,
        0,
        320,
        400
      );
      if (value.userTapOnScreen === false) {
        await drawElement(ctx, "getready", 70, 80, 180, 60);
        await drawElement(ctx, "taptap", 120, 200, 120, 120);
      } else {
        for (let i = 0; i < value.pipe.length; i++) {
          await Promise.all(
            Object.keys(value.pipe[i]).map(async (key) => {
              if (key === "0") {
                await drawElement(
                  ctx,
                  "PipeUp",
                  value.pipe[i][key].x,
                  value.pipe[i][key].y,
                  40,
                  400
                );
              } else {
                await drawElement(
                  ctx,
                  "PipeDown",
                  value.pipe[i][key].x,
                  value.pipe[i][key].y,
                  40,
                  400
                );
              }
            })
          );
        }
      }
      await drawElement(
        ctx,
        value.pause === false ? "pause" : "play",
        265,
        20,
        35,
        35
      );
      await drawElement(ctx, "mob1", value.posXMob, value.posYMob, 40, 40);
      await drawElement(ctx, "land", value.posXLand, 400, 500, 100);
      //if (value.rotate === 0) {
      await drawElement(
        ctx,
        value.birdImg,
        value.posXBird,
        value.posYBird,
        35,
        30
      );
      /* } else {
        ctx.save();
        ctx.translate(value.posXBird + 17.5, value.posYBird + 15);
        ctx.rotate((value.rotate * Math.PI) / 180);
        ctx.translate(-(value.posXBird + 17.5), -(value.posYBird + 15));
        await drawElement(
          ctx,
          value.birdImg,
          value.posXBird,
          value.posYBird,
          35,
          30
        );
        ctx.restore();
      } */
      if (value.score > 9) {
        let start = 20;
        let strScore = value.score
          .toString()
          .split("")
          .reverse()
          .map(async (Number, index) => {
            await drawElement(ctx, Number, start + index * 30, 20, 25, 25);
          });
      } else {
        await drawElement(ctx, value.score, 20, 20, 25, 25);
      }
    };
    let ctx;
    /* const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.height = 500;
    canvasRef.current.width = 320;
    ctx.clearRect(0, 0, 320, 500); */

    //drawImage();

    if (canvasRef.current) {
      const handlerClick = (event) => {
        if (
          event.offsetY > 0 &&
          event.offsetY < 500 &&
          event.offsetX > 0 &&
          event.offsetX < 400
        ) {
          setValue((prev) => ({
            ...prev,
            userTapOnScreen: true,
          }));
        }
        if (
          event.offsetY >= 20 &&
          event.offsetY < 55 &&
          event.offsetX > 265 &&
          event.offsetX < 300 &&
          value.userTapOnScreen === true
        ) {
          setValue((prev) => ({
            ...prev,
            pause: true,
          }));
        }
      };
      canvasRef.current.addEventListener("click", handlerClick);
    }
  }, [
    value.posYBird,
    value.posXBird,
    theme,
    value.birdImg,
    value.userTapOnScreen,
    value.pause,
    value.posXMob,
    value.posYMob,
    value.posXLand,
    value.score,
    value.pipe,
    setValue,
  ]);
  useEffect(() => {
    let id;
    const animate = () => {
      // pipe movement
      /* for (let i = 0; i < value.pipe.length; i++) {
        Object.entries(value.pipe[i]).map(([key, val]) => {
          if (val.type === "up") {
            if (val.x < -37) {
              if (value.score % 3 === 0) {
                console.log("test");
                setValue((prev) => ({
                  ...prev,
                  posXMob
              }
            }
          }
        });
      } */
      if (
        value.userTapOnScreen === true &&
        value.animateBeforeGameOver === false
      ) {
        let newArray = [];
        for (let i = 0; i < value.pipe.length; i++) {
          newArray.push(...value.pipe[i].map((value) => value.x));
        }
        setValue((prev) => ({
          ...prev,
          maxXPipe: Math.max(...newArray),
        }));
        for (let i = 0; i < value.pipe.length; i++) {
          let random = Math.floor(Math.random() * 2);
          let random2 = Math.floor(Math.random() * 100);

          setValue((prev) => ({
            ...prev,
            posXMob:
              prev.pipe[2][0].x - 1 > -40
                ? prev.posXMob - 1
                : prev.maxXPipe + 150,
            posYMob:
              prev.pipe[2][0].x - 1 > -40
                ? prev.posYMob
                : random === 0
                ? 100 + random2
                : 100 - random2,
            pipe: [
              [
                {
                  x:
                    prev.pipe[0][0].x - 1 > -40
                      ? prev.pipe[0][0].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[0][0].x - 1 > -40
                      ? prev.pipe[0][0].y
                      : random === 0
                      ? 275 + random2
                      : 275 - random2,
                  type: "up",
                },
                {
                  x:
                    prev.pipe[0][1].x - 1 > -40
                      ? prev.pipe[0][1].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[0][1].x - 1 > -40
                      ? prev.pipe[0][1].y
                      : random === 0
                      ? -275 + random2
                      : -275 - random2,
                  type: "down",
                },
              ],
              [
                {
                  x:
                    prev.pipe[1][0].x - 1 > -40
                      ? prev.pipe[1][0].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[1][0].x - 1 > -40
                      ? prev.pipe[1][0].y
                      : random === 0
                      ? 275 + random2
                      : 275 - random2,
                  type: "up",
                },
                {
                  x:
                    prev.pipe[1][1].x - 1 > -40
                      ? prev.pipe[1][1].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[1][1].x - 1 > -40
                      ? prev.pipe[1][1].y
                      : random === 0
                      ? -275 + random2
                      : -275 - random2,
                  type: "down",
                },
              ],
              [
                {
                  x:
                    prev.pipe[2][0].x - 1 > -40
                      ? prev.pipe[2][0].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[2][0].x - 1 > -40
                      ? prev.pipe[2][0].y
                      : random === 0
                      ? 275 + random2
                      : 275 - random2,
                  type: "up",
                },
                {
                  x:
                    prev.pipe[2][1].x - 1 > -40
                      ? prev.pipe[2][1].x - 1
                      : prev.score % 3 === 0
                      ? prev.maxXPipe + 300
                      : prev.maxXPipe + 200,
                  y:
                    prev.pipe[2][1].x - 1 > -40
                      ? prev.pipe[2][1].y
                      : random === 0
                      ? -275 + random2
                      : -275 - random2,
                  type: "down",
                },
              ],
            ],
          }));
        }
      }

      if (value.animateBeforeGameOver === false) {
        // land movement
        if (value.posXLand === -100) {
          setValue((prev) => ({
            ...prev,
            posXLand: 0,
          }));
        } else {
          setValue((prev) => ({
            ...prev,
            posXLand: prev.posXLand - 2,
          }));
        }
        // bird movement
        if (value.birdFlyRatio === 0) {
          setValue((prev) => ({
            ...prev,
            birdImg: "bird-1",
          }));
        } else if (value.birdFlyRatio === 5) {
          setValue((prev) => ({
            ...prev,
            birdImg: "bird-1-2",
          }));
        } else if (value.birdFlyRatio === 10) {
          setValue((prev) => ({
            ...prev,
            birdImg: "bird-1-3",
          }));
        }
        if (value.birdFlyRatio > 15) {
          setValue((prev) => ({
            ...prev,
            birdImg: "bird-1",
            birdFlyRatio: 0,
          }));
        } else {
          setValue((prev) => ({
            ...prev,
            birdFlyRatio: prev.birdFlyRatio + 1,
          }));
        }
      }

      if (
        value.start === true &&
        value.userTapOnScreen === true &&
        value.gameOver === false &&
        value.animateBeforeGameOver === false
      ) {
        // game over
        // bird movement
        /* setValue((prev) => ({
          ...prev,
          //dyBird: 1,
          dyBird: prev.dyBird + 0.4,
          //rotate: prev.rotate === 90 ? 90 : prev.rotate + 3,
          posYBird: prev.posYBird + prev.dyBird,
        })); */
        if (value.posYBird > 370) {
          setValue((prev) => ({
            ...prev,
            gameOver: true,
            posYBird: 370,
          }));
        } else {
          // bird movement
          setValue((prev) => ({
            ...prev,
            //dyBird: 1,
            dyBird: prev.dyBird + 0.4,
            rotate: prev.rotate === 90 ? 90 : prev.rotate + 3,
            posYBird: prev.posYBird + prev.dyBird,
          }));
        }
      }
      // change current pipe
      for (let i = 0; i < value.pipe.length; i++) {
        if (value.pipe[value.currentPipe][0].x < 115) {
          if (value.pipe[i][0].type === "up") {
            setValue((prev) => ({
              ...prev,
              score: prev.score + 1,
              currentPipe: prev.currentPipe === 2 ? 0 : prev.currentPipe + 1,
            }));
          }
        }
        break;
      }
      // collision with pipe
      if (value.posYBird + 40 > value.pipe[value.currentPipe][0].y) {
        if (value.pipe[value.currentPipe][0].x < 155) {
          if (value.pipe[value.currentPipe][0].type === "up") {
            setValue((prev) => ({
              ...prev,
              animateBeforeGameOver: true,
              //gameOver: true,
            }));
          }
        }
      }
      if (value.posYBird < value.pipe[value.currentPipe][1].y + 400) {
        if (value.pipe[value.currentPipe][1].x < 155) {
          if (value.pipe[value.currentPipe][1].type === "down") {
            setValue((prev) => ({
              ...prev,
              animateBeforeGameOver: true,
              //gameOver: true,
            }));
          }
        }
      }
      if (
        value.posYBird >
        (window.innerHeight - 500) / 2 + 100
        // window.innerHeight / 2 - 250 + value.pipe[value.currentPipe][0].y
      ) {
        /* console.log(
          "value.pipe[value.currentPipe][0].x",
          value.pipe[value.currentPipe][0].x
        );
        console.log("window.innerWidth / 2 - 160", window.innerWidth / 2 - 160); */
        /*  if (
          value.pipe[value.currentPipe][0].x <
          window.innerWidth / 2 - 160 + 175
        ) { */
        if (value.pipe[value.currentPipe][0].type === "up") {
          /*  setValue((prev) => ({
            ...prev,
            animateBeforeGameOver: true,
            //gameOver: true,
          })); */
        }
        // }
      }
      /* if (value.posYBird < value.pipe[value.currentPipe][1].y + 400) {
        if (value.pipe[value.currentPipe][1].x < 175) {
          if (value.pipe[value.currentPipe][1].type === "down") {
            setValue((prev) => ({
              ...prev,
              animateBeforeGameOver: true,
              //gameOver: true,
            }));
          }
        }
      } */

      // collision with mob
      if (
        value.posYBird > value.posYMob &&
        value.posYBird < value.posYMob + 40
      ) {
        if (
          value.posXBird > value.posXMob &&
          value.posXBird < value.posXMob + 40
        ) {
          const random = Math.floor(Math.random() * 2);
          setValue((prev) => ({
            ...prev,
            pause: true,
            posYMob: 100,
            posXMob: -100,
            page: random === 0 ? "about" : "projects",
          }));

          /*setValue((prev) => ({
            ...prev,
            pause: true,
            posYMob: 100,
            posXMob: -100,
            page:
              prev.page === "rules"
                ? "about"
                : prev.page === "about"
                ? "projects"
                : "rules",
          })); */
        }
        /* if (value.posXMob < 175) {
          setValue((prev) => ({
            ...prev,
            animateBeforeGameOver: true,
            //gameOver: true,
          }));
        } */
      }
      if (value.animateBeforeGameOver === true) {
        if (value.posYBird < 360) {
          setValue((prev) => ({
            ...prev,
            dyBird: prev.dyBird + 1,
            posYBird: prev.posYBird + prev.dyBird,
            rotate: 90,
          }));
        } else {
          setValue((prev) => ({
            ...prev,
            gameOver: true,
            dyBird: 0,
          }));
        }
      }
    };
    //if (value.pause === false) {
    id = window.requestAnimationFrame(animate);
    /* } else {
      window.cancelAnimationFrame(id);
    } */

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [
    value.posYBird,
    value.posXLand,
    value.userTapOnScreen,
    value.animateBeforeGameOver,
    value.start,
    value.gameOver,
    value.pipe,
    value.currentPipe,
    value.posYMob,
    value.birdFlyRatio,
    value.posXBird,
    value.posXMob,
    setValue,
  ]);
  useEffect(() => {
    const event = (event) => {
      if (event.key === " ") {
        if (
          value.gameOver === false &&
          value.animateBeforeGameOver === false &&
          value.start === true &&
          value.userTapOnScreen === true
        ) {
          setValue((prev) => ({
            ...prev,
            //posYBird: prev.posYBird - 100,
            dyBird: -6,
            rotate: -30,
            //dyBird: -10,
          }));
        }
      }
    };
    document.addEventListener("keydown", event);
    return () => {
      document.removeEventListener("keydown", event);
    };
  }, [
    setValue,
    value.animateBeforeGameOver,
    value.gameOver,
    value.start,
    value.userTapOnScreen,
  ]);
  return (
    <>
      <canvas className={styles.onPlay__canvas} ref={canvasRef}></canvas>
    </>
  );
};

export default OnPlay;
