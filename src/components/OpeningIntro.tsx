import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const OpeningIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem('anshu_intro_seen');
    if (!hasSeenIntro) {
      setIsVisible(true);
      // Auto fade out after 3.8 seconds
      const timer = setTimeout(() => {
        handleDismiss();
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('anshu_intro_seen', 'true');
    }, 600);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#FFF9F4] flex flex-col items-center justify-center p-6 text-center transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Soft Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#E89BB6]/25 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#CDE0B7]/30 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-lg space-y-6 animate-fade-up">
        
        {/* Animated Blooming Lotus Graphic */}
        <div className="relative w-28 h-28 mx-auto animate-bloom">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7D2548]">
            <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" className="animate-rotate-slow origin-center" />
            <path d="M50 12 C64 30, 64 48, 50 68 C36 48, 36 30, 50 12 Z" fill="#E89BB6" opacity="0.9" />
            <path d="M20 42 C40 34, 58 42, 70 54 C50 62, 32 54, 20 42 Z" fill="#C95D86" opacity="0.8" />
            <path d="M80 42 C60 34, 42 42, 30 54 C50 62, 68 54, 80 42 Z" fill="#98B08D" opacity="0.8" />
            <path d="M50 25 C68 38, 62 64, 50 76 C38 64, 32 38, 50 25 Z" fill="#7D2548" />
            <circle cx="50" cy="48" r="5" fill="#D4AF37" className="animate-pulse" />
          </svg>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#D4AF37] animate-sparkle" />
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#7D2548] bg-[#FCEBF1] px-4 py-1.5 rounded-full inline-block">
            Anshu Sahani Coaching
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D1F2D] leading-tight">
            Welcome to a Safe Space for Women
          </h2>
          <p className="font-serif italic text-lg text-[#C95D86]">
            Unlocking Courage, Clarity &amp; Confidence
          </p>
        </div>

        {/* Skip / Enter Button */}
        <div className="pt-4">
          <button
            onClick={handleDismiss}
            className="inline-flex items-center gap-2 bg-[#7D2548] hover:bg-[#661C39] text-white font-medium text-xs px-6 py-3 rounded-full shadow-soft hover:shadow-soft-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Enter Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
