import React from 'react';
import { Heart, MessageSquare, Brain, RefreshCw, ShieldAlert, Compass, ArrowRight } from 'lucide-react';

interface PainSectionProps {
  onNavigate?: (path: string) => void;
}

export const PainSection: React.FC<PainSectionProps> = ({ onNavigate }) => {
  const painCards = [
    {
      icon: Heart,
      title: "Taking Care of Everyone Else",
      description: "You take care of everyone around you with deep devotion, but silently feel disconnected from your own needs and voice.",
      color: "bg-[#EFCBD5]/30 border-[#EFCBD5]",
      iconColor: "text-[#9C536D]",
    },
    {
      icon: MessageSquare,
      title: "Difficulty Communicating Needs",
      description: "You struggle to speak up about what you truly need in your relationships out of fear of conflict, rejection, or burdening others.",
      color: "bg-[#D9E2C8]/30 border-[#D9E2C8]",
      iconColor: "text-[#3F5648]",
    },
    {
      icon: Brain,
      title: "Constant Overthinking",
      description: "You replay conversations and decisions in your head, constantly feeling mentally drained by anxiety and self-doubt.",
      color: "bg-[#FFF9F4] border-[#EFCBD5]",
      iconColor: "text-[#C3A36B]",
    },
    {
      icon: RefreshCw,
      title: "Repeated Relationship Patterns",
      description: "You feel trapped in familiar, exhausting relationship dynamics and wonder why the same emotional struggles keep happening.",
      color: "bg-[#D9E2C8]/30 border-[#D9E2C8]",
      iconColor: "text-[#3F5648]",
    },
    {
      icon: ShieldAlert,
      title: "Boundaries & Guilt",
      description: "Setting boundaries feels scary or selfish, leading you to people-please and say 'yes' when every part of you wants to say 'no'.",
      color: "bg-[#EFCBD5]/30 border-[#EFCBD5]",
      iconColor: "text-[#9C536D]",
    },
    {
      icon: Compass,
      title: "Unsure Where to Begin",
      description: "You know deep down that you want more peace, self-worth, and clarity, but you feel overwhelmed about how to start.",
      color: "bg-[#FFF9F4] border-[#C3A36B]/40",
      iconColor: "text-[#C3A36B]",
    },
  ];

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/book');
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Emotional Relatability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B] leading-tight">
            Do you look strong on the outside, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#9C536D]">but feel exhausted inside?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2D2729]/80 leading-relaxed font-normal">
            Many capable women silenty carry unspoken emotional weights, trying to fulfill expectations while feeling unheard and disconnected from themselves.
          </p>
        </div>

        {/* 6 Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-soft-lg transform hover:-translate-y-1 ${card.color}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#2D2729]/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* End Reassurance & CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-[#FFF9F4] border border-[#EFCBD5] p-8 rounded-3xl shadow-soft max-w-3xl mx-auto">
            <div className="text-center sm:text-left space-y-1">
              <p className="font-serif text-xl font-semibold text-[#4A2E3B]">
                You are not broken.
              </p>
              <p className="text-sm text-[#2D2729]/80 leading-relaxed">
                You may simply need a safe space, a clearer perspective, and the right guidance.
              </p>
            </div>

            <a
              href="/book"
              onClick={handleAction}
              className="inline-flex items-center gap-2 bg-[#9C536D] hover:bg-[#824259] text-white text-sm font-medium px-7 py-3.5 rounded-2xl shadow-sm transition-all shrink-0"
            >
              <span>Take the First Step</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
