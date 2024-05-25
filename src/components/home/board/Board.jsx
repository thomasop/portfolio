import styles from "./Board.module.scss";

const Board = () => {
  return (
    <div>
      {Array.from({ length: 15 }).map((_, y) => (
        <div key={y} className={styles.row}>
          {Array.from({ length: 20 }).map((_, x) => (
            <div key={x} className={`${styles.cell}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
