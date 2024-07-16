import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Scene = ({ img, x, domX }) => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    if (domX === x + 200) {
      setRotate(0);
    } else {
      let ratio = (x - domX) / 10;
      if (ratio > 90 || ratio < -90) {
        if (ratio > 90) {
          setRotate(90);
        } else {
          setRotate(-90);
        }
      } else {
        setRotate(ratio);
      }
    }
  }, [rotate, domX, x]);
  return (
    <Canvas frameloop={"demand"}>
      <Model img={img} x={x} rotate={rotate} />
    </Canvas>
  );
};

export default Scene;

Scene.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  domX: PropTypes.number,
};
