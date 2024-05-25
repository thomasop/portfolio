import Board from "../components/home/board/Board";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>snake game</h1>
      <Board />
    </div>
  );
};

export default Home;
