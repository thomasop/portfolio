import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import React, { Suspense } from "react";
import PropType from "prop-types";
import Ball from "./Ball";
import CanvasLoader from "../../../../../components/loader/CanvasLoader";

const BallCanvas = ({ icon, size }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} size={size} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

BallCanvas.propTypes = {
  icon: PropType.string.isRequired,
  size: PropType.string,
};
