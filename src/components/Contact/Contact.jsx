import React, { useState } from 'react'
import Heading from '../Common/Headings/Heading'
import { CustomButtonV1 } from '../Common/CustomButton/CustomButtonV1'
import { CustomButtonV2 } from '../Common/CustomButton/CustomButtonV2'
import { sendEmail } from '@/utils/send-email'

export const Contact = () => {
    const [data, setData] = useState({name:'',email:'',message:''});

    const handleChange = (e) =>{
        e.preventDefault();
        const {name,value}=e.target;

        setData((prevData)=>({
            ...prevData,
            [name]: value,
        }))

    }

    const handleSubmit = () =>{
       sendEmail({...data})
       setData({name:'',email:'',message:''});
    }
    return (
        <>
        <section  id='contact'>
            <Heading text="Contact Us" />
            <div className='width-auto h-auto flex flex-row p-10 items-center justify-center  ' >
                <div className='h-[60vh] flex flex-row items-center justify-center border-[1px] border-white rounded-xl '>
                <div className='w-[200px] h-full  bg-slate-100 rounded-s-xl ' ></div>
                <div className='w-[50vw] h-full bg-black flex items-center justify-center rounded-e-xl ' >
                    <form action="" className='flex flex-col items-start justify-center gap-5 w-[650px] min-h-[45vh] h-auto  '>
                        <p className='text-4xl text-white font-thin customFont2' >Got suggestions or queries,<br />get in touch!</p>
                        <div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >Name</label>
                            <input name='name' onChange={handleChange} className='h-[40px] bg-transparent placeholder:text-white pl-2 border border-white focus:ring-2 focus:ring-white outline-none rounded' required placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >E-mail</label>
                            <input name='email' onChange={handleChange}  className='h-[40px] bg-transparent placeholder:text-white pl-2 border border-white focus:ring-2 focus:ring-white outline-none rounded' required placeholder='Enter your e-mail' />
                        </div>
                        <div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >Your message</label>
                            <textarea name='message' onChange={handleChange}  className='h-[100px] resize-none  bg-transparent placeholder:text-white pl-2 border border-white focus:ring-2 focus:ring-white outline-none rounded  ' required placeholder='Enter your message' />
                        </div>
                        <CustomButtonV1 type='button'
                        onClick={handleSubmit} content='Submit' width="100%" className='w-full text-black' />
                    </form>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
