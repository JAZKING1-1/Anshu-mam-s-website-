import React from 'react';
import { PhoneCall, UserCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CoachingOfferProps {
  onNavigate?: (path: string) => void;
}

export const CoachingOffer: React.FC<CoachingOfferProps> = ({ onNavigate }) => {
  const offers = [
    {
      title: "Free Clarity Call",
      badge: "15–20 Minutes",
      subtitle: "Gentle First Conversation",
      description: "A gentle 15–20 minute conversation to understand what you are facing and whether coaching is the right next step for you.",
      features: [
        "100% confidential & zero pressure",
        "Discuss your current emotional goals",
        "Explore if 1:1 coaching fits your needs",
      ],
      icon: PhoneCall,
      highlight: false,
      cardStyle: "bg-white border-[#EFCBD5]",
      btnStyle: "bg-[#EFCBD5] hover:bg-[#F8E8ED] text-[#4A2E3B]",
      actionPath: "/book",
      ctaText: "Book Free Call",
    },
    {
      title: "Personalised 1:1 Coaching",
      badge: "Custom Pace",
      subtitle: "Targeted Growth & Healing",
      description: "Private sessions focused on emotional patterns, confidence, relationships, communication, boundaries, and personal growth.",
      features: [
        "Tailored around your individual story & pace",
        "Integrates Life Coaching + NLP techniques",
        "Actionable exercises between sessions",
      ],
      icon: UserCheck,
      highlight: true,
      cardStyle: "bg-gradient-to-b from-white via-[#FFF9F4] to-[#EFCBD5]/30 border-2 border-[#9C536D] shadow-soft-lg scale-105",
      btnStyle: "bg-[#9C536D] hover:bg-[#824259] text-white shadow-soft",
      actionPath: "/book",
      ctaText: "Explore 1:1 Coaching",
    },
    {
      title: "3-Month Coaching Journey",
      badge: "Deep Reset",
      subtitle: "Comprehensive Growth",
      description: "A deeper personalised journey designed to help you reset unhelpful patterns, rebuild self-trust, and move forward with courage, clarity, and confidence.",
      features: [
        "Deep emotional & relationship reframing",
        "Consistent weekly support & guidance",
        "Complete reset of boundaries & self-worth",
      ],
      icon: Sparkles,
      highlight: false,
      cardStyle: "bg-white border-[#D9E2C8]",
      btnStyle: "bg-[#3F5648] hover:bg-[#2F4236] text-white",
      actionPath: "/book",
      ctaText: "Start Your Journey",
    },
  ];

  const handleAction = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section id="coaching" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Tailored 1:1 Support
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
            Choose the Support You Need
          </h2>
          <p className="text-base sm:text-lg text-[#2D2729]/80 leading-relaxed font-normal">
            There is no one-size-fits-all formula. Your coaching journey is shaped around your unique experiences, goals, and pace.
          </p>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between h-full ${offer.cardStyle}`}
              >
                {offer.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#9C536D] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF9F4] flex items-center justify-center shadow-sm border border-[#EFCBD5]">
                      <Icon className="w-6 h-6 text-[#9C536D]" />
                    </div>
                    <span className="text-xs font-semibold text-[#4A2E3B] bg-[#EFCBD5]/50 px-3 py-1 rounded-full">
                      {offer.badge}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider font-semibold text-[#9C536D] block mb-1">
                    {offer.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-3">
                    {offer.title}
                  </h3>

                  <p className="text-sm text-[#2D2729]/80 leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-[#EFCBD5]/60">
                    {offer.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2D2729]">
                        <CheckCircle2 className="w-4 h-4 text-[#3F5648] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={offer.actionPath}
                    onClick={(e) => handleAction(offer.actionPath, e)}
                    className={`w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-3.5 rounded-2xl transition-all text-sm ${offer.btnStyle}`}
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
