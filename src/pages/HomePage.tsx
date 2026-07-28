import React from 'react';
import { OpeningIntro } from '../components/OpeningIntro';
import { Hero } from '../components/Hero';
import { PainSection } from '../components/PainSection';
import { AboutSection } from '../components/AboutSection';
import { GoldenCageSection } from '../components/GoldenCageSection';
import { VoiceOfFemininity } from '../components/VoiceOfFemininity';
import { ProcessSection } from '../components/ProcessSection';
import { TopicsSection } from '../components/TopicsSection';
import { CoachingOffer } from '../components/CoachingOffer';
import { NewsletterSection } from '../components/NewsletterSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <OpeningIntro />
      <Hero onNavigate={onNavigate} />
      <PainSection onNavigate={onNavigate} />
      <AboutSection />
      <GoldenCageSection onNavigate={onNavigate} />
      <VoiceOfFemininity onNavigate={onNavigate} />
      <ProcessSection />
      <TopicsSection />
      <CoachingOffer onNavigate={onNavigate} />
      <NewsletterSection />
      <FAQSection />
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
};
