import React, { useContext } from "react";
import styles from "./Rules.module.scss";
import GameContext from "../../../providers/game/Context";

const Rules = () => {
  const { value, setValue } = useContext(GameContext);
  return (
    <>
      <div className={styles.rules}>
        <div className={styles.rules__content}>
          <span className={styles.rules__content__title}>Règles</span>
          <span>
            Vous pouvez jouez en utilisant les flêches directionnelles
          </span>
          <span>
            Vous devez manger les pommes pour augmenter votre score et pour
            faire apparaître les autres autres icones
          </span>
          <span>Vous pouvez faire pause en faisant echap</span>
          <span>
            Vous pouvez accèder au autre page en mangeant les autres icones :
          </span>
          <ul>
            <li>A propos (/about)</li>
            <li>Projets (/projects)</li>
            <li>Contact (/contact)</li>
          </ul>
          <button
            className={styles.rules__content__back}
            onClick={() => {
              setValue({ ...value, rules: false });
            }}
          >
            Retour au jeu
          </button>
        </div>
      </div>
    </>
  );
};

export default Rules;
