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
import deviceContext from "../../../../../providers/device/deviceContext";

const Ball = (props) => {
  const { theme } = useContext(themeContext);
  const { device } = useContext(deviceContext);
  console.log(device);
  const [decal] = useTexture([props.imgUrl]);
  return (
    <>
      <ambientLight intensity={theme === "light" ? 0 : 0.9} />
      <directionalLight position={[0, 0.05, 0.05]} />
      <mesh
        scale={
          props.size === "normal"
            ? device.device === "mobile"
              ? 2.2
              : 2.7
            : 3.1
        }
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
          scale={props.size === "normal" ? 1 : 0.8}
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
