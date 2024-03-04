"use client";

import * as React from "react";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import { r3f } from "@/utils/global";

type Props = Omit<CanvasProps, "children"> & React.RefAttributes<HTMLCanvasElement>;

export default function Scene({ ...props }: Props): JSX.Element {
  return (
    <Canvas {...props} onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}

Scene.displayName = "Scene";
