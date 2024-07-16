import React, { useContext, useEffect } from "react";
import doodleContext from "../../../../providers/doodle/doodleContext";

const HorizontalDirection = () => {
  const { value, setValue } = useContext(doodleContext);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "ArrowLeft") {
        setValue((prev) => ({
          ...prev,
          hDirection: "doodler-left.png",
        }));
        //setHDirection("doodler-left.png");

        if (value.doodlePos.x < 0) {
          setValue((prev) => ({
            ...prev,
            doodlePos: { ...prev.doodlePos, x: 250 },
            dx: -1,
          }));
          /* setDoodlePos({ ...doodlePos, x: 250 });
              setDx(-3); */
        } else {
          setValue((prev) => ({ ...prev, dx: -1 }));
          //setDx(-3);
        }
      } else if (e.key === "ArrowRight") {
        setValue((prev) => ({ ...prev, hDirection: "doodler-right.png" }));
        //setHDirection("doodler-right.png");
        if (value.doodlePos.x > 250) {
          setValue((prev) => ({
            ...prev,
            doodlePos: { ...prev.doodlePos, x: 0 },
            dx: 1,
          }));
          /* setDoodlePos({ ...doodlePos, x: 0 });
              setDx(3); */
        } else {
          setValue((prev) => ({ ...prev, dx: 1 }));
          //setDx(3);
        }
      }
    };
    window.addEventListener("keydown", test);
    return () => removeEventListener("keydown", test);
  }, [setValue, value.doodlePos, value.dx]);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "ArrowLeft") {
        setValue((prev) => ({
          ...prev,
          hDirection: "doodler-left.png",
          dx: 0,
        }));
        /* setHDirection("doodler-left.png");
            setDx(0); */
      } else if (e.key === "ArrowRight") {
        setValue((prev) => ({
          ...prev,
          hDirection: "doodler-right.png",
          dx: 0,
        }));
        /* setHDirection("doodler-right.png");
            setDx(0); */
      }
    };
    window.addEventListener("keyup", test);
    return () => removeEventListener("keyup", test);
  }, [setValue, value.doodlePos]);
  return null;
};

export default HorizontalDirection;
