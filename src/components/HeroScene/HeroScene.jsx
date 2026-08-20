import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "./_hero-scene.scss";

function FloatingPanel({ position, children, className = "" }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.05;

    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.35 + position[0]) * 0.03;
  });

  return (
    <group ref={ref} position={position}>
      <Html transform distanceFactor={7} center>
        <div className={`scene-panel ${className}`}>{children}</div>
      </Html>
    </group>
  );
}

function Workspace() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = state.pointer.x * 0.035;

    groupRef.current.rotation.x = -state.pointer.y * 0.025;
  });

  return (
    <group ref={groupRef}>
      {/* Workspace Base */}
      <mesh position={[0, -1.15, 0]}>
        <boxGeometry args={[4.4, 0.12, 2.8]} />

        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Laptop Base */}
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[2.8, 0.08, 1.8]} />

        <meshStandardMaterial
          color="#151d32"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Laptop Screen */}
      <mesh position={[0, 0.45, 0.35]}>
        <boxGeometry args={[2.7, 1.8, 0.08]} />

        <meshStandardMaterial
          color="#10172a"
          metalness={0.55}
          roughness={0.25}
        />
      </mesh>

      {/* Accent platform */}
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[4.5, 0.025, 2.9]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} />
      </mesh>

      <FloatingPanel position={[-1.9, 0.8, 0.2]} className="scene-panel--react">
        <strong>React</strong>

        <span>Components</span>
        <span>Hooks</span>
        <span>State</span>
      </FloatingPanel>

      <FloatingPanel position={[1.95, 0.95, 0]} className="scene-panel--api">
        <strong>API</strong>
        <span>200 OK</span>
        <span>/users</span>
      </FloatingPanel>

      <FloatingPanel
        position={[1.8, -0.3, 0.1]}
        className="scene-panel--component"
      >
        <strong>{`<Component />`}</strong>
        <span>Reusable UI</span>
      </FloatingPanel>

      <FloatingPanel position={[-1.8, -0.2, 0]} className="scene-panel--state">
        <strong>State</strong>
        <span>Redux</span>
        <span>React Query</span>
      </FloatingPanel>
    </group>
  );
}

function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 42,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />

        <pointLight
          position={[3, 2, 4]}
          intensity={10}
          distance={8}
          color="#7c3aed"
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={6}
          distance={7}
          color="#4c1d95"
        />

        <Workspace />
      </Canvas>
    </div>
  );
}

export default HeroScene;
