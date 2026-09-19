import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, CalendarDays, Check, Copy, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, getEmailDraftUrl, getWhatsAppUrl } from '../config/contact';
import './booking.css';

type EnquiryOffer = 'clarity-call' | 'personal-coaching';
type CopyStatus = 'idle' | 'copying' | 'copied' | 'manual';
const readOffer = (): EnquiryOffer => new URLSearchParams(window.location.search).get('offer') === 'personal-coaching' ? 'personal-coaching' : 'clarity-call';
const enquiryMessages: Record<EnquiryOffer, string> = {
  'clarity-call': 'CLARITY\nHi Anshu, I would like to enquire about your free Clarity Call. Please share the next steps and availability. Thank you.',
  'personal-coaching': 'CLARITY\nHi Anshu, I am interested in 1:1 coaching. Please share how we can begin, along with the session format, fees and availability. Thank you.',
};

export const InstagramMark = () => <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.7" r=".85" fill="currentColor" stroke="none" /></svg>;

export const BookingForm = () => {
  const requestedOffer = readOffer();
  const [offer, setOffer] = useState<EnquiryOffer>(requestedOffer);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [consent, setConsent] = useState(false);
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const draftHeading = useRef<HTMLHeadingElement>(null);
  const instagramMessage = useRef<HTMLTextAreaElement>(null);
  const copyAttempt = useRef(0);

  const chooseOffer = (next: EnquiryOffer) => {
    copyAttempt.current += 1;
    setOffer(next);
    setCopyStatus('idle');
    setDraft('');
  };

  useEffect(() => { chooseOffer(requestedOffer); }, [requestedOffer]);
  useEffect(() => {
    const updateOffer = () => chooseOffer(readOffer());
    window.addEventListener('popstate', updateOffer);
    return () => window.removeEventListener('popstate', updateOffer);
  }, []);

  const copyEnquiry = async () => {
    const attempt = ++copyAttempt.current;
    setCopyStatus('copying');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(enquiryMessages[offer]);
      if (attempt === copyAttempt.current) setCopyStatus('copied');
    } catch {
      if (attempt !== copyAttempt.current) return;
      setCopyStatus('manual');
      instagramMessage.current?.focus();
      instagramMessage.current?.select();
    }
  };

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
      offer === 'clarity-call' ? 'I would like to enquire about your free Clarity Call.' : 'I would like to enquire about 1:1 coaching, including session format, fees and availability.',
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
          <p>You do not need to have all the answers. Choose a free Clarity Call or enquire about 1:1 coaching, then send Anshu a message on Instagram to explore your next step.</p>
          <ul className="booking-reassurance">
            <li><Check aria-hidden="true" size={17} />Space for your questions</li>
            <li><Check aria-hidden="true" size={17} />A thoughtful look at your next step</li>
            <li><Check aria-hidden="true" size={17} />Room to decide in your own time</li>
          </ul>
          <p className="booking-note">You are welcome to share only what feels comfortable. There is no need to include personal or sensitive details in an initial enquiry.</p>
        </div>

        <div className="booking-panel">
          <fieldset className="booking-offer-select">
            <legend>What would you like to explore?</legend>
            <div className="booking-offer-options">
              <label>
                <input type="radio" name="enquiry-offer" value="clarity-call" checked={offer === 'clarity-call'} onChange={() => chooseOffer('clarity-call')} />
                <span><strong>Free Clarity Call</strong><small>A first conversation</small></span>
                <Check size={16} aria-hidden="true" />
              </label>
              <label>
                <input type="radio" name="enquiry-offer" value="personal-coaching" checked={offer === 'personal-coaching'} onChange={() => chooseOffer('personal-coaching')} />
                <span><strong>1:1 coaching</strong><small>Explore working together</small></span>
                <Check size={16} aria-hidden="true" />
              </label>
            </div>
          </fieldset>
          {CONTACT_CONFIG.bookingUrl && (
            <div className="booking-scheduler">
              <CalendarDays size={25} strokeWidth={1.4} aria-hidden="true" />
              <h3>Find a time to connect</h3>
              <p>See the available appointments and details on Anshu’s booking page.</p>
              <a className="button button-primary" href={CONTACT_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer">View availability <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="booking-note">Opens the booking service in a new tab.</p>
            </div>
          )}

          {CONTACT_CONFIG.instagramUrl && (
            <div className="instagram-enquiry">
              <div className="instagram-enquiry-heading"><span className="booking-icon"><InstagramMark /></span><p className="eyebrow">A real conversation starts here</p></div>
              <h3>DM <em>CLARITY.</em><br />Let’s begin.</h3>
              <p>Open Anshu’s Instagram profile and send <strong>CLARITY</strong> in a direct message. You can use the starting message below, or write in your own words.</p>
              <div className="instagram-message-field">
                <label htmlFor="instagram-enquiry-message">Your starting message <span>(optional)</span></label>
                <textarea ref={instagramMessage} id="instagram-enquiry-message" rows={5} readOnly value={enquiryMessages[offer]} aria-describedby="instagram-copy-status" />
              </div>
              <div className="instagram-enquiry-actions">
                <button type="button" className="button button-outline" onClick={copyEnquiry} disabled={copyStatus === 'copying'}>{copyStatus === 'copied' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}{copyStatus === 'copied' ? 'Message copied' : copyStatus === 'copying' ? 'Copying…' : 'Copy enquiry'}</button>
                <a className="button button-primary" href={CONTACT_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer">Open Instagram profile <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
              <p className="instagram-copy-status" id="instagram-copy-status" role="status">{copyStatus === 'copied' ? 'Copied. Paste your enquiry into a direct message on Instagram and send when you are ready.' : copyStatus === 'manual' ? 'The message is selected. Copy it using your device’s copy command, then paste it into Instagram.' : 'No message is sent by this website. You choose when to send it on Instagram.'}</p>
              <p className="instagram-profile-name">@{CONTACT_CONFIG.instagramHandle}</p>
              <p className="booking-note">Instagram opens in a new tab and may ask you to sign in. Sending a message is an enquiry; session details and availability are confirmed with Anshu.</p>
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
              <h3>Prefer email or WhatsApp?</h3>
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
