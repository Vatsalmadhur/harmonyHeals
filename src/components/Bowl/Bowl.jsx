import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Box } from '@chakra-ui/react'

export const Bowl = (props) => {

      const { nodes, materials } = useGLTF('/bowl.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stereo_textured_mesh.geometry}
        material={materials.Material0}
        position={[-0.059, 0.402, -6.693]}
      />
    </group>
    )


}
useGLTF.preload('/bowl.glb')


