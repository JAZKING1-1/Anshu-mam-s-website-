import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Brain, Check, ChevronDown, Compass, Heart, MessageCircleHeart,
  Play, Quote, ShieldCheck, Sparkles, SunMedium, Waves,
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { FAQ_DATA } from '../data/faq';

interface HomePageProps { onNavigate: (path: string) => void; }

const struggles = [
  { icon: Brain, label: 'My mind never switches off', text: 'You replay conversations, doubt decisions, and feel trapped in overthinking.' },
  { icon: Heart, label: 'I lose myself in relationships', text: 'You give so much that your own needs, voice, and identity become difficult to hear.' },
  { icon: ShieldCheck, label: 'Boundaries make me feel guilty', text: 'You know what you need, but saying it out loud feels selfish or frightening.' },
  { icon: Waves, label: 'My emotions feel too heavy', text: 'You want to respond calmly, but worry, hurt, or anger arrives before clarity does.' },
  { icon: Compass, label: 'I don’t know what comes next', text: 'Life looks fine from the outside, yet something within you is asking for more.' },
];

const supportTopics = [
  { title: 'Relationships', copy: 'Understand recurring patterns and communicate with more honesty and calm.', color: 'pink' },
  { title: 'Boundaries', copy: 'Say yes and no with confidence—without carrying unnecessary guilt.', color: 'green' },
  { title: 'Overthinking', copy: 'Interrupt exhausting thought loops and rebuild trust in your own judgement.', color: 'purple' },
  { title: 'Self-worth', copy: 'Reconnect with your identity, needs, strengths, and inner voice.', color: 'orange' },
  { title: 'Emotional resilience', copy: 'Respond to difficult moments with more steadiness and self-awareness.', color: 'yellow' },
  { title: 'Life direction', copy: 'Turn confusion into clear, practical choices that feel true to you.', color: 'blue' },
];

