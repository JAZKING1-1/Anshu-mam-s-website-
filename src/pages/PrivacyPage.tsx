import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#FFF9F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3 border-b border-[#EFCBD5]/60 pb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Legal &amp; Data Protection
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#4A2E3B]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#2D2729]/70">Last Updated: July 2026</p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFCBD5] shadow-soft space-y-6 text-sm text-[#2D2729]/85 leading-relaxed font-normal">
          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">1. Introduction</h2>
          <p>
            At Anshu Sahani Coaching, your privacy, emotional safety, and personal data confidentiality are deeply important to us. This Privacy Policy explains how we handle information collected when you visit our website or submit booking requests for Free Clarity Calls or 1:1 coaching.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">2. Information We Collect</h2>
          <p>
            When you complete a booking request or reach out via WhatsApp/Email, we collect personal information you voluntarily provide, such as your full name, WhatsApp number, email address, age range, preferred call time, and notes regarding what you would like support with.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">3. How We Use Your Information</h2>
          <p>
            We use your information solely for scheduling, communicating about your 1:1 coaching sessions, and ensuring your clarity call is tailored to your goals. We never sell, rent, or trade your personal data to third parties.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">4. Confidentiality</h2>
          <p>
            All coaching conversations, forms, and notes are held in strict professional confidence.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[#4A2E3B]">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please email us at <strong>connect@anshushahani.com</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};
