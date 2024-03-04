"use client";

import { FC, Suspense } from "react";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

type Props = {
  color?: THREE.ColorRepresentation;
};

export const Common: FC<Props> = ({ color }) => {
  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight />
      <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
      <pointLight position={[-10, -10, -10]} decay={0.2} />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />

      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </Suspense>
  );
};

Common.displayName = "Common";
