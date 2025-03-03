import React from "react";
import Heading from "../Common/Headings/Heading";
import Wave from "../About/Wave";

export const Services = () => {
  return (
    <>
      <section
        id="services"
        className="relative w-[100vw] h-auto bg-cover bg-center flex flex-col justify-center items-center text-white bg-[#1C2828]"
      >
        <Heading text="Our Services" />
        {/* Services Cards */}
        <div className="w-[100%] min-h-[70vh] h-auto flex items-center flex-wrap justify-center gap-10 mt-10">
          {[
            "Solfeggio Frequency",
            "Chakra",
            "Power Nap",
            "Binaural Beats",
          ].map((item, index) => (
            <div
              className="w-[400px] h-[250px] bg-slate-100 rounded-xl text-4xl text-black flex items-center justify-center shadow-lg"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Wave Overlay Section */}
        {/* <section className="absolute bottom-0 w-full h-[300px] -mb-500 z-1">
          <Wave/>
        </section> */}
      </section>
    </>
  );
};
