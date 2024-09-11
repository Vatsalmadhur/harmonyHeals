import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Headingv2 from '../Headings/Headingv2'

const Card = () => {
  return (
    <>
    <div className='border-[1px] lg:w-[60vw] md:h-[300px] md:w-[80vw] w-[90vw] h-auto rounded-xl flex sm:justify-around justify-start  items-center sm:py-5 py-2' >
        <div className='lg:w-[250px] lg:h-[250px] sm:w-[200px] sm:h-[200px] hidden  bg-white sm:flex items-center justify-center p-5 mx-3  rounded-xl ' >
            <img src='/assets/freq.jpg' className='hidden sm:block' />
        </div>
        <div className='lg:w-[40vw] sm:w-[60vw] w-full sm:h-[200px] h-auto px-5 ' >
            <Headingv2 text="Healing" fontSize="4xl"/>
            <p className='customFont3  lg:mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis quisquam asperiores expedita, corrupti ut quam. Sequi asperiores ratione esse doloremque architecto velit exercitationem iusto repellat quaerat impedit perspiciatis odio reiciendis veniam vitae recusandae sunt</p>

        </div>

    </div>
    </>
  )
}

export default Card