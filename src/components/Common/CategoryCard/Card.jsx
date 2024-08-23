import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MoveRight } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
    <>
    <div className='border-[1px] w-[60vw] h-[300px] rounded-xl flex justify-between items-center ' >
        <div className='w-[300px] h-[300px]   rounded-xl ' >
            <img src='/assets/music6.png' />
        </div>
        <div className='w-[40vw] h-[200px] px-5 ' >
            <p className='text-5xl customFont3 font-extralight text-white flex items-center ' >Healing <MoveRight size={45} strokeWidth={1} /></p>
            <p className='customFont3 mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis quisquam asperiores expedita, corrupti ut quam. Sequi asperiores ratione esse doloremque architecto velit exercitationem iusto repellat quaerat impedit perspiciatis odio reiciendis veniam vitae recusandae sunt</p>

        </div>

    </div>
    </>
  )
}

export default Card