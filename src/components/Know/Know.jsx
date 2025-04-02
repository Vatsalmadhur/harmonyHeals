import React, { useRef } from 'react';
// import BowlView from '../BowlView/bowlView';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
const BowlView = dynamic(()=>import('../BowlView/bowlView'),{
  loading:()=> <p>Loading...</p>
})
const Know = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Ensure animation is tied to the container reference
    gsap.from('.kText', {
      y:100,
      opacity: 0,
      duration: 0.5,
      ease: 'power4.out',
      stagger: 0.1,
      pin:true,
      scrollTrigger: {
        trigger: '.kText', // Use the correct trigger reference
        scrub: true,
        start: 'top bottom', // Starts when the top hits the center of the viewport
      },
    });
  }, []);

  return (
    <div
      id="knowContainer"
      className="w-screen md:min-h-screen h-auto flex flex-col items-center justify-center "
    >
      {/* Text Section */}
      <div className="md:w-[55%] w-[90%] h-auto flex flex-col gap-4">
        <p className="text-4xl customFont2 text-primary-white kText opacity-1">
          Did you know about the{' '}
          <strong className="customFont1">'Tibetan Singing Bowls'?</strong>
        </p>
        <p className="text-xl kText opacity-1">
          Tibetan singing bowls produce resonant tones that promote relaxation,
          balance energy, and reduce stress. They are believed to offer benefits
          such as improved sleep, reduced anxiety, and enhanced emotional
          well-being.
        </p>
      </div>

      {/* BowlView Section */}
      <div className="w-auto h-auto pb-10 md:block hidden  ">
        {/* Uncomment when BowlView is ready */}
        <BowlView />
      </div>
      <img alt="bowl img here" src="/assets/tbowl.webp" className='w-[90%] md:hidden mt-5' />
    </div>
  );
};

export default Know;
