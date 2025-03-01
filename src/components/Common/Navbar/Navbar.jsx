import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext"; // Access user from context
import { Image, Text, Button, HStack, VStack, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { CustomButtonV1 } from "../CustomButton/CustomButtonV1";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser(); // Access user from context
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login"); // Navigate to /login
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="w-[60%] bg-primary-green rounded-full min-h-[50px] h-auto border-b-2 flex items-center justify-around ">
      <div>
        {/* <img className="max-w-14  max-h-15" src="/assets/logo.png" alt="" /> */}
        <h1 className="text-xl ">Harmony Heals</h1>
      </div>

      {/* Menu Items */}
      {/* <div className="gap-[100px] flex-row h-auto hidden md:flex">
        <a href="#home" className="mid-nav-txt text-2xl">Home</a>
        <a href="#about" className="mid-nav-txt text-2xl">About</a>
        <a href="#services" className="mid-nav-txt text-2xl">Services</a>
        <a href="#contact" className="mid-nav-txt text-2xl">Contact</a>
      </div> */}
      <div className="gap-[100px] flex-row h-auto hidden md:flex">
        {[
          { label: "Home", link: "#home" },
          { label: "About", link: "#about" },
          { label: "Services", link: "#services" },
          { label: "Contact", link: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="mid-nav-txt text-lg transition-transform transform hover:text-primary-black duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>


      <div>
        {user ? (
          <Popover modal >
            <PopoverTrigger asChild>
              <Image
              src={user.photoURL || "/default-avatar.png"}
               alt=""
               className="w-10 h-10 rounded-full cursor-pointer"
            />
            </PopoverTrigger>
            <PopoverContent className="w-10 text-primary-black flex items-center justify-center gap-2 p-5 focus:border-none " >
                <p className="text-xl font-semibold" >{user.displayName}</p>
                <p>{user.email}</p>
            <CustomButtonV1 content="Logout" onClick={handleLogout} />
              </PopoverContent>
          </Popover>



          // <div className="flex items-center justify-center gap-2" >
          //   <Image
          //     src={user.photoURL || "/default-avatar.png"}
          //      alt=""
          //      className="w-10 h-10 rounded-full"
          //   />
          // <CustomButtonV1 content="Logout" onClick={handleLogout} />

          // </div>

        ) : (
          <CustomButtonV1 content="Login" onClick={handleLoginRedirect} />
        )}
      </div>
    </div>
  );
};
