import { useContext } from "react";
import styles from "./Board.module.scss";
import GameContext from "../../../providers/game/Context";

const Board = () => {
  const { value } = useContext(GameContext);
  return (
    <div>
      {Array.from({ length: 20 }).map((_, y) => (
        <div key={y} className={styles.row}>
          {Array.from({ length: 20 }).map((_, x) => (
            <div
              key={x}
              className={`${styles.cell} ${
                value.snake.some((part) => part.x === x && part.y === y)
                  ? styles.snake
                  : ""
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
