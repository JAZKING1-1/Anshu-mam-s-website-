import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
export function BrandMark() {
  return <svg className="brand-mark" width="46" height="50" viewBox="0 0 46 50" fill="none" aria-hidden="true"><path d="M5 43V23a18 18 0 0 1 36 0v20" stroke="currentColor" strokeWidth=".8"/><path d="m13 35 10-23 10 23m-16-8h12M23 6V1M7 11 3 7m36 4 4-4" stroke="currentColor" strokeWidth="1"/><path d="M11 42h24" stroke="currentColor" strokeWidth=".8"/></svg>;
}
export function Botanical({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 180 280" fill="none" className={'botanical ' + className} aria-hidden="true"><path d="M88 277c10-70-4-144 19-239M96 195c-34-10-49-27-56-55 33 7 49 24 56 55Zm1-56c27-14 41-36 40-64-26 15-39 37-40 64ZM94 230c26-7 48-22 59-49-30 4-49 20-59 49ZM98 108c-22-15-32-40-30-65 25 21 33 39 30 65ZM107 39c-6-13-5-27 4-36 10 15 8 29-4 36Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function Invitation() {
  return <section className="invitation section"><Botanical /><div className="container invitation-inner"><p className="eyebrow">Your first step / Free Clarity Call</p><h2>You don’t have to figure<br />it all out <em>alone.</em></h2><p>A first conversation. Space for your questions.<br className="desktop-break" /> And a chance to explore the support you need.</p><a href="/book?offer=clarity-call" data-route className="button button-primary">Enquire about a free Clarity Call <ArrowUpRight size={17} /></a><span className="small-note">Message Anshu on Instagram with CLARITY to begin.</span></div></section>;
}
export const QUESTIONS = [
  ['How do I enquire about a free Clarity Call?', 'Send Anshu a message on Instagram with the word CLARITY. You can share what brings you here, ask about coaching, and explore whether working together feels right. Agree the call details and timing directly with Anshu.'],
  ['What is the difference between a Clarity Call and 1:1 coaching?', 'A free Clarity Call is a starting conversation to explore your needs and working together. Personal 1:1 sessions give you space to work on the patterns, choices, and goals that matter to you. Discuss session details and fees with Anshu before deciding.'],
  ['Do I need to know exactly what I want to work on?', 'No. You can arrive with a clear goal, a recurring challenge, or simply a feeling that something needs to change. We can start by making space to understand what matters to you.'],
  ['How much does personal coaching cost?', 'The Clarity Call is complimentary. For 1:1 coaching, ask Anshu about the current session options, format, availability, and fees. These details are discussed before you begin.'],
  ['Is coaching the same as therapy?', 'Coaching focuses on self-awareness, choices, goals, and practical steps. It is not therapy, diagnosis, or treatment, and does not replace support from a qualified mental health professional.'],
  ['Will the coaching be personal to me?', 'Yes. Your experiences, values, pace, and goals guide the work. We explore tools and next steps together, with room to reflect on what is and isn’t helpful for you.'],
];
export function Questions() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="container section faq-section"><div><p className="eyebrow">A little clarity</p><h2>Questions are<br /><em>welcome here.</em></h2><p className="muted">You deserve to feel comfortable<br />before taking the first step.</p><a href="/contact" data-route className="text-link">Let’s talk <ArrowUpRight size={17} /></a></div><div className="faq-list">{QUESTIONS.map(([q, a], i) => <article key={q}><h3><button aria-expanded={active === i} aria-controls={'answer-' + i} onClick={() => setActive(active === i ? null : i)}>{q}{active === i ? <Minus size={17} /> : <Plus size={17} />}</button></h3><div id={'answer-' + i} hidden={active !== i}><p>{a}</p></div></article>)}</div></section>;
}
