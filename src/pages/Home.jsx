import { useContext } from "react";
import Board from "../components/home/board/Board";
import styles from "./Home.module.scss";
import GameContext from "../providers/game/Context";
import Wait from "../components/home/wait/Wait";
import Rules from "../components/home/rules/Rules";

const Home = () => {
  const { value } = useContext(GameContext);
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>snake game</h1>
      {value.start === true && (
        <>
          <Board />
        </>
      )}
      {value.start === false && value.rules === false && <Wait />}
      {value.start === false && value.rules === true && <Rules />}
    </div>
  );
};

export default Home;
