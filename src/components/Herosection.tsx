import React from "react";
import { FlipWordsDemo } from "./Header";
import Button from "./Button";
import { ExpandableCardDemo } from "./Projects";
export default function Herosection() {

  return (
    <>
      <div className="flex justify-center items-center mt-20 ml-20">
        <FlipWordsDemo></FlipWordsDemo>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <div className="p-2 text-slate-300 font-extralight">
          <Button title="@instagram" url="https://www.instagram.com/_riteshhiremath/" ></Button>
        </div>
        <div className="mx-7 p-2">
          <Button title="@github" url="https://github.com/Ritesh2351235"></Button>
        </div>
        <div className="p-2">
          <Button title="@linkedIn" url="https://www.linkedin.com/in/ritesh-hiremath-692904222/"></Button>
        </div>

      </div>
      <div className="mt-10">
        <ExpandableCardDemo></ExpandableCardDemo>
      </div>
      <div className="flex text-neutral-600 dark:text-neutral-400 font-extralight justify-center mt-24">
        <p>&copy;</p>
        <div className="ml-2">
          2024 Ritesh Hiremath
        </div>

      </div>
    </>


  );

}