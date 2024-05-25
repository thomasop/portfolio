import { useContext } from "react";
import Board from "../components/home/board/Board";
import styles from "./Home.module.scss";
import GameContext from "../providers/game/Context";
import Wait from "../components/home/wait/Wait";
import Rules from "../components/home/rules/Rules";
import Pause from "../components/home/pause/Pause";
import MakePause from "../components/home/pause/makePause";
import AutoMove from "../components/home/autoMove/AutoMove";
import ChangeDirection from "../components/home/changeDirection/ChangeDirection";

const Home = () => {
  const { value } = useContext(GameContext);
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>snake game</h1>
      {value.start === true && value.pause === false && (
        <>
          <Board />
          <MakePause />
          <AutoMove />
          <ChangeDirection />
        </>
      )}

      {value.start === true && value.pause === true && (
        <>
          {value.rules === true && <Rules />}
          {value.rules === false && <Pause />}
        </>
      )}
      {value.start === false && value.rules === false && <Wait />}
      {value.rules === true && value.pause === false && <Rules />}
    </div>
  );
};

export default Home;
