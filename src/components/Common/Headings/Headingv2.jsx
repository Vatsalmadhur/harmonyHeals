import { MoveRight } from 'lucide-react'
import React from 'react'

const Headingv2 = (props) => {
  return (
    <p className={`text-${props.fontSize}  customFont3 font-thin text-white flex items-center `}
     >{props.text}<MoveRight size={45} strokeWidth={1} /></p>
  )
}

export default Headingv2