import { useUser } from '@/context/UserContext';
import { innerFeels } from '@/data';
import { DayOrNight } from '@/utils'
import { Card, Tag } from '@chakra-ui/react'
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { CustomButtonV1 } from '../Common/CustomButton/CustomButtonV1';
import { axiosClient } from '@/lib/axios/axiosClient';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const userFeels = () => {
  const router = useRouter();
  const time = DayOrNight();
  const { user } = useUser();
  const [selectedTag, setSelectedTag] = useState([""]);
  const { setUserMood } = useUser();
  const handleChange = (item) => {

    if (!selectedTag.includes(item)) {
      setSelectedTag((prev) => [...prev, item])
    }
  }
  const removeTag = (item) => {
    setSelectedTag((prev) => prev.filter((tag) => tag !== item));
  }
  let finalData = "";
  const handleClick = async () => {
    console.log("clicked")
    try {
      const res = await axiosClient.post('/geminicat',
        {
          "userfeels": selectedTag,
          "username": user.displayName
        })
      const temp = res.data.message.replace(/```json|```/g, '');
      console.log(temp);

      finalData = JSON.parse(temp);
      setUserMood(finalData)
      console.log(finalData)
      router.push('/harmonyhealsai')
    }
    catch (error) {
      console.log("error", error);
    }
  }

  return (

    <Dialog>
      <DialogTrigger>HarmonyHeals AI</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <p className='text-4xl'>Good {time},username</p>
            <p>How do you feel today? </p>
            {selectedTag.length > 0 && (
              <div>
                {/* <p>Hmm, so you're suffering from:</p> */}
                <div className="h-auto text-center">
                  {selectedTag.map((item) => (
                    item && (
                      <Tag key={item} margin={1} cursor="pointer">
                        {item}
                        <X size={16} onClick={() => removeTag(item)} />
                      </Tag>
                    )
                  ))}
                </div>
              </div>
            )}


            <div className='text-center'>
              {innerFeels.map((item) => (
                <Tag key={item} onClick={() => handleChange(item)} margin={1} cursor="pointer" >{item}</Tag>

              ))}
            </div>
            <CustomButtonV1 onClick={handleClick} content="Lets begin your healing journey" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    // <Card width="50%" height="60%" padding={10} border="2px solid red" display="flex" alignItems="center" gap={4} >

    //   <p className='text-4xl'>Good {time},username</p>
    //   <p>How do you feel today? </p>
    //   {selectedTag.length > 0 &&
    //   <>
    //   <p>Hmm, so you're suffering from:</p>
    //   <div className='h-auto text-center'>
    //   {selectedTag.map((item)=>(
    //     <Tag margin={1} cursor="pointer">{item}<X size={16} onClick={()=>{removeTag(item)}}/></Tag>
    //     ))}
    //   </div>
    //     </>
    //   }
    //   <div className='text-center'>
    //     {innerFeels.map((item)=>(
    //       <Tag key={item} onClick={()=>handleChange(item)} margin={1} cursor="pointer" >{item}</Tag>

    //     ))}
    //   </div>
    //   <CustomButtonV1 onClick={handleClick} content="Lets begin your healing journey"/>

    // </Card>
  )
}

export default userFeels;
