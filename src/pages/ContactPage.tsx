import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { Mail, MessageCircle, Globe } from 'lucide-react';
import { BookingForm } from '../components/BookingForm';

export const ContactPage: React.FC = () => {
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(`Hi Anshu Ma’am, I would like to inquire about 1:1 coaching.`);
    return `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="py-16 bg-[#FFF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C536D] bg-[#EFCBD5]/50 px-4 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A2E3B]">
            Contact Anshu Sahani
          </h1>
          <p className="text-base sm:text-lg text-[#2D2729]/80 font-normal">
            Whether you have questions about coaching or want to book your Free Clarity Call, we are here to support you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white p-8 rounded-3xl border border-[#EFCBD5] shadow-soft text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white mx-auto flex items-center justify-center shadow-sm">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#4A2E3B]">WhatsApp Direct</h3>
            <p className="text-xs text-[#2D2729]/80">Instant messaging for quick questions &amp; booking support.</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-5 py-2.5 rounded-2xl"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EFCBD5] shadow-soft text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFCBD5] text-[#9C536D] mx-auto flex items-center justify-center shadow-sm">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#4A2E3B]">Email Support</h3>
            <p className="text-xs text-[#2D2729]/80">{CONTACT_CONFIG.email}</p>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="inline-flex items-center gap-2 bg-[#9C536D] text-white text-xs font-semibold px-5 py-2.5 rounded-2xl"
            >
              <span>Send an Email</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9E2C8] shadow-soft text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D9E2C8] text-[#3F5648] mx-auto flex items-center justify-center shadow-sm">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#4A2E3B]">Global Virtual Coaching</h3>
            <p className="text-xs text-[#2D2729]/80">{CONTACT_CONFIG.location}</p>
            <span className="inline-block text-xs font-semibold text-[#3F5648] bg-[#D9E2C8]/50 px-3 py-1 rounded-full">
              100% Confidential Online
            </span>
          </div>

        </div>

        {/* Embedded Booking Form */}
        <BookingForm />

      </div>
    </div>
  );
};
