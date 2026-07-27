import React from 'react';
import { Award, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Lock } from 'lucide-react';
import { AnshuPortrait } from './AnshuPortrait';

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleAction = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path.replace('/', '#');
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF9F4] via-[#F7F0E8]/60 to-[#FFF9F4]">
      
      {/* Background Shapes */}
      <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#EFCBD5]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-[#D9E2C8]/35 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#EFCBD5]/50 border border-[#9C536D]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4A2E3B] tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C3A36B]" />
              <span>Life Coach for Women · Relationship Coach · NLP Practitioner</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A2E3B] leading-[1.12]">
              Unlock Your <br className="hidden sm:inline" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#9C536D] via-[#4A2E3B] to-[#C3A36B]">
                Golden Cage
              </span>
            </h1>

            {/* Supporting Heading */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#9C536D] max-w-2xl leading-snug">
              Come back to the woman you were before fear, guilt, and self-doubt became louder than your own voice.
            </p>

            {/* Hero Paragraph (Max measure ~65 chars) */}
            <p className="text-base sm:text-lg text-[#2D2729]/85 leading-relaxed max-w-xl font-normal">
              I help women rebuild self-worth, understand emotional patterns, strengthen relationships, and move forward with <strong className="font-semibold text-[#4A2E3B]">courage, clarity, and confidence</strong> through personalised 1:1 coaching.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/book"
                onClick={(e) => handleAction('/book', e)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9C536D] hover:bg-[#824259] text-white font-semibold px-8 py-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5 text-base no-underline focus:outline-none focus:ring-2 focus:ring-[#9C536D]"
              >
                <span>Book a Free Clarity Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/coaching"
                onClick={(e) => handleAction('/coaching', e)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#4A2E3B] font-semibold px-7 py-4 rounded-2xl border border-[#EFCBD5] shadow-xs hover:shadow transition-all duration-300 text-base no-underline focus:outline-none focus:ring-2 focus:ring-[#9C536D]"
              >
                <span>Explore My Coaching</span>
              </a>
            </div>

            {/* Small reassurance line */}
            <p className="text-xs text-[#2D2729]/70 italic flex items-center gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-[#3F5648]" />
              <span>A safe, confidential, and non-judgemental coaching space for women.</span>
            </p>

            {/* Compact Trust Cards Grid (Not table-like rows) */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="bg-white/90 border border-[#EFCBD5] p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <Award className="w-4 h-4 text-[#9C536D] shrink-0" />
                <span className="text-xs font-semibold text-[#4A2E3B]">Certified Life Coach</span>
              </div>
              <div className="bg-white/90 border border-[#D9E2C8] p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <HeartHandshake className="w-4 h-4 text-[#3F5648] shrink-0" />
                <span className="text-xs font-semibold text-[#4A2E3B]">Relationship Coach</span>
              </div>
              <div className="bg-white/90 border border-[#EFCBD5] p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C3A36B] shrink-0" />
                <span className="text-xs font-semibold text-[#4A2E3B]">NLP Practitioner</span>
              </div>
              <div className="bg-white/90 border border-[#D9E2C8] p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#9C536D] shrink-0" />
                <span className="text-xs font-semibold text-[#4A2E3B]">Personalised 1:1</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnshuPortrait variant="hero" className="w-full max-w-md" />
          </div>

        </div>
      </div>
    </section>
  );
};
