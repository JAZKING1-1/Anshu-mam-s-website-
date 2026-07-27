import React, { useState } from 'react';
import { STORY_WALL_DATA, type StoryItem } from '../data/storyWall';
import { BloomingLotusSVG, AnimatedCageSVG } from './AnimatedGraphics';
import { Sparkles, ArrowRight, X, Heart, Quote, BookOpen } from 'lucide-react';

interface StoryWallSectionProps {
  onNavigate?: (path: string) => void;
  isFullPage?: boolean;
}

export const StoryWallSection: React.FC<StoryWallSectionProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  const tags = ['All', 'Inner Courage', 'Relationship Clarity', 'Mindset Shifts', 'Self-Worth'];

  const filteredStories = STORY_WALL_DATA.filter((story) => {
    if (selectedTag === 'All') return true;
    return story.tag === selectedTag;
  });

  const handleAction = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section id="story-wall" className="py-24 bg-gradient-to-b from-[#FFF9F4] via-[#F7F0E8]/50 to-[#FFF9F4] relative overflow-hidden">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#EFCBD5]/30 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-[#D9E2C8]/35 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EFCBD5]/50 border border-[#9C536D]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4A2E3B] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C3A36B]" />
            <span>Interactive Transformation Wall</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B] leading-tight">
            Stories of Courage, Clarity &amp; Reclaimed Self-Worth
          </h2>

          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            Explore emotional journey beats, mindset reframing moments, and feminine wisdom reflections from women who unlocked their golden cage.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#9C536D] text-white shadow-soft scale-105'
                  : 'bg-white text-[#2D2729] border border-[#EFCBD5] hover:bg-[#EFCBD5]/40'
              }`}
            >
              {tag === 'All' ? '✨ All Stories' : tag}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, idx) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className={`bg-gradient-to-br ${story.bgGradient} rounded-3xl p-8 border border-[#EFCBD5] shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Background Subtle SVG Graphics Accent */}
              {idx % 2 === 0 ? (
                <BloomingLotusSVG className="absolute -top-4 -right-4 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity" />
              ) : (
                <AnimatedCageSVG className="absolute -top-4 -right-4 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity" />
              )}

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{story.iconSymbol}</span>
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${story.tagBadgeColor}`}>
                    {story.tag}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9C536D] block mb-1">
                    {story.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#4A2E3B] group-hover:text-[#9C536D] transition-colors leading-snug">
                    {story.title}
                  </h3>
                </div>

                <p className="text-xs text-[#2D2729]/80 leading-relaxed font-normal">
                  {story.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFCBD5]/60 flex items-center justify-between relative z-10">
                <span className="text-xs font-serif italic text-[#4A2E3B] font-semibold">
                  — {story.authorLabel}
                </span>

                <span className="text-xs font-semibold text-[#9C536D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Story</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Story Reader */}
        {activeStory && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
            <div className="bg-[#FFF9F4] rounded-4xl max-w-2xl w-full p-8 sm:p-10 border-2 border-[#EFCBD5] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#EFCBD5] text-[#4A2E3B] flex items-center justify-center hover:bg-[#EFCBD5]/50 transition-colors"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${activeStory.tagBadgeColor}`}>
                  {activeStory.tag}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#4A2E3B]">
                  {activeStory.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9C536D]">
                  {activeStory.subtitle}
                </p>
              </div>

              {/* Quote Highlight */}
              <div className="p-6 rounded-2xl bg-white border-l-4 border-[#C3A36B] shadow-xs space-y-2">
                <Quote className="w-6 h-6 text-[#C3A36B]" />
                <p className="font-serif italic text-lg text-[#4A2E3B] font-bold">
                  {activeStory.quote}
                </p>
              </div>

              <div className="text-sm text-[#2D2729]/85 leading-relaxed font-normal whitespace-pre-line">
                {activeStory.fullStory}
              </div>

              <div className="pt-4 border-t border-[#EFCBD5]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-serif italic text-[#4A2E3B]">
                  Reflections by {activeStory.authorLabel}
                </span>

                <a
                  href="/book"
                  onClick={(e) => {
                    setActiveStory(null);
                    handleAction('/book', e);
                  }}
                  className="inline-flex items-center gap-2 bg-[#9C536D] text-white text-xs font-semibold px-6 py-3 rounded-2xl shadow-soft no-underline"
                >
                  <Heart className="w-4 h-4" />
                  <span>Begin Your Journey (Free Call)</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-[#EFCBD5] p-8 rounded-3xl shadow-soft max-w-3xl mx-auto">
            <div className="text-center sm:text-left space-y-1">
              <h4 className="font-serif text-xl font-bold text-[#4A2E3B]">
                Ready to write your own transformation story?
              </h4>
              <p className="text-xs text-[#2D2729]/80">
                Book a complimentary 15–20 minute clarity call with Anshu Sahani.
              </p>
            </div>

            <a
              href="/book"
              onClick={(e) => handleAction('/book', e)}
              className="inline-flex items-center gap-2 bg-[#9C536D] hover:bg-[#824259] text-white text-xs font-medium px-7 py-3.5 rounded-2xl shadow-sm transition-all shrink-0 no-underline"
            >
              <span>Book Your Free Clarity Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
