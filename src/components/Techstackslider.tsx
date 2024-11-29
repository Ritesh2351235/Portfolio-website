'use client';

import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiPostgresql,
  SiJest,
  SiVite,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si'

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: FaGitAlt, color: '#F1502F' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E535AB' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' }
]

export function TechStackSlider() {
  return (
    <div className="overflow-hidden bg-black py-8 mt-8 w-full">
      <div className="flex animate-slide">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-8 flex-shrink-0 group"
          >
            <tech.icon
              className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-300"
              color={tech.color}
            />
            <p className="mt-2 text-sm text-white font-thin">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackSlider

