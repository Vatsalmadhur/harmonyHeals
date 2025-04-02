import { Box } from '@chakra-ui/react'
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import { Bowl } from '../Bowl/Bowl'
import { Suspense, useRef } from 'react'
import { Stage } from '@react-three/drei'
const BowlView = () => {
  return (
    <>
    <div className='w-screen md:h-[80vh] h-[40vh] relative '  >
    <Canvas   dpr={[1, 2]}  camera={{ fov: 50, position: [7, 10, 7], near: 0.1, far: 100 }}>
      <Suspense fallback="Loading...">
        <Stage preset="rembrandt" intensity={1}  environment="studio"  >
          <Bowl/>
        </Stage>
      </Suspense>
      <OrbitControls  enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.3}  autoRotateSpeed={0.1}  />
    </Canvas>
    </div>
    </>
  )
}

export default BowlView