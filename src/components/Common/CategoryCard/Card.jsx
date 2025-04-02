import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Headingv2 from '../Headings/Headingv2'

const Card = (props) => {
  return (
    <>
    <div className='border-[1px] w-[60vw] h-[300px] rounded-xl flex justify-around items-center ' >
        <div className='w-[250px] h-[250px] bg-white flex items-center justify-center p-5  rounded-xl ' >
            <img alt='Freq img' src='/assets/freq.jpg' />
        </div>
        <div className='w-[40vw] h-[200px] px-5 ' >
            <Headingv2 text={props.heading} fontSize="4xl"/>
            <p className='customFont3 mt-5' >{props.description}</p>

        </div>

    </div>
    </>
  )
}

export default Card