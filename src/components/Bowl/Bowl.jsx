import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Box } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
export const Bowl = (props) => {
  const bowlref=useRef()
  const { nodes, materials } = useGLTF('/bowl.glb')

  // useGSAP(()=>{
  //   if(bowlref.current){
  //   gsap.to(bowlref.current.position,{
  //     x:1,
  //     y:1,

  //     duration:1,
  //     scale:2
  //   })
  // }
  // })


  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Stereo_textured_mesh.geometry}
        material={materials.Material0}
        position={[-0.059, 0.102, -6.693]}
        ref={bowlref}
      />
    </group>
    )


}
useGLTF.preload('/bowl.glb')


