import React, { useContext, useEffect } from "react";
import doodleContext from "../../../../providers/doodle/doodleContext";

const CreateInitialPlat = () => {
  const { value, setValue } = useContext(doodleContext);
  const [ok2, setOk2] = React.useState(0);
  useEffect(() => {
    const tttt = () => {
      let array = [];

      const kkk = () => {
        return Math.floor(Math.random() * 70);
      };
      let current = 0;
      for (let i = 0; i < 21; i++) {
        if (i === 0) {
          array.push({ x: 155, y: 630, w: 40, h: 10, type: "plat" });
        } else {
          let horizontalScale = Math.floor(Math.random() * 60);
          let horizontalScaleIcone = Math.floor(Math.random() * 40);

          let sidePosition = Math.floor(Math.random() * 2);
          let iconeSelect = Math.floor(Math.random() * 2);
          let test2 = 0;
          let ok = 0;
          if (current === 0) {
            if (i === 4) {
              ok = Math.floor(Math.random() * 60) + 10;
            }
            test2 = Math.floor(Math.random() * 60) + 10;
          } else {
            if (i === 4) {
              ok = Math.floor(Math.random() * 60) + current + 30;
            }
            if (i !== 5) {
              test2 = Math.floor(Math.random() * 60) + current + 30;
            }
            if (i === 5) {
              test2 = Math.floor(Math.random() * 60) + current + 30;
            }
          }

          current = test2;
          if (sidePosition === 0) {
            if (i === 5) {
              if (iconeSelect === 0) {
                array.push({
                  x: 155 + horizontalScaleIcone,
                y: 630 - test2,
                w: 40,
                h: 10,
                  type: "linkHome",
                });
              } else {
                array.push({
                  x: 155 + horizontalScaleIcone,
                y: 630 - test2,
                w: 40,
                h: 10,
                  type: "linkProject",
                });
              }
            } /* else if (i === 4) {
              setOk2(min);
              array.push({
                x: 65 - min,
                y: 630 - test2,
                w: 40,
                h: 10,
                type: "plat",
              });
            } */ else {
              array.push({
                x: 155 + horizontalScale,
                y: 630 - test2,
                w: 40,
                h: 10,
                type: "plat",
              });
            }
          } else {
            if (i === 5) {
              if (iconeSelect === 0) {
                array.push({
                  x: 155 + horizontalScaleIcone,
                y: 630 - test2,
                w: 40,
                h: 10,
                  type: "linkAbout",
                });
              } else {
                array.push({
                  x: 155 + horizontalScaleIcone,
                y: 630 - test2,
                w: 40,
                h: 10,
                  type: "linkProject",
                });
              }
            } /* else if (i === 4) {
              setOk2(min);
              array.push({
                x: 65 - min,
                y: 630 - test2,
                w: 40,
                h: 10,
                type: "plat",
              });
            } */ else {
              array.push({
                x: 65 - horizontalScale,
                y: 630 - test2,
                w: 40,
                h: 10,
                type: "plat",
              });
            }
          }
        }
      }
      setValue((prev) => ({
        ...prev,
        //start: false,
        allPlateform: [...prev.allPlateform, array],
      }));
      //setAllPlateform([array]);
    };
    if (value.allPlateform.length === 0) {
      tttt();
    }
  }, [value.allPlateform]);
  return null;
};

export default CreateInitialPlat;
