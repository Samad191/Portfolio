"use client";

import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { inject } from '@vercel/analytics';
import AnimatedText from "./components/Text"
import Blogs from "./components/Blogs"
import { useEffect } from "react"
 
inject();
const Page = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar/>
        <HeroSection/>
      </div>

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bo0 w-full">

        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20 ">
        <Skills/>
        <Blogs />
        {/* <Projects/> */}
        <Footer/>
      </div>
    </div>
  )
}

export default Page