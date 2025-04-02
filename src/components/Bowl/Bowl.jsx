
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  function Bowl(props) {
  const { nodes, materials } = useGLTF('/tibetianBowl2.glb')
  return (
    <group {...props}  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stereo_textured_mesh.geometry}
        material={materials.Material0}
        position={[-0.059, 0.402, -6.693]}
        rotation={[0.066, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/tibetianBowl2.glb')

