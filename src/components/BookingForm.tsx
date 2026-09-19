import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, CalendarDays, Check, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, getEmailDraftUrl, getWhatsAppUrl } from '../config/contact';
import './booking.css';

export const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [consent, setConsent] = useState(false);
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const draftHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (draft) draftHeading.current?.focus();
  }, [draft]);

  const prepareDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !consent) {
      setError('Please add your name and email, then confirm that you are happy to share them.');
      return;
    }
    setError('');
    setDraft([
      'Hello Anshu,',
      '',
      'I would like to find out more about coaching and arrange an introductory conversation.',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      ...(topic ? [`I would like to explore: ${topic}`] : []),
      '',
      'Please let me know the next steps and your availability. Thank you.',
    ].join('\n'));
  };

  return (
    <section id="booking" className="booking-section" aria-labelledby="booking-heading">
      <div className="booking-layout">
        <div className="booking-introduction">
          <p className="eyebrow">Your next chapter</p>
          <h2 id="booking-heading">It can begin with<br /><em>a conversation.</em></h2>
          <p>You do not need to have all the answers. A first conversation is a chance to share what brings you here and see whether coaching feels right for you.</p>
          <ul className="booking-reassurance">
            <li><Check aria-hidden="true" size={17} />Space for your questions</li>
            <li><Check aria-hidden="true" size={17} />A thoughtful look at your next step</li>
            <li><Check aria-hidden="true" size={17} />Room to decide in your own time</li>
          </ul>
          <p className="booking-note">You are welcome to share only what feels comfortable. There is no need to include personal or sensitive details in an initial enquiry.</p>
        </div>

        <div className="booking-panel">
          {CONTACT_CONFIG.bookingUrl && (
            <div className="booking-scheduler">
              <CalendarDays size={25} strokeWidth={1.4} aria-hidden="true" />
              <h3>Find a time to connect</h3>
              <p>See the available appointments and details on Anshu’s booking page.</p>
              <a className="button button-primary" href={CONTACT_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer">View availability <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="booking-note">Opens the booking service in a new tab.</p>
            </div>
          )}

          {!CONTACT_CONFIG.bookingUrl && !CONTACT_CONFIG.hasContactChannel && (
            <div className="booking-soon">
              <span className="booking-icon"><CalendarDays size={29} strokeWidth={1.25} aria-hidden="true" /></span>
              <p className="eyebrow">A little space to begin</p>
              <h3>Bookings will open here soon.</h3>
              <p>Details for introductory conversations are being prepared. In the meantime, get to know Anshu’s story and her approach to coaching.</p>
              <a className="button button-outline" data-route href="/about">Meet Anshu <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="booking-note">This page is not accepting booking requests yet.</p>
            </div>
          )}

          {CONTACT_CONFIG.hasContactChannel && (draft ? (
            <div className="booking-draft">
              <p className="eyebrow">One last look</p>
              <h3 ref={draftHeading} tabIndex={-1}>Your message is ready to review.</h3>
              <p>No message has been sent. Open your preferred app below, review your draft and press send when you are ready.</p>
              <pre className="booking-preview">{draft}</pre>
              <div className="booking-actions">
                {CONTACT_CONFIG.email && <a className="button button-primary" href={getEmailDraftUrl('An introductory conversation', draft)}><Mail size={17} aria-hidden="true" />Open email draft</a>}
                {CONTACT_CONFIG.whatsappRaw && <a className={`button ${CONTACT_CONFIG.email ? 'button-outline' : 'button-primary'}`} href={getWhatsAppUrl(draft)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" />Open WhatsApp draft</a>}
              </div>
              <button className="text-link booking-edit" type="button" onClick={() => setDraft('')}>Edit my details</button>
              <p className="booking-note">An appointment is only confirmed once you have agreed a time with Anshu.</p>
            </div>
          ) : (
            <form onSubmit={prepareDraft} className="booking-form">
              <h3>{CONTACT_CONFIG.bookingUrl ? 'Prefer to ask a question first?' : 'Introduce yourself'}</h3>
              <p>A few simple details are enough. This form prepares a message for you to review and send.</p>
              {error && <p className="booking-error" role="alert">{error}</p>}
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="booking-name">Your name <span aria-hidden="true">*</span></label>
                  <input id="booking-name" name="name" autoComplete="name" maxLength={100} value={name} onChange={event => setName(event.target.value)} required />
                </div>
                <div className="field">
                  <label htmlFor="booking-email">Email address <span aria-hidden="true">*</span></label>
                  <input id="booking-email" type="email" name="email" autoComplete="email" maxLength={254} value={email} onChange={event => setEmail(event.target.value)} required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="booking-topic">What would you like to explore? <span className="booking-optional">(optional)</span></label>
                <select id="booking-topic" name="topic" value={topic} onChange={event => setTopic(event.target.value)}>
                  <option value="">Choose a topic, if you wish</option>
                  <option>Confidence and self-trust</option>
                  <option>Boundaries and communication</option>
                  <option>Relationships</option>
                  <option>A new chapter in life</option>
                  <option>I would like to understand coaching</option>
                </select>
              </div>
              <label className="booking-consent" htmlFor="booking-consent">
                <input id="booking-consent" type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required />
                <span>I am happy to share these details with Anshu when I send my message, so she can respond to my enquiry. <a data-route href="/privacy" className="text-link">Privacy details</a>.</span>
              </label>
              <button className="button button-primary" type="submit">Preview my message <ArrowUpRight size={17} aria-hidden="true" /></button>
              <p className="booking-note">Required fields are marked *. Nothing is sent by this form; you choose when to send the message in your email or WhatsApp app.</p>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
};
