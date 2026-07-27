import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleAction = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path.replace('/', '#');
    }
  };

  return (
    <footer className="bg-[#4A2E3B] text-[#FFF9F4] pt-16 pb-12 border-t border-[#EFCBD5]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFF9F4]/15">
          
          {/* Brand & Subtitle */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFCBD5] flex items-center justify-center border border-[#C3A36B]">
                <Sparkles className="w-5 h-5 text-[#C3A36B]" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Anshu Sahani
              </span>
            </div>
            
            <p className="text-sm text-[#EFCBD5] font-medium tracking-wide">
              {CONTACT_CONFIG.title}
            </p>

            <p className="text-xs text-[#FFF9F4]/80 max-w-md leading-relaxed">
              Helping women move from fear to courage, confusion to clarity, and self-doubt to confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#EFCBD5]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF9F4]/80">
              <li><a href="/" onClick={(e) => handleAction('/', e)} className="hover:text-[#EFCBD5] transition-colors">Home</a></li>
              <li><a href="/about" onClick={(e) => handleAction('/about', e)} className="hover:text-[#EFCBD5] transition-colors">About Anshu</a></li>
              <li><a href="/coaching" onClick={(e) => handleAction('/coaching', e)} className="hover:text-[#EFCBD5] transition-colors">1:1 Coaching</a></li>
              <li><a href="/testimonials" onClick={(e) => handleAction('/testimonials', e)} className="hover:text-[#EFCBD5] transition-colors">Testimonials</a></li>
              <li><a href="/book" onClick={(e) => handleAction('/book', e)} className="hover:text-[#EFCBD5] transition-colors">Book Free Call</a></li>
              <li><a href="/contact" onClick={(e) => handleAction('/contact', e)} className="hover:text-[#EFCBD5] transition-colors">Contact</a></li>
              <li><a href="/privacy" onClick={(e) => handleAction('/privacy', e)} className="hover:text-[#EFCBD5] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => handleAction('/terms', e)} className="hover:text-[#EFCBD5] transition-colors">Terms &amp; Coaching Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact / CTA column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#EFCBD5]">
              Start Your Transformation
            </h4>
            <p className="text-xs text-[#FFF9F4]/80">
              Ready to unlock your golden cage? Schedule your complimentary 15-minute call today.
            </p>
            <a
              href="/book"
              onClick={(e) => handleAction('/book', e)}
              className="inline-flex items-center gap-2 bg-[#EFCBD5] hover:bg-[#F8E8ED] text-[#4A2E3B] font-semibold text-xs px-5 py-3 rounded-2xl transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#9C536D]" />
              <span>Book Clarity Call</span>
            </a>
          </div>

        </div>

        {/* Mandatory Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center text-xs text-[#FFF9F4]/60">
          <p className="max-w-3xl mx-auto leading-relaxed italic">
            “Coaching is not a replacement for medical, psychological, psychiatric, or emergency support. Individual experiences and results may vary.”
          </p>

          <div className="pt-2 text-[11px] text-[#FFF9F4]/40">
            © {new Date().getFullYear()} Anshu Sahani Coaching. All rights reserved. Designed with warmth &amp; dignity.
          </div>
        </div>

      </div>
    </footer>
  );
};
