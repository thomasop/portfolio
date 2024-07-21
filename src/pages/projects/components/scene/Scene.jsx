import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CanvasLoader from "../../../../components/loader/CanvasLoader";
import { Preload } from "@react-three/drei";
import projectsContext from "../../../../providers/projects/projectsContext";

const Scene = ({ index, img, x, domX, p }) => {
  const { projects, setProjects } = useContext(projectsContext);

  const [rotate, setRotate] = useState(0);
  useEffect(() => {
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
  }, [rotate, domX, x, index]);
  return (
    <Canvas frameloop={projects.isModalOpen ? "demand" : "always"}>
      <Suspense fallback={<CanvasLoader />}>
        <Model img={img} x={x} rotate={rotate} p={p} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Scene;

Scene.propTypes = {
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  domX: PropTypes.number,
};
