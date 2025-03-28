'use client'
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Common/Navbar/Navbar';
import { Text } from '@chakra-ui/react'
import { About } from '@/components/About/About';
import { Spacer } from '@/components/Common/Spacers/Spacer';
import { Services } from '@/components/Services/Services';
import { Contact } from '@/components/Contact/Contact';

import Footer from '@/components/Common/Footer/Footer';
import AudioCard from '@/components/Common/AudioCard/AudioCard';
import { Spacer2 } from '@/components/Common/Spacers/Spacer2';
import Know from '@/components/Know/Know';


export default function Home() {
  return (
      <>
        <div className='w-[100vw] h-auto  flex flex-col items-center justify-center'>
        <Navbar/>
        <Hero/>
        {/* <Spacer2 /> */}
        <About/>
        <Spacer2 />
        <Services/>
        <Spacer />
        {/* <Spacer2 /> */}
        <Know/>
        <Spacer/>
        <Contact/>
        </div>
        <Footer/>


      </>
  );
}
