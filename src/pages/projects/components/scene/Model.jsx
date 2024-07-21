import { useContext, useEffect, useRef, useState } from "react";
import { fragment, vertex } from "./Shader";
import { useFrame } from "@react-three/fiber";
import { useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";
import resolutionContext from "../../../../providers/resolution/resolutionContext";
import projectContext from "../../../../providers/project/projectContext";
import projectsContext from "../../../../providers/projects/projectsContext";
import { useNavigate } from "react-router-dom";
import themeContext from "../../../../providers/theme/themeContext";

const Model = ({ img, x, rotate, p }) => {
  const image = useRef();
  const { theme } = useContext(themeContext);
  const { projects, setProjects } = useContext(projectsContext);
  const texture = useTexture(img);
  const navigate = useNavigate();
  const { setProject } = useContext(projectContext);
  const [position, setPosition] = useState([]);
  const [args, setArgs] = useState([]);
  const [onHover, setOnHover] = useState(false);
  const [scale, setScale] = useState([]);
  const [scaleText, setScaleText] = useState(null);
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
        uniforms.current.vUvScale.value.set(1, 1);
        uniforms.current.vUvOffset.value.set(0, 0);
      }
    };

    updateTextureUniforms();
    window.addEventListener("resize", updateTextureUniforms);

    return () => {
      window.removeEventListener("resize", updateTextureUniforms);
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
      setArgs([500 / 105, 500 / 70, 20, 20]);
    } else {
      setArgs([500 / 120, 500 / 175, 20, 20]);
    }
  }, [args, resolution]);

  useEffect(() => {
    let maxScale;
    let minScale;
    if (resolution > 700) {
      maxScale = 2;
      minScale = 0.1;
    } else if (resolution < 425) {
      maxScale = 1;
      minScale = 0.1;
    } else {
      maxScale = 1.5;
      minScale = 0.1;
    }

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
  }, [resolution, rotate]);
  useEffect(() => {
    uniforms.current.uOpacity.value = opacity;
  }, [opacity]);

  useEffect(() => {
    let maxScale;
    let minScale;
    if (resolution > 700) {
      maxScale = 0.5;
      minScale = 0;
    } else if (resolution < 425) {
      maxScale = 0.2;
      minScale = 0;
    } else {
      maxScale = 0.3;
      minScale = 0;
    }
    const absRotate = Math.abs(rotate);

    let newScale;

    if (absRotate === 0) {
      newScale = maxScale;
    } else if (absRotate >= 90) {
      newScale = minScale;
    } else {
      newScale = maxScale - (absRotate / 90) * (maxScale - minScale);
    }

    setScaleText(newScale);
  }, [resolution, rotate]);
  useEffect(() => {
    const handleScroll = () => {
      if (rotate < 45 && rotate > -45) {
        if (onHover === true) {
          setOpacity(0.05);
          setOnHover(true);
          document.body.style.cursor = "pointer";
        }
      } else {
        setOpacity(1);
        setOnHover(false);
        document.body.style.cursor = "default";
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [onHover, rotate]);
  return (
    <>
      {args.length > 0 && position.length > 0 && scale.length > 0 && (
        <>
          <mesh
            onPointerOver={() => {
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
              /* setValue((prev) => ({
                ...prev,
                page: p.title,
              })); */
              let remplaceString = p.title.replace(/\s/g, "-");
              navigate("/projet/" + remplaceString);
              /* setProjects((prev) => ({
                ...prev,
                isModalOpen: true,
              })); */
              setProject((prev) => ({
                ...prev,
                title: p.title,
                img: p.arrayImg,
                description: p.description,
                techs: p.techs,
                links: p.links,
              }));
              document.body.style.cursor = "default";
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
          {onHover === true && scaleText !== null && (
            <Text
              rotation-y={0.0174533 * rotate}
              position={[0, 0, 1]}
              fontSize={scaleText}
              color={`${theme === "dark" ? "white" : "black"}`}
            >
              Ouvrir le projet {p.title}
            </Text>
          )}
        </>
      )}
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
