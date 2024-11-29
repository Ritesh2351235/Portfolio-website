/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Herosection from "@/components/Herosection";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true
    });

    // Cleanup function to destroy the scroll instance when component unmounts
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <>
      <Herosection></Herosection>
    </>

  );
}
