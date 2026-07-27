import React, { useState } from 'react';
import { Sparkles, Feather } from 'lucide-react';

interface AnshuImageProps {
  name: 'anshu-hero.webp' | 'anshu-about.webp' | 'anshu-editorial.webp' | 'anshu-black-white.webp' | 'anshu-square.webp';
  alt: string;
  className?: string;
  objectPosition?: string;
}

export const AnshuImage: React.FC<AnshuImageProps> = ({
  name,
  alt,
  className = 'w-full h-full object-cover',
  objectPosition = 'object-center',
}) => {
  const [hasError, setHasError] = useState(false);

  // Map requested name to actual profile image file in public/anshu
  const imageMap: Record<string, string> = {
    'anshu-hero.webp': '/anshu/anshu-1.png',
    'anshu-about.webp': '/anshu/anshu-2.png',
    'anshu-editorial.webp': '/anshu/anshu-1.png',
    'anshu-black-white.webp': '/anshu/anshu-2.png',
    'anshu-square.webp': '/anshu/anshu-2.png',
  };

  const imageSrc = imageMap[name] || '/anshu/anshu-1.png';

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[320px] rounded-3xl bg-gradient-to-br from-[#EFCBD5]/40 via-[#FFF9F4] to-[#D9E2C8]/40 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-[#EFCBD5]/60 shadow-soft">
        <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#C3A36B]/30 rounded-2xl pointer-events-none"></div>
        
        <div className="relative z-10 w-40 h-40 mb-3 flex items-center justify-center">
          <svg className="w-full h-full text-[#C3A36B]" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 100 C40 40, 160 40, 160 100 V200 H40 V100 Z" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
            <circle cx="100" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="#FFF9F4" />
            <path d="M75 100 C75 70, 125 70, 125 100 V195 H75 V100 Z" stroke="#9C536D" strokeWidth="2.5" fill="#EFCBD5" opacity="0.4" />
            <path d="M125 100 L160 85 V180 L125 195 Z" stroke="#C3A36B" strokeWidth="2" fill="#FFF9F4" />
            <path d="M110 80 Q130 50, 150 65 Q135 90, 110 80 Z" fill="#9C536D" opacity="0.8" />
            <path d="M130 60 Q150 30, 170 45 Q155 70, 130 60 Z" fill="#A8B7A0" opacity="0.8" />
          </svg>
          <Sparkles className="absolute top-2 right-2 w-5 h-5 text-[#C3A36B] animate-pulse-subtle" />
          <Feather className="absolute bottom-2 left-2 w-5 h-5 text-[#9C536D] animate-float" />
        </div>

        <span className="font-serif text-2xl font-bold text-[#4A2E3B] block relative z-10">
          Anshu Sahani
        </span>
        <span className="text-[10px] text-[#9C536D] font-bold tracking-widest uppercase block mt-1 relative z-10">
          Certified Life &amp; Relationship Coach
        </span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => setHasError(true)}
      className={`${className} ${objectPosition} transition-opacity duration-300`}
      loading="lazy"
    />
  );
};
