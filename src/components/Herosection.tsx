import React from "react";
import { FlipWordsDemo } from "./Header";
import Button from "./Button";
import { ExpandableCardDemo } from "./Projects";
import { Githubicon, Instagramicon, LinkedInicon } from "./Newbutton";


export default function Herosection() {
  return (
    <>
      {/* Full-width container */}
      <div className="h-auto w-full mt-10 sm:mt-20 flex justify-center items-center lg:mt-20 overflow-hidden">
        <FlipWordsDemo></FlipWordsDemo>
      </div>

      {/* Button section, ensure proper alignment and no extra margin */}
      <div className="flex justify-center items-center mt-6 mb-5 space-x-4">
        <div>
          <Githubicon></Githubicon>
        </div>
        <div>
          <LinkedInicon></LinkedInicon>
        </div>
        <div>
          <Instagramicon></Instagramicon>
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
