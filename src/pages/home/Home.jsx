import React, { useState, useContext } from "react";
import NotStart from "../../components/doodle/onTheMenu/NotStart";
import Contact from "../../components/contact/Contact";
import styles from "./Home.module.scss";
import IsStarted from "../../components/doodle/gameIsStarted/IsStarted";
import doodleContext from "../../providers/doodle/doodleContext";
import OnPause from "../../components/doodle/onPause/OnPause";
import GameLost from "../../components/doodle/gameLost/GameLost";
import OnInfo from "../../components/doodle/onInfo/OnInfo";

const Home = () => {
  const { value } = useContext(doodleContext);
  const [pause, setPause] = useState(false);
  return (
    <>
      <h1 className={styles.doodle}>Thomas DA SILVA</h1>
      {value.start === true &&
        value.pause === false &&
        value.info === false && (
          <div>
            <IsStarted setPause={setPause} />
          </div>
        )}
      {value.start === false &&
        value.pause === false &&
        value.info === false &&
        value.lost === true && (
          <div>
            <GameLost />
          </div>
        )}
      {value.start === true && value.pause === true && value.info === false && (
        <div>
          <OnPause />
        </div>
      )}
      {value.start === true &&
        value.pause === true &&
        value.info === true &&
        value.lost === false && (
          <div>
            <OnInfo />
          </div>
        )}
      {value.start === false &&
        value.info === false &&
        value.pause === false &&
        value.lost === false && (
          <div className={styles.doodle__div}>
            <NotStart />
          </div>
        )}
      {value.start === false &&
        value.info === true &&
        value.pause === false &&
        value.lost === false && (
          <div>
            <OnInfo />
          </div>
        )}
      <Contact />
    </>
  );
};

export default Home;
