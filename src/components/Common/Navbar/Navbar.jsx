import React, { useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'
import { CustomButtonV1 } from '../CustomButton/CustomButtonV1'
import { useGSAP } from '@gsap/react'
export const Navbar = () => {
  const [isOpen,setIsOpen]= useState(false);

  const toggleNav=()=>{
    setIsOpen(!isOpen);
  }
useGSAP(()=>{
  gsap.from('.mid-nav-txt',{y:-100,stagger:0.1,ease:'power2.out'})
})

  return (

    <div className="w-screen min-h-[70px] h-auto border-b-2 border-white flex items-center justify-around ">

    <div  >
        LOGO
    </div>
    <div className={`gap-[100px] flex-row h-auto hidden md:flex ${isOpen ? 'verticalNav' : ''}`}>
        <p className='mid-nav-txt text-xl'>Home</p>
        <p className='mid-nav-txt text-xl'>About</p>
        <p className='mid-nav-txt text-xl'>Services</p>
        <p className='mid-nav-txt text-xl'>Contact</p>
    </div>
    <div>
        <CustomButtonV1 content="Login" />
    </div>
    <button className="sm:hidden" onClick={toggleNav}>toggle</button>
</div>

  )
}
