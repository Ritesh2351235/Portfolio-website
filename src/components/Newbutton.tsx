"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Githubicon() {
  return (
    <Link href="https://github.com/Ritesh2351235">
      <div className="flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <FaGithub className="h-6 w-6 text-black dark:text-white" />
          <span>Github</span>
        </HoverBorderGradient>
      </div>
    </Link>

  );
}
export function LinkedInicon() {
  return (
    <Link href="https://www.linkedin.com/in/ritesh-hiremath-692904222/">
      <div className="flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <FaLinkedin className="h-6 w-6 text-black dark:text-white" />
          <span>LinkedIn</span>
        </HoverBorderGradient>
      </div>
    </Link>

  );
}

export function Instagramicon() {
  return (
    <Link href="https://www.instagram.com/_riteshhiremath/">
      <div className="flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <FaInstagram className="h-6 w-6 text-black dark:text-white" />
          <span>Instagram</span>
        </HoverBorderGradient>
      </div>
    </Link>

  );
}


