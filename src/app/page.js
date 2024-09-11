'use client'
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Common/Navbar/Navbar';
import { Text } from '@chakra-ui/react'
import { About } from '@/components/About/About';
import { Spacer } from '@/components/Common/Spacers/Spacer';
import { Services } from '@/components/Services/Services';
import { Contact } from '@/components/Contact/Contact';
import Footer from '@/components/Common/Footer/Footer';
export default function Home() {
  return (
      <>

        <Navbar/>
        <Hero/>
        <div className='w-[100vw] flex flex-col items-center justify-center '>
        <div className='w-[80vw] '>
          <Spacer />
        {/* <About/>
        <Spacer />
        <Services/>
        <Spacer />
        <Spacer /> */}

        <Contact/>
        <Spacer />
        <Spacer />
        </div>
        </div>
        <Footer/>


      </>
  );
}
