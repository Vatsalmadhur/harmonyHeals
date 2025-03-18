'use client'
import AudioCard from '@/components/Common/AudioCard/AudioCard'
import { Spacer } from '@/components/Common/Spacers/Spacer'
import {  useUser } from '@/context/UserContext'
import ProtectedRoute from '@/lib/ProtectedRoute/ProtectedRoute'
import React from 'react'

const page = () => {
  const {userMood} = useUser();
  const {filename,frequency,duration,message}=userMood;
  console.log(userMood)


  return (
    <>
    <p className='text-5xl font-semibold'>Welcome to HarmonyHeals AI</p>
    <p className='mb-5'>Your personal AI assistant</p>
    <div className='flex items-center justify-center flex-col gap-5'>
    <p>After carefully observing your condition, we think that {userMood.frequency} will be the most effective frequency for you</p>
    <p>Plug in earphones for a better experience.</p>
    <AudioCard title={userMood.filename} duration={userMood.duration}/>
    <p>{userMood.message}</p>
    <p> We also suggest you to listen to : </p>
    <AudioCard title={userMood.suggestion} duration={userMood.sduration}/>
    </div>
    </>
  )
}

export default page