import { Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const CustomButtonV2 = (props) => {
  return (
    <>
      <Button
        variant="outline"
        minWidth='120px'
        width='auto'
        color="white"
        textAlign='center'
        bg="transparent"
        _hover={{ color: 'black', bg: 'white' }} // Change text and border color on hover
      >
        {props.content}
        <ChevronRightIcon width='6' height='6' />
      </Button>
    </>
  )
}

