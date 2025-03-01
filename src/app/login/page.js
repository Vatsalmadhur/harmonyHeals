"use client";
import { useState } from "react";
import Head from "next/head";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { googleLogin } from "@/common/googleLogin";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Do not change this function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
      alert("User logged in successfully");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="min-h-screen  text-primary-white flex flex-row items-center lg:justify-end justify-center relative">
      <img src="/assets/b21.svg"  className=" absolute lg:w-[80%] lg:left-[-250px] lg:top-auto md:w-[100%] md:top-[-200px]  md:rounded-[50px]  sm:top-[-100px] rounded-b-[40px] rounded-bl-[40px] top-0 left-0 " />
      <Head>
        <title>Login to your account</title>
        <meta name="description" content="Login page" />
      </Head>
      <main className="w-[450px] rounded-xl mx-5 ">
        <h1 className="text-3xl font-bold mb-6 text-center  text-primary-white ">Login to your account</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-white bg-transparent  text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-white bg-transparent text-primary-white rounded focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-2 ">or</p>
        <button
          onClick={googleLogin}
          className="w-full py-2 mt-2 border border-white rounded text-primary-white hover:bg-gray-800 transition"
        >
          Sign in with Google
        </button>
        <p className="text-primary-white text-sm mt-2 text-center">
      New to Harmony Heals?{" "}
      <Link
        href="/signup"
        className="text-primary-white underline hover:text-primary-white/10 transition"
      >
        Signup here
      </Link>
      </p>
      </main>
    </div>
    </>
  );
}
