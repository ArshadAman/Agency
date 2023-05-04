import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import map from "../assets/images/mars.jpg";
const Sphere = () => {
  const base = new THREE.TextureLoader().load(map);
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // ref.current.rotation.x = t * 0.1;
    ref.current.rotation.y = t * 0.1;
  });
  return (
    <mesh visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2.7, 32, 32]} />
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};

const Banner = () => {
  return (
    <div className="h-[91vh] bg-gradient-to-r from-[#0c0c0c] from-55% to-100% to-[#1f3a35] text-white flex items-center justify-between">

      <div className="left space-y-3 w-[60%] px-32">
        <p className="text-[#6c827d]">DevXplore</p>
        <h1 className="text-6xl">
          WE ARE <span className="text-[#6ed5bc]">DevXplore</span>
        </h1>
        <div className="line w-8 h-0.5 bg-[#7c8b86]"></div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quia dolorem fugit nihil iusto non minima repellat nostrum eligendi
          sapiente ex odit? Animi tenetur maiores deleniti qui dolorum inventore
          ullam.
        </p>
      </div>
      <div className="right w-[40%] h-[100%]">
        <Canvas className="">
          <ambientLight />
          <Sphere />
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;
