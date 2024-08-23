import React from 'react'
import Heading from '../Common/Headings/Heading'

export const Services = () => {
  return (
   <>
   <Heading text="Our Services"/>
   <div className='w-[100%] min-h-[70vh] h-auto flex items-center flex-wrap justify-center gap-10 '>
    {["bg-violet-400","bg-orange-300","bg-yellow-300","bg-rose-300","bg-emerald-300","bg-cyan-300"].map((bgColor,index)=>(
          <div className={`w-[400px] h-[250px] bg-slate-100 rounded-xl text-6xl text-black`} key={index} >Lorem</div>
    ))}
   </div>
   </>
  )
}
