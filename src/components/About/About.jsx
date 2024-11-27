import React from "react";
import Heading from "../Common/Headings/Heading";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const About = () => {
  // useGSAP(()=>{
  //   gsap.to('')
  // })
  return (
    <>
      <section id="about">
        <Heading text="About Us" />
        <p className="text-xl pt-5 customFont3">
          Welcome to HarmonyHeal, where ancient wisdom meets modern technology
          to create a transformative journey of healing and self-discovery. Our
          mission is to harness the therapeutic power of sound to bring balance,
          harmony, and peace to your life. At HarmonyHeal, we understand the
          challenges of today’s fast-paced world—stress, anxiety, and a
          disconnect from inner peace. We’ve built a platform that offers
          scientifically backed sound healing practices designed to support your
          mental, emotional, and physical well-being. Whether you’re seeking
          stress relief, enhanced focus, or a calming escape, HarmonyHeal
          provides tools and resources to guide you on your wellness journey.
          Our platform is more than just a service; it’s a community. Through
          personalized sound therapy sessions, expertly crafted courses, and a
          supportive network of like-minded individuals, HarmonyHeal helps you
          resonate with your true potential. By integrating sound healing with
          cutting-edge technology like AI-driven personalization and real-time
          progress tracking, we ensure an experience that’s as effective as it
          is enriching.
        </p>
        
        <p className="text-xl customFont3 mt-5" >
          {" "}
          We are passionate about making wellness accessible to all. Our
          commitment is to empower you with tools that are practical,
          transformative, and deeply resonant with your unique needs. At
          HarmonyHeal, every vibration, tone, and wave is designed to help you
          reconnect with your inner harmony. Let HarmonyHeal be your partner in
          your journey to wellness. Together, we’ll create a life filled with
          balance, positivity, and peace—one healing vibration at a time.
        </p>
      </section>
    </>
  );
};
