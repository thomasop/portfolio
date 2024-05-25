import { useContext } from "react";
import Board from "../components/home/board/Board";
import styles from "./Home.module.scss";
import GameContext from "../providers/game/Context";
import Wait from "../components/home/wait/Wait";

const Home = () => {
  const { value } = useContext(GameContext);
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>snake game</h1>
      {value.start === true && <Board />}
      {value.start === false && value.rules === false && <Wait />}
    </div>
  );
};

export default Home;
