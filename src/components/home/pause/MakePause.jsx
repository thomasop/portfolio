import React, { useContext, useEffect } from "react";
import GameContext from "../../../providers/game/Context";

const MakePause = () => {
  const { value, setValue } = useContext(GameContext);
  useEffect(() => {
    const press = (e) => {
      if (e.key === "Escape") {
        setValue({ ...value, pause: true });
      }
    };
    window.addEventListener("keydown", press);
    return () => removeEventListener("keydown", press);
  }, [setValue, value]);
  return null;
};

export default MakePause;
