"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Petal({ seed }: { seed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const data = useMemo(() => {
    const r = (n: number) => Math.sin(seed * 9999 + n) * 0.5 + 0.5;
    return {
      x: (r(1) - 0.5) * 14,
      y: (r(2) - 0.5) * 8,
      z: (r(3) - 0.5) * 6,
      speed: 0.2 + r(4) * 0.4,
      rot: r(5) * Math.PI * 2,
      size: 0.18 + r(6) * 0.18,
      color: r(7) > 0.5 ? "#C9A24B" : r(7) > 0.25 ? "#E8C7C0" : "#FBF5E9",
    };
  }, [seed]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = data.y + Math.sin(t * data.speed + seed) * 1.2;
    ref.current.position.x = data.x + Math.cos(t * data.speed * 0.6 + seed) * 0.5;
    ref.current.rotation.x = data.rot + t * 0.3;
    ref.current.rotation.z = data.rot + t * 0.2;
  });

  return (
    <mesh ref={ref} position={[data.x, data.y, data.z]} scale={data.size}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial
        color={data.color}
        emissive={data.color}
        emissiveIntensity={0.3}
        roughness={0.5}
        metalness={0.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function Scene({ count }: { count: number }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#C9A24B" />
      <pointLight position={[-10, -5, 5]} intensity={0.6} color="#E8C7C0" />
      {Array.from({ length: count }).map((_, i) => (
        <Petal key={i} seed={i + 1} />
      ))}
    </>
  );
}

export default function PetalScene() {
  // Reduce on small screens for performance
  const count = typeof window !== "undefined" && window.innerWidth < 640 ? 20 : 45;
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene count={count} />
        </Suspense>
      </Canvas>
    </div>
  );
}
