import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <>
      <Tilt
        className={styles.tilt}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.1}
      >
        <div className={`${styles.tilt__card} ${styles.tilt__card__light}`}>
          <img
            className={styles.tilt__card__img}
            src={`../assets/icone/${img}`}
            alt=""
          />
        </div>
      </Tilt>
    </>
  );
};

export default Card;

Card.propTypes = {
  img: PropTypes.string,
};
