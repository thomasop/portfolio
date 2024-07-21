import { useGLTF } from "@react-three/drei";

const Computer = () => {
  const computer = useGLTF("../assets/blender/computer.gltf");

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={0.6}
        position={[0, 2, -1.5]}
        rotation={[-0.01, -10.2, 0.0901]}
      />
    </mesh>
  );
};

export default Computer;
