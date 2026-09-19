import { BookingForm } from '../components/BookingForm';
import './inner-experience.css';

export const BookingPage = () => (
  <div className="inner-experience booking-experience">
    <header className="connection-masthead">
      <div className="container connection-masthead-grid">
        <div data-reveal><p className="eyebrow">Free Clarity Call · 1:1 coaching</p><h1>Your next chapter<br />starts with <em>you.</em></h1></div>
        <div className="connection-opening" data-reveal>
          <svg className="inner-orbit connection-emblem" viewBox="0 0 150 120" fill="none" aria-hidden="true"><path d="M18 100C18 52 55 18 99 18M34 100c0-39 28-67 65-67M51 100c0-29 21-49 48-49" stroke="currentColor" /><circle cx="99" cy="18" r="5" fill="currentColor" /><path d="m116 68 4 16 16 4-16 4-4 16-4-16-16-4 16-4 4-16Z" stroke="currentColor" /></svg>
          <p>Coaching for women ready to reconnect with themselves. DM CLARITY on Instagram to enquire about your free Clarity Call or 1:1 coaching.</p>
        </div>
      </div>
      <div className="container connection-steps"><span>Curiosity</span><i aria-hidden="true">✳</i><span>Conversation</span><i aria-hidden="true">✳</i><span>Possibility</span></div>
    </header>
    <div className="container connection-content" data-reveal><BookingForm /></div>
  </div>
);
