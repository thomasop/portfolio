import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import PropTypes from "prop-types";
import "./embla.css";
/* import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons"; */
import { useDotButton } from "./EmblaCarouselDotButton";
import { DotButton } from "./DotButton";

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  /*  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi); */
  console.log(scrollSnaps);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((value, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                //style={{ width: "600px", height: "400px", objectFit: "cover" }}
                src={`${value}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/*<div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>*/}

        <div className="embla__dots">
          {scrollSnaps.map((value, index) => (
            <DotButton
              key={index}
              index={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
  /* const [index, setIndex] = React.useState(0);
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
  ); */
};

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};
