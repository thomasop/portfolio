import React, { useContext } from "react";
import styles from "./Wait.module.scss";
import GameContext from "../../../providers/game/Context";

const Wait = () => {
  const { value, setValue } = useContext(GameContext);
  return (
    <>
      <div className={styles.wait}>
        <div className={styles.wait__content}>
          <span className={styles.wait__content__choose}>
            Choisir le niveau
          </span>
          <select
            className={styles.wait__content__level}
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
            className={styles.wait__content__start}
            onClick={() => {
              setValue({ ...value, start: true });
            }}
          >
            Commencer
          </button>
          <button
            className={styles.wait__content__rules}
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

export default Wait;
