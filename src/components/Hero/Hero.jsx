import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import { CustomButtonV1 } from '../Common/CustomButton/CustomButtonV1'
import { CustomButtonV2 } from '../Common/CustomButton/CustomButtonV2'
import BowlView from '../BowlView/bowlView'
import dynamic from "next/dynamic";
import UserFeels from '../Forms/userFeels'
export const Hero = () => {
  // GSAP animation for text elements
  useGSAP(() => {
    // gsap.to('.heroText', { opacity: 1, duration: 1,left:100, ease: 'power3.in' })
    // gsap.to('.subHeroText', { opacity: 1, duration: 1, ease: 'power3.in' })
    gsap.fromTo(".heroText",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease:"power4.out",stagger:0.1 }
    );
    gsap.to("#btns",{
      opacity:1,
      delay:1,
      duration:1
    })
  })
  const router = useRouter()
  return (
    <div style={{backgroundImage: "url('/assets/Bg5.jpg')"}} className="flex flex-col w-screen h-[100vh] justify-center m-0 p-0 items-center relative">

      <div className="flex flex-col gap-5 items-center w-auto ">
        <div className='flex flex-col items-center '>
          <p className="heroText text-center lg:text-9xl md:text-7xl text-6xl customFont1 opacity-0  ">Ancient Sounds,</p>
          <p className="heroText lg:text-8xl md:text-6xl text-5xl  text-center customFont1 font-bold opacity-0">Modern wellness.</p>
        </div>
        <p className="heroText text-lg md:text-2xl  text-center opacity-0">Sounds for the Mind, Body and Soul.</p>
        <div className='flex justify-center gap-10 w-[400px] opacity-0' id='btns'>
          <CustomButtonV1 content="Try for free" onClick={() => router.push("/category")} />
          <UserFeels />
        </div>
      </div>


      <div>
        {/* You can uncomment this if needed */}
        {/* <BowlView/> */}
      </div>

      {/* <div className="w-[400px] h-[400px] absolute right-[100px] bottom-[40px]">
        <p className="text-xl font-semibold subHeroText opacity-0">
          Did you know about the <strong className="customFont1">'Tibetan Singing Bowls'?</strong>
        </p>
        <p className="text-[1rem] text-left subHeroText opacity-0">
          Tibetan singing bowls produce resonant tones that promote relaxation, balance energy, and reduce stress. They are believed to offer benefits such as improved sleep, reduced anxiety, and enhanced emotional well-being.
        </p>
        <div className="flex flex-row gap-4 subHeroText opacity-0">
          <CustomButtonV2 content="Learn More" />
          <CustomButtonV1 content="Try for free" onClick={() => router.push("/category")} />
        </div>
      </div> */}
    </div>
  )
}
