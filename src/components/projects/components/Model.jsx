import { useContext, useEffect, useRef, useState } from "react";
import { fragment, vertex } from "./Shader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";
import resolutionContext from "../../../providers/resolution/resolutionContext";

const Model = ({ img, x, rotate }) => {
  //const texture = useLoader(THREE.TextureLoader, img);
  const image = useRef();
  const texture = useTexture(img);
  //cut the image in half
  const { width, height } = texture.image;
  const [position, setPosition] = useState([]);
  const [args, setArgs] = useState([]);
  const { resolution } = useContext(resolutionContext);
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(1, 1) },
    vUvOffset: { value: new THREE.Vector2(0, 0) },
  });
  texture.wrapS = THREE.ClampToEdgeWrapping; // Empêcher la répétition horizontale
  texture.wrapT = THREE.ClampToEdgeWrapping; // Empêcher la répétition verticale
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(() => {
    if (image.current) {
      if (x < 100 && x > -100) {
        image.current.material.uniforms.uTime.value += 0.0;
        image.current.material.uniforms.uAmplitude.value = 0.0;
        image.current.material.uniforms.uWaveLength.value = 0;
      } else {
        let uTimeValue = 0;
        if (x > 500 || x < -500) {
          uTimeValue = 0.5;
        } else {
          uTimeValue = x / 500 / 2;
        }
        image.current.material.uniforms.uTime.value += uTimeValue;
        image.current.material.uniforms.uAmplitude.value = 0.15;
        image.current.material.uniforms.uWaveLength.value = 3;
      }
    }
  });

  useEffect(() => {
    const updateTextureUniforms = () => {
      if (resolution < 425) {
        uniforms.current.vUvScale.value.set(0.37, 1);
        uniforms.current.vUvOffset.value.set(0.315, 0);
      } else if (resolution >= 425) {
        uniforms.current.vUvScale.value.set(1, 1); // Réinitialisez à 1,1 ou selon vos besoins
        uniforms.current.vUvOffset.value.set(0, 0); // Réinitialisez l'offset
      }
    };

    updateTextureUniforms(); // Appel initial
    window.addEventListener("resize", updateTextureUniforms); // Écouteur de redimensionnement

    return () => {
      window.removeEventListener("resize", updateTextureUniforms); // Nettoyage
    };
  }, [resolution]);

  useEffect(() => {
    if (x < 10 && x > -10) {
      setPosition([0, 0, 0]);
    } else {
      let ratio = x / 200;
      setPosition([0, 0, -Math.abs(ratio)]);
    }
  }, [x]);
  useEffect(() => {
    if (resolution > 700) {
      setArgs([500 / 90, 500 / 137, 10, 10]);
    } else if (resolution < 425) {
      setArgs([500 / 190, 500 / 110, 10, 10]);
    } else {
      setArgs([500 / 120, 500 / 175, 10, 10]);
    }
  }, [resolution]);
  return (
    <>
      {args.length > 0 && position.length > 0 && (
        <>
          <mesh
            ref={image}
            position={position}
            scale={[1, 1, 1]}
            rotation-y={0.0174533 * rotate}
          >
            <planeGeometry args={args} />
            <shaderMaterial
              fragmentShader={fragment}
              vertexShader={vertex}
              uniforms={uniforms.current}
            />
          </mesh>
        </>
      )}

      {/* <mesh>
        <planeGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh> */}
    </>
  );
};

export default Model;

Model.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
};

/* 

import { useContext, useEffect, useRef, useState } from "react";
import { fragment, vertex } from "./Shader";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";
import resolutionContext from "../../../providers/resolution/resolutionContext";

const Model = ({ img, x, rotate }) => {
  const image = useRef();
  const texture = useTexture(img);
  const { width, height } = texture.image;
  const [position, setPosition] = useState([0, 0, 0]);
  const [args, setArgs] = useState([]);
  const { resolution } = useContext(resolutionContext);
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(1, 1) },
    vUvOffset: { value: new THREE.Vector2(0, 0) },
  });

  // Configurer la texture
  texture.wrapS = THREE.ClampToEdgeWrapping; // Empêcher la répétition horizontale
  texture.wrapT = THREE.ClampToEdgeWrapping; // Empêcher la répétition verticale
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(() => {
    if (image.current) {
      const aspectRatio = width / height;
      const planeAspectRatio = args[0] / args[1];

      if (aspectRatio > planeAspectRatio) {
        // L'image est plus large que le plan
        const scale = aspectRatio / planeAspectRatio;
        uniforms.current.vUvScale.value.set(scale, 1);
        uniforms.current.vUvOffset.value.set((1 - scale) / 2, 0);
      } else {
        // L'image est plus haute que le plan
        const scale = planeAspectRatio / aspectRatio;
        uniforms.current.vUvScale.value.set(1, scale);
        uniforms.current.vUvOffset.value.set(0, (1 - scale) / 2);
      }

      // Logique pour uTime, uAmplitude et uWaveLength
      if (x < 100 && x > -100) {
        image.current.material.uniforms.uTime.value = 0.0;
        image.current.material.uniforms.uAmplitude.value = 0.0;
        image.current.material.uniforms.uWaveLength.value = 0;
      } else {
        let uTimeValue = 0;
        if (x > 500 || x < -500) {
          uTimeValue = 0.5;
        } else {
          uTimeValue = x / 1000;
        }
        image.current.material.uniforms.uTime.value += uTimeValue;
        image.current.material.uniforms.uAmplitude.value = 0.15;
        image.current.material.uniforms.uWaveLength.value = 3;
      }
    }
  });

  useEffect(() => {
    if (x < 10 && x > -10) {
      setPosition([0, 0, 0]);
    } else {
      let ratio = x / 200;
      setPosition([0, 0, -Math.abs(ratio)]);
    }
  }, [x]);

  useEffect(() => {
    if (resolution > 700) {
      setArgs([500 / 90, 500 / 137, 10, 10]);
    } else if (resolution < 425) {
      setArgs([500 / 160, 500 / 100, 10, 10]);
    } else {
      setArgs([500 / 120, 500 / 175, 10, 10]);
    }
  }, [resolution]);

  return (
    <mesh
      ref={image}
      position={position}
      scale={[1, 1, 1]}
      rotation-y={0.0174533 * rotate}
    >
      <planeGeometry args={args} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

export default Model;

Model.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
};*/
