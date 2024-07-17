import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Scene = ({ index, img, x, domX, p }) => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    /* if (domX === x + 400) {
      setRotate(0);
    } else { */
    let ratio = (x - domX) / 5;

    if (ratio > 90 || ratio < -90) {
      if (ratio > 90) {
        setRotate(90);
      } else {
        setRotate(-90);
      }
    } else {
      setRotate(ratio);
    }
    //}
  }, [rotate, domX, x, index]);
  if (index === 0) {
    //console.log("rotate", rotate);
  }
  return (
    <Canvas frameloop={"always"}>
      <Model img={img} x={x} rotate={rotate} p={p} />
    </Canvas>
  );
};

export default Scene;

Scene.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  domX: PropTypes.number,
};
