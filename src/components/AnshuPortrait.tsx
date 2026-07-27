import React from 'react';
import { AnshuImage } from './AnshuImage';
import { ShieldCheck } from 'lucide-react';

interface AnshuPortraitProps {
  variant?: 'hero' | 'about' | 'editorial' | 'square';
  className?: string;
}

export const AnshuPortrait: React.FC<AnshuPortraitProps> = ({ variant = 'hero', className = '' }) => {
  const imageNameMap = {
    hero: 'anshu-hero.webp' as const,
    about: 'anshu-about.webp' as const,
    editorial: 'anshu-editorial.webp' as const,
    square: 'anshu-square.webp' as const,
  };

  const imageName = imageNameMap[variant] || 'anshu-hero.webp';

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {/* Soft Glow Background Layer */}
      <div className="absolute inset-0 rounded-4xl bg-gradient-to-tr from-[#EFCBD5]/50 via-[#FFF9F4] to-[#D9E2C8]/50 blur-2xl transform scale-105 pointer-events-none"></div>

      {/* Main Editorial Card */}
      <div className="relative w-full bg-white/95 rounded-4xl p-5 shadow-soft-lg border border-[#EFCBD5]/60 overflow-hidden">
        
        {/* Editorial Image Frame */}
        <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#C3A36B]/30 shadow-inner">
          <AnshuImage
            name={imageName}
            alt="Anshu Sahani — Certified Life Coach & Relationship Coach for Women"
            className="w-full h-full object-cover"
            objectPosition="object-top"
          />
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-4 pt-3 border-t border-[#EFCBD5]/40 flex items-center justify-between text-xs text-[#2D2729]/80 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#3F5648]" />
            <span>1:1 Confidential Coaching</span>
          </div>
          <span className="text-[#C3A36B] font-serif italic font-semibold">Courage · Clarity · Confidence</span>
        </div>

      </div>

    </div>
  );
};
