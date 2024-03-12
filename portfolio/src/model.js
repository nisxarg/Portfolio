import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Illustration = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;

    const init = () => {
      // Initialize Three.js scene
      scene = new THREE.Scene();
      
      // Create camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Load GLB model
      const loader = new GLTFLoader();
      loader.load('C:/Users/acer/Desktop/Portfolio Website/portfolio/src/bin.glb', (gltf) => {
        scene.add(gltf.scene);
      });

      // Animate
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    // Cleanup
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Illustration;
