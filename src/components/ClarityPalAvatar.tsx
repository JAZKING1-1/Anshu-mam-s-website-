import React, { useState } from 'react';
import { Sparkles, RefreshCw, X, ArrowRight } from 'lucide-react';

interface ClarityPalAvatarProps {
  onNavigate?: (path: string) => void;
}

export const ClarityPalAvatar: React.FC<ClarityPalAvatarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);

  const affirmations = [
    "Take a deep breath. You are safe, worthy, and deeply capable.",
    "A cage is still a cage, even when made of gold. You hold the key.",
    "Setting boundaries is an act of deep self-respect, not rejection.",
    "Your inner voice deserves to be louder than guilt or self-doubt.",
    "Courage is not the absence of fear—it is choosing yourself anyway.",
  ];

  const handleNextBoost = () => {
    setCurrentQuoteIdx((prev) => (prev + 1) % affirmations.length);
  };

  const handleAction = (path: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path.replace('/', '#');
    }
  };

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-5 z-40">
      
      {/* Speech / Booster Bubble Modal */}
      {isOpen && (
        <div className="mb-3 max-w-xs sm:max-w-sm bg-white rounded-3xl p-6 border-2 border-[#E89BB6] shadow-soft-lg animate-fade-up relative space-y-4">
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FCEBF1] text-[#7D2548] flex items-center justify-center hover:bg-[#E89BB6]/40 transition-colors cursor-pointer"
            aria-label="Close pal bubble"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            {/* Avatar Head SVG */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E89BB6] to-[#D4AF37] p-1 flex items-center justify-center shadow-xs shrink-0">
              <span className="text-lg">🌸</span>
            </div>

            <div>
              <h4 className="font-serif font-bold text-sm text-[#3D1F2D]">
                Joy — Your Clarity Pal
              </h4>
              <span className="text-[10px] text-[#7D2548] font-bold tracking-wider uppercase">
                Feminine Energy Buddy
              </span>
            </div>
          </div>

          {/* Daily Mindset Affirmation Box */}
          <div className="p-4 rounded-2xl bg-[#FFF9F4] border-l-3 border-[#D4AF37] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#C95D86]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Daily Mindset Boost
              </span>
              <button
                onClick={handleNextBoost}
                className="hover:rotate-180 transition-transform duration-300 text-[#7D2548] cursor-pointer"
                title="Get another quote"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="font-serif italic text-xs text-[#3D1F2D] font-bold leading-snug">
              "{affirmations[currentQuoteIdx]}"
            </p>
          </div>

          {/* Guided Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              onClick={() => handleAction('/book')}
              className="w-full inline-flex items-center justify-between bg-[#7D2548] hover:bg-[#661C39] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>Book a Free Clarity Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleAction('/story-wall')}
              className="w-full inline-flex items-center justify-between bg-[#FCEBF1] hover:bg-[#E89BB6]/40 text-[#7D2548] text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>Explore Gallery Story Wall</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Pal Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#E89BB6] via-[#C95D86] to-[#7D2548] text-white shadow-soft-lg hover:shadow-rose-glow transition-all transform hover:scale-110 cursor-pointer animate-float"
        aria-label="Open Clarity Pal"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🌸</span>
        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#D4AF37] animate-sparkle" />
        
        {!isOpen && (
          <span className="absolute -top-2 -left-2 bg-[#7D2548] text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white shadow-xs">
            Hi! 👋
          </span>
        )}
      </button>

    </div>
  );
};
