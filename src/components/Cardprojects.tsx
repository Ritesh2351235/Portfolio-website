"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import thirtsix from "../images/thirtysixstudios.png";
import heritage from "../images/heritage.jpeg";
import nutrition from "../images/nutritionai.jpeg";
import fluentai from "../images/fluentai.jpeg";
import fluentailanding from "../images/fluentailanding.png";
import nutritionailanding from "../images/nutritionailanding.png";
import thirtylanding from "../images/thritylanding.png";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full mx-auto">
      <Carousel items={cards} />
    </div>
  );
}

const ThirtySixStudiosContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
          A stunning landing page redesign inspired by ThirtySix Studios. This project showcases my
          skills in responsive web design, animations, and modern styling using GSAP and Tailwind CSS.
          The animations add a smooth and interactive feel to the page, enhancing user experience.
        </p>
        <Image
          src={thirtylanding}
          alt="Thirty Six Studios Project"
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-xl mx-auto"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-800 mb-6">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-base md:text-lg">
          <li>Responsive redesign of the ThirtySix Studios landing page</li>
          <li>Smooth animations powered by GSAP (GreenSock Animation Platform)</li>
          <li>Modern and clean UI styled with Tailwind CSS</li>
          <li>Enhanced user experience with interactive transitions</li>
        </ul>
      </div>
    </div>
  );
};

const NutritionAIContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction Section */}
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
          <span className="font-bold text-neutral-700 mr-2">NutritionAI</span>
          is your personal AI-powered nutrition guide that makes smarter eating
          effortless. Upload meal images and receive detailed nutritional
          insights and personalized recommendations tailored to your dietary goals!
        </p>
        <Image
          src={nutritionailanding}
          alt="NutritionAI Project"
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-xl mx-auto"
        />
      </div>

      {/* Features Section */}
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-800 mb-6">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-base md:text-lg">
          <li>AI-powered meal analysis and nutrition tracking</li>
          <li>Personalized dietary recommendations based on your health goals</li>
          <li>Real-time nutritional insights for uploaded meals</li>
          <li>Track daily progress and monitor your health metrics</li>
        </ul>
      </div>
    </div>
  );
};

const HeritageWalkContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
          An immersive virtual reality experience that brings the historic
          site of Hampi to life, allowing users to explore ancient architecture
          and cultural heritage through cutting-edge VR technology.
        </p>
        <Image
          src={heritage}
          alt="HeritageWalk Project"
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-xl mx-auto"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <h3 className="text-xl font-semibold mb-4 text-black ">Project Highlights</h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          <li>Detailed 3D reconstruction of Hampi&apos;s historical sites Using Colmap and Nerfs</li>
          <li>User attractive terrains built with Unity3D</li>
          <li>Interactive guided tours</li>
          <li>Immersive virtual reality exploration</li>
        </ul>
      </div>
    </div>
  );
};

const FluentAIContent = () => {
  return (
    <div className="space-y-10">
      {/* Introduction Section */}
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto mb-6 ">
          <strong>FluentAI</strong> is an AI-powered app that makes English learning fun and personalized.
          Enhance your reading, writing, and speaking skills with tailored exercises, instant grading, and
          detailed feedback. Transform your communication abilities effortlessly!
        </p>
        <Image
          src={fluentailanding}
          alt="FluentAI Project"
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-xl mx-auto"
        />
      </div>

      {/* Key Features Section */}
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-800 mb-6 ">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-base md:text-lg">
          <li><strong>AI-Driven Conversation Practice:</strong> Engage in interactive speaking sessions with real-time AI feedback.</li>
          <li><strong>Personalized Learning Paths:</strong> Adaptive exercises designed for your unique learning style and pace.</li>
          <li><strong>Real-Time Feedback:</strong> Get instant evaluations on pronunciation, grammar, and fluency.</li>
          <li><strong>Adaptive Difficulty Levels:</strong> Content scales as you improve, ensuring continuous progress.</li>
        </ul>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Thirty Six Studios",
    github: "https://github.com/Ritesh2351235/gsap",
    website: "https://gsap-jet.vercel.app/",
    title: "Redesigned Landing Page",
    src: thirtsix,
    content: <ThirtySixStudiosContent />,
  },
  {
    category: "NutritionAI",
    title: "Track your diet and nutrition",
    github: "https://github.com/Ritesh2351235/nutrition-ai",
    website: "https://nutrition-ai-bay.vercel.app/",
    src: nutrition,
    content: <NutritionAIContent />,
  },
  {
    category: "HeritageWalk",
    title: "Explore Hampi through virtual reality",
    github: "https://github.com/Ritesh2351235/HeritageWalkthrough",
    website: "https://play.unity.com/en/games/b097368f-2939-436b-8bc8-afed3fe1d284/realm-of-relics-journey-through-hampi",
    src: heritage,
    content: <HeritageWalkContent />,
  },
  {
    category: "FluentAI",
    title: "Your AI-powered English tutor",
    github: "https://github.com/Ritesh2351235/Fluentai",
    website: "https://fluentai-coral.vercel.app/",
    src: fluentai,
    content: <FluentAIContent />,
  },
];

export default AppleCardsCarouselDemo;