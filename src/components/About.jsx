import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import suns from "../assets/images/sun.jpg";
import earth from "../assets/images/earth.jpg";
import mars from "../assets/images/mars.jpg";
import mer from "../assets/images/mer.jpg";
import ven from "../assets/images/ven.jpg";
import jup from "../assets/images/jup.jpg";
import * as THREE from "three";

const SolarSystem = () => {
  const group = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    group.current.rotation.y = t * 0.1;
  });

  return (
    <group ref={group}>
      <Sun />
      <Planet
        orbitRadius={15}
        color="white"
        size={3}
        orbitSpeed={0.5}
        texture={mer}
      />
      <Planet
        orbitRadius={22}
        color="white"
        size={3.4}
        orbitSpeed={0.1}
        texture={ven}
      />
      <Planet
        orbitRadius={26}
        color="white"
        size={3.6}
        orbitSpeed={0.1}
        texture={earth}
      />
      <Planet
        orbitRadius={30}
        color="white"
        size={3.6}
        orbitSpeed={0.3}
        texture={mars}
      />
      {/* <Planet orbitRadius={43} color="white" size={4} orbitSpeed={0.001} texture = {jup} /> */}
    </group>
  );
};

const Sun = () => {
  const sun = new THREE.TextureLoader().load(suns);
  return (
    <mesh>
      <sphereGeometry args={[10, 32, 32]} />
      <meshBasicMaterial map={sun} color="yellow" />
    </mesh>
  );
};

const Planet = ({ orbitRadius, color, size, orbitSpeed, texture }) => {
  const ref = useRef();
  const pla = new THREE.TextureLoader().load(texture);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.sin(t * orbitSpeed + orbitRadius) * orbitRadius;
    const z = Math.cos(t * orbitSpeed + orbitRadius) * orbitRadius;

    ref.current.position.set(x, 0, z);
    ref.current.rotation.y += 0.02;
    ref.current.rotation.z += 0.02;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshPhongMaterial map={pla} color={color} />
    </mesh>
  );
};

const About = () => {
  return (
    <div className="bg-[#0c0c0c] flex text-white" id="about">
      <div className="left h-[100vh] w-[60%] flex justify-start">
        <Canvas camera={{ position: [0, 0, 50] }} className="">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SolarSystem />
        </Canvas>
      </div>
      <div className="right flex flex-col justify-center px-10 space-y-3 w-[40%]">
        <p className="text-[#6c827d] uppercase">About us</p>
        <h1 className="text-4xl">
          WE <span className="text-[#6ed5bc]">Xplore</span> The Universe To Provide You The Best Solution
        </h1>
        <div className="line w-8 h-0.5 bg-[#7c8b86]"></div>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quia dolorem fugit nihil iusto non minima repellat nostrum eligendi
          sapiente ex odit? Animi tenetur maiores deleniti qui dolorum inventore
          ullam.
        </p>
        <div className="flex">
            <div className="item">
                <h3 className="text-xl font-semibold"> icon Clean Code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, accusamus.</p>
            </div>
            <div className="item">
                <h3 className="text-xl font-semibold"> icon Modern Approach</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, accusamus.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
