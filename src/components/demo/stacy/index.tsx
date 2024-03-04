"use client";

import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    stacy: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {};
  animations: GLTFAction[];
};

type ActionName = "pockets" | "rope" | "swingdance" | "jump" | "react" | "shrug" | "wave" | "golf" | "idle";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]>>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const texture = useTexture("/stacy.jpg");
  const { nodes, materials, animations } = useGLTF("/stacy.glb") as GLTFResult;
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions?.[names[0]]?.reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => {
      actions?.[names[0]]?.fadeOut(0.5);
    };
  }, [actions, names]);

  return (
    // @ts-ignore
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Stacy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="stacy"
            castShadow
            receiveShadow
            geometry={nodes.stacy.geometry}
            material={nodes.stacy.material}
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            {/* @ts-ignore */}
            <meshStandardMaterial map={texture} map-flipY={false} skinning />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}
