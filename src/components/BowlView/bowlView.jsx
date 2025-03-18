import { Box } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import { Bowl } from '../Bowl/Bowl'
import { Suspense, useRef } from 'react'
import { Stage } from '@react-three/drei'
import { gsap } from 'gsap'
import { Perf } from 'r3f-perf'

const MusicSphere = () => {
    // const texture= useLoader(TextureLoader,'/assets/sphereTexture.svg');
    const ref=useRef();
  return (
    <>
    <div className='w-screen md:h-[80vh] h-[40vh] relative '  >
    <Canvas  dpr={[1, 2]} camera={{ fov: 50,position:[7,10,7] }} antialias={false} >
      <Suspense fallback="Loading...">
        {/* <Perf/> */}
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="studio"  >

          <Bowl/>

        </Stage>
      </Suspense>
      <OrbitControls ref={ref} enableZoom={false} autoRotate rotateSpeed={0.3}  autoRotateSpeed={0.1}  />
    </Canvas>

    </div>
    </>
  )
}

export default MusicSphere