import React, { useState } from 'react';
import { STORY_WALL_DATA, type StoryItem } from '../data/storyWall';
import { WatercolorBlobSVG } from './AbstractArtAccents';
import { Sparkles, X, Heart, Quote, ZoomIn, Pin, ArrowRight } from 'lucide-react';

interface ArtisticStoryWallProps {
  onNavigate?: (path: string) => void;
}

export const ArtisticStoryWall: React.FC<ArtisticStoryWallProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);
  const [activeMediaUrl, setActiveMediaUrl] = useState<string | null>(null);

  const tags = ['All', 'Polaroid Moments', 'Taped Notes', 'Inner Courage', 'Self-Worth'];

  const polaroids = [
    {
      id: 'pol-1',
      title: 'Unlocking My Golden Cage',
      caption: 'The moment I stopped asking for permission to be myself.',
      image: '/storywall/WhatsApp Image 2026-07-28 at 03.47.53.jpeg',
      tapeColor: 'bg-[#E89BB6]/60',
      rotation: 'rotate-1',
      author: 'Anshu Coaching Client',
    },
    {
      id: 'pol-2',
      title: 'Boundaries Without Guilt',
      caption: 'Learning that saying NO to others is saying YES to my peace.',
      image: '/storywall/WhatsApp Image 2026-07-28 at 03.47.55.jpeg',
      tapeColor: 'bg-[#CDE0B7]/70',
      rotation: '-rotate-2',
      author: 'Clarity Session Beat',
    },
    {
      id: 'pol-3',
      title: 'Reclaiming Self-Worth',
      caption: 'I am no longer afraid of my own voice.',
      image: '/storywall/WhatsApp Image 2026-07-28 at 03.47.56.jpeg',
      tapeColor: 'bg-[#F4E6B6]/80',
      rotation: 'rotate-2',
      author: '3-Month Transformation',
    },
  ];

  const handleAction = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = '#booking';
    }
  };

  return (
    <section id="artistic-story-wall" className="py-24 bg-[#FFFDF9] relative overflow-hidden border-y border-[#E89BB6]/30">
      
      {/* Background Abstract Art Blobs */}
      <WatercolorBlobSVG className="top-10 left-[-5%] w-96 h-96" color="#FCEBF1" />
      <WatercolorBlobSVG className="bottom-10 right-[-5%] w-96 h-96" color="#F0F7E6" />

      {/* Studio Canvas Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C95D86_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FCEBF1] border border-[#C95D86]/40 px-5 py-2 rounded-full text-xs font-bold text-[#7D2548] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Studio Gallery Wall</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D1F2D] leading-tight">
            Anshu’s Creative Wall of Feminine Courage
          </h2>

          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            Pinned Polaroids, taped wisdom notes, and real transformational story beats. Click any piece to inspect the journey.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#7D2548] text-white shadow-soft scale-105'
                  : 'bg-white text-[#3D1F2D] border border-[#E89BB6]/60 hover:bg-[#FCEBF1]'
              }`}
            >
              {tag === 'All' ? '🎨 All Gallery Pieces' : tag}
            </button>
          ))}
        </div>

        {/* Artistic Wall Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          
          {/* Render Pinned Polaroid Photo Cards */}
          {polaroids.map((pol) => (
            <div
              key={pol.id}
              onClick={() => setActiveMediaUrl(pol.image)}
              className={`bg-white rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition-all duration-300 group cursor-pointer border border-[#E89BB6]/40 ${pol.rotation} hover:rotate-0 hover:scale-105 relative`}
            >
              {/* Gold Pushpin Top Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-[#F4E6B6] to-[#D4AF37] border-2 border-white shadow-md flex items-center justify-center">
                <Pin className="w-3.5 h-3.5 text-[#7D2548] fill-current" />
              </div>

              {/* Taped Edge Sticker */}
              <div className={`absolute -top-2 left-6 w-16 h-5 ${pol.tapeColor} opacity-80 backdrop-blur-xs transform -rotate-6 z-10 border-b border-black/10`}></div>

              {/* Polaroid Image Frame */}
              <div className="relative rounded-xl overflow-hidden border border-black/5 bg-[#FAF5EE] aspect-4/3 mb-4">
                <img
                  src={pol.image}
                  alt={pol.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-[#7D2548]/90 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                    Inspect Polaroid
                  </span>
                </div>
              </div>

              {/* Handwritten-Style Caption */}
              <div className="space-y-1 text-center px-2">
                <h4 className="font-serif text-lg font-bold text-[#3D1F2D]">
                  {pol.title}
                </h4>
                <p className="font-serif italic text-xs text-[#7D2548] leading-snug">
                  "{pol.caption}"
                </p>
                <span className="text-[10px] font-bold text-[#6E8A63] uppercase tracking-wider block pt-1">
                  — {pol.author}
                </span>
              </div>
            </div>
          ))}

          {/* Render Story Wall Beats as Taped Notes */}
          {STORY_WALL_DATA.map((story, idx) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className={`bg-gradient-to-br ${story.bgGradient} rounded-3xl p-7 border-2 border-[#E89BB6]/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 group cursor-pointer hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Corner Decorative Tape */}
              <div className="absolute top-0 right-8 w-20 h-6 bg-[#F4E6B6]/80 backdrop-blur-xs transform rotate-3 border-b border-black/10"></div>

              <div className="space-y-4 relative z-10 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{story.iconSymbol}</span>
                  <span className="text-xs font-bold bg-[#FCEBF1] text-[#7D2548] px-3 py-1 rounded-full border border-[#E89BB6]/40">
                    {story.tag}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C95D86] block mb-1">
                    {story.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3D1F2D] group-hover:text-[#7D2548] transition-colors leading-snug">
                    {story.title}
                  </h3>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border-l-4 border-[#D4AF37] shadow-xs">
                  <Quote className="w-4 h-4 text-[#D4AF37] mb-1" />
                  <p className="font-serif italic text-sm text-[#3D1F2D] font-bold">
                    {story.quote}
                  </p>
                </div>

                <p className="text-xs text-[#2D2729]/80 leading-relaxed font-normal">
                  {story.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E89BB6]/40 flex items-center justify-between relative z-10">
                <span className="text-xs font-serif italic text-[#3D1F2D] font-semibold">
                  — {story.authorLabel}
                </span>

                <span className="text-xs font-bold text-[#7D2548] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Story Beat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Story Modal Lightbox */}
        {activeStory && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
            <div className="bg-[#FFF9F4] rounded-4xl max-w-2xl w-full p-8 sm:p-10 border-2 border-[#E89BB6] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#E89BB6] text-[#3D1F2D] flex items-center justify-center hover:bg-[#FCEBF1] transition-colors cursor-pointer"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="inline-block text-xs font-bold bg-[#FCEBF1] text-[#7D2548] px-3 py-1 rounded-full">
                  {activeStory.tag}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#3D1F2D]">
                  {activeStory.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C95D86]">
                  {activeStory.subtitle}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-l-4 border-[#D4AF37] shadow-xs space-y-2">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
                <p className="font-serif italic text-lg text-[#3D1F2D] font-bold">
                  {activeStory.quote}
                </p>
              </div>

              <div className="text-sm text-[#2D2729]/85 leading-relaxed font-normal whitespace-pre-line">
                {activeStory.fullStory}
              </div>

              <div className="pt-4 border-t border-[#E89BB6]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-serif italic text-[#3D1F2D]">
                  Reflections by {activeStory.authorLabel}
                </span>

                <a
                  href="/book"
                  onClick={(e) => {
                    setActiveStory(null);
                    handleAction('/book', e);
                  }}
                  className="inline-flex items-center gap-2 bg-[#7D2548] text-white text-xs font-bold px-6 py-3 rounded-2xl shadow-soft no-underline"
                >
                  <Heart className="w-4 h-4" />
                  <span>Begin Your Journey (Free Call)</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Media Lightbox Viewer */}
        {activeMediaUrl && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
            <div className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden p-3 shadow-2xl flex flex-col items-center">
              <button
                onClick={() => setActiveMediaUrl(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close viewer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={activeMediaUrl}
                alt="Polaroid story media"
                className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
