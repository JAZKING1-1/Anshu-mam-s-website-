import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, Heart, Shield } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Free Clarity Events']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const availableTopics = [
    'Free Clarity Events',
    'Monthly Mindset Workshops',
    'Relationship & Boundary Insights',
  ];

  const handleTopicToggle = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-tr from-[#FCEBF1] via-[#FFF9F4] to-[#F0F7E6] relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E89BB6]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-4xl p-8 sm:p-12 shadow-soft-lg border-2 border-[#E89BB6]/50 text-center relative overflow-hidden">
          
          <div className="w-14 h-14 rounded-full bg-[#FCEBF1] text-[#7D2548] mx-auto flex items-center justify-center shadow-soft border border-[#D4AF37]/40 mb-6">
            <Sparkles className="w-7 h-7 text-[#D4AF37]" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7D2548] bg-[#FCEBF1] px-4 py-1.5 rounded-full inline-block">
              Free Events &amp; Mindset Guidance
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D1F2D]">
              Join the Circle of Feminine Courage
            </h2>

            <p className="text-sm sm:text-base text-[#2D2729]/80 font-normal leading-relaxed">
              Subscribe to receive exclusive invites to free clarity calls, live online workshops, and gentle weekly emotional wellness reflections directly to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#F0F7E6] border-2 border-[#6E8A63] rounded-3xl p-8 max-w-lg mx-auto text-center space-y-4 animate-fade-up">
              <CheckCircle2 className="w-10 h-10 text-[#6E8A63] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#3D1F2D]">
                Welcome to the Circle!
              </h3>
              <p className="text-xs text-[#2D2729]/80 leading-relaxed">
                Thank you for subscribing. You will receive updates about our upcoming free clarity sessions and weekly mindset reflections.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-[#7D2548] underline hover:text-[#661C39] cursor-pointer"
              >
                Subscribe with another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              
              {errorMessage && (
                <div className="bg-[#FCEBF1] border border-[#C95D86] text-[#7D2548] px-4 py-2.5 rounded-2xl text-xs font-bold">
                  {errorMessage}
                </div>
              )}

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#7D2548]">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#FFF9F4] border border-[#E89BB6] focus:border-[#7D2548] focus:outline-none text-sm text-[#2D2729] shadow-xs"
                />
              </div>

              {/* Topic Preferences Checklist */}
              <div className="space-y-2 text-left">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3D1F2D] text-center">
                  What updates would you like to receive?
                </label>

                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  {availableTopics.map((topic) => {
                    const isChecked = selectedTopics.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => handleTopicToggle(topic)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#7D2548] text-white border-[#7D2548] shadow-xs'
                            : 'bg-[#FFF9F4] text-[#3D1F2D] border-[#E89BB6]'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7D2548] hover:bg-[#661C39] text-white font-bold px-9 py-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all text-sm cursor-pointer"
                >
                  <Heart className="w-4 h-4" />
                  <span>Join the Circle (Free Subscribe)</span>
                </button>
              </div>

              {/* Privacy Reassurance */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#2D2729]/70 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#6E8A63]" />
                <span>100% Privacy. Zero spam. Unsubscribe anytime with one click.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
