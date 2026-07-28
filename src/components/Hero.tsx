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
    <section id="home" className="notebook-hero relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      
      {/* Background Bold Glow Blobs */}
      <div className="paper-blob paper-blob-one pointer-events-none"></div>
      <div className="paper-blob paper-blob-two pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="hero-copy lg:col-span-7 space-y-7 text-left">
            
            {/* Eyebrow */}
            <div className="notebook-label inline-flex items-center gap-2 px-4 py-2 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span>Life Coach for Women · Relationship Coach · NLP Practitioner</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              Your next chapter <br className="hidden sm:inline" />
              <span className="scribble-highlight">
                starts with you.
              </span>
            </h1>

            {/* Supporting Heading */}
            <p className="handwritten-note text-2xl sm:text-3xl max-w-2xl leading-snug">
              Come back to the woman you were before fear, guilt, and self-doubt became louder than your own voice.
            </p>

            {/* Hero Paragraph */}
            <p className="text-base sm:text-lg text-[#261B23]/90 leading-relaxed max-w-xl font-normal">
              I help women rebuild self-worth, understand emotional patterns, strengthen relationships, and move forward with <strong className="font-bold text-[#6A1B9A]">courage, clarity, and confidence</strong> through personalised 1:1 coaching.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/book"
                onClick={(e) => handleAction('/book', e)}
                className="notebook-button primary w-full sm:w-auto inline-flex items-center justify-center gap-3 font-bold px-8 py-4 text-base no-underline"
              >
                <span>Book a Free Clarity Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/coaching"
                onClick={(e) => handleAction('/coaching', e)}
                className="notebook-button secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-7 py-4 text-base no-underline"
              >
                <span>Explore My Coaching</span>
              </a>
            </div>

            {/* Reassurance line */}
            <p className="text-xs text-[#261B23]/70 italic flex items-center gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-[#7B9E87]" />
              <span>A safe, confidential, and non-judgemental coaching space for women.</span>
            </p>

            {/* Compact Trust Cards Grid */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="bg-white/95 border border-[#D81B60]/30 p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <Award className="w-4 h-4 text-[#D81B60] shrink-0" />
                <span className="text-xs font-bold text-[#3B0A66]">Certified Life Coach</span>
              </div>
              <div className="bg-white/95 border border-[#AB47BC]/30 p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <HeartHandshake className="w-4 h-4 text-[#6A1B9A] shrink-0" />
                <span className="text-xs font-bold text-[#3B0A66]">Relationship Coach</span>
              </div>
              <div className="bg-white/95 border border-[#FFD700]/50 p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span className="text-xs font-bold text-[#3B0A66]">NLP Practitioner</span>
              </div>
              <div className="bg-white/95 border border-[#D81B60]/30 p-3 rounded-2xl flex items-center gap-2 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C2185B] shrink-0" />
                <span className="text-xs font-bold text-[#3B0A66]">Personalised 1:1</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual Portrait */}
          <div className="portrait-scrap lg:col-span-5 relative flex justify-center">
            <AnshuPortrait variant="hero" className="w-full max-w-md" />
          </div>

        </div>
      </div>
    </section>
  );
};
