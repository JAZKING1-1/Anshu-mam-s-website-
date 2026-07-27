import React from 'react';
import { Hero } from '../components/Hero';
import { PainSection } from '../components/PainSection';
import { AboutSection } from '../components/AboutSection';
import { GoldenCageSection } from '../components/GoldenCageSection';
import { StoryWallSection } from '../components/StoryWallSection';
import { ProcessSection } from '../components/ProcessSection';
import { TopicsSection } from '../components/TopicsSection';
import { CoachingOffer } from '../components/CoachingOffer';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingForm } from '../components/BookingForm';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <PainSection onNavigate={onNavigate} />
      <AboutSection />
      <GoldenCageSection onNavigate={onNavigate} />
      <StoryWallSection onNavigate={onNavigate} />
      <ProcessSection />
      <TopicsSection />
      <CoachingOffer onNavigate={onNavigate} />
      <TestimonialsSection isFullPage={false} />
      <BookingForm />
      <FAQSection />
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
};
