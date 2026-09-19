import { CONTACT_CONFIG } from '../config/contact';
import '../components/booking.css';

export const PrivacyPage = () => (
  <div className="container">
    <header className="page-intro">
      <p className="eyebrow">Thoughtful by design</p>
      <h1 className="page-heading">Your privacy.</h1>
      <p>How this website handles the information you choose to share.</p>
    </header>
    <article className="prose legal-content">
      <h2>When you browse</h2>
      <p>You can explore this website without creating an account. This website’s application does not include advertising trackers or an analytics integration. The hosting provider may process technical information, such as your IP address and request details, to deliver and protect the site.</p>
      <h2>Your appearance preferences</h2>
      <p>If you customise the colours, typography or motion, your preferences are saved in this browser for your next visit. The site also remembers whether you have seen the welcome animation during the current browser session. These settings stay on your device and are not sent to Anshu by the site. You can reset your preferences in the appearance menu or clear this site’s browser data.</p>
      <p>The “What’s on your heart?” choices are a private way to explore the website. Your selection is not saved or sent anywhere.</p>
      <h2>When you make an enquiry</h2>
      <p>When contact options are available, the enquiry form asks for your name, email address and an optional topic. These details stay in the page while you prepare your message. The form does not submit them to a website database, send a message automatically or confirm an appointment.</p>
      <p>Choosing to open an email or WhatsApp draft passes your draft details to the selected service. You decide whether to send it there. Please share only what is needed to make your enquiry, and avoid including health information or other sensitive personal details.</p>
      <h2>External services</h2>
      <p>Any linked appointment service, email provider or WhatsApp service operates under its own privacy terms. Review those terms before sharing information. An appointment service may ask for additional details needed to arrange a conversation.</p>
      <h2>Questions about information you have shared</h2>
      <p>If you have already contacted Anshu, you can reply through that same channel to ask about your enquiry or the information you shared.</p>
      {CONTACT_CONFIG.email
        ? <p>For website privacy questions, email <a className="text-link" href={`mailto:${CONTACT_CONFIG.email}`}>{CONTACT_CONFIG.email}</a>.</p>
        : <p>Verified contact options will be listed on the <a className="text-link" data-route href="/contact">contact page</a> when available.</p>}
    </article>
  </div>
);
