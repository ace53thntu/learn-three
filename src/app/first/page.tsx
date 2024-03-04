"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { css } from "styled-system/css";

import { Three } from "@/utils/components/three";
import { OrbitControls, View } from "@react-three/drei";

const Scene = dynamic(() => import("@/components/common/canvas/scene"), { ssr: false });
const Common = dynamic(() => import("@/components/common/canvas/common").then((mod) => mod.Common), { ssr: false });
const Stacy = dynamic(() => import("@/components/demo/stacy").then((mod) => mod.Model), { ssr: false });

export default function First() {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={ref}
      className={css({
        position: "relative",
        w: "100%",
        h: "100vh",
        overflow: "auto",
        touchAction: "auto",
      })}
    >
      <Three>
        <View track={ref}>
          <Suspense fallback={null}>
            <Stacy position={[0, -1, 0]} />
            <Common color="white" />
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
              <planeGeometry args={[10, 10, 1, 1]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Suspense>
          <OrbitControls />
        </View>
      </Three>
      <Scene
        eventSource={ref}
        eventPrefix="client"
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        })}
      />
    </div>
  );
}
