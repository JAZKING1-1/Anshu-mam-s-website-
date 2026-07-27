import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { GoldenCageSection } from '../components/GoldenCageSection';
import { FinalCTA } from '../components/FinalCTA';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-6">
      <div className="max-w-4xl mx-auto px-4 text-center py-12 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
          Discover Anshu’s Story
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A2E3B]">
          Meet Anshu Sahani
        </h1>
        <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
          Certified Life Coach · Relationship Coach · Certified NLP Practitioner
        </p>
      </div>

      <AboutSection />
      <GoldenCageSection onNavigate={onNavigate} />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
