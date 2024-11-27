import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext"; // Access user from context
import { Image, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { CustomButtonV1 } from "../CustomButton/CustomButtonV1";
// import {
//   DialogBody,
//   DialogCloseTrigger,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogRoot,
//   DialogTitle,
//   DialogTrigger,
//   DialogActionTrigger,
// } from "@/components/ui/dialog"; // Custom Dialog components

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
    <div className="w-screen min-h-[70px] h-auto border-b-2 border-white flex items-center justify-around">
      <div>LOGO</div>

      {/* Menu Items */}
      <div className="gap-[100px] flex-row h-auto hidden md:flex">
        <a href="#home" className="mid-nav-txt text-xl">Home</a>
        <a href="#about" className="mid-nav-txt text-xl">About</a>
        <a href="#services" className="mid-nav-txt text-xl">Services</a>
        <a href="#contact" className="mid-nav-txt text-xl">Contact</a>
      </div>

      <div>
        {user ? (
          // <HStack className="cursor-pointer" spacing="10px" onClick={() => setIsOpen(true)}>
          //   <Image
          //     src={user.photoURL || "/default-avatar.png"}
          //     alt="User Avatar"
          //     className="w-10 h-10 rounded-full"
          //   />
          //   <Text className="text-white">{user.displayName || "User"}</Text>
          // </HStack>
          <div className="flex items-center justify-center gap-2" >
            <Image
              src={user.photoURL || "/default-avatar.png"}
               alt=""
               className="w-10 h-10 rounded-full"
            />
          <CustomButtonV1 content="Logout" onClick={handleLogout} />

          </div>

        ) : (
          <CustomButtonV1 content="Login" onClick={handleLoginRedirect} />
        )}
      </div>

      {/* <DialogRoot isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogContent className="bg-black text-white rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">User Profile</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <div className="flex flex-col items-center">
              <Image
                src={user ? user.photoURL : "/default-avatar.png"}
                alt="User Avatar"
                borderRadius="full"
                boxSize="100px"
                marginBottom="1rem"
              />
              <Text fontSize="lg" fontWeight="bold">{user ? user.displayName : "User"}</Text>
              <Text fontSize="md" marginBottom="0.5rem">{user ? user.email : "No email available"}</Text>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" onClick={handleLogout}>Logout</Button>
            </DialogActionTrigger>
            <DialogCloseTrigger>
              <Button variant="link" colorScheme="white">Close</Button>
            </DialogCloseTrigger>
          </DialogFooter>
        </DialogContent>
      </DialogRoot> */}
    </div>
  );
};
