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
export default function Hero (){
  gsap.registerPlugin("ScrollTrigger");
  useGSAP(() => {
    const tl=gsap.timeline()
    tl.fromTo(".heroText",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease:"power4.out",stagger:0.1 }
    );
    tl.to(".heroBtns",{
      opacity:1,
      duration:1
    })
    tl.to('.bgimg',
    {
      scale:1.1,
      scrollTrigger:{
        trigger:'.bgimg',
        start:"top top",
        scrub:true,
        pin:true
      }
    })
  })
  const router = useRouter()
  return (
    <div  className="flex flex-col w-screen h-[100vh] justify-center m-0 p-0 items-center relative">
      <div style={{backgroundImage: "url('/assets/background.webp')"}} className='w-screen h-screen absolute bg-cover bg-center bgimg'></div>

      <div className="flex flex-col gap-5 items-center w-auto z-10 ">
        <div className='flex flex-col items-center '>
          <p className="heroText text-center lg:text-7xl md:text-7xl text-6xl customFont1   ">Ancient Sounds,</p>
          <p className="heroText lg:text-7xl md:text-6xl text-5xl  text-center customFont1 font-bold ">Modern wellness.</p>
        </div>
        <p className="heroText text-lg md:text-2xl  text-center ">Sounds for the Mind, Body and Soul.</p>
        <div className='flex justify-center gap-10 w-[400px]  heroBtns z-10 opacity-0'>
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
