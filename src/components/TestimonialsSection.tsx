import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Quote, Star, Play, X } from 'lucide-react';

interface TestimonialsSectionProps {
  isFullPage?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isFullPage = false }) => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'text'>('all');

  const testimonials = isFullPage
    ? TESTIMONIALS_DATA.filter(t => activeTab === 'all' || (activeTab === 'video' ? !!t.videoUrl : !t.videoUrl))
    : TESTIMONIALS_DATA.filter(t => t.featured);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FFF9F4] via-[#F7F0E8]/50 to-[#FFF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Client Stories &amp; Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
            Words from Women Who Began Their Journey
          </h2>
          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            Real experiences from women who stepped into courage, clarity, and self-worth through personalized 1:1 coaching.
          </p>
        </div>

        {/* Filter Tabs if Full Page */}
        {isFullPage && (
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all' ? 'bg-[#9C536D] text-white shadow-sm' : 'bg-white text-[#2D2729] border border-[#EFCBD5]'
              }`}
            >
              All Testimonials ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'video' ? 'bg-[#9C536D] text-white shadow-sm' : 'bg-white text-[#2D2729] border border-[#EFCBD5]'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Video Stories (5)</span>
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'text' ? 'bg-[#9C536D] text-white shadow-sm' : 'bg-white text-[#2D2729] border border-[#EFCBD5]'
              }`}
            >
              Written Experiences
            </button>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#EFCBD5] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header with Quote Icon / Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF9F4] flex items-center justify-center border border-[#EFCBD5]">
                    <Quote className="w-5 h-5 text-[#9C536D]" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C3A36B] text-[#C3A36B]" />
                    ))}
                  </div>
                </div>

                {/* Video Card Player Trigger if available */}
                {item.videoUrl ? (
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#EFCBD5]/50 via-[#F7F0E8] to-[#D9E2C8]/50 p-6 border border-[#EFCBD5] text-center my-3 group">
                    <button
                      onClick={() => setActiveVideoUrl(item.videoUrl!)}
                      className="w-14 h-14 rounded-full bg-[#9C536D] hover:bg-[#824259] text-white mx-auto flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all"
                      aria-label="Play video testimonial"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                    <span className="text-xs font-semibold text-[#4A2E3B] block mt-3">
                      Watch Video Testimonial
                    </span>
                  </div>
                ) : null}

                {/* Quote Text */}
                <p className="text-sm text-[#2D2729]/85 leading-relaxed font-normal whitespace-pre-line">
                  "{item.quote}"
                </p>

                {/* Before / After emotional journey if present */}
                {item.beforeAfter && (
                  <div className="mt-4 p-4 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5]/60 text-xs space-y-2">
                    <div>
                      <span className="font-bold text-[#9C536D] uppercase tracking-wider block text-[10px]">
                        Before Coaching:
                      </span>
                      <p className="text-[#2D2729]/80">{item.beforeAfter.before}</p>
                    </div>
                    <div className="pt-1 border-t border-[#EFCBD5]/40">
                      <span className="font-bold text-[#3F5648] uppercase tracking-wider block text-[10px]">
                        After Coaching:
                      </span>
                      <p className="text-[#2D2729]/80">{item.beforeAfter.after}</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-[#EFCBD5]/50 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#4A2E3B]">
                    — {item.clientLabel}
                  </h4>
                  <span className="text-[11px] text-[#9C536D] font-medium">
                    Verified Coaching Journey
                  </span>
                </div>
                
                <span className="text-[11px] font-semibold bg-[#EFCBD5]/40 text-[#4A2E3B] px-3 py-1 rounded-full border border-[#EFCBD5]">
                  {item.journeyType}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-14 text-center text-xs text-[#2D2729]/70 italic">
          Client experiences are personal. Individual experiences and results may vary.
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            <video
              src={activeVideoUrl}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-3xl"
            ></video>
          </div>
        </div>
      )}

    </section>
  );
};
