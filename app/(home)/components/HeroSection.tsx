import { MovingBorderBtn } from "@/components/ui/moving-border"
import Link from "next/link"
import Title from "./Title"
import AnimatedText from "./Text"
import BallsSection from "./Ball"

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
        <div className="space-y-10 text-center lg:text-left">
            <AnimatedText />
            {/* <AnimatedText value="I'm Samad" /> */}
            {/* <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you! 👋<br/>  
                <span className="underline underline-offset-8 decoration-green-500">{"I'm Samad."}</span>
            </h1> */}
            {/* <p className="md:w-126 text-lg text-gray-300">
            {"Turning ideas into decentralized experiences."}
            </p> */}
           <Link href={"mailto:samad13354@gmail.com"} className="inline-block group" >
                <Title text="Contact Me 🤙"/>
           </Link>
        </div>
           <BallsSection />
        </div>
  )
}

export default HeroSection