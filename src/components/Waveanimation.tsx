"use client";

import React from "react";

export const WaveBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute bottom-0 w-full h-96"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.5)" />
          </linearGradient>
        </defs>
        <path
          className="animate-wave-1"
          d="M0,160 Q360,210 720,185 Q1080,160 1440,185 L1440,320 L0,320 Z"
          fill="url(#blueGradient)"
        />
      </svg>

      {/* Additional wave layers for depth */}
      <svg
        className="absolute bottom-0 w-full h-96 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.2)" />
            <stop offset="100%" stopColor="rgba(81,29,206,0.3)" />
          </linearGradient>
        </defs>
        <path
          className="animate-wave-2"
          d="M0,200 Q360,250 720,225 Q1080,200 1440,225 L1440,320 L0,320 Z"
          fill="url(#purpleGradient)"
        />
      </svg>
    </div>
  );
};