const steps = [
  ['01', 'Share your story', 'A warm, confidential conversation about what feels difficult and what you want to change.'],
  ['02', 'Notice the patterns', 'Together, you identify emotional habits, beliefs, needs, and relationship dynamics.'],
  ['03', 'Create new choices', 'Coaching and NLP-based tools help you reframe thoughts and practise healthier responses.'],
  ['04', 'Live it gently', 'You take realistic action with stronger boundaries, self-trust, and emotional clarity.'],
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeValue, setActiveValue] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const values = [
    ['Courage', 'Choose yourself, speak honestly, and take the next step—even when it feels unfamiliar.'],
    ['Clarity', 'Understand what you feel, what you need, and which choices truly belong to you.'],
    ['Confidence', 'Build self-trust that is steady, practical, and no longer dependent on approval.'],
  ];
  const featured = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <div className="story-home">
      <section className="story-hero" id="home">
        <div className="story-hero-copy" data-reveal>
          <div className="story-eyebrow"><Sparkles size={16} /> Life coaching for women</div>
          <h1>Come back to the woman <em>you already are.</em></h1>
          <p className="story-hero-lead">Personalised coaching for women ready to move from overthinking, guilt, and self-doubt toward healthier relationships, clearer choices, and quiet confidence.</p>
          <div className="story-actions">
            <button onClick={() => onNavigate('/book')} className="story-primary">Book a free clarity call <ArrowRight size={18} /></button>
            <a href="#meet-anshu" className="story-secondary">Meet Anshu</a>
          </div>
          <div className="story-trust">
            <span><Check size={14} /> Certified Life Coach</span><span><Check size={14} /> Relationship Coach</span><span><Check size={14} /> NLP Practitioner</span>
          </div>
        </div>
        <div className="story-hero-visual" data-reveal>
          <div className="story-portrait-wrap">
            <img src="/anshu/anshu-1.png" alt="Anshu Sahani, life and relationship coach for women" />
            <div className="story-portrait-note">a safe space to hear yourself again ♡</div>
          </div>
          <span className="story-sticker sticker-one">soft is strong</span>
          <span className="story-sticker sticker-two">you hold the key ✦</span>
        </div>
        <a className="story-scroll-cue" href="#feel-seen">scroll to begin <ChevronDown size={16} /></a>
      </section>

      <section className="story-section story-feel" id="feel-seen">
        <div className="story-heading" data-reveal>
          <span className="story-step-label">01 · feel seen</span>
          <h2>Maybe you have been strong for everyone <em>except yourself.</em></h2>
          <p>You are not “too much,” weak, or behind. You may simply need a space where your experience comes first.</p>
        </div>
        <div className="story-swipe" data-reveal aria-label="Common coaching concerns">
          {struggles.map(({ icon: Icon, label, text }, index) => (
            <article className={`story-struggle card-${index + 1}`} key={label}>
              <span className="story-card-number">0{index + 1}</span><Icon size={27} /><h3>{label}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <p className="story-swipe-hint">Swipe to explore <ArrowRight size={14} /></p>
      </section>

      <section className="story-section story-about" id="meet-anshu">
        <div className="story-about-image" data-reveal>
          <img src="/anshu/anshu-2.png" alt="Anshu Sahani smiling" />
          <div className="story-photo-caption">Hi, I’m Anshu ✿</div>
        </div>
        <div className="story-about-copy" data-reveal>
          <span className="story-step-label">02 · meet your coach</span>
          <h2>A guide beside you—not a voice above you.</h2>
          <p>I’m Anshu Sahani, a Certified Life Coach, Relationship Coach, and NLP Practitioner. I help women understand emotional patterns, rebuild self-worth, and create healthier relationships with themselves and others.</p>
          <p>My approach combines compassionate conversation, self-awareness, practical coaching, emotional resilience, and NLP-based tools. Your journey is always personalised around your experiences, goals, and pace.</p>
          <blockquote>“You don’t need fixing. You need space, clarity, and support to hear your own wisdom.”</blockquote>
        </div>
      </section>

      <section className="story-section story-motto" id="motto">
        <div className="story-heading light" data-reveal>
          <span className="story-step-label">03 · the heart of the work</span>
          <h2>From fear to courage.<br />Confusion to clarity.<br />Self-doubt to confidence.</h2>
        </div>
        <div className="story-values" data-reveal>
          <div className="story-value-tabs" role="tablist" aria-label="Anshu's coaching values">
            {values.map(([title], index) => <button key={title} className={activeValue === index ? 'active' : ''} onClick={() => setActiveValue(index)} role="tab" aria-selected={activeValue === index}>{title}</button>)}
          </div>
          <div className="story-value-answer"><SunMedium size={32} /><h3>{values[activeValue][0]}</h3><p>{values[activeValue][1]}</p></div>
        </div>
      </section>

      <section className="story-section story-support" id="support">
        <div className="story-heading" data-reveal>
          <span className="story-step-label">04 · what we can work through</span>
          <h2>Support for the things that quietly shape <em>everything.</em></h2>
        </div>
        <div className="story-topic-track" data-reveal>
          {supportTopics.map((topic, index) => <article className={`story-topic ${topic.color}`} key={topic.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{topic.title}</h3><p>{topic.copy}</p><MessageCircleHeart size={21} /></article>)}
        </div>
      </section>

      <section className="story-section story-process" id="process">
        <div className="story-heading" data-reveal>
          <span className="story-step-label">05 · your coaching journey</span>
          <h2>No formulas. No pressure. A path shaped around <em>you.</em></h2>
        </div>
        <div className="story-timeline">
          {steps.map(([number, title, copy]) => <article data-reveal key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <section className="story-section story-proof" id="stories">
        <div className="story-heading" data-reveal>
          <span className="story-step-label">06 · real words, real journeys</span>
          <h2>What changes when a woman feels heard?</h2>
          <p>Personal experiences from women who chose to invest in their emotional growth.</p>
        </div>
        <div className="story-testimonial-track" data-reveal>
          {featured.map((item, index) => (
            <article className={`story-testimonial proof-${index + 1}`} key={item.id}>
              <div className="story-quote-mark"><Quote size={24} /></div><p>{item.quote}</p>
              <div><strong>{item.journeyType}</strong><span>{item.clientLabel}</span></div>
              {index < 2 && <button onClick={() => setActiveVideo(`/storywall/${index === 0 ? 'WhatsApp Video 2026-07-28 at 03.48.43.mp4' : 'WhatsApp Video 2026-07-28 at 03.56.44.mp4'}`)}><Play size={15} fill="currentColor" /> Watch her story</button>}
            </article>
          ))}
        </div>
        <p className="story-disclaimer">Client experiences are personal. Individual experiences and results may vary.</p>
      </section>

      <section className="story-section story-invitation" id="coaching">
        <div className="story-invite-card" data-reveal>
          <div><span className="story-step-label">07 · your gentle first step</span><h2>A conversation before any commitment.</h2><p>In a complimentary 15–20 minute clarity call, you can share what is bringing you here, ask questions, and see whether Anshu’s approach feels right for you.</p>
            <ul><li><Check size={16} /> Confidential and non-judgemental</li><li><Check size={16} /> Personalised to your needs</li><li><Check size={16} /> Available online globally</li></ul>
          </div>
          <button onClick={() => onNavigate('/book')}>Book my free call <ArrowRight size={18} /></button>
        </div>
      </section>

      <section className="story-section story-faq" id="faq">
        <div className="story-heading" data-reveal><span className="story-step-label">08 · before you decide</span><h2>Questions are welcome here.</h2></div>
        <div className="story-faq-list" data-reveal>
          {FAQ_DATA.slice(0, 6).map((faq, index) => <article className={openFaq === index ? 'open' : ''} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{faq.answer}</p>}</article>)}
        </div>
      </section>

      <section className="story-final" data-reveal>
        <Sparkles size={30} /><p className="story-final-note">Your next chapter doesn’t need to begin perfectly.</p><h2>It only needs to begin <em>honestly.</em></h2><button onClick={() => onNavigate('/book')}>Book a free clarity call <ArrowRight size={18} /></button>
      </section>

      {activeVideo && <div className="story-video-modal" role="dialog" aria-modal="true" aria-label="Client video story"><button onClick={() => setActiveVideo(null)} aria-label="Close video">×</button><video src={activeVideo} controls autoPlay /></div>}
    </div>
  );
};
