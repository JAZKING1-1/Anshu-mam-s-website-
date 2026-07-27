import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FFF9F4] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A2E3B]">
            Have Questions? We’re Here to Help.
          </h2>
          <p className="text-base text-[#2D2729]/80 font-normal">
            Everything you need to know about the coaching process &amp; booking your call.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#EFCBD5] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#4A2E3B] hover:text-[#9C536D] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#9C536D] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A2E3B]/60 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#9C536D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#2D2729]/85 leading-relaxed border-t border-[#FFF9F4]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Medical disclaimer note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#EFCBD5]/40 border border-[#9C536D]/30 flex items-start gap-3 text-xs text-[#4A2E3B]">
          <ShieldAlert className="w-5 h-5 text-[#9C536D] shrink-0 mt-0.5" />
          <p>
            <strong>Compliance Note:</strong> Coaching is dedicated to personal empowerment, mindset reframing, and self-awareness. It is not medical or psychiatric treatment. Individual experiences and results may vary.
          </p>
        </div>

      </div>
    </section>
  );
};
