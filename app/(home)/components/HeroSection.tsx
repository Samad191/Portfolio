import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";
import AnimatedText from "./Text";
import BallsSection from "./Ball";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <AnimatedText />
        <Link
          href={"mailto:samad13354@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact Me 🤙" />
        </Link>
      </div>
      <BallsSection />
    </div>
  );
};

export default HeroSection;
