'use client'
import { Navbar } from '@/components/Common/Navbar/Navbar';
// import { About } from '@/components/About/About';
import { Spacer } from '@/components/Common/Spacers/Spacer';


import Footer from '@/components/Common/Footer/Footer';
import { Spacer2 } from '@/components/Common/Spacers/Spacer2';
// import Know from '@/components/Know/Know';
import React from 'react';
import dynamic from 'next/dynamic';
import Contact from '@/components/Contact/Contact';
// import Services from '@/components/Services/Services';
import Hero from '@/components/Hero/Hero';

// const About = lazy(()=>import('../components/About/About'))
const About = dynamic(() => import("../components/About/About"),{
  loading:()=><p>loading...</p>

});
const Services = dynamic(() => import("../components/Services/Services"),{
  loading:()=><p>loading...</p>
});
const Know = dynamic(() => import("../components/Know/Know"),{
  loading:()=><p>loading...</p>
});

export default function Home() {
  return (
      <>
        <div className='w-[100vw] h-auto  flex flex-col items-center justify-center'>
        <Navbar/>
        <Hero/>
        <About/>
        <Spacer2 />
        <Services/>
        <Spacer />
        <Know/>
        <Spacer/>
        <Contact/>
        </div>
        <Footer/>


      </>
  );
}
