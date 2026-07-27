import React from 'react';
import { Search, Lightbulb, Sparkles, Key } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand your current challenges, emotions, patterns, and goals in a safe, non-judgemental environment.",
      icon: Search,
      badgeColor: "bg-[#EFCBD5] text-[#9C536D]",
      cardBorder: "border-[#EFCBD5]",
    },
    {
      number: "02",
      title: "Create Clarity",
      description: "Identify limiting beliefs, unmet needs, strengths, and the authentic choices available to you.",
      icon: Lightbulb,
      badgeColor: "bg-[#D9E2C8] text-[#3F5648]",
      cardBorder: "border-[#D9E2C8]",
    },
    {
      number: "03",
      title: "Transform",
      description: "Use coaching and NLP-based tools to reframe unhelpful thought patterns and build healthier emotional responses.",
      icon: Sparkles,
      badgeColor: "bg-[#FFF9F4] text-[#4A2E3B] border border-[#EFCBD5]",
      cardBorder: "border-[#EFCBD5]",
    },
    {
      number: "04",
      title: "Empower",
      description: "Take practical action with stronger boundaries, self-trust, clear communication, and lasting emotional resilience.",
      icon: Key,
      badgeColor: "bg-[#FFF9F4] text-[#C3A36B] border border-[#C3A36B]/40",
      cardBorder: "border-[#C3A36B]/30",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#3F5648] bg-[#D9E2C8]/60 px-4 py-1.5 rounded-full inline-block">
            Step-by-Step Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
            A Personalised Path Back to Yourself
          </h2>
          <p className="text-base sm:text-lg text-[#2D2729]/80 leading-relaxed font-normal">
            Every woman's journey is unique. Sessions are tailored around your specific needs, emotional goals, and comfortable pace.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`bg-[#FFF9F4] rounded-3xl p-7 border ${step.cardBorder} shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-serif text-base font-bold ${step.badgeColor}`}>
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#4A2E3B]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-3 group-hover:text-[#9C536D] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#2D2729]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFCBD5]/40 flex items-center gap-2 text-xs font-semibold text-[#9C536D]">
                  <span>Step {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small reassurance line */}
        <div className="mt-12 text-center text-xs text-[#2D2729]/75 italic">
          * There is no one-size-fits-all formula. Your coaching journey is shaped around you.
        </div>

      </div>
    </section>
  );
};
