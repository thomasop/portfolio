import { useContext, useEffect, useRef, useState } from "react";
import { fragment, vertex } from "./Shader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";
import resolutionContext from "../../../providers/resolution/resolutionContext";
import flappyContext from "../../../providers/flappy/flappyContext";
import projectContext from "../../../providers/project/projectContext";

const Model = ({ img, x, rotate, p }) => {
  //const texture = useLoader(THREE.TextureLoader, img);
  const image = useRef();
  const texture = useTexture(img);
  const { value, setValue } = useContext(flappyContext);
  const { project, setProject } = useContext(projectContext);
  //cut the image in half
  const { width, height } = texture.image;
  const [position, setPosition] = useState([]);
  const [args, setArgs] = useState([]);
  const [onHover, setOnHover] = useState(false);
  const [scale, setScale] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const { resolution } = useContext(resolutionContext);
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
    uWaveLength: { value: 5 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(1, 1) },
    vUvOffset: { value: new THREE.Vector2(0, 0) },
    uOpacity: { value: opacity },
  });
  texture.wrapS = THREE.ClampToEdgeWrapping; // Empêcher la répétition horizontale
  texture.wrapT = THREE.ClampToEdgeWrapping; // Empêcher la répétition verticale
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(() => {
    //console.log(x);
    if (image.current) {
      if (rotate === 90 || rotate === -90) {
        image.current.material.uniforms.uTime.value += 0;
        image.current.material.uniforms.uAmplitude.value = 0.0;
        image.current.material.uniforms.uWaveLength.value = 0;
      } else if (rotate < 10 && rotate > -10) {
        image.current.material.uniforms.uTime.value += 0;
        image.current.material.uniforms.uAmplitude.value = 0.0;
        image.current.material.uniforms.uWaveLength.value = 0;
      } else {
        image.current.material.uniforms.uTime.value += 0.1;
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
      setArgs([500 / 90, 500 / 137, 20, 20]);
    } else if (resolution < 425) {
      setArgs([500 / 190, 500 / 110, 20, 20]);
    } else {
      setArgs([500 / 120, 500 / 175, 20, 20]);
    }
    console.log("Args:", args);
  }, [args, resolution]);

  useEffect(() => {
    const maxScale = 2;
    const minScale = 0.1;
    const absRotate = Math.abs(rotate);

    let newScale;

    if (absRotate === 0) {
      newScale = maxScale;
    } else if (absRotate >= 90) {
      newScale = minScale;
    } else {
      newScale = maxScale - (absRotate / 90) * (maxScale - minScale);
    }

    setScale([newScale, newScale, 1]);
  }, [rotate]);
  useEffect(() => {
    // Mettez à jour l'uniforme d'opacité lorsque l'état change
    uniforms.current.uOpacity.value = opacity;
  }, [opacity]);

  return (
    <>
      {args.length > 0 && position.length > 0 && scale.length > 0 && (
        <>
          <mesh
            onPointerOver={(e) => {
              if (rotate < 45 && rotate > -45) {
                setOpacity(0.05);
                setOnHover(true);
                document.body.style.cursor = "pointer";
              }
            }}
            onPointerOut={(e) => {
              setOpacity(1);
              setOnHover(false);
              document.body.style.cursor = "default";
            }}
            onClick={(e) => {
              console.log(p);
              // Action à effectuer lors du clic
              setValue((prev) => ({
                ...prev,
                page: p.title,
              }));
              setProject((prev) => ({
                ...prev,
                title: p.title,
                img: p.arrayImg,
                description: p.description,
                techs: p.techs,
                links: p.links,
              }));
              // Vous pouvez ajouter d'autres actions ici, par exemple changer l'état ou naviguer vers une autre page.
            }}
            ref={image}
            position={position}
            scale={scale}
            rotation-y={0.0174533 * rotate}
          >
            <planeGeometry args={args} />
            <shaderMaterial
              fragmentShader={fragment}
              vertexShader={vertex}
              uniforms={uniforms.current}
            />
          </mesh>
          {onHover === true && (
            <Text
              position={[0, 0, 1]} // Ajustez la position en Z pour que le texte soit visible
              fontSize={0.9} // Ajustez la taille du texte
              color="white" // Couleur du texte
            >
              Ouvrir le projet
            </Text>
          )}
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
  p: PropTypes.object.isRequired,
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
