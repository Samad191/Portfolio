import { MovingBorderBtn } from "@/components/ui/moving-border"
import Link from "next/link"
import Title from "./Title"
import AnimatedText from "./Text"

const BallsSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
       
           <div className="relative">
            <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                <div className="flex gap-3 translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                    <div className="w-32 h-32 rounded-full bg-green-500"></div>
                </div>
                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>
           </div>
        </div>
  )
}

export default BallsSection