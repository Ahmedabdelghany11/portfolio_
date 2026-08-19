import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import "./_hero-scene.scss";

function SoftwareCore() {
  const coreRef = useRef(null);
  const innerRef = useRef(null);

  useFrame((state) => {
    if (!coreRef.current || !innerRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    coreRef.current.rotation.y =
      time * 0.12;

    coreRef.current.rotation.x =
      Math.sin(time * 0.3) * 0.08;

    innerRef.current.rotation.z =
      time * -0.18;

    innerRef.current.rotation.y =
      time * 0.08;
  });

  return (
    <group ref={coreRef}>
      {/* Outer Architecture */}
      <mesh>
        <icosahedronGeometry
          args={[1.05, 1]}
        />

        <meshBasicMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Inner System */}
      <mesh ref={innerRef}>
        <octahedronGeometry
          args={[0.68, 1]}
        />

        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry
          args={[0.24, 20, 20]}
        />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.85}
        />
      </mesh>

      <pointLight
        color="#7c3aed"
        intensity={1.4}
        distance={3}
      />
    </group>
  );
}

function Module({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    ref.current.rotation.x =
      rotation[0] +
      Math.sin(time * 0.5) * 0.08;

    ref.current.rotation.y =
      rotation[1] +
      Math.cos(time * 0.4) * 0.08;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.15}
      floatIntensity={0.35}
    >
      <group
        ref={ref}
        position={position}
        scale={scale}
        rotation={rotation}
      >
        {/* Main Module */}
        <mesh>
          <boxGeometry
            args={[0.65, 0.65, 0.12]}
          />

          <meshBasicMaterial
            color="#64748b"
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Inner Layer */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry
            args={[0.42, 0.42, 0.04]}
          />

          <meshBasicMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Indicator */}
        <mesh
          position={[0.18, 0.18, 0.1]}
        >
          <sphereGeometry
            args={[0.035, 10, 10]}
          />

          <meshBasicMaterial
            color="#8b5cf6"
          />
        </mesh>
      </group>
    </Float>
  );
}

function ArchitectureRings() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.x =
      Math.sin(time * 0.15) * 0.12;

    groupRef.current.rotation.z =
      time * 0.025;
  });

  return (
    <group ref={groupRef}>
      <mesh
        rotation={[
          Math.PI / 2.5,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.45,
            0.012,
            8,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.28}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 3,
          0.3,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.75,
            0.008,
            8,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#94a3b8"
          transparent
          opacity={0.16}
        />
      </mesh>

      <mesh
        rotation={[
          0.5,
          Math.PI / 2,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.05,
            0.006,
            8,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

function Connections() {
  const connections = useMemo(() => {
    const pairs = [
      [
        [-1.7, 0.9, -0.3],
        [-0.7, 0.35, 0],
      ],
      [
        [1.7, 0.85, -0.4],
        [0.7, 0.35, 0],
      ],
      [
        [-1.8, -0.75, -0.2],
        [-0.7, -0.3, 0],
      ],
      [
        [1.7, -0.8, -0.3],
        [0.7, -0.3, 0],
      ],
    ];

    return pairs.map(([start, end]) => {
      return new THREE.BufferGeometry()
        .setFromPoints([
          new THREE.Vector3(...start),
          new THREE.Vector3(...end),
        ]);
    });
  }, []);

  return (
    <group>
      {connections.map(
        (geometry, index) => (
          <line
            key={index}
            geometry={geometry}
          >
            <lineBasicMaterial
              color="#7c3aed"
              transparent
              opacity={0.2}
            />
          </line>
        )
      )}
    </group>
  );
}

function BackgroundParticles() {
  const pointsRef = useRef(null);

  const particles = useMemo(() => {
    const positions =
      new Float32Array(140 * 3);

    for (let i = 0; i < 140; i++) {
      const x =
        ((i * 37) % 100) / 100 - 0.5;

      const y =
        ((i * 67) % 100) / 100 - 0.5;

      const z =
        ((i * 97) % 100) / 100 - 0.5;

      positions[i * 3] = x * 8;

      positions[i * 3 + 1] =
        y * 5.5;

      positions[i * 3 + 2] =
        z * 4;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.008;

    pointsRef.current.rotation.x =
      state.clock.elapsedTime * 0.004;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={
            particles.length / 3
          }
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#94a3b8"
        size={0.015}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function HeroSceneContent() {
  const sceneRef = useRef(null);

  useFrame((state) => {
    if (!sceneRef.current) return;

    sceneRef.current.position.x =
      state.pointer.x * 0.08;

    sceneRef.current.position.y =
      state.pointer.y * 0.05;
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.4} />

      <SoftwareCore />

      <ArchitectureRings />

      <Connections />

      <Module
        position={[-1.7, 0.9, -0.3]}
        rotation={[0.2, 0.4, 0.2]}
        scale={0.7}
      />

      <Module
        position={[1.7, 0.85, -0.4]}
        rotation={[-0.2, -0.4, 0.15]}
        scale={0.65}
      />

      <Module
        position={[-1.8, -0.75, -0.2]}
        rotation={[0.15, 0.2, -0.15]}
        scale={0.58}
      />

      <Module
        position={[1.7, -0.8, -0.3]}
        rotation={[-0.1, 0.35, 0.2]}
        scale={0.62}
      />

      <BackgroundParticles />
    </group>
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