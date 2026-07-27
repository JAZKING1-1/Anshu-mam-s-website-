import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface ChatbotProps {
  onNavigate?: (path: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'initial' | 'confirm' | 'form' | 'success' | 'more'>('initial');
  const [selectedTopic, setSelectedTopic] = useState('');
  
  const [miniForm, setMiniForm] = useState({
    name: '',
    whatsapp: '',
    time: 'Morning (9 AM - 12 PM)',
  });

  const topics = [
    "Relationship challenges",
    "Confidence and self-worth",
    "Overthinking and emotional overwhelm",
    "Boundaries and people-pleasing",
    "Life clarity and direction",
    "Book a call",
    "Learn about coaching",
  ];

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    if (topic === "Book a call") {
      setStep('form');
    } else if (topic === "Learn about coaching") {
      setStep('more');
    } else {
      setStep('confirm');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (miniForm.name.trim() && miniForm.whatsapp.trim()) {
      setStep('success');
    }
  };

  const resetChat = () => {
    setStep('initial');
    setSelectedTopic('');
    setMiniForm({ name: '', whatsapp: '', time: 'Morning (9 AM - 12 PM)' });
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(`Hi Anshu Ma’am, I used the Clarity Assistant. My name is ${miniForm.name || 'a client'}. I need support with ${selectedTopic || '1:1 coaching'}.`);
    return `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-r from-[#EFCBD5] via-[#FFF9F4] to-[#D9E2C8] text-[#4A2E3B] p-4 rounded-full shadow-soft-lg hover:shadow-gold-accent transition-all duration-300 transform hover:scale-105 flex items-center gap-3 border border-white"
          aria-label="Open Clarity Assistant"
        >
          <div className="relative">
            <MessageCircle className="w-7 h-7 text-[#9C536D]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#3F5648] rounded-full border-2 border-white"></span>
          </div>
          <span className="font-serif text-sm font-bold pr-1 hidden sm:inline text-[#4A2E3B]">
            Clarity Assistant
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#EFCBD5] w-[90vw] sm:w-[380px] max-h-[560px] flex flex-col overflow-hidden animate-fade-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EFCBD5] via-[#FFF9F4] to-[#D9E2C8] p-4 border-b border-[#EFCBD5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-[#C3A36B]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#4A2E3B] leading-tight">
                  Clarity Assistant
                </h3>
                <span className="text-[10px] text-[#3F5648] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3F5648]"></span>
                  Anshu Sahani Coaching
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/60 text-[#4A2E3B] transition-colors"
              aria-label="Close chat assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs">
            
            {/* Opening Welcome Message */}
            <div className="bg-[#FFF9F4] p-3.5 rounded-2xl border border-[#EFCBD5] text-[#4A2E3B] leading-relaxed">
              <p className="font-medium">
                Hi, I’m here to help you learn about Anshu’s coaching or book a Free Clarity Call. What would you like support with?
              </p>
            </div>

            {/* Step 1: 7 Options */}
            {step === 'initial' && (
              <div className="space-y-2 pt-1">
                {topics.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTopicSelect(t)}
                    className="w-full text-left px-3.5 py-2.5 rounded-2xl bg-white border border-[#EFCBD5] hover:bg-[#EFCBD5]/40 hover:border-[#9C536D] text-[#4A2E3B] font-medium transition-all shadow-xs flex items-center justify-between group"
                  >
                    <span>{t}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9C536D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Response */}
            {step !== 'initial' && (
              <>
                <div className="bg-[#EFCBD5]/50 p-3 rounded-2xl text-right text-[#4A2E3B] font-semibold">
                  {selectedTopic}
                </div>

                <div className="bg-[#FFF9F4] p-3.5 rounded-2xl border border-[#EFCBD5] text-[#4A2E3B] leading-relaxed space-y-2">
                  <p>
                    Thank you for sharing. Anshu offers personalised 1:1 coaching to help women develop courage, clarity, and confidence.
                  </p>
                  <p className="font-semibold text-[#9C536D]">
                    Would you like to book a free 15–20 minute clarity call?
                  </p>
                </div>
              </>
            )}

            {/* Step 2 Options Buttons */}
            {step === 'confirm' && (
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setStep('form')}
                  className="w-full py-2.5 px-4 bg-[#9C536D] hover:bg-[#824259] text-white font-semibold rounded-2xl transition-colors text-center"
                >
                  Yes, book my call
                </button>

                <button
                  onClick={() => setStep('more')}
                  className="w-full py-2.5 px-4 bg-white border border-[#EFCBD5] hover:bg-[#FFF9F4] text-[#4A2E3B] font-medium rounded-2xl transition-colors text-center"
                >
                  Learn more first
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 px-4 text-[#2D2729]/70 hover:text-[#4A2E3B] text-center"
                >
                  Not now
                </button>
              </div>
            )}

            {/* Tell Me More Info */}
            {step === 'more' && (
              <div className="bg-[#D9E2C8]/40 p-3.5 rounded-2xl border border-[#3F5648]/30 text-[#4A2E3B] space-y-2">
                <p>
                  Anshu’s 1:1 coaching integrates Life Coaching &amp; Neuro-Linguistic Programming (NLP) to help you reframe unhelpful thought patterns and build lasting self-worth.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => setStep('form')}
                    className="w-full py-2 bg-[#9C536D] text-white font-semibold rounded-2xl text-center"
                  >
                    Ready to book free call
                  </button>
                  <button
                    onClick={resetChat}
                    className="text-xs text-[#3F5648] text-center underline"
                  >
                    Back to topics
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Mini Form */}
            {step === 'form' && (
              <form onSubmit={handleFormSubmit} className="space-y-3 bg-white p-3 rounded-2xl border border-[#EFCBD5]">
                <div className="font-bold text-[#4A2E3B]">Quick Booking Details</div>
                
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={miniForm.name}
                  onChange={(e) => setMiniForm({ ...miniForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#FFF9F4] border border-[#EFCBD5] text-xs focus:outline-none focus:border-[#9C536D]"
                />

                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number"
                  required
                  value={miniForm.whatsapp}
                  onChange={(e) => setMiniForm({ ...miniForm, whatsapp: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#FFF9F4] border border-[#EFCBD5] text-xs focus:outline-none focus:border-[#9C536D]"
                />

                <select
                  value={miniForm.time}
                  onChange={(e) => setMiniForm({ ...miniForm, time: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#FFF9F4] border border-[#EFCBD5] text-xs focus:outline-none focus:border-[#9C536D]"
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM – 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM – 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM – 8 PM)</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#9C536D] hover:bg-[#824259] text-white font-bold rounded-2xl text-center transition-colors"
                >
                  Confirm Free Clarity Call
                </button>
              </form>
            )}

            {/* Step 4: Success Message */}
            {step === 'success' && (
              <div className="bg-[#D9E2C8]/50 p-4 rounded-2xl border border-[#3F5648] text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#3F5648] mx-auto" />
                <p className="font-bold text-[#4A2E3B] text-sm">
                  Thank you!
                </p>
                <p className="text-xs text-[#2D2729]/80">
                  Anshu’s team will contact you shortly to confirm your free clarity call.
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white font-bold rounded-2xl text-xs"
                >
                  <span>Continue on WhatsApp</span>
                </a>
              </div>
            )}

            {/* Safety Warning Message */}
            <div className="pt-2 border-t border-[#EFCBD5] flex items-start gap-2 text-[10px] text-[#2D2729]/75 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 text-[#9C536D] shrink-0 mt-0.5" />
              <p>
                If you feel unsafe or require urgent mental-health support, please contact a qualified mental-health professional or local emergency service.
              </p>
            </div>

          </div>

          {/* Reset option */}
          <div className="p-2 bg-[#FFF9F4] border-t border-[#EFCBD5] text-center">
            <button
              onClick={resetChat}
              className="text-[11px] text-[#9C536D] hover:underline"
            >
              Restart Conversation
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
