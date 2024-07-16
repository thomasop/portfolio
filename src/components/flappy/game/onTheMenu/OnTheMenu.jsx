import { useEffect, useRef, useContext, useState } from "react";
import styles from "./OnTheMenu.module.scss";
import flappyContext from "../../../../providers/flappy/flappyContext";
import themeContext from "../../../../providers/theme/themeContext";
import deviceContext from "../../../../providers/device/deviceContext";
import { drawElement } from "../components/draw/function";
import useBirdFly from "../components/animate/hook/useBirdFly";
import useLandMove from "../components/animate/hook/useLandMove";
import useBirdAutoMoveOnMenu from "../components/animate/hook/useBirdAutoMoveOnMenu";
import { clickOnRules, clickOnStart } from "../components/click/function";

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};

const OnTheMenu = () => {
  const { value, setValue } = useContext(flappyContext);
  const { theme } = useContext(themeContext);
  const images = useRef({});
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imageNames = [
        "sky",
        "night",
        "land",
        "start",
        "flappy",
        "rules",
        "bird-1-2",
        "bird-1-3",
        "bird-1",
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
      const startTime = performance.now();

      const backgroundImage =
        theme === "light" ? images.current.sky : images.current.night;

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (backgroundImage) {
        ctx.drawImage(backgroundImage, 0, 0, 320, 400);
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
      if (images.current.start) {
        ctx.drawImage(images.current.start, 40, 340, 100, 40);
      }
      if (images.current.flappy) {
        ctx.drawImage(images.current.flappy, 60, 80, 200, 60);
      }
      if (images.current.rules) {
        ctx.drawImage(images.current.rules, 180, 340, 100, 40);
      }

      const endTime = performance.now();
      //console.log(`Temps de dessin : ${endTime - startTime} ms`);
    };
    if (imagesLoaded) {
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.height = 500;
      canvasRef.current.width = 320;
      draw(ctx);
    }
  }, [imagesLoaded, theme, value.birdImg, value.posXLand, value.posYBird]);

  useEffect(() => {
    const handlerClick = (event) => {
      clickOnRules(event, setValue);
      clickOnStart(event, setValue);
    };
    const handlerHover = (event) => {
      if (
        event.offsetY >= 340 &&
        event.offsetY < 380 &&
        event.offsetX > 180 &&
        event.offsetX < 280
      ) {
        setValue((prev) => ({
          ...prev,
          rules: true,
        }));
      }
    };
    const canvas = canvasRef.current;
    canvas.addEventListener("click", handlerClick);
    canvas.addEventListener("mousemove", handlerHover);
    return () => {
      canvas.removeEventListener("click", handlerClick);
      canvas.removeEventListener("mousemove", handlerHover);
    };
  }, [setValue]);
  useBirdFly();
  useBirdAutoMoveOnMenu();
  useLandMove();
  return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
};

export default OnTheMenu;
