import React from 'react'
import Heading from '../Common/Headings/Heading'

export const Contact = () => {
    return (
        <>
        <section  id='contact'>
            <Heading text="Contact Us" />
            <div className='width-auto h-auto flex flex-row p-10 items-center justify-center' >
                <div className='border-2 flex flex-row items-center justify-center '>
                <div className='w-[200px] h-[50vh] bg-slate-100 ' ></div>
                <div className='w-[700px] h-[50vh] bg-black flex items-center justify-center ' >
                    <form action="" className='flex flex-col items-start justify-center gap-5 w-[650px] h-[45vh] '>
                        <p className='text-4xl text-white customFont3' >Got suggestions or queries,<br />get in touch!</p>
                        <div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >Name</label>
                            <input name='name' className='customInput' required placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >E-mail</label>
                            <input name='email' className='customInput' required placeholder='Enter your e-mail' />
                        </div><div className='flex flex-col w-full' >
                            <label htmlFor="" className='text-xl text-white ' >Your message</label>
                            <textarea name='name' className='customInput' required placeholder='Enter your message' />
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
