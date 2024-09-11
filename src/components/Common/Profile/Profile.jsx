import { Avatar, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import {doc, getDoc} from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData,setUserData]=useState({});
  const {user,logOut} = userAuth()
  console.log(user.uid);
useEffect(() => {
  if (!user || !user.uid) return;  // Check if user and user.uid are available

  const docRef = doc(db, "users", user.uid);
  getDoc(docRef)
    .then((docSnap) => {
      console.log("im here",docSnap.data());
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        console.log(userData)
      } else {
        console.log("No user");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

}, [user]);  // Depend on 'user', not just 'user.uid'

// useEffect(() => {
//   if (userData) {
//     console.log(userData);
//   }
// }, [userData]);

  const handleLogOut=async ()=>{
    try {
    await logOut();
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
   <Avatar onClick={onOpen} cursor='pointer' src={user ? user.photoURL: '/assets/avatar.png'} size='md' />

<Modal isOpen={isOpen} onClose={onClose}   >
  <ModalOverlay />
  <ModalContent className='border-[1px] border-white custBlack ' >
    <ModalHeader className=' flex items-center justify-center text-2xl text-white customFont2 font-normal' >Your Profile</ModalHeader>
    <ModalCloseButton />
    <ModalBody display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={5} >
    <Avatar  src={user.photoURL} size='2xl' />
      <div><p className='text-xl text-white font-normal' > <span className='text-xl font-bold text-white customFont2 ' >Email:</span> {user.email}</p></div>
      <div><p className='text-xl text-white font-normal'><span className='text-xl font-bold text-white customFont2 ' >Name:</span> {user.displayName ? user.displayName : userData.Fname+" "+userData.Lname  } </p></div>
    </ModalBody>

    <ModalFooter className='flex items-center justify-center' >

<CustomButtonV1 content="Logout" onClick={handleLogOut} />

    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}

export default Profile