import React from 'react';
import { Shield, Compass, Sun, CheckCircle2 } from 'lucide-react';
import { AnshuPortrait } from './AnshuPortrait';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#FFF9F4] via-[#F7F0E8]/50 to-[#FFF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnshuPortrait variant="about" className="w-full max-w-md" />
          </div>

          {/* Right Column Story & 3 C's */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block mb-3">
                About Your Coach
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
                Hi, I’m Anshu Sahani.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2D2729]/85 leading-relaxed font-normal">
              <p>
                I am a Certified Life Coach, Relationship Coach, and Certified NLP Practitioner dedicated to helping women rediscover their voice, rebuild self-worth, and create healthier relationships with themselves and others.
              </p>
              <p>
                My approach combines practical coaching conversations, mindset work, self-awareness, emotional resilience, and NLP-based tools to reframe unhelpful thought patterns.
              </p>
              <p className="italic font-serif text-[#9C536D] text-xl">
                Every woman’s story is different. That is why my coaching is personalised around your experiences, needs, goals, and pace.
              </p>
            </div>

            {/* Core Methodology Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2D2729]/80 text-left">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EFCBD5]">
                <CheckCircle2 className="w-4 h-4 text-[#3F5648] shrink-0" />
                <span>Certified Life Coaching Framework</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#D9E2C8]">
                <CheckCircle2 className="w-4 h-4 text-[#3F5648] shrink-0" />
                <span>Neuro-Linguistic Programming (NLP)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#D9E2C8]">
                <CheckCircle2 className="w-4 h-4 text-[#3F5648] shrink-0" />
                <span>Relationship Dynamics &amp; Boundaries</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EFCBD5]">
                <CheckCircle2 className="w-4 h-4 text-[#3F5648] shrink-0" />
                <span>Safe &amp; Confidential 1:1 Space</span>
              </div>
            </div>

            {/* Three C's Framework Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              
              {/* Courage */}
              <div className="bg-white p-6 rounded-3xl border border-[#EFCBD5] shadow-soft text-left hover:shadow-soft-lg transition-all">
                <div className="w-10 h-10 rounded-2xl bg-[#EFCBD5]/50 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#9C536D]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-2">
                  Courage
                </h4>
                <p className="text-xs text-[#2D2729]/80 leading-relaxed">
                  Make choices without being ruled by fear, guilt, or the constant need for external approval.
                </p>
              </div>

              {/* Clarity */}
              <div className="bg-white p-6 rounded-3xl border border-[#D9E2C8] shadow-soft text-left hover:shadow-soft-lg transition-all">
                <div className="w-10 h-10 rounded-2xl bg-[#D9E2C8] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5 text-[#3F5648]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-2">
                  Clarity
                </h4>
                <p className="text-xs text-[#2D2729]/80 leading-relaxed">
                  Understand what you truly feel, what you need, and where you want to go in life.
                </p>
              </div>

              {/* Confidence */}
              <div className="bg-white p-6 rounded-3xl border border-[#EFCBD5]/60 shadow-soft text-left hover:shadow-soft-lg transition-all">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF9F4] border border-[#C3A36B]/40 flex items-center justify-center mb-4">
                  <Sun className="w-5 h-5 text-[#C3A36B]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#4A2E3B] mb-2">
                  Confidence
                </h4>
                <p className="text-xs text-[#2D2729]/80 leading-relaxed">
                  Rebuild unshakeable self-worth, communicate clearly, and learn to deeply trust yourself again.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
