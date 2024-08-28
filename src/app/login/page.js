"use client"
import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
// import { googleLogin } from '@/common/googleLogin';
import { userAuth } from '../Context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { user, googleSignIn, logOut } = userAuth();
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
  console.log(user)
  console.log("result")

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("User registered successfully")
      alert("user logged in successfully")
      window.location.href = '/'
    } catch (error) {
      console.log(error)

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className=" border border-white rounded-xl h-[50vh] w-[50vw] flex flex-row ">
        <div className='bg-white w-[300px] h-full rounded-s-xl  '></div>
        <div className=' w-full  flex items-center justify-center flex-col ' >
        <div className=' w-[50%] h-full flex items-center justify-center flex-col ' >

          <h2 className="mb-6 text-4xl font-thin  text-white customFont2 ">Login to your account!</h2>

          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6 w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 font-semibold text-black bg-white rounded hover:bg-gray-200"
          >
            Log In
          </button>
          <p>or</p>
          <button
            type="button"
            className=" w-full px-4 py-2 font-semibold text-black bg-white rounded hover:bg-gray-200"
          >
            Sign in with Google
          </button>
          </div>
        </div>

      </form>
    </div>
  );
}
