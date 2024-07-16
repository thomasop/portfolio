import React, { useContext, useEffect } from "react";
import flappyContext from "../../../../../../providers/flappy/flappyContext";

const useBirdFly = () => {
  const { value, setValue } = useContext(flappyContext);
  useEffect(() => {
    let id;
    const animate = () => {
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
    };
    if (value.stopAnimation === false) {
      id = window.requestAnimationFrame(animate);
    }

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [setValue, value.birdFlyRatio, value.stopAnimation]);
};

export default useBirdFly;
