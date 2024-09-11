import { Image } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import React from 'react'

export const CustomButtonV1 = (props) => {
  return (
    <>
    <Button type={props.type} variant="solid" backgroundColor="white" color="black" minWidth='120px' width={props.width} minHeight={props.minHeight} onSubmit={props.onSubmit} onClick={props.onClick} className='flex items-center justify-center gap-1'  >{props.content} <Image src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} />  </Button>
    </>
  )
}
