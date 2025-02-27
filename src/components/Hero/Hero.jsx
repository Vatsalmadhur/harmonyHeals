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
    gsap.to('.heroText', { opacity: 1, duration: 1, ease: 'power3.in' })
    gsap.to('.subHeroText', { opacity: 1, duration: 1, ease: 'power3.in' })
  })

  // Next.js router hook to navigate programmatically
  const router = useRouter()

  return (
    <div className="flex w-screen h-[90vh] justify-around m-0 p-0 items-center relative">
      <UserFeels/>
      <div className="z-20 transform -rotate-90 origin-top-left leading-[80px]  w-[800px] h-[200px] absolute left-[200px] bottom-[-125px]">
        <p className="heroText text-8xl text-left customFont1 opacity-0">Ancient Sounds,</p>
        <p className="heroText text-8xl text-left customFont1 font-bold opacity-0">Modern wellness.</p>
        <p className="heroText text-xl text-left opacity-0">Sound Healing and Beyond.</p>
      </div>

      <div>
        {/* You can uncomment this if needed */}
        {/* <BowlView/> */}
      </div>

      <div className="w-[400px] h-[400px] absolute right-[100px] bottom-[40px]">
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
      </div>
    </div>
  )
}
