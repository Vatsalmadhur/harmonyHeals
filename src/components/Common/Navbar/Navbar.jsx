import React, { useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'
import { CustomButtonV1 } from '../CustomButton/CustomButtonV1'
import { useGSAP } from '@gsap/react'
import { userAuth } from '@/app/Context/AuthContext'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const [isOpen,setIsOpen]= useState(false);
  const {user,logOut}=userAuth()
const router = useRouter();
  const handleLogOut=async ()=>{
    try {
    await logOut();
    } catch (error) {
      console.log(error);

    }
  }

  const handleLoginClick = ()=>{
    router.push('/login');
  }
  // const [showLogin,setShowLogin]=useState(false);

  // const handleLogin=()=>{
  //   setShowLogin(true);
  // }

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
    <a href="#home" className="mid-nav-txt text-xl">Home</a>
    <a href="#about" className="mid-nav-txt text-xl">About</a>
    <a href="#services" className="mid-nav-txt text-xl">Services</a>
    <a href="#contact" className="mid-nav-txt text-xl">Contact</a>

    </div>
    <div>
      { user?
      <>
      <p>Welcome{user.displayName}</p>
              <CustomButtonV1 content="Logout" onClick={handleLogOut} />  

              </>
      :
        <CustomButtonV1 content="Login" onClick={()=>router.push('/login')} />
        // <button content="Login" onClick={()=>router.push('/login')} ></button>

      }
        </div>
    <button className="sm:hidden" onClick={toggleNav}>toggle</button>
</div>

  )
}
