import { ArrowUpRight, CalendarDays, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, getEmailDraftUrl, getWhatsAppUrl } from '../config/contact';
import { BookingForm } from '../components/BookingForm';

export const ContactPage = () => {
  const introduction = 'Hello Anshu, I would like to learn more about your coaching. Please let me know how we can connect.';
  return (
    <div className="container">
      <header className="page-intro">
        <p className="eyebrow">Let’s connect</p>
        <h1 className="page-heading">There is room for<br /><em>your questions.</em></h1>
        <p>Whether you are ready for a new chapter or simply curious about coaching, you are welcome here.</p>
      </header>
      {(CONTACT_CONFIG.hasContactChannel || CONTACT_CONFIG.bookingUrl) && (
        <section className="contact-details" aria-label="Ways to contact Anshu">
          <div className="contact-grid">
            {CONTACT_CONFIG.email && (
              <article className="contact-card">
                <Mail size={27} strokeWidth={1.25} aria-hidden="true" />
                <h2>Write a little hello</h2>
                <p>For questions about coaching or arranging an introductory conversation.</p>
                <a href={getEmailDraftUrl('A coaching enquiry', introduction)} className="text-link">{CONTACT_CONFIG.email} <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            )}
            {CONTACT_CONFIG.whatsappRaw && (
              <article className="contact-card">
                <MessageCircle size={27} strokeWidth={1.25} aria-hidden="true" />
                <h2>Start a conversation</h2>
                <p>Open a WhatsApp draft and send your message when you are ready.</p>
                <a href={getWhatsAppUrl(introduction)} className="text-link" target="_blank" rel="noopener noreferrer">Message on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            )}
            {CONTACT_CONFIG.bookingUrl && (
              <article className="contact-card">
                <CalendarDays size={27} strokeWidth={1.25} aria-hidden="true" />
                <h2>Make a little space</h2>
                <p>Explore the appointment details and available times on the booking page.</p>
                <a href={CONTACT_CONFIG.bookingUrl} className="text-link" target="_blank" rel="noopener noreferrer">View availability <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            )}
          </div>
        </section>
      )}
      <BookingForm />
    </div>
  );
};
