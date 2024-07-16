import React, { useContext } from "react";
import styles from "./Carousel.module.scss";
import PropTypes from "prop-types";
import themeContext from "../../providers/theme/themeContext";

const Carousel = ({ arrayImg }) => {
  const [index, setIndex] = React.useState(0);
  const { theme } = useContext(themeContext);
  return (
    <>
      <div
        className={`${styles.carousel} ${
          theme === "dark" ? styles.carousel__dark : styles.carousel__light
        }`}
      >
        <img className={styles.carousel__img} src={arrayImg[index]} alt="" />
        <img
          width={20}
          height={20}
          src="../assets/icone/chevron-left-solid.svg"
          alt=""
          className={styles.carousel__img__left}
          onClick={() => {
            if (index === 0) {
              setIndex(arrayImg.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        />
        <img
          width={20}
          height={20}
          src="../assets/icone/chevron-right-solid.svg"
          alt=""
          className={styles.carousel__img__right}
          onClick={() => {
            if (index === arrayImg.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        />
        <p className={styles.carousel__p}>{`${index + 1}${" "}/${" "}${
          arrayImg.length
        }`}</p>
      </div>
    </>
  );
};

export default Carousel;

Carousel.propTypes = {
  arrayImg: PropTypes.array.isRequired,
};
