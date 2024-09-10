"use client"
import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
// import { googleLogin } from '@/common/googleLogin';
import { userAuth } from '../Context/AuthContext';
import { CustomButtonV1 } from '@/components/Common/CustomButton/CustomButtonV1';

export default function Login() {

const [userCred,setUserCred]= useState({email:'',pass:''})


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { user, googleSignIn,emailSignIn, logOut } = userAuth();
  //Do not change this function

  //From useContext api
  async function handleGoogleLogin() {
    try {
      const result = await googleSignIn()
      if (result.user) {
        window.location.href = '/'
      }
      console.log(result.name);
    }
    catch (error) {
      console.log(error);
    }

  }
  // console.log(user)
  // console.log("result")

  async function handleEmailLogin() {
    try {
      const result = await emailSignIn(userCred.email,userCred.pass);
      if (result.user) {
        console.log(result)
        window.location.href = '/'
      }
      console.log(result.name);
    }
    catch (error) {
      console.log(error);
    }

  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }

  }

  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;

    setUserCred((prev)=>({
      ...prev,
      [name]:value
    }))
  }


  const handleEmailSignin = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className=" border border-white rounded-xl h-[50vh] w-[50vw] flex flex-row ">
        <div className='bg-white w-[300px] h-full rounded-s-xl  '></div>
        <div className=' w-full  flex items-center justify-center flex-col ' >
        <div className=' w-[50%] h-full flex items-center justify-center flex-col gap-3' >

          <h2 className="mb-6 text-4xl font-thin  text-white customFont2 ">Login to your account!</h2>

          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder="Email"
              name='email'
              value={userCred.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6 w-full">
            <input
              type="password"
              placeholder="Password"
              name='pass'
              value={userCred.pass}
              onChange={handleChange}
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
            />
          </div>

          <CustomButtonV1
        content="Sign in"
         width="100%"
         onClick={handleEmailLogin}
       />
          <p className='text-md customFont2'>or</p>
          <CustomButtonV1
        content="Sign in with"
         width="100%"
         imgSrc="/assets/gicon.svg"
         imgWidth="25"
         imgHeight="25"
         onClick={handleGoogleLogin}
       />
          <p className='text-md customFont2 pt-3 ' >New to harmonyHeals?<a href='/signup' className='underline pl-1' >Signup here</a> </p>
          </div>
        </div>

      </form>
    </div>
  );
}
