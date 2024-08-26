'use client'
import { auth } from "@/lib/firebase/config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React,{ createContext, useContext, useState, useEffect }  from "react";

const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [user, setUser]= useState(null);

    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[user])

    return(
        <AuthContext.Provider value={{user,googleSignIn,logOut}} >{children}</AuthContext.Provider>
    )
}

export const userAuth=()=>{
    return useContext(AuthContext);
}