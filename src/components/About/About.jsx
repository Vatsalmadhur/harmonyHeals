import React from "react";
import Heading from "../Common/Headings/Heading";
import Brain from "./Spline";
import Wave from "./Wave";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const About = () => {
  gsap.registerPlugin("ScrollTrigger");
  useGSAP(() => {
    gsap.to('#script1', {
      scrollTrigger: {
        trigger: "#script",
        scrub: "true"
      },
      x: -1000
    })
    gsap.from('#script2', {
      scrollTrigger: {
        trigger: "#script",
        scrub: "true"
      },
      x: -1000
    })
  })
  return (
    <>
      <div className="bg-primary-green w-full relative ">
        <div className="w-full sm:h-[300px] h-[200px]  sm:py-6 overflow-hidden">
          <img id="script1" src="/assets/script.svg" className="max-w-none h-full" />
        </div>


        <div className="relative flex flex-row w-full h-[auto] justify-center gap-32 overflow-hidden flex-wrap-reverse ">
          <section
            id="about"
            className="relative z-10 lg:w-[40%] w-full min-w-[400px] flex flex-col justify-center items-center text-white "
          >
            <div className=" px-5">
              <Heading text="About Us"  />
              <p className="text-xl  pt-2 customFont3 mt-5 text-start ">
                Welcome to HarmonyHeals, where ancient wisdom meets modern
                technology to create a transformative journey of healing and
                self-discovery. Our mission is to harness the therapeutic power of
                sound to bring balance, harmony, and peace to your life.
                At HarmonyHeals, we understand the challenges of today’s fast-paced
                world—stress, anxiety, and a disconnect from inner peace. We’ve
                built a platform that offers scientifically backed sound healing
                practices designed to support your mental, emotional, and physical
                well-being.
              </p>
              <p className="text-xl text-start customFont3">
                We are passionate about making wellness accessible to all. Our
                commitment is to empower you with tools that are practical,
                transformative, and deeply resonant with your unique needs.
              </p>
            </div>
          </section>

          {/* Brain (Spline) Section */}
          <section className=" lg:w-[40%] sm:block min-w-[300px]  hidden w-full h-[450px] ">
            <Brain />
          </section>
        </div>
        <div className="w-full sm:h-[300px] h-[200px] sm:p-6  overflow-hidden">
          <img id="script2" src="/assets/script.svg" className="max-w-none h-full" />
        </div>

      </div>
    </>
  );
};
