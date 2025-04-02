"use client";
import React, { useRef } from "react";
import Heading from "../Common/Headings/Heading";
import { servicesData } from "@/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export default function Services () {
   gsap.registerPlugin(ScrollTrigger);
  const serviceRefs = useRef([]);

  useGSAP(() => {
    gsap.to(serviceRefs.current, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#services",
        scrub: 1,
        start: "top 60%",
        end: "top 20%",
      },
    });
  });

  return (
    <>
      <section
        id="services"
        className="relative w-full h-auto bg-cover bg-center flex flex-col justify-center items-center text-white bg-primary-black"
      >
        <Heading text="Our Services" />

        {/* Services Cards */}
        <div className="w-full min-h-[70vh] flex items-center flex-wrap justify-center gap-10 mt-10">
          {servicesData.map((item, index) => (
            <a href={process.env.BASE_URL+`${item.url}`}>
            <div
              ref={(el) => (serviceRefs.current[index] = el)}
              key={index}
              className="rounded-xl text-5xl shadow-lg relative overflow-hidden transition-transform duration-500 ease-in-out opacity-0"
            >
              <img
                src={item.img}
                alt={item.title + "img here"}
                className="w-[300px] rounded-xl ransition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-80"
              />
              <p className="absolute bottom-[20px] pl-5 text-primary-white">
                {item.title}
              </p>
            </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};