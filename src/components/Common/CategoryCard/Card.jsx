import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Headingv2 from '../Headings/Headingv2'

const Card = () => {
  return (
    <>
    <div className='border-[1px] w-[60vw] h-[300px] rounded-xl flex justify-around items-center ' >
        <div className='w-[250px] h-[250px] bg-white flex items-center justify-center p-5  rounded-xl ' >
            <img src='/assets/freq.jpg' />
        </div>
        <div className='w-[40vw] h-[200px] px-5 ' >
            <Headingv2 text="Healing" fontSize="4xl"/>
            <p className='customFont3 mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis quisquam asperiores expedita, corrupti ut quam. Sequi asperiores ratione esse doloremque architecto velit exercitationem iusto repellat quaerat impedit perspiciatis odio reiciendis veniam vitae recusandae sunt</p>

        </div>

    </div>
    </>
  )
}

export default Card