'use client'
import AudioCard from '@/components/Common/AudioCard/AudioCard'
import { Spacer } from '@/components/Common/Spacers/Spacer'
import { useUser } from '@/context/UserContext'
import ProtectedRoute from '@/lib/ProtectedRoute/ProtectedRoute'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
const page = () => {
  const { userMood } = useUser();
  const { filename, frequency, duration, message } = userMood;
  // console.log(userMood)

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.hhai',{opacity:0,y:25})
    tl.from('.hhai-text1',{opacity:0,y:25})
    tl.from('.hhai-text-earphones',{opacity:0,y:25})
    tl.from('.audiocard1',{opacity:0})
    tl.from('.hhai-text-why',{opacity:0,y:25})
    tl.from('.hhai-text-message',{opacity:0,y:25})
    tl.from('.hhai-text-suggest',{opacity:0,y:25})
    tl.from('.audiocard2',{opacity:0})

  })


  return (
    <>
      <div className='flex flex-col h-auto items-center' >
        <div style={{ backgroundImage: "url('/assets/hhai1.svg')" }} className='w-[90%] md:h-[250px] h-[180px] bg-cover bg-center flex items-center justify-center gap-20 rounded-3xl mt-5 p-3 '>
          <div className=' md:w-[400px] md:block w-0 hidden'></div>
          <div className=''>
            <p className='md:text-6xl text-4xl font-semibold customFont2 hhai '>HarmonyHeals AI</p>
            <p className='mb-5 md:text-xl text-md hhai '>Your personal AI assistant</p>
          </div>
          {/* <img src='/assets/hhai1.svg' className='w-full  rounded-[40px]  '/> */}

        </div>
        {/* <img src='/assets/hhai2.svg' className='w-[50%]  rounded-[20px] '/> */}

        <div className='flex items-center justify-center flex-col gap-3 mt-5 md:w-[60%] w-[90%] '>
          <p className='customFont2 text-xl text-primary-white hhai-text1'>After carefully observing your condition, we think that {userMood.frequency} will be the most effective frequency for you.</p>
          <p className='customFont2 text-md italic hhai-text-earphones'>(Plug in earphones for a better experience.)</p>
          <AudioCard className='audiocard1' title={userMood.filename} duration={userMood.duration} />
          <p className='customFont2 text-primary-white text-3xl text-start w-full mt-10 hhai-text-why '>Why did we suggest {userMood.frequency} ?</p>
          <p className='customFont2 text-xl text-white hhai-text-message' >{userMood.message}</p>
          <p className='customFont2 text-md text-start w-full text-primary-white italic hhai-text-suggest'> We also suggest you to listen to : </p>
          <AudioCard className='audiocard2' title={userMood.suggestion} duration={userMood.sduration} />
        </div>
      </div>
    </>
  )
}

export default page