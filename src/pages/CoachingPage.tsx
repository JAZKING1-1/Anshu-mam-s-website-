import { ArrowUpRight, Check } from 'lucide-react';
import { Invitation, Questions } from '../components/SiteElements';
import { SUPPORT } from './HomePage';
import { OfferingShowcase } from '../components/OfferingShowcase';
import './inner-experience.css';

export function CoachingPage(_props: { onNavigate: (path: string) => void }) {
  return <div className="inner-experience coaching-experience">
    <header className="coaching-masthead container">
      <div data-reveal>
        <p className="eyebrow">Work with Anshu / Coaching for women</p>
        <h1>Life by choice.<br /><em>Not by chance.</em></h1>
      </div>
      <div className="coaching-opening" data-reveal>
        <svg className="inner-orbit coaching-emblem" viewBox="0 0 180 160" fill="none" aria-hidden="true"><path d="M25 145V78a65 65 0 0 1 130 0v67M40 145V78a50 50 0 0 1 100 0v67M55 145V78a35 35 0 0 1 70 0v67" stroke="currentColor" strokeWidth="1" /><path d="M90 24v27m-13-13h26M90 100c-18-5-27-15-28-29 17 4 26 13 28 29Zm0 24c18-5 27-15 28-29-17 4-26 13-28 29Zm0-53v74" stroke="currentColor" strokeWidth="1.3" /></svg>
        <p>Less living on autopilot. More listening to yourself. Explore a free Clarity Call or personal 1:1 coaching, with room for your needs, questions, and next chapter.</p>
        <div className="coaching-choice-links"><a href="#clarity-call" className="text-link">Free Clarity Call <ArrowUpRight size={17} aria-hidden="true" /></a><a href="#personal-coaching" className="text-link">Personal 1:1 coaching <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <span className="inner-handwritten">Your life. Your voice. Your choice.</span>
      </div>
    </header>

    <OfferingShowcase detailed />

    <section className="coaching-depth">
      <div className="container coaching-depth-grid">
        <figure className="coaching-depth-photo" data-reveal><img src="/images/anshu-flowers.webp" alt="Anshu in a calm moment beside flowers" width="960" height="1280" loading="lazy" /><figcaption>Warmth. Honesty. Room to be yourself.</figcaption></figure>
        <div className="coaching-depth-copy" data-reveal>
          <p className="eyebrow">A partnership, shaped around you</p>
          <h2>Space to reflect.<br /><em>Support to grow.</em></h2>
          <p>You may be navigating a relationship, questioning an old pattern, or looking for a stronger sense of yourself. We begin with your lived experience and what you want to be different.</p>
          <p>Through reflective conversation, self-awareness exercises, and practical steps, we explore what feels useful to you. You remain the person making choices about your life.</p>
          <ul className="coaching-promises">{['Individual sessions, focused on what matters to you', 'A warm, respectful, non-judgemental conversation', 'The format and timing discussed with you', 'Clear discussion of fees and expectations before you begin'].map(text => <li key={text}><Check size={17} aria-hidden="true" />{text}</li>)}</ul>
          <a data-route href="/book?offer=personal-coaching" className="text-link">Ask Anshu about 1:1 coaching <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>

    <section className="container section coaching-pathways">
      <div className="section-heading" data-reveal><div><p className="eyebrow">What we can explore</p><h2>The things that quietly<br /><em>shape your everyday.</em></h2></div><span className="inner-section-mark" aria-hidden="true">✳</span></div>
      <div className="pathway-list">{SUPPORT.map(({ number, title, copy, tag, icon: Icon }) => <article className="pathway-row" key={number} data-reveal><span className="pathway-number">{number}</span><div className="pathway-title"><p className="eyebrow">{tag}</p><h3>{title}</h3></div><p className="pathway-copy">{copy}</p><Icon size={36} strokeWidth={1} aria-hidden="true" /></article>)}</div>
    </section>

    <section className="coaching-expectation-section">
      <div className="container coaching-expectations">
        <div data-reveal><p className="eyebrow">Before we begin</p><h2>A little openness.<br /><em>No pressure.</em></h2><div className="expectation-line" aria-hidden="true"><span />✳<span /></div><p className="inner-handwritten">You remain the author of your life.</p></div>
        <div className="expectation-notes" data-reveal><article><span>01</span><div><h3>We start with a conversation</h3><p>Your complimentary clarity call gives us space to talk about your goals and whether this coaching approach is a good fit. You can ask about session length, frequency, pricing, and availability before deciding.</p></div></article><article><span>02</span><div><h3>We agree on the work together</h3><p>There is no single timeline for personal growth. The focus and rhythm of sessions are discussed with you. Progress can involve reflection, practice, and small changes between conversations.</p></div></article><article><span>03</span><div><h3>We respect the scope of coaching</h3><p>Coaching is focused on personal growth and practical choices. It does not diagnose or treat mental health conditions, and individual experiences vary.</p></div></article></div>
      </div>
    </section>
    <Questions /><Invitation />
  </div>;
}
