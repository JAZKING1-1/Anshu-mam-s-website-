import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface MobileQuickBarProps {
  onNavigate?: (path: string) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onNavigate }) => {
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/book');
    } else {
      window.location.hash = '#booking';
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(`Hi Anshu Ma’am, I would like to book a Free Clarity Call.`);
    return `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F4]/95 backdrop-blur-md border-t border-[#EFCBD5] p-3 shadow-2xl flex items-center gap-3">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold py-3 rounded-2xl shadow-sm no-underline"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <a
        href="/book"
        onClick={handleBookingClick}
        className="flex-[2] inline-flex items-center justify-center gap-2 bg-[#9C536D] text-white text-xs font-bold py-3 rounded-2xl shadow-soft no-underline"
      >
        <PhoneCall className="w-4 h-4" />
        <span>Book Free Call</span>
      </a>
    </div>
  );
};
