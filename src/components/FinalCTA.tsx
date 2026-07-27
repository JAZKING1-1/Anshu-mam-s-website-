import React from 'react';
import { PhoneCall, Sparkles, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigate?: (path: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/book');
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-tr from-[#EFCBD5] via-[#FFF9F4] to-[#D9E2C8] relative overflow-hidden text-center">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-white text-[#9C536D] mx-auto flex items-center justify-center shadow-soft border border-[#C3A36B]/30 animate-float">
          <Sparkles className="w-8 h-8 text-[#C3A36B]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A2E3B] leading-tight">
          Your better way is waiting.
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl text-[#9C536D] max-w-xl mx-auto">
          Reset. Refresh. Restart your life with courage, clarity, and confidence.
        </p>

        <div className="pt-4">
          <a
            href="/book"
            onClick={handleAction}
            className="inline-flex items-center gap-3 bg-[#9C536D] hover:bg-[#824259] text-white font-semibold text-lg px-9 py-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Book Free Clarity Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-[#2D2729]/70 pt-2">
          Take the gentle first step today. Completely free 15–20 min consultation.
        </p>

      </div>
    </section>
  );
};
