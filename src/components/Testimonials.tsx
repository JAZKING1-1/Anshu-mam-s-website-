import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Before coaching, I was unhappy and unsatisfied with my life. I used to get angry easily and was going through many ups and downs.\n\nAfter starting 1:1 sessions with Anshu, I began feeling better, calmer, and more confident. She helped me discover my abilities, rebuild my self-esteem, and gain peace of mind.\n\nI am still on my journey, but I already feel a positive change within myself.",
      client: "Client, 1:1 Coaching Journey",
      tag: "1:1 Coaching",
      badgeColor: "bg-[#F8DDE8] text-[#D98AA8]",
    },
    {
      quote: "Before working with Anshu Ma’am, my biggest struggle was understanding how to handle relationships and emotions.\n\nDuring the sessions, I realized that happiness begins with self-awareness. My mindset changed, and I started feeling more relaxed, satisfied, and emotionally connected with myself.\n\nThis 3-month journey helped me reset, refresh, and restart my life. Change is possible with the right guidance.",
      client: "Client, 3-Month Coaching Journey",
      tag: "3-Month Journey",
      badgeColor: "bg-[#DCE7C8] text-[#7D9A75]",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FFF8F1] via-[#F8DDE8]/30 to-[#FFF8F1] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D98AA8] bg-[#F8DDE8]/70 px-4 py-1.5 rounded-full inline-block">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B2E3D]">
            Words from Women Who Began Their Journey
          </h2>
          <p className="text-base sm:text-lg text-[#352A2E]/80 font-normal">
            Read how personalized coaching helped clients rediscover their calm, confidence, and relationship peace.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F8DDE8]/40 border-2 border-[#A8BFA1]/40 rounded-3xl p-8 sm:p-10 shadow-soft relative flex flex-col justify-between hover:shadow-soft-lg transition-all"
            >
              <div className="space-y-6">
                
                {/* Header row with quote icon and stars */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Quote className="w-6 h-6 text-[#D98AA8]" />
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A96A] text-[#C8A96A]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <div className="text-sm sm:text-base text-[#352A2E]/90 leading-relaxed font-normal whitespace-pre-line font-sans">
                  {review.quote}
                </div>

              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-[#D98AA8]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#4B2E3D]">
                    — {review.client}
                  </h4>
                  <span className="text-xs text-[#D98AA8] font-medium">
                    Verified Client Experience
                  </span>
                </div>
                
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${review.badgeColor}`}>
                  {review.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#352A2E]/70 italic">
          Client experiences are personal. Individual results may vary.
        </div>

      </div>
    </section>
  );
};
