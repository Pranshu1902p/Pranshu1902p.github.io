import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);

  const computerImage = new THREE.TextureLoader().load(
    "https://avatars.githubusercontent.com/u/70687348?v=4"
  );

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial map={computerImage} />
    </mesh>
  );
}

export default function ImageCube() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>
// );
