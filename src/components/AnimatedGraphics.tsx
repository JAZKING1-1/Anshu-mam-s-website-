import React from 'react';
import { Sparkles } from 'lucide-react';

export const BloomingLotusSVG: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full text-[#9C536D]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Aura Ring */}
        <circle cx="50" cy="50" r="42" stroke="#EFCBD5" strokeWidth="1.5" strokeDasharray="4 4" className="animate-rotate-slow origin-center" />
        
        {/* Petals */}
        <path d="M50 20 C60 35, 60 50, 50 65 C40 50, 40 35, 50 20 Z" fill="#EFCBD5" opacity="0.8" />
        <path d="M25 45 C40 40, 55 45, 65 55 C50 60, 35 55, 25 45 Z" fill="#C98398" opacity="0.7" />
        <path d="M75 45 C60 40, 45 45, 35 55 C50 60, 65 55, 75 45 Z" fill="#D9E2C8" opacity="0.7" />
        <path d="M50 30 C65 40, 60 65, 50 75 C40 65, 35 40, 50 30 Z" fill="#9C536D" opacity="0.9" />

        {/* Center Glow Dot */}
        <circle cx="50" cy="50" r="5" fill="#C3A36B" className="animate-pulse" />
      </svg>
      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#C3A36B] animate-sparkle" />
    </div>
  );
};

export const AnimatedCageSVG: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full text-[#C3A36B]" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dome */}
        <path d="M25 60 C25 25, 95 25, 95 60 V115 H25 V60 Z" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
        <circle cx="60" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="#FFF9F4" />

        {/* Open Swinging Door */}
        <g className="transition-transform duration-700 hover:rotate-12 origin-left">
          <path d="M60 60 C60 45, 90 45, 90 60 V113 H60 V60 Z" stroke="#9C536D" strokeWidth="2" fill="#EFCBD5" opacity="0.4" />
          <path d="M90 60 L108 48 V105 L90 113 Z" stroke="#C3A36B" strokeWidth="1.5" fill="#FFF9F4" />
        </g>

        {/* Escaping Sparkles */}
        <circle cx="102" cy="35" r="3" fill="#9C536D" className="animate-sparkle" />
        <circle cx="82" cy="22" r="2.5" fill="#A8B7A0" className="animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <circle cx="110" cy="55" r="2" fill="#C3A36B" className="animate-sparkle" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
};

export const PulsingBadgeSVG: React.FC<{ iconText?: string; label?: string }> = ({ iconText = '🌸', label = 'Feminine Energy' }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-[#FFF9F4] border border-[#EFCBD5] px-4 py-2 rounded-full shadow-soft animate-glow-pulse">
      <span className="text-base">{iconText}</span>
      <span className="text-xs font-semibold text-[#4A2E3B] tracking-wide">{label}</span>
    </div>
  );
};
