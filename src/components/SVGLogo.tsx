import React from 'react';

export const SVGLogo: React.FC<{ className?: string; showTagline?: boolean }> = ({
  className = '',
  showTagline = true,
}) => {
  return (
    <div className={`flex items-center gap-3.5 group ${className}`}>
      
      {/* SVG Icon Emblem */}
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#FCEBF1] via-[#FFF9F4] to-[#CDE0B7] p-1.5 flex items-center justify-center border border-[#D4AF37]/50 shadow-soft group-hover:scale-105 transition-transform duration-300">
        
        {/* Blooming Lotus SVG Mark */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7D2548]">
          <path
            d="M50 15 C62 32, 62 48, 50 65 C38 48, 38 32, 50 15 Z"
            fill="#E89BB6"
            opacity="0.85"
          />
          <path
            d="M22 42 C40 36, 55 42, 68 54 C50 60, 35 54, 22 42 Z"
            fill="#C95D86"
            opacity="0.75"
          />
          <path
            d="M78 42 C60 36, 45 42, 32 54 C50 60, 65 54, 78 42 Z"
            fill="#98B08D"
            opacity="0.75"
          />
          <path
            d="M50 28 C65 38, 60 62, 50 72 C40 62, 35 38, 50 28 Z"
            fill="#7D2548"
          />
          <circle cx="50" cy="48" r="4" fill="#D4AF37" />
        </svg>

        {/* Orbit Ring Accent */}
        <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 pointer-events-none animate-rotate-slow"></div>
      </div>

      {/* Brand Typography */}
      <div>
        <span className="font-serif text-2xl font-bold tracking-tight text-[#3D1F2D] block leading-none">
          Anshu Sahani
        </span>
        {showTagline && (
          <span className="text-[10px] text-[#7D2548] font-bold tracking-widest uppercase block mt-1">
            LIFE COACH FOR WOMEN
          </span>
        )}
      </div>

    </div>
  );
};
