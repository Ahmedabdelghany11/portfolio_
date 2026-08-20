import { Float, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import "./_developer-workspace.scss";

function CodeEditor() {
  return (
    <Html
      transform
      position={[0, 0.35, 0]}
      rotation={[0, -0.08, 0]}
      distanceFactor={5.8}
    >
      <div className="workspace-editor">
        <div className="workspace-editor__topbar">
          <div className="workspace-editor__dots">
            <span />
            <span />
            <span />
          </div>

          <span className="workspace-editor__tab">App.tsx</span>
        </div>

        <div className="workspace-editor__body">
          <div className="workspace-editor__line">
            <span>1</span>
            <code>
              <i>import</i> React <i>from</i> 'react'
            </code>
          </div>

          <div className="workspace-editor__line">
            <span>2</span>
            <code>
              <i>import</i> Header <i>from</i> './components'
            </code>
          </div>

          <div className="workspace-editor__line workspace-editor__line--empty">
            <span>3</span>
          </div>

          <div className="workspace-editor__line">
            <span>4</span>
            <code>
              <b>function</b> App() {"{"}
            </code>
          </div>

          <div className="workspace-editor__line">
            <span>5</span>
            <code className="workspace-editor__indent">
              <i>return</i> {"("}
            </code>
          </div>

          <div className="workspace-editor__line">
            <span>6</span>
            <code className="workspace-editor__indent-2">{"<Header />"}</code>
          </div>

          <div className="workspace-editor__line">
            <span>7</span>
            <code className="workspace-editor__indent">{")"}</code>
          </div>

          <div className="workspace-editor__line">
            <span>8</span>
            <code>{"}"}</code>
          </div>

          <div className="workspace-editor__line">
            <span>9</span>
            <code>
              <i>export default</i> App
            </code>
          </div>
        </div>
      </div>
    </Html>
  );
}

function ReactPanel() {
  return (
    <Html
      transform
      position={[-2.05, 0.65, 0.15]}
      rotation={[0, 0.12, -0.08]}
      distanceFactor={6.5}
    >
      <div className="workspace-card workspace-card--react">
        <div className="workspace-card__icon">⚛</div>

        <strong>React</strong>

        <div className="workspace-card__list">
          <span>Components</span>
          <span>Hooks</span>
          <span>Routing</span>
          <span>State Management</span>
        </div>
      </div>
    </Html>
  );
}

function CapabilityPanel({ position, title, value, icon, modifier = "" }) {
  return (
    <Html transform position={position} distanceFactor={6.5}>
      <div className={`workspace-capability ${modifier}`}>
        <div className="workspace-capability__icon">{icon}</div>

        <div>
          <strong>{title}</strong>
          <span>{value}</span>
        </div>
      </div>
    </Html>
  );
}

function BrowserPreview() {
  return (
    <Html
      transform
      position={[0.8, -0.95, 0.45]}
      rotation={[0.02, -0.07, 0.02]}
      distanceFactor={6.4}
    >
      <div className="workspace-browser">
        <div className="workspace-browser__topbar">
          <div className="workspace-browser__dots">
            <span />
            <span />
            <span />
          </div>

          <div className="workspace-browser__address">localhost:5173</div>
        </div>

        <div className="workspace-browser__body">
          <div className="workspace-browser__headline">
            Modern
            <br />
            Web Applications
          </div>

          <div className="workspace-browser__block" />

          <div className="workspace-browser__buttons">
            <span />
            <span />
          </div>
        </div>
      </div>
    </Html>
  );
}

function FloatingNodes() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.04;

    groupRef.current.rotation.x =
      Math.cos(state.clock.elapsedTime * 0.11) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-2.7, 1.5, -0.6]}>
        <boxGeometry args={[0.12, 0.12, 0.12]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.8} />
      </mesh>

      <mesh position={[2.7, 1.5, -0.8]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />

        <meshBasicMaterial color="#a78bfa" transparent opacity={0.75} />
      </mesh>

      <mesh position={[2.8, -0.8, -0.9]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function Workspace() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = state.pointer.x * 0.025;

    groupRef.current.rotation.x = -state.pointer.y * 0.018;
  });

  return (
    <group ref={groupRef}>
      {/* Main workspace platform */}
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[4.7, 0.08, 3]} />

        <meshStandardMaterial color="#0d1427" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Neon platform */}
      <mesh position={[0, -1.24, 0]}>
        <boxGeometry args={[4.8, 0.015, 3.05]} />

        <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} />
      </mesh>

      {/* Screen / monitor */}
      <Float speed={0.7} floatIntensity={0.08} rotationIntensity={0.03}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.15, 2.05, 0.09]} />

          <meshStandardMaterial
            color="#11192f"
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
      </Float>

      {/* Screen stand */}
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[0.15, 0.65, 0.15]} />

        <meshStandardMaterial color="#161e34" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0, -1.34, 0]}>
        <boxGeometry args={[0.85, 0.04, 0.45]} />

        <meshStandardMaterial color="#161e34" metalness={0.7} roughness={0.3} />
      </mesh>

      <CodeEditor />

      <ReactPanel />

      <CapabilityPanel
        position={[2.15, 0.8, 0]}
        icon="◉"
        title="API Integration"
        value="REST APIs"
        modifier="workspace-capability--api"
      />

      <CapabilityPanel
        position={[2.15, 0.05, 0]}
        icon="◆"
        title="Modern UI / UX"
        value="Responsive Design"
      />

      <CapabilityPanel
        position={[2.15, -0.72, 0]}
        icon="▣"
        title="Architecture"
        value="Reusable Components"
      />

      <CapabilityPanel
        position={[-1.95, -0.82, 0]}
        icon="↗"
        title="State"
        value="Redux + React Query"
        modifier="workspace-capability--state"
      />

      <BrowserPreview />

      <FloatingNodes />
    </group>
  );
}

function DeveloperWorkspace() {
  return (
    <div className="developer-workspace" aria-hidden="true">
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 40,
        }}
        dpr={[1, 1.4]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.45} />

        <pointLight
          position={[3, 3, 4]}
          intensity={9}
          distance={8}
          color="#7c3aed"
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={5}
          distance={6}
          color="#4338ca"
        />

        <Workspace />
      </Canvas>
    </div>
  );
}

export default DeveloperWorkspace;
