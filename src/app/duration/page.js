import Headingv2 from '@/components/Common/Headings/Headingv2'
import { MoveRight } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className='h-screen w-screen flex items-center justify-center '>
      <div className='w-[70vw] h-[50vh] flex flex-col items-center rounded-xl border-[1px] border-white '>
      <div className='w-[60vw] h-[50vh] flex flex-col items-start justify-evenly '>
       <Headingv2 text="Choose the duration" fontSize="3rem" />
        <div className='w-[60vw] h-auto flex items-center justify-between '>
          <div className='w-[250px] h-[250px] border-[1px] bg-white hover:bg-gray-400 rounded-full p-8 ' >
            <p className='text-[5rem] text-black text-center font-semibold  ' >5</p>
            <p className='text-[2rem] text-black text-center font-thin italic'>minutes</p>
          </div>
          <div className='w-[300px] h-[300px] border-[1px] bg-white p-8' >
            <p className='text-[5rem] text-black text-center font-semibold' >15</p>
            <p className='text-[2rem] text-black text-center font-thin italic '>minutes</p>
          </div>
          <div className='w-[300px] h-[300px] border-[1px] bg-white p-8' >
            <p className='text-[5rem] text-black text-center font-semibold' >30</p>
            <p className='text-[2rem] text-black text-center font-thin italic '>minutes</p>
          </div>
        </div>
        </div>
      </div>


    </section>
  )
}

export default page