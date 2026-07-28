import React from 'react';

export const WatercolorBlobSVG: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-64 h-64',
  color = '#FCEBF1',
}) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
        <path
          fill={color}
          d="M44.7,-61.2C56.9,-52.1,65.2,-37.8,69.5,-22.4C73.8,-7,74.1,9.5,68.9,24.4C63.7,39.3,53,52.6,39.6,60.8C26.2,69,10.1,72.1,-5.5,79.7C-21.1,87.3,-36.2,99.4,-48.1,93.6C-60,87.8,-68.7,64,-74.6,43.2C-80.5,22.4,-83.6,4.6,-79.8,-11.2C-76,-27,-65.3,-40.8,-52.3,-50.2C-39.3,-59.6,-24,-64.6,-7.7,-63.5C8.6,-62.4,24.7,-70.3,44.7,-61.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export const BrushStrokeDividerSVG: React.FC<{ className?: string }> = ({ className = 'w-full h-12' }) => {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <svg viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl text-[#C95D86]/40">
        <path
          d="M10 20 C150 5, 300 35, 450 15 C520 8, 570 25, 590 20"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="4 8 12 4"
        />
        <path
          d="M40 25 C180 12, 320 28, 480 18"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export const AbstractBotanicalSVG: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#6E8A63]">
        <path d="M50 110 C50 70, 50 30, 50 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 80 Q25 60, 15 45 Q35 45, 50 65" fill="#CDE0B7" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
        <path d="M50 60 Q75 40, 85 25 Q65 25, 50 45" fill="#E89BB6" stroke="#7D2548" strokeWidth="1.5" opacity="0.85" />
        <path d="M50 40 Q30 20, 20 10 Q40 10, 50 28" fill="#F4E6B6" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
        <circle cx="50" cy="10" r="4" fill="#D4AF37" />
      </svg>
    </div>
  );
};
