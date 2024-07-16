import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./OnGameOver.module.scss";
import flappyContext from "../../../../providers/flappy/flappyContext";
import themeContext from "../../../../providers/theme/themeContext";
import deviceContext from "../../../../providers/device/deviceContext";
import useBackgroundMove from "../components/animate/hook/useBackgroundMove";
import { clickOnRestartDesktop } from "../components/click/desktop/function";
import { clickOnRestartMobile } from "../components/click/mobile/function";
import { drawElement } from "../components/draw/function";

const OnGameOver = () => {
  const { theme } = useContext(themeContext);
  const { value, setValue } = useContext(flappyContext);
  const canvasRef = useRef(null);
  const { device } = useContext(deviceContext);
  const [bestScore, setBestScore] = useState(0);
  /* useEffect(() => {
    const best = JSON.parse(localStorage.getItem("bestScore"));
    if (best === null) {
      localStorage.setItem("bestScore", JSON.stringify(value.score));
      setBestScore(value.score);
    } else {
      if (value.score > best) {
        localStorage.setItem("bestScore", JSON.stringify(value.score));
        setBestScore(value.score);
      } else {
        setBestScore(best);
      }
    }
  }, [value.score]); */
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
      await drawElement(ctx, "gameover", 60, 80, 200, 60);

      await drawElement(ctx, "land", value.posXLand, 400, 500, 100);
      await drawElement(ctx, "ok", 60, 430, 90, 40);
      await drawElement(ctx, "scoreboard", 20, 170, 280, 140);
      if (value.score > 9) {
        let start = 250;
        let strScore = value.score
          .toString()
          .split("")
          .reverse()
          .map(async (Number, index) => {
            await drawElement(ctx, Number, start - index * 30, 210, 25, 25);
          });
      } else {
        await drawElement(ctx, value.score, 250, 210, 25, 25);
      }
      if (bestScore > 9) {
        let start = 250;
        let strScore = bestScore
          .toString()
          .split("")
          .reverse()
          .map(async (Number, index) => {
            await drawElement(ctx, Number, start - index * 30, 260, 25, 25);
          });
      } else {
        await drawElement(ctx, bestScore, 250, 260, 25, 25);
      }
      if (value.rotate === 0) {
        await drawElement(
          ctx,
          value.birdImg,
          value.posXBird,
          value.posYBird,
          35,
          30
        );
      } else {
        ctx.save();
        ctx.translate(value.posXBird + 17.5, value.posYBird + 15);
        ctx.rotate((90 * Math.PI) / 180);
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
      }
    };
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.height = 500;
    if (device.device === "mobile") {
      canvasRef.current.width = 320;
      ctx.clearRect(0, 0, 320, 500);
    } else {
      canvasRef.current.width = 320;
      ctx.clearRect(0, 0, 320, 500);
    }
    drawImage();
    if (canvasRef.current) {
      const handlerClick = (event) => {
        if (device.device === "desktop") {
          clickOnRestartDesktop(event, setValue);
        } else {
          clickOnRestartMobile(event, setValue);
        }
      };
      canvasRef.current.addEventListener("click", handlerClick);
    }
  }, [
    bestScore,
    device.device,
    setValue,
    theme,
    value.birdImg,
    value.pipe,
    value.posXBackground,
    value.posXBird,
    value.posXLand,
    value.posYBird,
    value.rotate,
    value.score,
  ]);
  useBackgroundMove();

  return (
    <>
      <canvas className={styles.onGameOver__canvas} ref={canvasRef}></canvas>
    </>
  );
};

export default OnGameOver;
