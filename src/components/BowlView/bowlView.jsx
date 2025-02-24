import { Box } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import { Bowl } from '../Bowl/Bowl'
import { Suspense, useRef } from 'react'
import { Stage } from '@react-three/drei'

const MusicSphere = () => {
    const texture= useLoader(TextureLoader,'/assets/sphereTexture.svg');
    const ref=useRef();
  return (
    <>
    <Box width='100vw' height='90vh' position='relative' aspectRatio={4/3}  >
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50,position:[7,10,7] }}  >
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}   environment="studio"  >
        
          <Bowl/>
        
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} rotateSpeed={0.1} autoRotate autoRotateSpeed={0.1} minDistance={4.5} maxDistance={4.5} />
    </Canvas>

    </Box>
    </>
  )
}

export default MusicSphere