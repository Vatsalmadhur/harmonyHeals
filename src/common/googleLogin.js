// const { auth } = require("@/lib/firebase/config");
// const { GoogleAuthProvider, signInWithPopup } = require("firebase/auth");
import { auth } from "@/lib/firebase/config";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// export async function googleLogin(){
//   try{
//   const provider=new GoogleAuthProvider();
//   const result = await signInWithPopup(auth,provider);
//   if(result.user){
//     window.location.href='/'
//   }
//   console.log(result.name);
//   }
//   catch(error){
//     console.log(error);
//   }

// }


