import React, { useContext, useEffect } from "react";
import GameContext from "../../../providers/game/Context";
import styles from "./Pause.module.scss";

const Pause = () => {
  const { value, setValue } = useContext(GameContext);
  return (
    <>
      <div className={styles.pause}>
        <div className={styles.pause__content}>
          <span className={styles.pause__content__choose}>
            Changer le niveau
          </span>
          <select
            className={styles.pause__content__level}
            name=""
            id=""
            onChange={(e) => {
              setValue({ ...value, speed: Number(e.target.value) });
            }}
          >
            <option value="500">Facile</option>
            <option value="250">Moyen</option>
            <option value="100">Difficile</option>
          </select>
          <button
            className={styles.pause__content__start}
            onClick={() => {
              setValue({ ...value, pause: false });
            }}
          >
            Continuer
          </button>
          <button
            className={styles.pause__content__start}
            onClick={() => {
              setValue({
                ...value,
                snake: [
                  { x: 4, y: 5 },
                  { x: 3, y: 5 },
                  { x: 2, y: 5 },
                ],
                start: false,
                pause: false,
                direction: "right",
                food: null,
                link: null,
                linkTest: null,
                score: 0,
                rules: false,
              });
            }}
          >
            Nouvelle partie
          </button>
          <button
            className={styles.pause__content__rules}
            onClick={() => {
              setValue({ ...value, rules: true });
            }}
          >
            Voir les règles
          </button>
        </div>
      </div>
    </>
  );
};

export default Pause;
