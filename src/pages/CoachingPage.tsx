import React from 'react';
import { CoachingOffer } from '../components/CoachingOffer';
import { ProcessSection } from '../components/ProcessSection';
import { TopicsSection } from '../components/TopicsSection';
import { FinalCTA } from '../components/FinalCTA';

interface CoachingPageProps {
  onNavigate: (path: string) => void;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-6">
      <div className="max-w-4xl mx-auto px-4 text-center py-12 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
          Personalized 1:1 Coaching
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A2E3B]">
          Coaching Programs &amp; Methodology
        </h1>
        <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
          Designed specifically for women seeking emotional resilience, relationship clarity, and unshakeable self-worth.
        </p>
      </div>

      <CoachingOffer onNavigate={onNavigate} />
      <ProcessSection />
      <TopicsSection />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
