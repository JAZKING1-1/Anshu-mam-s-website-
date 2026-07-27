import React from 'react';
import { StoryWallSection } from '../components/StoryWallSection';
import { FinalCTA } from '../components/FinalCTA';

interface StoryWallPageProps {
  onNavigate: (path: string) => void;
}

export const StoryWallPage: React.FC<StoryWallPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-6">
      <StoryWallSection onNavigate={onNavigate} isFullPage={true} />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
