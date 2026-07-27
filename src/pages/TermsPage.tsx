import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FFF9F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3 border-b border-[#EFCBD5]/60 pb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Terms of Service &amp; Compliance
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#4A2E3B]">
            Terms &amp; Coaching Disclaimer
          </h1>
          <p className="text-xs text-[#2D2729]/70">Last Updated: July 2026</p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFCBD5] shadow-soft space-y-6 text-sm text-[#2D2729]/85 leading-relaxed font-normal">
          
          <div className="p-4 rounded-2xl bg-[#EFCBD5]/40 border border-[#9C536D]/30 font-semibold text-[#4A2E3B]">
            Coaching is not a replacement for medical, psychological, psychiatric, or emergency support. Individual experiences and results may vary.
          </div>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">1. Scope of Coaching Services</h2>
          <p>
            Anshu Sahani provides 1:1 Life Coaching, Relationship Coaching, and Neuro-Linguistic Programming (NLP) mindset reframing. Coaching is designed for personal empowerment, self-awareness, communication improvement, and emotional resilience.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">2. Not Therapy or Medical Treatment</h2>
          <p>
            Coaching does not involve medical diagnosis, psychiatric evaluation, or clinical psychotherapy. If you are experiencing severe mental health distress, clinical depression, or trauma requiring psychiatric care, please consult a licensed medical professional or local mental health services immediately.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">3. Client Responsibility &amp; Non-Guaranteed Results</h2>
          <p>
            Individual outcomes and progress depend on personal commitment, active participation, and individual life circumstances. No specific transformation or outcome is guaranteed.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">4. Cancellation &amp; Rescheduling</h2>
          <p>
            Clarity calls and 1:1 sessions can be rescheduled with at least 24 hours' notice out of respect for both parties' time.
          </p>
        </div>

      </div>
    </div>
  );
};
