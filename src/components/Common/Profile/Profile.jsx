import { Avatar, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { userAuth } from '@/app/Context/AuthContext';
import { CustomButtonV1 } from '../CustomButton/CustomButtonV1';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {logOut} = userAuth()
  const handleLogOut=async ()=>{
    try {
    await logOut();
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
   <Avatar onClick={onOpen} cursor='pointer' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Profile</ModalHeader>
    <ModalCloseButton />
    <ModalBody display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={5} >
    <Avatar  name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl' />
      <div><p>email</p></div>
      <div><p>Name</p></div>
    </ModalBody>

    <ModalFooter>
      {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button> */}

<CustomButtonV1 content="Logout" onClick={handleLogOut} /> 
     
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}

export default Profile