import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import doodleContext from "../../../../providers/doodle/doodleContext";

const AnimateDoodle = () => {
  const { value, setValue } = useContext(doodleContext);
  const [ok, setOk] = React.useState(false);
  const [ok2, setOk2] = React.useState(false);
  const [ok3, setOk3] = React.useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    let timerId;

    const animate = () => {
      if (value.doodlePos.y >= 630) {
        console.log("test");
        setValue((prev) => ({
          ...prev,
          lost: true,
          start: false,
        }));
        /*
            cancelAnimationFrame(timerId); */
        /* setAllPlateform([]);
            setDoodlePos({ x: 160, y: 600 });
            setDx(0);
            setDirection("down");
            setDy(-6.75);
            setHDirection("doodler-right.png");
            setCurrentH(630 - 70);
            setCurrentId(0);
            setScore(0);
            cancelAnimationFrame(timerId); */
      }

      //go up
      // if doodle touch plateform

      if (value.allPlateform.length === 1 && value.allPlateform[0].length > 0) {
        for (let i = 0; i < value.allPlateform[0].length; i++) {
          if (value.doodlePos.x > value.allPlateform[0][i].x - 15 &&
            value.doodlePos.x < value.allPlateform[0][i].x + 30 &&
            value.doodlePos.y + 20 <= value.allPlateform[0][i].y &&
            value.doodlePos.y + 20 >= value.allPlateform[0][i].y - 10
          ) {
            if (value.allPlateform[0][i].type === "linkAbout") {
              console.log("test");
            }
            if (value.allPlateform[0][i].type === "linkProject") {
              console.log("test2");
            }
            //navigate("/about")
            /* setOk3(
              (value.allPlateform[0][0].y - value.allPlateform[0][i].y) / 10
            );
            setValue((prev) => ({
              ...prev,
              currentId: i,
              diff:
                value.allPlateform[0][0].y - value.allPlateform[0][i].y - 10,
              score:
                prev.score +
                Math.floor(
                  value.allPlateform[0][0].y - value.allPlateform[0][i].y
                ),
              test: value.dy,
              heightPlat: value.allPlateform[0][i].y,
              dy: -1,
              //dy: -12,
              direction: "up",
            }));
            if (value.allPlateform[0][i].y - 630 === 0) {
              setValue((prev) => ({
                ...prev,
                currentH: value.allPlateform[0][i].y - 70,
              }));
            } */
          }
          if (value.allPlateform[0][i].type === "plat" && value.direction === "down") {
            if (
              value.doodlePos.x > value.allPlateform[0][i].x - 25 &&
              value.doodlePos.x < value.allPlateform[0][i].x + 25 &&
              value.doodlePos.y + 20 <= value.allPlateform[0][i].y &&
              value.doodlePos.y + 20 >= value.allPlateform[0][i].y - 10 &&
              value.direction === "down"
            ) {
              setOk3(
                (value.allPlateform[0][0].y - value.allPlateform[0][i].y) / 10
              );
              setValue((prev) => ({
                ...prev,
                currentId: i,
                diff:
                  value.allPlateform[0][0].y - value.allPlateform[0][i].y - 10,
                score:
                  prev.score +
                  Math.floor(
                    value.allPlateform[0][0].y - value.allPlateform[0][i].y
                  ),
                test: value.dy,
                heightPlat: value.allPlateform[0][i].y,
                dy: -1,
                //dy: -12,
                direction: "up",
              }));
              if (value.allPlateform[0][i].y - 630 === 0) {
                setValue((prev) => ({
                  ...prev,
                  currentH: value.allPlateform[0][i].y - 70,
                }));
              }
            }
          }
          if ((value.allPlateform[0][i].type === "linkAbout" || value.allPlateform[0][i].type === "linkProject") && value.direction === "down") {
            if (
              value.doodlePos.x > value.allPlateform[0][i].x - 25 &&
            value.doodlePos.x < value.allPlateform[0][i].x + 50 &&
            value.doodlePos.y + 20 <= value.allPlateform[0][i].y &&
            value.doodlePos.y + 20 >= value.allPlateform[0][i].y - 10 && value.direction === "down"
            ) {
              setOk3(
                (value.allPlateform[0][0].y - value.allPlateform[0][i].y) / 10
              );
              setValue((prev) => ({
                ...prev,
                currentId: i,
                diff:
                  value.allPlateform[0][0].y - value.allPlateform[0][i].y - 10,
                score:
                  prev.score +
                  Math.floor(
                    value.allPlateform[0][0].y - value.allPlateform[0][i].y
                  ),
                test: value.dy,
                heightPlat: value.allPlateform[0][i].y,
                dy: -1,
                //dy: -12,
                direction: "up",
              }));
              if (value.allPlateform[0][i].y - 630 === 0) {
                setValue((prev) => ({
                  ...prev,
                  currentH: value.allPlateform[0][i].y - 70,
                }));
              }
            }
          }
          /* if (
            value.doodlePos.x > value.allPlateform[0][i].x - 25 &&
            value.doodlePos.x < value.allPlateform[0][i].x + 25 &&
            value.doodlePos.y + 20 <= value.allPlateform[0][i].y &&
            value.doodlePos.y + 20 >= value.allPlateform[0][i].y - 10 &&
            value.direction === "down" && value.allPlateform[0][i].type === "plat"
          ) {
            setOk3(
              (value.allPlateform[0][0].y - value.allPlateform[0][i].y) / 10
            );
            setValue((prev) => ({
              ...prev,
              currentId: i,
              diff:
                value.allPlateform[0][0].y - value.allPlateform[0][i].y - 10,
              score:
                prev.score +
                Math.floor(
                  value.allPlateform[0][0].y - value.allPlateform[0][i].y
                ),
              test: value.dy,
              heightPlat: value.allPlateform[0][i].y,
              dy: -1,
              //dy: -12,
              direction: "up",
            }));
            if (value.allPlateform[0][i].y - 630 === 0) {
              setValue((prev) => ({
                ...prev,
                currentH: value.allPlateform[0][i].y - 70,
              }));
            } */
            /* 
                setCurrentId(i);
                setDiff(allPlateform[0][0].y - allPlateform[0][i].y - 10);
                setScore(
                  (prev) =>
                    prev + Math.floor(allPlateform[0][0].y - allPlateform[0][i].y)
                );
                if (allPlateform[0][i].y - 630 === 0) {
                  setCurrentH(allPlateform[0][i].y - 70);
                }
                setTest(dy);
                setHeightPlat(allPlateform[0][i].y);
                setDy(-2);
                setDirection("up"); */
          //}
        }
      }

      if (value.allPlateform.length === 1 && value.allPlateform[0].length > 0) {
        if (value.currentId !== 0) {
          let array = [];
          let n = 630 - value.allPlateform[0][value.currentId].y;
          for (let i = 0; i < value.allPlateform[0].length; i++) {
            array.push({
              x: value.allPlateform[0][i].x,
              y: value.allPlateform[0][i].y + Math.abs(ok3),
              //y: value.allPlateform[0][i].y + Math.abs(value.dy),
              //y: value.allPlateform[0][i].y + value.test,
              w: 40,
              h: value.allPlateform[0][i].h,
              type: value.allPlateform[0][i].type,
            });
          }
          setValue((prev) => ({
            ...prev,
            allPlateform: [array],
            test: prev.test + 100 / value.diff,
          }));
          /* setTest(test + 100 / diff);
              setAllPlateform([array]); */
        }
      }
      //console.log(value.dy);
      if (value.doodlePos.y < 630) {
        if (value.doodlePos.y + 30 < 630 || value.doodlePos.y + 30 > 630 - 70) {
          if (value.direction === "down") {
            //setValue((prev) => ({ ...prev, dy: (prev.dy += 0.2) }));
            //setValue((prev) => ({ ...prev, dy: prev.dy + 0.1 }));
            //setDy(dy + 0.2);
          }
          if (value.direction === "up") {
            //console.log("test");
            //setValue((prev) => ({ ...prev, dy: -Math.abs(prev.dy + 0.1) }));
            //setValue((prev) => ({ ...prev, dy: -Math.abs(prev.dy + 0.2) }));
            //setDy(-Math.abs(dy + 0.2));
          }
        }

        // go down
        if (value.doodlePos.y <= 480) {
          setValue((prev) => ({ ...prev, dy: 1, direction: "down" }));
          /* setDy(2);
              setDirection("down"); */
        }
        setValue((prev) => ({
          ...prev,
          doodlePos: {
            x: prev.doodlePos.x + prev.dx,
            y: prev.doodlePos.y + prev.dy,
          },
        }));
        //setDoodlePos({ x: doodlePos.x + dx, y: doodlePos.y + dy });

       // timerId = requestAnimationFrame(animate);
      }
    };
    timerId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(timerId);
  }, [
    value.allPlateform,
    value.currentH,
    value.currentId,
    value.direction,
    value.doodlePos.x,
    value.doodlePos.y,
    value.dx,
    value.dy,
    value.doodlePos,
    value.test,
    value.diff,
    setValue,
  ]);
  return null;
};

export default AnimateDoodle;
