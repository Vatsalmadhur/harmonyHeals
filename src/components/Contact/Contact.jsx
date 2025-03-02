import React, { useState } from 'react'
import Heading from '../Common/Headings/Heading'
import { Send } from 'lucide-react'
import { axiosClient } from '@/lib/axios/axiosClient'

export const Contact = () => {
  const [formData,setFormData]= useState([]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
    const response= await axiosClient.post('/contact',formData)
    console.log(response);
  }catch(err){
    console.log(err)
  }
  }
  return (
    <>
      <div className="font-[sans-serif] h-screen w-screen p-4 bg-primary-green flex items-center justify-center">
          <div className="grid md:grid-cols-2 h-[80%] w-[90%]  py-8 px-6  bg-white rounded-xl">
            <div className="text-center sm:flex flex-col items-center justify-center  hidden ">
              <img src="/assets/b1.svg" className="w-[450px] " />
            </div>

            <form action='/contact' onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-auto ">
              <h2 className="text-4xl text-[#648997] font-bold text-center mb-6">Contact us</h2>
              <div className="max-w-md mx-auto space-y-3 relative">

                <input type='text' placeholder='Name'
                  className="w-full text-primary-green bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-[#648997] focus:bg-transparent transition-all"
                  name='name'
                  onChange={handleChange}
                  />

                <input type='email' placeholder='Email'
                  className="w-full text-primary-green bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-[#648997] focus:bg-transparent transition-all"
                  name='email'
                  onChange={handleChange}
                   />
                <textarea placeholder='Message' rows="6"
                  className="w-full bg-gray-100 text-primary-green rounded-md px-4 text-sm pt-3 outline-none border border-gray-100 focus:border-[#648997] focus:bg-transparent transition-all"
                  name='message'
                  onChange={handleChange}></textarea>

                <button type='submit'
                  className="text-white w-full relative bg-[#648997] hover:bg-[#648997] rounded-md text-sm px-6 py-3 !mt-6 flex items-center justify-center gap-2">
                    <Send/>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
