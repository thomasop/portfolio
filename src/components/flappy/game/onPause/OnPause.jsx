import React, { useContext, useEffect, useRef } from "react";
import styles from "./OnPause.module.scss";
import flappyContext from "../../../../providers/flappy/flappyContext";
import themeContext from "../../../../providers/theme/themeContext";
import deviceContext from "../../../../providers/device/deviceContext";
import { clickOnPauseMobile } from "../components/click/mobile/function";
import { clickOnPauseDesktop } from "../components/click/desktop/function";
import { drawElement } from "../components/draw/function";

const OnPause = () => {
  const { value, setValue } = useContext(flappyContext);
  const canvasRef = useRef(null);
  const { theme } = useContext(themeContext);
  const { device } = useContext(deviceContext);
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
      await drawElement(ctx, "land", value.posXLand, 400, 500, 100);
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
      }
      await drawElement(
        ctx,
        value.pause === false ? "pause" : "play",
        265,
        20,
        35,
        35
      );
      if (value.score > 9) {
        let start = 0;
        let strScore = value.score
          .toString()
          .split("")
          .map((Number, index) => async () => {
            await drawElement(ctx, Number, start + index * 20, 20, 25, 25);
          });
      } else {
        await drawElement(ctx, value.score, 20, 20, 25, 25);
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
          clickOnPauseDesktop(event, setValue);
        } else {
          clickOnPauseMobile(event, setValue);
        }
      };
      canvasRef.current.addEventListener("click", handlerClick);
    }
  }, [
    device.device,
    setValue,
    theme,
    value.birdImg,
    value.pause,
    value.pipe,
    value.posXBird,
    value.posXLand,
    value.posYBird,
    value.rotate,
    value.score,
    value.animateBeforeGameOver,
    value.maxXPipe,
    value.userTapOnScreen,
    value.currentPipe,
  ]);
  return (
    <>
      <canvas className={styles.onPause__canvas} ref={canvasRef}></canvas>
    </>
  );
};

export default OnPause;
