import { Canvas, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense, useContext } from "react";
import PropType from "prop-types";
import themeContext from "../../../../../providers/theme/themeContext";

const Ball = (props) => {
  const { theme } = useContext(themeContext);
  const [decal] = useTexture([props.imgUrl]);
  return (
    <>
      <ambientLight intensity={theme === "light" ? 0 : 0.9} />
      <directionalLight position={[0, 0.05, 0.05]} />
      <mesh
        scale={props.size === "little" && 1.4}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={"grey"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={props.size === "little" && 1}
          map={decal}
        />
      </mesh>
    </>
  );
};

export default Ball;

Ball.propTypes = {
  imgUrl: PropType.string.isRequired,
  size: PropType.string,
};
