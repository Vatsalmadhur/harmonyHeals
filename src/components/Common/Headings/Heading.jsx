import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);
const Heading = (props) => {
  useGSAP(()=>{
    gsap.to('.heading',{
      scrollTrigger:'.heading',
      opacity:1,
      ease:'power2.in',

    })
  })
  return (
    <>
    <div className='max-w-[100%] border-white heading opacity-0' >
    <p className='text-6xl customFont1 '>{props.text}</p>
    </div>
    </>
  )
}

export default Heading