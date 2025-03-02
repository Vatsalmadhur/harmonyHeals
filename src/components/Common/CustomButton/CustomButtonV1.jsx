import { Button } from '@chakra-ui/react'
import React from 'react'

export const CustomButtonV1 = (props) => {
  return (
    <>
    <Button variant="solid" backgroundColor="white" color="black" minWidth='80px' background='primary-white' rounded={props.rounded || "md"} width='auto' onClick={props.onClick} >{props.content}</Button>
    </>
  )
}
