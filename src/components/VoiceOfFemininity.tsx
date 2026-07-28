import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { STORY_WALL_DATA } from '../data/storyWall';
import { BloomingLotusSVG, AnimatedCageSVG } from './AnimatedGraphics';
import { Quote, Star, Play, X, Sparkles, Heart, ArrowRight, Image as ImageIcon, ZoomIn } from 'lucide-react';

interface VoiceOfFemininityProps {
  onNavigate?: (path: string) => void;
}

export const VoiceOfFemininity: React.FC<VoiceOfFemininityProps> = ({ onNavigate }) => {
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'image'; url: string; title?: string } | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'screenshots' | 'stories'>('all');

  // List of real WhatsApp feedback screenshot cards uploaded by client
  const screenshotCards = [
    { id: 'img-1', title: 'Emotional Reset Feedback', url: '/storywall/WhatsApp Image 2026-07-28 at 03.47.53.jpeg', tag: 'Client Gratitude' },
    { id: 'img-2', title: 'Relationship Breakthrough', url: '/storywall/WhatsApp Image 2026-07-28 at 03.47.55.jpeg', tag: 'Clarity Session' },
    { id: 'img-3', title: 'Boundary Setting Progress', url: '/storywall/WhatsApp Image 2026-07-28 at 03.47.56.jpeg', tag: 'Self-Worth' },
    { id: 'img-4', title: 'Mindset Reframing Shift', url: '/storywall/WhatsApp Image 2026-07-28 at 03.47.57.jpeg', tag: 'NLP Coaching' },
    { id: 'img-5', title: 'Overcoming Overthinking', url: '/storywall/WhatsApp Image 2026-07-28 at 03.48.01.jpeg', tag: 'Inner Peace' },
    { id: 'img-6', title: '3-Month Journey Reflection', url: '/storywall/WhatsApp Image 2026-07-28 at 03.48.05.jpeg', tag: 'Transformation' },
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
    <section id="voice-of-femininity" className="py-24 bg-gradient-to-b from-[#FFF9F4] via-[#FCEBF1]/60 to-[#FFF9F4] relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-[-5%] w-96 h-96 bg-[#E89BB6]/30 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-[#CDE0B7]/35 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FCEBF1] border border-[#C95D86]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#7D2548] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Voice of Femininity · Story &amp; Media Collage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D1F2D] leading-tight">
            Real Voices of Courage, Clarity &amp; Self-Worth
          </h2>

          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            A vibrant collage of client video stories, real message feedback highlights, and emotional wisdom reflections.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-[#7D2548] text-white shadow-soft scale-105'
                : 'bg-white text-[#3D1F2D] border border-[#E89BB6]/60 hover:bg-[#FCEBF1]'
            }`}
          >
            ✨ All Voices &amp; Media
          </button>

          <button
            onClick={() => setFilter('video')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              filter === 'video'
                ? 'bg-[#7D2548] text-white shadow-soft scale-105'
                : 'bg-white text-[#3D1F2D] border border-[#E89BB6]/60 hover:bg-[#FCEBF1]'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Video Stories</span>
          </button>

          <button
            onClick={() => setFilter('screenshots')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              filter === 'screenshots'
                ? 'bg-[#7D2548] text-white shadow-soft scale-105'
                : 'bg-white text-[#3D1F2D] border border-[#E89BB6]/60 hover:bg-[#FCEBF1]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Client Feedback Cards</span>
          </button>

          <button
            onClick={() => setFilter('stories')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
              filter === 'stories'
                ? 'bg-[#7D2548] text-white shadow-soft scale-105'
                : 'bg-white text-[#3D1F2D] border border-[#E89BB6]/60 hover:bg-[#FCEBF1]'
            }`}
          >
            🌸 Journey Beats &amp; Quotes
          </button>
        </div>

        {/* Masonry Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Render Video Testimonials */}
          {(filter === 'all' || filter === 'video') &&
            TESTIMONIALS_DATA.filter(t => t.videoUrl).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border-2 border-[#E89BB6]/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold bg-[#FCEBF1] text-[#7D2548] px-3 py-1 rounded-full border border-[#E89BB6]/40">
                      🎬 Video Story
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-gradient-to-br from-[#FCEBF1] via-[#FFF9F4] to-[#CDE0B7] p-6 border border-[#E89BB6]/40 text-center my-2 group-hover:border-[#C95D86] transition-colors">
                    <button
                      onClick={() => setActiveMedia({ type: 'video', url: item.videoUrl!, title: item.clientLabel })}
                      className="w-14 h-14 rounded-full bg-[#7D2548] hover:bg-[#661C39] text-white mx-auto flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all cursor-pointer"
                      aria-label="Play video testimonial"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                    <span className="text-xs font-bold text-[#3D1F2D] block mt-3">
                      Watch Video Testimonial
                    </span>
                  </div>

                  <p className="text-xs text-[#2D2729]/85 leading-relaxed italic font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E89BB6]/40 flex items-center justify-between">
                  <h4 className="font-serif text-sm font-bold text-[#3D1F2D]">
                    — {item.clientLabel}
                  </h4>
                  <span className="text-[10px] font-semibold text-[#7D2548]">
                    {item.journeyType}
                  </span>
                </div>
              </div>
            ))}

          {/* Render Screenshots / Image Feedback Cards */}
          {(filter === 'all' || filter === 'screenshots') &&
            screenshotCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActiveMedia({ type: 'image', url: card.url, title: card.title })}
                className="bg-white rounded-3xl p-5 border border-[#E89BB6]/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold bg-[#FCEBF1] text-[#7D2548] px-3 py-1 rounded-full border border-[#E89BB6]/40 flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{card.tag}</span>
                  </span>
                  <ZoomIn className="w-4 h-4 text-[#7D2548] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#E89BB6]/30 max-h-64">
                  <img
                    src={card.url}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" />
                      Click to Enlarge Feedback
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-xs font-serif font-bold text-[#3D1F2D] text-center">
                  {card.title}
                </div>
              </div>
            ))}

          {/* Render Story Wall Beats */}
          {(filter === 'all' || filter === 'stories') &&
            STORY_WALL_DATA.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-7 border border-[#CDE0B7] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{story.iconSymbol}</span>
                    <span className="text-xs font-bold bg-[#F0F7E6] text-[#2F4737] px-3 py-1 rounded-full border border-[#98B08D]/40">
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

                  <div className="p-4 rounded-2xl bg-[#FFF9F4] border-l-3 border-[#D4AF37] shadow-xs">
                    <Quote className="w-4 h-4 text-[#D4AF37] mb-1" />
                    <p className="font-serif italic text-sm text-[#3D1F2D] font-bold">
                      {story.quote}
                    </p>
                  </div>

                  <p className="text-xs text-[#2D2729]/80 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CDE0B7] flex items-center justify-between">
                  <span className="text-xs font-serif italic text-[#3D1F2D] font-semibold">
                    — {story.authorLabel}
                  </span>

                  <a
                    href="/book"
                    onClick={(e) => handleAction('/book', e)}
                    className="text-xs font-bold text-[#7D2548] flex items-center gap-1 group-hover:translate-x-1 transition-transform no-underline"
                  >
                    <span>Free Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}

        </div>

        {/* Media Lightbox Modal */}
        {activeMedia && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
            <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close media"
              >
                <X className="w-6 h-6" />
              </button>
              
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.url}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-3xl"
                ></video>
              ) : (
                <div className="p-2 flex flex-col items-center">
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.title || 'Client Feedback'}
                    className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
                  />
                  {activeMedia.title && (
                    <div className="text-white text-xs font-bold pt-3">
                      {activeMedia.title}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
