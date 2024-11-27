"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Do not change this function
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(auth);
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <form
      onSubmit={handleSignup}
      className="w-full max-w-sm mx-auto flex flex-col gap-4 bg-black text-white p-6 rounded-xl shadow-lg border-2"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Signup</h2>
      <input
        type="text"
        value={Fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="First Name"
        className="w-full px-4 py-2 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        required
      />
      <input
        type="text"
        value={Lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="Last Name"
        className="w-full px-4 py-2 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        required
      />
      <button
        type="submit"
        className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Signup
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <p className="text-white text-sm text-center">
      New to Harmony Heals?{" "}
      <Link
        href="/login"
        className="text-white underline hover:text-blue-300 transition"
      >
        Login here
      </Link>
      </p>
    </form>
    </div>
  );
};

export default Signup;
