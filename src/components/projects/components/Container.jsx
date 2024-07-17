import React, { useEffect, useState } from "react";
import styles from "./Container.module.scss";
import Scene from "./Scene";
import PropTypes from "prop-types";

const Container = React.forwardRef(
  ({ p, index, projects, resolution }, ref) => {
    const [rotationProject, setRotationProject] = useState(0);
    useEffect(() => {
      /* console.log(
        ref.current &&
          (document.documentElement.clientWidth - ref.current.offsetWidth) / 2
      ); */
      setRotationProject(
        ((index === 0 && ref.current
          ? projects.x
          : projects.x + projects.spacingX * index) -
          (ref.current &&
            (document.documentElement.clientWidth - ref.current.offsetWidth) /
              2)) /
          5
      );
    }, [index, projects.spacingX, projects.x, ref]);
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
            {/* {rotationProject < 45 && rotationProject > -45 && (
              <>
                {onHover === true && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%", // Ajustez la position
                      left: "50%", // Ajustez la position
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                    }}
                  >
                    <button onClick={() => alert("Button Clicked!")}>
                      Click Me!
                    </button>
                  </div>
                )}
              </>
            )} */}
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
};
