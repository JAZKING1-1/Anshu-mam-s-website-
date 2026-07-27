import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Free Clarity Call?",
      answer: "It is a short 15–20 minute call to understand your current challenge and see whether 1:1 coaching is the right support for you.",
    },
    {
      question: "Is coaching therapy?",
      answer: "No. Coaching is focused on self-awareness, mindset, emotional growth, decision-making, and practical action steps. It is not a replacement for therapy, medical, psychological, or psychiatric treatment.",
    },
    {
      question: "Who is this for?",
      answer: "This is for women who want support with self-confidence, relationships, emotional patterns, boundaries, overthinking, clarity, and personal growth.",
    },
    {
      question: "Are sessions personalized?",
      answer: "Yes. Every coaching journey is customized according to your needs, goals, and pace.",
    },
    {
      question: "How do I start?",
      answer: "Start by booking a free clarity call. After the call, Anshu can suggest the best coaching journey for you.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FFF8F1] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D98AA8] bg-[#F8DDE8]/60 px-4 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4B2E3D]">
            Have Questions? We’re Here to Help.
          </h2>
          <p className="text-base text-[#352A2E]/80 font-normal">
            Everything you need to know about the coaching process &amp; booking your call.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#F8DDE8] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#4B2E3D] hover:text-[#D98AA8] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D98AA8] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4B2E3D]/60 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#D98AA8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#352A2E]/85 leading-relaxed border-t border-[#FFF8F1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Medical disclaimer note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F8DDE8]/40 border border-[#D98AA8]/30 flex items-start gap-3 text-xs text-[#4B2E3D]">
          <ShieldAlert className="w-5 h-5 text-[#D98AA8] shrink-0 mt-0.5" />
          <p>
            <strong>Compliance Note:</strong> Coaching is dedicated to personal empowerment, mindset reframing, and self-awareness. It is not medical or psychiatric treatment. Individual experiences and results may vary.
          </p>
        </div>

      </div>
    </section>
  );
};
