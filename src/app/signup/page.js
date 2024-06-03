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
    <form onSubmit={handleSignup} className={styles.signupForm}>
      <h2>Signup</h2>
      <input
        type="name"
        value={Fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="First Name"
        required
      />  <input
      type="name"
      value={Lname}
      onChange={(e) => setLname(e.target.value)}
      placeholder="Last Name"
    />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default Signup;
