import { Environment, MeshDistortMaterial, OrbitControls, Image, Text3D, Center, GradientTexture, Shadow, Float, Stage, Plane, SoftShadows, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';



// components
import AnnounceComponent from './components/announce/announce';
import Football from './components/football';
import Helmet from './components/helmet';
import Player from './components/player';
import Trophy, { TrophyObject } from './components/trophy';


import './App.scss';
import * as THREE from 'three';

function App() {
  return (
    <div className="">
      
      
      {/* this disappears after 3 seconds */}
      <AnnounceComponent />

      <ExperienceComponent />


    </div>
  );
}


function Light() {
  const [rotationX, setRotationX] = useState(0)
  useFrame((_) => (setRotationX(_.clock.elapsedTime)))

  return (
    <group>
      <rectAreaLight width={150} height={100} position={[10, 20, -30]} intensity={5} rotation-x={rotationX} onUpdate={(self) => self.lookAt(0, 0, 0)} />
    </group>
  )
}

const ExperienceComponent = ()=> {


  return (
    <div className='experience'>

      {/* <h1> Load </h1> */}

      <Canvas shadows camera={{ far: 8000, fov: 80 }}>

        <OrbitControls />

        <ambientLight intensity={.9} />
        <directionalLight position={[ -4, 5, 2 ]} intensity={2} color="red" castShadow />
        <directionalLight position={[ 0, 5, 2 ]} intensity={2} color="green" castShadow />
        <directionalLight position={[ 5, 9, 2 ]} intensity={1} color="blue" castShadow />
        <directionalLight position={[ -5, 9, -2 ]} intensity={100} color="black" castShadow />
        <spotLight position={[ -2, 9, -2  ]} intensity={2} color="orange" castShadow />
        <spotLight position={[ -9, 9, -2  ]} intensity={2} color="purple" castShadow />
        <Light />

        <SoftShadows />

        <Environment
          preset='dawn'
          near={1}
          far={1000}
          resolution={256}
          blur={.4}
          background
        >
          {/* <Football /> */}
        </Environment>

        {/* <mesh position={[ -0, 0, 2 ]}>
              <sphereGeometry args={[ 1.8, 80, 80 ]} />
              <meshLambertMaterial color="green" opacity={0.5} />
              
              <MeshDistortMaterial
                attach="material"
                color="green"
                distort={.5}
                speed={1.8}
                roughness={0}
              />
            </mesh> */}

            {/* <Trophy /> */}
            <Player />
            <Helmet />
            <Football />

            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
              floatIntensity={.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[1, 1.5]}
            >
              <TrophyObject />
            </Float>

            {/* <Stage /> */}

           
            {/* ground */}
            <mesh
              rotation-x={ -Math.PI / 2 }
              position={[ 0, -4, -10]}
              receiveShadow={true}
              castShadow
            >
              <planeGeometry 
                args={[ 200, 200, 200 ]}
              />
              <meshBasicMaterial color="lightblue" opacity={.2} />
            </mesh>


            <fog attach="fog" args={['gray', 60, 100]} />
            <Shadow
              color="black"
              colorStop={0}
              opacity={1}
              scale={100}
              position-y={-3.7}
              fog={false} // Reacts to fog (default=false)
            />
            
            {/* gradient background */}
            <mesh scale={[ 40, 40, 40 ]}>
              <sphereGeometry args={[2.5, 30, 30]} attach="geometry" />
                <meshBasicMaterial side={THREE.BackSide}>
                  <GradientTexture
                    stops={[0, .9]} // As many stops as you want
                    colors={[ 'blue', 'red']} // Colors need to match the number of stops
                    size={1024} 
                  />
              </meshBasicMaterial>
            </mesh>

            {/* 3d text */}
            <group position={[ 0, -2, 1 ]}>
              <Center>
                <Text3D
                  font="/fonts/Rubik Light_Regular.json"
                  args={[  ]}
                  bevelEnabled
                  size={.5}
                  bevelThickness={.01}
                  castShadow
                  receiveShadow
                >
                  USFL.
                  {/* <meshBasicMaterial color="black" />
                  <meshPhongMaterial color={"black"} /> */}
                  <meshBasicMaterial>
                      <GradientTexture
                        stops={[0, .9]}
                        // colors={[ 'lightblue', 'pink']}
                        colors={[ 'purple', 'white']}
                        size={2048}
                      />
                  </meshBasicMaterial>
                </Text3D>
              </Center>
            </group>
            

      </Canvas>

    </div>
  )
}

export default App;
