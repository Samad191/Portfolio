"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Title from "./Title";

export default function AnimatedTextSequence() {
  const firstTextRef: any = useRef(null);
  const secondTextRef: any = useRef(null);
  const thirdTextRef: any = useRef(null);


  const firstText = "Nice to meet you!";
  const secondText = "I'm Samad";
  const thirdText = "Turning ideas into decentralized experiences.";

  useEffect(() => {
    const firstLetters = firstTextRef?.current?.querySelectorAll(".char");
    const secondLetters = secondTextRef?.current?.querySelectorAll(".char");
    const thirdLetters = thirdTextRef?.current?.querySelectorAll(".char");

    // Initially hide all letters (optional if you keep the CSS from before)
    gsap.set([firstLetters, secondLetters, thirdLetters], { opacity: 0, y: 20 });

    // Timeline to sequence animations
    const tl = gsap.timeline();

    tl.to(firstLetters, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: 0.5,
      stagger: 0.05,
    })
      .to({}, { duration: 0.2 })
      .to(secondLetters, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05,
      })
        .to({}, { duration: 0.2 })
      .to(thirdLetters, {
        opacity: 1,
        y: 0,
        // delay: 1,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.025,
      });
  }, []);

  return (
    <>
      <style>{`
        .char {
          opacity: 0;
          transform: translateY(50px);
          display: inline-block;
        }
      `}</style>
      <div className="flex flex-col justify-center items-center bg-black gap-6">
        <h1
          ref={firstTextRef}
          className="text-3xl md:text-5xl font-bold text-white flex flex-wrap gap-1"
        >
          {firstText.split("").map((char, i) => (
            <span key={i} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <h1
          ref={secondTextRef}
          className="text-2xl md:text-4xl font-bold text-white flex flex-wrap gap-1"
        >
          {secondText.split("").map((char, i) => (
            <span key={i} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <h1
         ref={thirdTextRef}
          className="text-0.5xl md:text-2xl font-bold text-white flex flex-wrap gap-1"
          >
          {thirdText.split("").map((char, i) => (
            <span key={i} className="char" >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
 
      </div>
    </>
  );
}