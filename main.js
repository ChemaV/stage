import React, { useEffect } from 'react';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const Main = () => {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = 'djstage.html'; 
    script.async = true;
    document.head.appendChild(script);

    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your A-Frame scene goes here */}
      <a-scene>
        {/* ... (your A-Frame components) ... */}
      </a-scene>
    </div>
  );
};

const loader = new FontLoader();

loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

	const geometry = new TextGeometry( 'Post Organic Club', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );




export function Model(props) {
  const { nodes, materials } = useGLTF("/suzanne.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.189, -0.043]}
      />
    </group>
  );
}

useGLTF.preload("/suzanne.gltf");

export default Main;

