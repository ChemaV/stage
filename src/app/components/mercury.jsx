import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Mercury_1_4878.glb");
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    
    const colorPalette = ["#4fd93a", "#D93BA8", "#3F8395", "#C2BC76"];
    const nextColor = colorPalette[(colorIndex + 1) % colorPalette.length];
    setColorIndex((prevIndex) => (prevIndex + 1) % colorPalette.length);

    
    nodes.Cube008.material.color.set(nextColor);
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </group>
  );
}

useGLTF.preload("/Mercury_1_4878.glb");
