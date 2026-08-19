import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import "./_hero-scene.scss";

function Network() {
  const groupRef = useRef(null);

  const nodes = useMemo(
    () => [
      [-1.8, 0.9, -0.5],
      [-0.8, 1.6, -0.2],
      [0.4, 1.1, -0.4],
      [1.5, 0.7, -0.6],
      [1.8, -0.2, -0.3],
      [0.7, -0.8, -0.5],
      [-0.5, -0.9, -0.2],
      [-1.6, -0.5, -0.4],
      [0, 0, 0],
    ],
    []
  );

  const connections = useMemo(() => {
    const lines = [];

    const pairs = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 0],
      [0, 8],
      [1, 8],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
    ];

    pairs.forEach(([start, end]) => {
      const startPoint = new THREE.Vector3(...nodes[start]);
      const endPoint = new THREE.Vector3(...nodes[end]);

      lines.push([startPoint, endPoint]);
    });

    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y = time * 0.08;

    groupRef.current.rotation.x =
      Math.sin(time * 0.25) * 0.08;

    groupRef.current.position.x =
      state.pointer.x * 0.12;

    groupRef.current.position.y =
      state.pointer.y * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Central geometry */}
      <Float
        speed={1.2}
        rotationIntensity={0.35}
        floatIntensity={0.4}
      >
        <mesh>
          <icosahedronGeometry args={[1.15, 2]} />

          <meshBasicMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Nodes */}
      {nodes.map((position, index) => (
        <mesh
          key={index}
          position={position}
        >
          <sphereGeometry args={[0.055, 12, 12]} />

          <meshBasicMaterial color="#7c3aed" />
        </mesh>
      ))}

      {/* Connections */}
      {connections.map(([start, end], index) => {
        const points = [start, end];

        const geometry =
          new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line
            key={index}
            geometry={geometry}
          >
            <lineBasicMaterial
              color="#94a3b8"
              transparent
              opacity={0.35}
            />
          </line>
        );
      })}

      {/* Floating octahedron */}
      <Float
        speed={1.6}
        rotationIntensity={0.5}
        floatIntensity={0.7}
      >
        <mesh position={[-2.2, 1.5, -1]}>
          <octahedronGeometry args={[0.28, 0]} />

          <meshBasicMaterial
            color="#64748b"
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating torus */}
      <Float
        speed={1.4}
        rotationIntensity={0.45}
        floatIntensity={0.6}
      >
        <mesh position={[2.2, -1.1, -0.8]}>
          <torusGeometry
            args={[0.32, 0.08, 12, 32]}
          />

          <meshBasicMaterial
            color="#7c3aed"
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

function BackgroundParticles() {
  const pointsRef = useRef(null);

  /*
   * Deterministic particle positions.
   *
   * We intentionally don't use Math.random()
   * because React Compiler considers it an impure
   * function during render.
   */
  const particles = useMemo(() => {
    const positions = new Float32Array(240 * 3);

    for (let i = 0; i < 240; i++) {
      const x =
        ((i * 37) % 100) / 100 - 0.5;

      const y =
        ((i * 67) % 100) / 100 - 0.5;

      const z =
        ((i * 97) % 100) / 100 - 0.5;

      positions[i * 3] = x * 9;

      positions[i * 3 + 1] = y * 6;

      positions[i * 3 + 2] = z * 5;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.015;

    pointsRef.current.rotation.x =
      state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#94a3b8"
        size={0.018}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <Network />

      <BackgroundParticles />
    </>
  );
}

function HeroScene() {
  return (
    <div
      className="hero-scene"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}

export default HeroScene;