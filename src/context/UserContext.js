"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userMood,setUserMood]=useState({});
  // onAuthStateChanged(auth,(currUser)=>{
  //   if(currUser){
  //     setUser(currUser);
  //     console.log(currUser);
  //   }
  // })
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state
    });

    return () => unsubscribe(); // Clean up on unmount
  }, []);

  useEffect(()=>{
    console.log(userMood)
  },[])

  return (
    <UserContext.Provider value={{ user, setUser, userMood,setUserMood }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to access the context
export const useUser = () => useContext(UserContext);
