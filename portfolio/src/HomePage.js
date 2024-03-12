// HomePage.js

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelPath from './ill.glb'; // Import your .glb file

const Model = ({ url }) => {
  const ref = useRef();
  const [model, setModel] = useState();
  const { mouse, viewport } = useThree();

  useEffect(() => {
    new GLTFLoader().load(url, (gltf) => {
      setModel(gltf.scene);
    });
  }, [url]);

  useFrame(() => {
    if (ref.current) {
      const x = (mouse.x * viewport.width) / 1;
      const y = -(mouse.y * viewport.height) / 1;
      ref.current.rotation.y = Math.atan2(x - ref.current.position.x, -(y - ref.current.position.z));
    }
  });

  return model ? <primitive object={model} ref={ref} /> : null;
};

const HomePage = () => (
  <div className="main-content">
    {/* Box around text content */}
    <div className="content-box">
      <h1>Hello, I'm Nisarg Jadav</h1>
      <p>
        A passionate technologist with a flair for innovation. From developing futuristic communication systems for soldiers to crafting robots, I thrive on bringing cutting-edge ideas to life. Explore my journey through technology, robotics, and creative endeavors as I strive to make a meaningful impact in the world of innovation.
      </p>
    </div>
    
    {/* 3D Model */}
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas style={{ width: '100%', height: '400px' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model url={modelPath} /> {/* Use the imported .glb file */}
        <OrbitControls />
      </Canvas>
    </Suspense>
  </div>
);

export default HomePage;
