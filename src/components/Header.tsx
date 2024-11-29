import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["software developer", "tech enthusiast", "dreamer", "fitness enthusiast"];

  return (
    <div className="px-4">
      <div className="w-[400px]  lg:w-[575px] ml-36 lg:ml-40 font-extrathin  text-3xl sm:text-4xl md:text-5xl mx-auto text-neutral-400">
        Hi! I&apos;m Ritesh<br></br>
        a <FlipWords words={words} /> <br />
        <h2 className="text-3xl">Based in India</h2>
      </div>
    </div>
  );
}