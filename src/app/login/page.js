"use client"
import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
//Do not change this function
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
        </form>
        {/* {message && <p className={styles.message}>{message}</p>} */}
      </main>
    </div>
  );
}
