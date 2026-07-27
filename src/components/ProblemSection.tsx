import React from 'react';
import { Brain, ShieldAlert, RefreshCw, Compass, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Brain,
      title: "Overthinking & Emotional Drain",
      description: "You overthink almost every decision and constantly feel emotionally drained from carrying unspoken burdens.",
      color: "bg-[#F8DDE8]/40 border-[#F8DDE8]",
      iconColor: "text-[#D98AA8]",
    },
    {
      icon: ShieldAlert,
      title: "Boundaries & People-Pleasing",
      description: "You struggle with saying 'no' and end up prioritizing everyone else's needs while ignoring your own boundaries.",
      color: "bg-[#DCE7C8]/40 border-[#DCE7C8]",
      iconColor: "text-[#7D9A75]",
    },
    {
      icon: RefreshCw,
      title: "Stuck in Relationship Patterns",
      description: "You feel trapped in repetitive communication struggles, misunderstandings, or painful relationship cycles.",
      color: "bg-[#FFF8F1] border-[#F8DDE8]",
      iconColor: "text-[#C8A96A]",
    },
    {
      icon: Compass,
      title: "Seeking Peace & Inner Direction",
      description: "You want genuine peace of mind, confidence in who you are, and clear direction for your personal life.",
      color: "bg-[#DCE7C8]/40 border-[#DCE7C8]",
      iconColor: "text-[#7D9A75]",
    },
    {
      icon: Heart,
      title: "Caring for Everyone Else",
      description: "You take care of family, work, and friends with deep devotion, but completely forget to nurture yourself.",
      color: "bg-[#F8DDE8]/40 border-[#F8DDE8]",
      iconColor: "text-[#D98AA8]",
    },
    {
      icon: Sparkles,
      title: "Ready for Personal Change",
      description: "You feel deep inside that you are ready to change and reset your life, but don't know where or how to start.",
      color: "bg-[#FFF8F1] border-[#C8A96A]/30",
      iconColor: "text-[#C8A96A]",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D98AA8] bg-[#F8DDE8]/60 px-4 py-1.5 rounded-full inline-block">
            Emotional Awareness &amp; Healing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B2E3D] leading-tight">
            Do you feel strong on the outside, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D98AA8]">but emotionally tired inside?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#352A2E]/80 leading-relaxed font-normal">
            Many women look confident and capable from the outside, while silently feeling unheard, overwhelmed, confused, or disconnected from themselves.
          </p>
        </div>

        {/* 6 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-soft-lg transform hover:-translate-y-1 ${point.color}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
                  <Icon className={`w-6 h-6 ${point.iconColor}`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#4B2E3D] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[#352A2E]/75 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Small CTA Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#FFF8F1] border border-[#F8DDE8] px-8 py-5 rounded-3xl shadow-soft">
            <span className="font-serif text-xl font-semibold text-[#4B2E3D]">
              You do not have to figure it out alone.
            </span>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#D98AA8] hover:bg-[#B86887] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              <span>Talk to Anshu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
