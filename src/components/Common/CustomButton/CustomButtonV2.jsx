import { Button } from '@chakra-ui/react'
import React from 'react'
import { ChevronRightIcon} from '@chakra-ui/icons'
export const CustomButtonV2 = (props) => {
  return (
    <>
    <Button variant="outline"minWidth='120px' width='auto'  color="white" textAlign='center' onClick={props.onClick} >{props.content} <ChevronRightIcon width='6' height='6' /> </Button>
    </>
  )
}
