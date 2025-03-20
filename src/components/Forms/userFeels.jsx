import { useUser } from '@/context/UserContext';
import { innerFeels } from '@/data';
import { DayOrNight } from '@/utils'
import { Card, Tag } from '@chakra-ui/react'
import { ChevronRightIcon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
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
import { CustomButtonV2 } from '../Common/CustomButton/CustomButtonV2';
import { CustomButtonV1 } from '../Common/CustomButton/CustomButtonV1';
import { toast } from "react-toastify";
import Loader from '../Common/Loader/loader';


const userFeels = () => {

// toast("Please log in to use this feature", {
//   progressStyle: {
//     background: "#faa500",
//     height: "5px",
//     borderRadius: "3px",
//   },
//   style: {
//     backgroundColor: "#648997",
//     color: "#DAD7CA",
//     fontSize: "16px",
//     fontWeight: "thin",
//   },
// })
  const router = useRouter();
  const time = DayOrNight();
  const { user } = useUser();
  const [selectedTag, setSelectedTag] = useState([]);
  const { setUserMood } = useUser();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
    // console.log(selectedTag)
    if (selectedTag.length > 0) {
      try {
        setLoading(true);
        const res = await axiosClient.post('/geminicat',
          {
            "userfeels": selectedTag,
            "username": user.displayName
          })
        const temp = res.data.message.replace(/```json|```/g, '');
        // console.log(temp);

        finalData = JSON.parse(temp);
        setUserMood(finalData)
        console.log(finalData)
        router.push('/harmonyhealsai')
      }
      catch (error) {
        console.log("error", error);
      }
    }
    else {
      new toast("Select at least one tag!",
      {
        position: "top-center",
        style: {
          backgroundColor: "#161f1f",
          color: "#DAD7CA",
          fontSize: "16px",
          fontWeight: "thin",
          width:'350px',
          borderRadius:'10px'
        }
      }
        )
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setOpen(false);
        } else if (user) {
          setOpen(true);
        } else {
          toast("Please log in to use this feature", {
            position: "top-right",
            style: {
              backgroundColor: "#161f1f",
              color: "#DAD7CA",
              fontSize: "16px",
              fontWeight: "thin",
              width:'350px',
              borderRadius:'10px'
            },
          })
        }
      }}
    >

      <DialogTrigger className='pl-2 border-2 w-auto rounded-md flex items-center justify-between gap-1 ' >HarmonyHeals AI
        <ChevronRightIcon width={20} />
      </DialogTrigger>
      <DialogContent className="bg-primary-black border-none ">
        <DialogTitle className="flex flex-col gap-2 items-center justify-center">
          <p className='md:text-4xl text-3xl text-primary-white'>Good {time},{user ? user.displayName.split(" ")[0] : "Friend"}</p>
          <p className='text-xl'>How do you feel today? </p>
        </DialogTitle>
        <DialogHeader  >
          <DialogDescription className="flex flex-col gap-2 items-center justify-center" >
            {/* <p className='text-4xl text-white'>Good {time},username</p>
            <p className='text-xl'>How do you feel today? </p> */}
            {selectedTag.length > 0 && (
              <div>
                {/* <p>Hmm, so you're suffering from:</p> */}
                <div className="h-auto text-center">
                  {selectedTag.map((item) => (
                    item && (
                      <Tag key={item} margin={1} cursor="pointer" bgColor="#DAD7CA">
                        {item}
                        <X size={16} onClick={() => removeTag(item)} />
                      </Tag>
                    )
                  ))}
                </div>
              </div>
            )}


            <div className='text-center pb-2'>
              {innerFeels.map((item) => (
                <Tag key={item} bgColor="#DAD7CA" onClick={() => handleChange(item)} margin={1} cursor="pointer" >{item}</Tag>

              ))}
            </div>
            {loading ? <Loader /> : <CustomButtonV2 onClick={handleClick} content="Lets begin your healing journey" />}
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
