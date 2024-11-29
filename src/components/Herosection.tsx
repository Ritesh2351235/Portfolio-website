
import React from "react";
import { FlipWordsDemo } from "./Header";
import { Githubicon, Instagramicon, LinkedInicon } from "./Newbutton";
import { AppleCardsCarouselDemo } from "./Cardprojects";
import { WaveBackground } from "./Waveanimation";
import { TechStackSlider } from "./Techstackslider";


export default function Herosection() {
  return (
    <>

      <div className="w-full h-screen">
        <WaveBackground></WaveBackground>

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
        <div>
          <TechStackSlider></TechStackSlider>
        </div>
        {/* Expandable card section */}
        <div className="mt-20 lg:mt-10">
          <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
        </div>

        {/* Footer */}
        <div className="flex text-white font-extralight justify-center mt-24">
          <p>&copy;</p>
          <div className="ml-2 mb-10">2024 Ritesh Hiremath</div>
        </div>
      </div>
    </>
  );
}
