import React, { useEffect, useState } from "react";
import styles from "./Container.module.scss";
import Scene from "./Scene";
import PropTypes from "prop-types";

const Container = React.forwardRef(
  ({ p, index, projects, resolution, currentIndex }, ref) => {
    return (
      <>
        <div
          key={index}
          ref={ref}
          style={{
            position: "absolute",
            width: "100%",
            height: "500px",
            transform: `perspective(90px) translate3d(${
              index === 0 ? projects.x : projects.x + projects.spacingX * index
            }px, ${
              index === 0 ? projects.y : projects.y - projects.spacingY * index
            }px, 0px)`,
            zIndex: currentIndex === true ? 999 : 0,
          }}
          className={`${styles.card}`}
        >
          <>
            <Scene
              p={p}
              index={index}
              resolution={resolution}
              img={p.img}
              x={
                index === 0
                  ? projects.x
                  : projects.x + projects.spacingX * index
              }
              y={
                index === 0
                  ? projects.y
                  : projects.y - projects.spacingY * index
              }
              domX={
                ref.current &&
                (document.documentElement.clientWidth -
                  ref.current.offsetWidth) /
                  2
              }
            />
          </>
        </div>
      </>
    );
  }
);

export default Container;

Container.displayName = "Container";

Container.propTypes = {
  p: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refEl: PropTypes.object,
  projects: PropTypes.object.isRequired,
  resolution: PropTypes.number.isRequired,
  currentIndex: PropTypes.bool.isRequired,
};
