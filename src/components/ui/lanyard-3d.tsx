"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel fallback
const BLANK_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

// Card texture UV regions (measured from card.glb)
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

interface Lanyard3DProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string;
  backImage?: string;
  lanyardImage?: string;
  lanyardWidth?: number;
  className?: string;
}

interface ExtendedRigidBody extends RapierRigidBody {
  lerped?: THREE.Vector3;
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = "/images/id-card-front.png",
  backImage = "/images/id-card-back.png",
  lanyardImage = "/assets/lanyard/lanyard_amin.png",
  lanyardWidth = 0.68,
}: {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string;
  backImage?: string;
  lanyardImage?: string;
  lanyardWidth?: number;
}) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<ExtendedRigidBody>(null);
  const j2 = useRef<ExtendedRigidBody>(null);
  const j3 = useRef<ExtendedRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);

  const segmentProps = useMemo(
    () => ({
      type: "dynamic" as const,
      canSleep: true,
      colliders: false as const,
      angularDamping: 4,
      linearDamping: 4,
    }),
    []
  );

  const { nodes, materials } = useGLTF("/assets/lanyard/card.glb") as any;
  const texture = useTexture(lanyardImage);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Composite front and back textures onto the 3D card UV atlas
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map as THREE.Texture;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image as HTMLImageElement;
    if (!baseImg) return baseMap;

    const W = baseImg.width || 1678;
    const H = baseImg.height || 1677;

    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return baseMap;

    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img: HTMLImageElement, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const scale = Math.max(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && (frontTex as any).image) drawFitted((frontTex as any).image as HTMLImageElement, FRONT_UV_RECT);
    if (backImage && (backTex as any).image) drawFitted((backTex as any).image as HTMLImageElement, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, frontTex, backTex, materials.base.map]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  // Physics joints connecting rope segments and card
  useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 0.6]);
  useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 0.6]);
  useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 0.6]);
  useSphericalJoint(j3 as any, card as any, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current && card.current) {
      [j1, j2, j3].forEach((ref) => {
        if (!ref.current) return;
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation() as THREE.Vector3);
        }
        const currentTranslation = ref.current.translation() as THREE.Vector3;
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(currentTranslation))
        );
        ref.current.lerped.lerp(
          currentTranslation,
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      if (j3.current?.lerped && j2.current?.lerped && j1.current?.lerped && fixed.current) {
        curve.points[0].copy(j3.current.lerped);
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation() as THREE.Vector3);

        if (band.current) {
          (band.current.geometry as any).setPoints(curve.getPoints(isMobile ? 24 : 32));
        }
      }

      // Restabilize rotation to face forward smoothly
      ang.copy(card.current.angvel() as THREE.Vector3);
      rot.copy(card.current.rotation() as any);
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        true
      );
    }
  });

  curve.curveType = "centripetal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const { width: vpWidth, height: vpHeight } = useThree((state) => state.viewport);
  const { width: sizeW, height: sizeH } = useThree((state) => state.size);
  const anchorX = isMobile ? 0 : Math.min(3.8, Math.max(1.8, vpWidth * 0.28));
  const anchorY = isMobile ? vpHeight / 2 + 0.3 : vpHeight / 2 + 0.6;
  const cardScale = isMobile ? 2.4 : 2.95;

  return (
    <>
      <group position={[anchorX, anchorY, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0, -0.6, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0, -1.2, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0, -1.8, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody
          position={[0, -3.25, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.92, 1.3, 0.01]} />
          <group
            scale={cardScale}
            position={[0, -1.35, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              if (card.current) {
                const currentTrans = card.current.translation() as THREE.Vector3;
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(currentTrans)));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.75}
                metalness={0.1}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[sizeW || 1200, sizeH || 800]}
          useMap
          map={texture}
          repeat={[-2, 1]}
          lineWidth={isMobile ? lanyardWidth * 0.9 : lanyardWidth}
        />
      </mesh>
    </>
  );
}

export default function Lanyard3D({
  position,
  gravity = [0, -40, 0],
  fov = 24,
  frontImage = "/images/id-card-front.png",
  backImage = "/images/id-card-back.png",
  lanyardImage = "/assets/lanyard/lanyard_amin.png",
  lanyardWidth = 0.78,
  className = "",
}: Lanyard3DProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultPosition: [number, number, number] =
    position || (isMobile ? [0, -0.05, 14.5] : [0, 0.1, 13.0]);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <Canvas
        key={isMobile ? "mobile" : "desktop"}
        camera={{ position: defaultPosition, fov }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={Math.PI * 0.85} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
