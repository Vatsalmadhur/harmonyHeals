"use client"
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './page.module.css';
import { auth, db } from '@/lib/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { CustomButtonV1 } from '@/components/Common/CustomButton/CustomButtonV1';
import { CustomButtonV2 } from '@/components/Common/CustomButton/CustomButtonV2';
import { userAuth } from '../Context/AuthContext';

const Signup = () => {
  const { emailSignIn,registerEmailPass } = userAuth();
  const [details,setDetails]= useState({Fname:'',Lname:'',email:'',pass:''});
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}= e.target;
    setDetails((prev)=>({
      ...prev,
      [name]:value
    })
  )};

  const handleSignup = async (e) => {

    e.preventDefault();
    console.log(details.email);
    console.log(details.Fname);
      await registerEmailPass(details.email,details.pass,details.Fname,details.Lname);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
   <form className=" border border-white rounded-xl h-auto sm:h-[60vh] lg:w-[60vw] sm:w-[70vw] w-[90vw] flex flex-row py-5 sm:py-0 ">
   <div className='bg-white lg:w-[300px] sm:w-[250px] h-full rounded-s-xl  '></div>
    <div className="w-full flex items-center justify-center flex-col">
      <div className=' sm:w-[60%] w-[90%] h-full flex items-center justify-center flex-col gap-3' >

          <h2 className="mb-6 lg:text-4xl  text-3xl font-thin  text-white customFont2 ">Create your account!</h2>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            name='Fname'
            value={details.Fname}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Last Name"
            name='Lname'
            value={details.Lname}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            type="email"
            placeholder="Email"
            name='email'
            value={details.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-6 w-full">
          <input
            type="password"
            placeholder="Password"
            name='pass'
            value={details.pass}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <CustomButtonV1
        onClick={handleSignup}
        type="button"
        content="Register"
         width="100%"
       />
        <p className='my-2 text-md customFont2' >Already have an account,<a href='/login' className='underline' >login here.</a></p>
        {/* <CustomButtonV1
        content="Sign in with"
         width="100%"
         imgSrc="/assets/gicon.svg"
         imgWidth="25"
         imgHeight="25"
       /> */}
      </div>
    </div>
  </form>
</div>
  );
};

export default Signup;
