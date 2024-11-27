import React from "react";
import Heading from "../Common/Headings/Heading";

export const Services = () => {
  return (
    <>
      <section id="services">
        <Heading text="Our Services" />
        <div className="w-[100%] min-h-[70vh] h-auto flex items-center flex-wrap justify-center gap-10 mt-10 ">
          {[
            "Solfeggio Frequency",
            "Chakra",
            "Power Nap",
            "Binaural Beats",
          ].map((item, index) => (
            <div
              className={`w-[400px] h-[250px] bg-slate-100 rounded-xl text-4xl text-black flex items-center justify-center`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
