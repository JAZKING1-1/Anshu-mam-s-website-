import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    ageRange: '26-35',
    supportNeed: '',
    desiredChange: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    readiness: 'Yes, ready to explore',
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in all required fields (Name, WhatsApp Number, Email).');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please confirm consent to be contacted for scheduling your call.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  // Generate WhatsApp link using central contact config
  const getWhatsAppUrl = () => {
    const name = formData.fullName || 'a client';
    const topic = formData.supportNeed || '1:1 coaching';
    const text = encodeURIComponent(`Hi Anshu Ma’am, I would like to book a Free Clarity Call. My name is ${name}. I need support with ${topic}.`);
    return `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCBD5]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9E2C8]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Container */}
        <div className="bg-[#FFF9F4] border-2 border-[#EFCBD5] rounded-4xl p-8 sm:p-12 shadow-soft-lg relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#EFCBD5]/60 border border-[#9C536D]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4A2E3B]">
              <Sparkles className="w-3.5 h-3.5 text-[#C3A36B]" />
              <span>{CONTACT_CONFIG.bookingCallDuration} · {CONTACT_CONFIG.bookingCallPrice}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E3B]">
              Book Your Free Clarity Call
            </h2>
            <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal leading-relaxed">
              Your first step does not need to be a major decision. It can begin with one honest conversation.
            </p>
          </div>

          {/* Instant WhatsApp Option Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-[#D9E2C8]/50 border border-[#3F5648]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#4A2E3B]">Prefer instant WhatsApp messaging?</h4>
                <p className="text-xs text-[#2D2729]/75">Reach Anshu’s team directly on WhatsApp ({CONTACT_CONFIG.whatsappDisplay})</p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold px-6 py-2.5 rounded-2xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Success Banner */}
          {isSubmitted ? (
            <div className="bg-white border-2 border-[#3F5648] rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fade-up shadow-soft">
              <div className="w-16 h-16 rounded-full bg-[#D9E2C8] text-[#3F5648] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-[#4A2E3B]">
                  Request Received
                </h3>
                <p className="text-base text-[#2D2729]/80 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your clarity-call request has been received. Anshu’s team will contact you shortly to confirm the next step.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-6 py-3 rounded-2xl text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book on WhatsApp Now</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#9C536D] underline hover:text-[#824259]"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#EFCBD5] shadow-sm">
              
              {errorMessage && (
                <div className="bg-[#EFCBD5]/50 border border-[#9C536D] text-[#4A2E3B] px-4 py-3 rounded-2xl text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    Full Name <span className="text-[#9C536D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    WhatsApp Number <span className="text-[#9C536D]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 Mobile Number"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    Email Address <span className="text-[#9C536D]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  />
                </div>

                {/* Age Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    Age Range
                  </label>
                  <select
                    name="ageRange"
                    value={formData.ageRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  >
                    <option value="18-25">18 – 25 years</option>
                    <option value="26-35">26 – 35 years</option>
                    <option value="36-45">36 – 45 years</option>
                    <option value="46+">46+ years</option>
                  </select>
                </div>

              </div>

              {/* What would you like support with? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                  What would you like support with?
                </label>
                <textarea
                  name="supportNeed"
                  rows={3}
                  value={formData.supportNeed}
                  onChange={handleChange}
                  placeholder="Share a little about emotional exhaustion, relationship patterns, overthinking, boundary struggles..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                ></textarea>
              </div>

              {/* What would you like to change? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                  What would you like to change in your life?
                </label>
                <textarea
                  name="desiredChange"
                  rows={2}
                  value={formData.desiredChange}
                  onChange={handleChange}
                  placeholder="e.g., More peace, confidence, setting boundaries without guilt, clarity in relationship..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                ></textarea>
              </div>

              {/* Preferred Call Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    Preferred Call Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                    Preferred Call Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F4] border border-[#EFCBD5] focus:border-[#9C536D] focus:outline-none text-sm text-[#2D2729] transition-colors"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM – 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Readiness Radio */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E3B] mb-2">
                  Are you ready to explore 1:1 coaching?
                </label>
                <div className="flex flex-wrap items-center gap-6 py-2">
                  {['Yes, ready to explore', 'Maybe / Have questions', 'Just exploring for now'].map((option) => (
                    <label key={option} className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-[#4A2E3B]">
                      <input
                        type="radio"
                        name="readiness"
                        value={option}
                        checked={formData.readiness === option}
                        onChange={handleChange}
                        className="accent-[#9C536D]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-[#2D2729]/80">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 rounded border-[#EFCBD5] accent-[#9C536D]"
                  />
                  <span>
                    I agree to be contacted via WhatsApp/Email by Anshu’s team to schedule my free clarity call. Confidentiality is 100% assured.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9C536D] hover:bg-[#824259] text-white font-medium px-10 py-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all text-base cursor-pointer"
                >
                  <span>Request My Free Clarity Call</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
