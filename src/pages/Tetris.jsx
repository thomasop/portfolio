import React, { useEffect, useState } from "react";
import styles from "./Tetris.module.scss";

const ITetris = [
  [
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
  ],
  [
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
  ],
  [
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
  ],
  [
    { x: 4, y: 2 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
    { x: 4, y: 5 },
  ],
];
const allTetris = [{ pos: ITetris, status: true }];

const Tetris = () => {
  const [rotation, setRotation] = useState(0);
  const [currentTetris, setCurrentTetris] = useState(
    allTetris[Math.floor(Math.random())].pos[0]
  );
  const [nextTetris, setNextTetris] = useState(
    allTetris[Math.floor(Math.random())].pos[0]
  );
  const [all, setAll] = useState([]);
  useEffect(() => {
    const test = () => {
      let max = Math.max(...currentTetris.map((item) => item.y));
      if (max !== 19) {
        //setCurrentTetris({ ...currentTetris, ypos: currentTetris.ypos + 1 });
        let array = [];
        currentTetris.map((value) => {
          let test = { ...value, y: value.y + 1 };
          array.push(test);
        });
        setCurrentTetris(array);
      } else {
        setAll([...all, currentTetris]);
        setCurrentTetris(allTetris[Math.floor(Math.random())].pos[0]);
      }
    };
    let id = setInterval(test, 1000);
    return () => clearInterval(id);
  }, [all, currentTetris]);
  useEffect(() => {
    const test = (e) => {
      if (e.key === "z") {
        if (rotation === 3) {
          setCurrentTetris(allTetris[Math.floor(Math.random())].pos[0]);
          setRotation(0);
        } else {
          setCurrentTetris(
            allTetris[Math.floor(Math.random())].pos[rotation + 1]
          );
          setRotation(rotation + 1);
        }
      }
      if (e.key === "ArrowLeft") {
        let min = Math.min(...currentTetris.map((item) => item.x));
        if (min > 0) {
          let array = [];
          currentTetris.map((value) => {
            let test = { ...value, x: value.x - 1 };
            array.push(test);
          });
          setCurrentTetris(array);
        }
      }
      if (e.key === "ArrowRight") {
        let max = Math.max(...currentTetris.map((item) => item.x));
        if (max < 9) {
          let array = [];
          currentTetris.map((value) => {
            let test = { ...value, x: value.x + 1 };
            array.push(test);
          });
          setCurrentTetris(array);
        }
      }
      if (e.key === "ArrowDown") {
        let array = [];
        currentTetris.map((value) => {
          let test = { ...value, y: 19 };
          array.push(test);
        });
        setCurrentTetris(array);
      }
    };
    window.addEventListener("keydown", test);
    return () => removeEventListener("keydown", test);
  }, [currentTetris, rotation]);
  return (
    <>
      <div className={styles.tetris}>
        <h1 className={styles.tetris__title}>Tetris</h1>
        <p>next item</p>
        {Array.from({ length: 20 }).map((_, y) => (
          <div key={y} className={styles.tetris__row}>
            {Array.from({ length: 10 }).map((_, x) => (
              <div
                key={x}
                className={`${styles.tetris__cell} ${
                  x === currentTetris.xpos && y === currentTetris.ypos
                    ? styles.tetris__cell__current
                    : ""
                } ${
                  currentTetris.some((value) => value.x === x && value.y === y)
                    ? styles.tetris__cell__current
                    : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tetris;
