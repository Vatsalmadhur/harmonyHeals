"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Signup = () => {
  useGSAP(()=>{
    gsap.fromTo('#img',
    {
      opacity:0,
    },
    {
      opacity:1,
      duration:2
    }
    )
    gsap.fromTo('#form',
    {
      opacity:0,
    },
    {
      opacity:1,
      duration:1
    }
    )
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Do not change this function
  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      // console.log(auth);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: Fname,
          lastName: Lname,
        });
      }
      console.log("User registered successfully");
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen text-primary-white flex flex-row items-center lg:justify-end justify-center relative">
  <img
    src="/assets/b21.svg"
    id="img"
    className="absolute lg:w-[80%] lg:left-[-250px] lg:top-auto md:w-[100%] md:top-[-250px] md:rounded-[50px] sm:top-[-110px] rounded-b-[40px] rounded-bl-[40px] top-[-50px] left-0 z-[-1]"
    alt="Background"
  />
  <main className="w-[450px] rounded-xl mx-5" id="form">
    <h1 className="text-3xl font-bold mb-6 text-center text-primary-white">Create your account</h1>
    <form
      onSubmit={handleSignup}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="fname" className="text-sm font-semibold">First Name</label>
        <input
          type="text"
          id="fname"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
          className="w-full px-4 py-2 border border-white bg-transparent text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lname" className="text-sm font-semibold">Last Name</label>
        <input
          type="text"
          id="lname"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-white bg-transparent text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border border-white bg-transparent text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-semibold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border border-white bg-transparent text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-primary-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Signup
      </button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && <p className="text-green-500 text-sm text-center">{success}</p>}

      <p className="text-primary-white text-sm text-center mt-2">
        Already have an account? {" "}
        <Link href="/login" className="text-primary-white underline hover:text-white transition">
          Login here
        </Link>
      </p>
    </form>
  </main>
</div>

  );
};

export default Signup;
