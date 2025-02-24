import React from "react";
import Heading from "../Common/Headings/Heading";
import Brain from "./Spline";
import Wave from "./Wave";

export const About = () => {
  return (
    <>
      {/* Main container */}
      <div className="relative flex flex-row w-full h-screen justify-center overflow-hidden">
      
        {/* About Us Section */}
        <section
          id="about"
          className="relative z-10 w-1/2 h-full bg-cover bg-center flex flex-col justify-center items-center text-white bg-[#648997]"
        >
          {/* Content Section */}
          <div className="z-20 text-center p-5">
            <Heading text="About Us" />
            <p className="text-xl pt-2 customFont3 mt-5 flex justify-center p-5">
              Welcome to HarmonyHeal, where ancient wisdom meets modern
              technology to create a transformative journey of healing and
              self-discovery. Our mission is to harness the therapeutic power of
              sound to bring balance, harmony, and peace to your life. At
              HarmonyHeal, we understand the challenges of today’s fast-paced
              world—stress, anxiety, and a disconnect from inner peace. We’ve
              built a platform that offers scientifically backed sound healing
              practices designed to support your mental, emotional, and physical
              well-being.
            </p>
            <p className="text-xl customFont3 flex justify-center p-5">
              We are passionate about making wellness accessible to all. Our
              commitment is to empower you with tools that are practical,
              transformative, and deeply resonant with your unique needs.
            </p>
          </div>
        </section>

        {/* Brain (Spline) Section */}
        <section className="relative z-10 w-1/2 h-full bg-[#648997]">
          <Brain />
        </section>
      </div>
    </>
  );
};
