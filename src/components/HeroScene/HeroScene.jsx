import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import "./_hero-scene.scss";

function SoftwareCore() {
  const groupRef = useRef(null);
  const innerRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current || !innerRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y = time * 0.12;
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.06;

    innerRef.current.rotation.z = time * -0.18;
    innerRef.current.rotation.y = time * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Architecture Shell */}
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />

        <meshBasicMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Internal Layer */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.68, 1]} />

        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.52}
        />
      </mesh>

      {/* System Core */}
      <mesh>
        <sphereGeometry args={[0.2, 20, 20]} />

        <meshBasicMaterial color="#a78bfa" transparent opacity={0.9} />
      </mesh>

      <pointLight color="#7c3aed" intensity={1.3} distance={3} />
    </group>
  );
}

function SoftwareModule({ position, scale = 1, accent = false }) {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.x = Math.sin(time * 0.45) * 0.06;

    groupRef.current.rotation.y = Math.cos(time * 0.4) * 0.08;
  });

  return (
    <Float speed={1} rotationIntensity={0.12} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Module frame */}
        <mesh>
          <boxGeometry args={[0.72, 0.55, 0.08]} />

          <meshBasicMaterial
            color={accent ? "#7c3aed" : "#64748b"}
            wireframe
            transparent
            opacity={accent ? 0.58 : 0.3}
          />
        </mesh>

        {/* UI / Code bars */}
        {[0, 1, 2].map((index) => (
          <mesh
            key={index}
            position={[-0.12 + index * 0.04, 0.12 - index * 0.11, 0.06]}
          >
            <boxGeometry args={[index === 0 ? 0.38 : 0.26, 0.025, 0.015]} />

            <meshBasicMaterial
              color={accent && index === 0 ? "#a78bfa" : "#94a3b8"}
              transparent
              opacity={0.55}
            />
          </mesh>
        ))}

        {/* Status indicator */}
        <mesh position={[0.26, 0.2, 0.07]}>
          <sphereGeometry args={[0.025, 10, 10]} />

          <meshBasicMaterial color={accent ? "#a78bfa" : "#94a3b8"} />
        </mesh>
      </group>
    </Float>
  );
}

function ArchitectureRings() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.x = Math.sin(time * 0.12) * 0.1;

    groupRef.current.rotation.z = time * 0.022;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.45, 0.012, 8, 96]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0.3, 0]}>
        <torusGeometry args={[1.75, 0.008, 8, 96]} />

        <meshBasicMaterial color="#94a3b8" transparent opacity={0.13} />
      </mesh>

      <mesh rotation={[0.5, Math.PI / 2, 0]}>
        <torusGeometry args={[2.05, 0.006, 8, 96]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function Connections() {
  const connections = useMemo(() => {
    const pairs = [
      [
        [-1.7, 0.9, -0.3],
        [-0.75, 0.25, 0],
      ],
      [
        [1.7, 0.85, -0.4],
        [0.7, 0.25, 0],
      ],
      [
        [-1.8, -0.75, -0.2],
        [-0.72, -0.25, 0],
      ],
      [
        [1.7, -0.8, -0.3],
        [0.7, -0.25, 0],
      ],
    ];

    return pairs.map(([start, end]) =>
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
      ]),
    );
  }, []);

  return (
    <group>
      {connections.map((geometry, index) => (
        <line key={index} geometry={geometry}>
          <lineBasicMaterial color="#7c3aed" transparent opacity={0.18} />
        </line>
      ))}
    </group>
  );
}

function BackgroundParticles() {
  const pointsRef = useRef(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(140 * 3);

    for (let i = 0; i < 140; i++) {
      const x = ((i * 37) % 100) / 100 - 0.5;

      const y = ((i * 67) % 100) / 100 - 0.5;

      const z = ((i * 97) % 100) / 100 - 0.5;

      positions[i * 3] = x * 8;
      positions[i * 3 + 1] = y * 5.5;
      positions[i * 3 + 2] = z * 4;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;

    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.004;
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
        size={0.015}
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  );
}

function HeroSceneContent() {
  const sceneRef = useRef(null);

  useFrame((state) => {
    if (!sceneRef.current) {
      return;
    }

    sceneRef.current.position.x = state.pointer.x * 0.08;

    sceneRef.current.position.y = state.pointer.y * 0.05;
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.35} />

      <SoftwareCore />

      <ArchitectureRings />

      <Connections />

      <SoftwareModule position={[-1.7, 0.9, -0.3]} scale={0.8} accent />

      <SoftwareModule position={[1.7, 0.85, -0.4]} scale={0.72} />

      <SoftwareModule position={[-1.8, -0.75, -0.2]} scale={0.65} />

      <SoftwareModule position={[1.7, -0.8, -0.3]} scale={0.7} />

      <BackgroundParticles />
    </group>
  );
}

function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.35]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}

export default HeroScene;
