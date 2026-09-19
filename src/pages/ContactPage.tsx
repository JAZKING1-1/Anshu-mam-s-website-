import { ArrowUpRight, CalendarDays, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, getEmailDraftUrl, getWhatsAppUrl } from '../config/contact';
import { BookingForm } from '../components/BookingForm';
import './inner-experience.css';

export const ContactPage = () => {
  const introduction = 'Hello Anshu, I would like to learn more about your coaching. Please let me know how we can connect.';
  return (
    <div className="inner-experience contact-experience">
      <header className="contact-masthead container">
        <div data-reveal>
          <p className="eyebrow">Let’s connect</p>
          <h1>A little hello.<br /><em>A new possibility.</em></h1>
          <p>Whether you are ready for a new chapter or simply curious about coaching, you are welcome here. There is room for your questions.</p>
        </div>
        <div className="hello-seal" aria-hidden="true">
          <svg className="inner-orbit" viewBox="0 0 250 250" fill="none"><circle cx="125" cy="125" r="109" stroke="currentColor" strokeWidth=".7" /><ellipse cx="125" cy="125" rx="84" ry="109" stroke="currentColor" strokeWidth=".6" transform="rotate(32 125 125)" /><ellipse cx="125" cy="125" rx="84" ry="109" stroke="currentColor" strokeWidth=".6" transform="rotate(-32 125 125)" /><path d="m125 8 3 8-3 8-3-8 3-8ZM234 122l8 3-8 3-8-3 8-3Z" fill="currentColor" /></svg>
          <span>Come as<br /><em>you are.</em></span>
        </div>
      </header>
      <div className="contact-ribbon"><div className="container"><span>A real conversation.</span><i aria-hidden="true">✳</i><span>A thoughtful beginning.</span></div></div>
      <div className="container">
        {(CONTACT_CONFIG.hasContactChannel || CONTACT_CONFIG.bookingUrl) && (
          <section className="contact-details" aria-label="Ways to contact Anshu">
            <div className="contact-grid">
              {CONTACT_CONFIG.email && (
                <article className="contact-card" data-reveal>
                  <Mail size={27} strokeWidth={1.25} aria-hidden="true" />
                  <h2>Write a little hello</h2>
                  <p>For questions about coaching or arranging an introductory conversation.</p>
                  <a href={getEmailDraftUrl('A coaching enquiry', introduction)} className="text-link">{CONTACT_CONFIG.email} <ArrowUpRight size={15} aria-hidden="true" /></a>
                </article>
              )}
              {CONTACT_CONFIG.whatsappRaw && (
                <article className="contact-card" data-reveal>
                  <MessageCircle size={27} strokeWidth={1.25} aria-hidden="true" />
                  <h2>Start a conversation</h2>
                  <p>Open a WhatsApp draft and send your message when you are ready.</p>
                  <a href={getWhatsAppUrl(introduction)} className="text-link" target="_blank" rel="noopener noreferrer">Message on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
                </article>
              )}
              {CONTACT_CONFIG.bookingUrl && (
                <article className="contact-card" data-reveal>
                  <CalendarDays size={27} strokeWidth={1.25} aria-hidden="true" />
                  <h2>Make a little space</h2>
                  <p>Explore the appointment details and available times on the booking page.</p>
                  <a href={CONTACT_CONFIG.bookingUrl} className="text-link" target="_blank" rel="noopener noreferrer">View availability <ArrowUpRight size={15} aria-hidden="true" /></a>
                </article>
              )}
            </div>
          </section>
        )}
        <div className="contact-booking" data-reveal><BookingForm /></div>
      </div>
    </div>
  );
};
