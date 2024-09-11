'use client'
import { auth, db } from "@/lib/firebase/config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut,emailSignIn, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React,{ createContext, useContext, useState, useEffect }  from "react";
import { getDoc} from 'firebase/firestore';

const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [user, setUser]= useState(null);

    const registerEmailPass=async (email,password,Fname,Lname)=>{

        try{
            const userCred=await createUserWithEmailAndPassword(auth,email,password);
            const user = userCred.user;
            alert(JSON.stringify(user));
            // console.log(user)

            await setDoc(doc(db,'Users',user.uid),{
                Fname,
                Lname,
                email,
                uid:user.uid
            });
        }

    catch(error){
        console.log(error);
    }
}

    const emailSignIn = async (email,password)=>{
        // try{
        //     const result = await signInWithEmailAndPassword(auth,email,password)
        //     const user=result.currentUser;
        //     console.log(user);

        // }
        // catch(error){
        //   alert(error);
        // }
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    const logOut=()=>{
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[user])
    const [userData,setUserData]=useState(null);

    // useEffect(() => {
    //     if (!user || !user.uid) return;  // Check if user and user.uid are available

    //     const docRef = doc(db, "users", user.uid);
    //     getDoc(docRef)
    //       .then((docSnap) => {
    //         console.log("im here");
    //         if (docSnap.exists()) {
    //           setUserData(docSnap.data()); // Set user data if the document exists
    //         } else {
    //           console.log("No user");
    //         }
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching user data:", error);
    //       });

    //   }, [user]);

    return(
        <AuthContext.Provider value={{user,googleSignIn,logOut,emailSignIn,registerEmailPass}} >{children}</AuthContext.Provider>
    )
}

export const userAuth=()=>{
    return useContext(AuthContext);
}