import React from 'react';
import { TOPICS_DATA } from '../data/topics';

export const TopicsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF9F4] via-[#F7F0E8]/40 to-[#FFF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Areas of Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
            What We Can Work Through Together
          </h2>
          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            Coaching offers dedicated, non-judgemental space to explore both internal emotional patterns and external relationship dynamics.
          </p>
        </div>

        {/* Grouped Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOPICS_DATA.map((cat, idx) => {
            const isPinkTheme = idx % 2 === 0;
            const badgeBg = isPinkTheme ? 'bg-[#EFCBD5]/60 text-[#4A2E3B] border-[#9C536D]/30' : 'bg-[#D9E2C8]/60 text-[#4A2E3B] border-[#3F5648]/30';
            const dotColor = isPinkTheme ? 'bg-[#9C536D]' : 'bg-[#3F5648]';

            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#EFCBD5]/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 space-y-6"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#9C536D] uppercase tracking-wider">
                    Category {idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#4A2E3B]">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#2D2729]/75 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {cat.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium border shadow-xs transition-transform hover:-translate-y-0.5 ${badgeBg}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-xs text-[#2D2729]/70 text-center italic mt-12">
          * Your 1:1 sessions will focus specifically on the topics most relevant to your current life season.
        </p>

      </div>
    </section>
  );
};
