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
  const {user,googleSignIn,logOut}=userAuth();
//Do not change this function

//From useContext api
async function handleGoogleLogin(){
  try{
    const result=await googleSignIn()
  if(result.user){
    window.location.href='/'
  }
  console.log(result.name);
  }
  catch(error){
    console.log(error);
  }

}
console.log(user)
console.log("result")

const handleSignOut=async ()=>{
  try {
    await logOut();
  } catch(error){
    console.log(error);
  }

}


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth,email,password)
        console.log("User registered successfully")
        alert("user logged in successfully")
        window.location.href='/'
    } catch (error) {
        console.log(error)

    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Login</button>
        <p>or</p>
        <button onClick={handleGoogleLogin} className='bg-red-500' >Sign in with google</button>
        </form>
        {/* {message && <p className={styles.message}>{message}</p>} */}
      </main>
    </div>
  );
}
