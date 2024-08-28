"use client"
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './page.module.css';
import { auth, db } from '@/lib/firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
//Do not change this function
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try{
        await createUserWithEmailAndPassword(auth,email,password);
        const user=auth.currentUser;
        console.log(auth);
        if(user){
          await setDoc(doc(db,"Users",user.uid),{
            email:user.email,
            firstName:Fname,
            lastName:Lname

          })
        }
        console.log("User registered successfully")
        window.location.href='/login';
    }
    catch(error){
      console.log(error);
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
  <form className="border border-white rounded-xl h-[50vh] w-[50vw] flex flex-row">
    <div className="bg-white w-[300px] h-full rounded-s-xl"></div>
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-[50%] h-full flex items-center justify-center flex-col">

        <h2 className="mb-6 text-4xl font-thin text-white customFont2">
          Create Your Account!
        </h2>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 text-white bg-transparent border border-white rounded outline-none placeholder:text-white focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            type="email"
            placeholder="Email"
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
          Sign Up
        </button>
        <p>or</p>
        <button
          type="button"
          className="w-full px-4 py-2 font-semibold text-black bg-white rounded hover:bg-gray-200"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  </form>
</div>
  );
};

export default Signup;
