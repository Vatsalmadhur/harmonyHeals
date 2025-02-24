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

export default function Home() {
  return (
      <>

        <div style={{backgroundImage: "url('/assets/Bg5.jpg')"}} className='w-[100vw] h-[100vh] bg-cover bg-center flex flex-col items-center justify-center'>
        <Navbar/>
        <Hero/>
        </div>
        {/* <div className='w-[100vw] flex flex-col items-center justify-center'> */}
        <Spacer />
        <About/>
        <Spacer2 />
        <Services/>
        <Spacer />
        <Contact/>
        <Spacer2 />
        {/* <Services/>
        <Spacer />
        <Spacer />

        <Contact/>
        <Spacer />
        <Spacer /> */}
        {/* </div> */}
        <Footer/>


      </>
  );
}
