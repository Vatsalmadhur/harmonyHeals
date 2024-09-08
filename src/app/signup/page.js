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

    // await emailSignIn(email,password,Fname,Lname);
    // console.log(e.target);
    // try{
    //     const result = await emailSignIn(auth,email,password)
    //     const user=auth.currentUser;
    //     console.log(auth);
    //     if(user){
    //       await setDoc(doc(db,"Users",user.uid),{
    //         email:user.email,
    //         firstName:Fname,
    //         lastName:Lname

    //       })
    //     }
    //     console.log("User registered successfully")
    //     window.location.href='/login';
    // }
    // catch(error){
    //   console.log(error);
    // }
      await registerEmailPass(details.email,details.pass,details.Fname,details.Lname);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
  <form className="border border-white rounded-xl h-[50vh] w-[50vw] flex flex-row">
    <div className="bg-white w-[300px] h-full rounded-s-xl"></div>
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-[50%] h-full flex items-center justify-center flex-col  ">

        <h2 className="mb-6 text-4xl font-thin text-white customFont2">
          Create Your Account!
        </h2>

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
