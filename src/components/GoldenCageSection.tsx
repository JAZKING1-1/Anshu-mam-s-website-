import React from 'react';
import { KeyRound, Sparkles, Heart } from 'lucide-react';

interface GoldenCageSectionProps {
  onNavigate?: (path: string) => void;
}

export const GoldenCageSection: React.FC<GoldenCageSectionProps> = ({ onNavigate }) => {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/book');
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#EFCBD5]/30 via-[#FFF9F4] to-[#D9E2C8]/30 relative overflow-hidden">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#EFCBD5]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D9E2C8]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white/95 rounded-4xl p-8 sm:p-12 lg:p-16 shadow-soft-lg border border-[#EFCBD5]/60 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story Text Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#FFF9F4] border border-[#C3A36B]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4A2E3B]">
                <KeyRound className="w-3.5 h-3.5 text-[#C3A36B]" />
                <span>The Core Concept Behind My Coaching</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B] leading-tight">
                My Journey — <br />
                <span className="text-[#9C536D]">Unlocking the Golden Cage</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#2D2729]/85 leading-relaxed font-normal">
                <p>
                  For years, I lived inside what I call a <strong className="font-semibold text-[#4A2E3B]">golden cage</strong>.
                </p>
                <p>
                  From the outside, everything looked fine. I was fulfilling my responsibilities, supporting others, and doing what was expected of me. People saw a capable and strong woman.
                </p>
                <p>
                  Inside, however, I often felt unheard, emotionally exhausted, and disconnected from myself. I had learned to prioritise everyone else’s happiness while slowly losing touch with my own dreams, voice, and identity.
                </p>

                {/* Quote Callout */}
                <div className="my-6 p-6 rounded-2xl bg-[#FFF9F4] border-l-4 border-[#C3A36B] shadow-sm">
                  <p className="font-serif italic text-xl sm:text-2xl text-[#4A2E3B] font-bold leading-snug">
                    “A cage is still a cage, even when it is made of gold.”
                  </p>
                </div>

                <p>
                  The bars were not made of iron. They were made of <span className="text-[#4A2E3B] font-semibold">fear, self-doubt, guilt, limiting beliefs, and the need for approval</span>.
                </p>
                <p>
                  Unlocking that cage required reflection, courage, and inner work. Today, I support women who are ready to begin that journey for themselves.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="/book"
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 bg-[#9C536D] hover:bg-[#824259] text-white font-medium px-8 py-3.5 rounded-2xl shadow-soft transition-all text-sm"
                >
                  <Heart className="w-4 h-4" />
                  <span>Begin Your Journey</span>
                </a>
              </div>

            </div>

            {/* Editorial Quote Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-gradient-to-br from-[#FFF9F4] via-[#EFCBD5]/30 to-[#D9E2C8]/30 p-8 rounded-3xl border border-[#EFCBD5] text-center shadow-soft relative space-y-6">
                
                {/* SVG Golden Cage Line-Art Motif */}
                <div className="w-36 h-36 mx-auto relative flex items-center justify-center">
                  <svg className="w-full h-full text-[#C3A36B]" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 50 C20 20, 80 20, 80 50 V100 H20 V50 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="50" cy="15" r="5" stroke="currentColor" strokeWidth="2" fill="#FFF9F4" />
                    
                    {/* Open Door */}
                    <path d="M50 50 C50 35, 75 35, 75 50 V98 H50 V50 Z" stroke="#9C536D" strokeWidth="2" fill="#FFF9F4" opacity="0.9" />
                    <path d="M75 50 L90 40 V90 L75 98 Z" stroke="#C3A36B" strokeWidth="1.5" fill="#EFCBD5" />
                    
                    <circle cx="85" cy="30" r="3" fill="#9C536D" />
                    <circle cx="65" cy="20" r="2" fill="#A8B7A0" />
                  </svg>
                  <Sparkles className="absolute top-0 right-2 w-5 h-5 text-[#C3A36B] animate-pulse-subtle" />
                </div>

                <div className="space-y-3">
                  <span className="font-serif text-5xl text-[#C3A36B] leading-none block">“</span>
                  <p className="font-serif text-2xl italic font-bold text-[#4A2E3B] leading-snug">
                    Unlocking your cage begins with recognizing you hold the key.
                  </p>
                  <span className="text-xs text-[#9C536D] font-semibold tracking-wider uppercase block pt-2">
                    — Anshu Sahani
                  </span>
                </div>

                <div className="text-xs text-[#2D2729]/70 pt-3 border-t border-[#EFCBD5]/60">
                  Reclaim your emotional freedom with calm, confident guidance.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
