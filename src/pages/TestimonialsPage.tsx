import React from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCTA } from '../components/FinalCTA';

interface TestimonialsPageProps {
  onNavigate: (path: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-6">
      <TestimonialsSection isFullPage={true} />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
