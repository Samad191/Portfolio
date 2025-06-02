"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiRust,
  SiWeb3Dotjs,
  SiEthereum,
  SiSolana,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";

const Blogs = () => {
  const blogs = [
    {
      text: "Understanding architecture of Solana ............ ...... ............",
      Icon: SiSolana,
    },
    {
      text: "Understanding Memory Management in Rust",
      Icon: SiRust,
    },
    // socket io
    // gsap
    // ai agents
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Blogs 🏅"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={blogs} type="blogs" />
    </div>
  );
};

export default Blogs;
