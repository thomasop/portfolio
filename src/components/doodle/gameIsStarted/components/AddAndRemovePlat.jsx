import React, { useContext, useEffect } from "react";
import doodleContext from "../../../../providers/doodle/doodleContext";

const AddAndRemovePlat = () => {
  const { value, setValue } = useContext(doodleContext);
  useEffect(() => {
    if (value.allPlateform.length === 1 && value.allPlateform[0].length > 0) {
      if (
        value.allPlateform[0][value.currentId].y > 620 &&
        value.currentId !== 0
      ) {
        let array = [];
        for (let i = 0; i < value.allPlateform[0].length; i++) {
          array.push({
            x: value.allPlateform[0][i].x,
            y: value.allPlateform[0][i].y,
            w: 40,
            h: value.allPlateform[0][i].h,
            type: value.allPlateform[0][i].type,
          });
        }
        array.splice(0, value.currentId);
        Array.from({ length: value.currentId }, (_, i) => i).forEach((i) => {
          let min = Math.floor(Math.random() * 60);
          let test2 = Math.floor(Math.random() * 60);
          let test = Math.floor(Math.random() * 2);
          if (test === 0) {
            array.push({
              x: 155 + min,
              y: array[array.length - 1].y - (test2 + 30),
              w: 40,
              h: 10,
            });
          } else {
            array.push({
              x: 65 - min,
              y: array[array.length - 1].y - (test2 + 30),
              w: 40,
              h: 10,
            });
          }
        });
        setValue((prev) => ({
          ...prev,
          allPlateform: [array],
          currentId: 0,
        }));

        /* setAllPlateform([array]);
            setCurrentId(0); */
      }
    }
  }, [setValue, value.allPlateform, value.currentId]);
  return null;
};

export default AddAndRemovePlat;
