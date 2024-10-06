import React from "react";
import { FlipWordsDemo } from "./Header";
import Button from "./Button";
import { ExpandableCardDemo } from "./Projects";

export default function Herosection() {
  return (
    <>
      {/* Full-width container */}
      <div className="h-auto w-full mt-10 sm:mt-20 flex justify-center items-center lg:mt-20 overflow-hidden">
        <FlipWordsDemo></FlipWordsDemo>
      </div>

      {/* Button section, ensure proper alignment and no extra margin */}
      <div className="flex justify-center items-center mt-5 space-x-4">
        <div className="p-2 text-slate-300 font-extralight">
          <Button title="@instagram" url="https://www.instagram.com/_riteshhiremath/" />
        </div>
        <div className="p-2">
          <Button title="@github" url="https://github.com/Ritesh2351235" />
        </div>
        <div className="p-2">
          <Button title="@linkedIn" url="https://www.linkedin.com/in/ritesh-hiremath-692904222/" />
        </div>
      </div>

      {/* Expandable card section */}
      <div className="mt-20 lg:mt-10">
        <ExpandableCardDemo />
      </div>

      {/* Footer */}
      <div className="flex text-neutral-600 dark:text-neutral-400 font-extralight justify-center mt-24">
        <p>&copy;</p>
        <div className="ml-2 mb-10">2024 Ritesh Hiremath</div>
      </div>
    </>
  );
}
