import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
export function BrandMark() {
  return <svg className="brand-mark" width="46" height="50" viewBox="0 0 46 50" fill="none" aria-hidden="true"><path d="M5 43V23a18 18 0 0 1 36 0v20" stroke="currentColor" strokeWidth=".8"/><path d="m13 35 10-23 10 23m-16-8h12M23 6V1M7 11 3 7m36 4 4-4" stroke="currentColor" strokeWidth="1"/><path d="M11 42h24" stroke="currentColor" strokeWidth=".8"/></svg>;
}
export function Botanical({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 180 280" fill="none" className={'botanical ' + className} aria-hidden="true"><path d="M88 277c10-70-4-144 19-239M96 195c-34-10-49-27-56-55 33 7 49 24 56 55Zm1-56c27-14 41-36 40-64-26 15-39 37-40 64ZM94 230c26-7 48-22 59-49-30 4-49 20-59 49ZM98 108c-22-15-32-40-30-65 25 21 33 39 30 65ZM107 39c-6-13-5-27 4-36 10 15 8 29-4 36Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function Invitation() {
  return <section className="invitation section"><Botanical /><div className="container invitation-inner"><p className="eyebrow">Whenever you’re ready</p><h2>You don’t have to figure<br />it all out <em>alone.</em></h2><p>A gentle first conversation. Space for your questions.<br className="desktop-break" /> And a chance to see what support could feel like.</p><a href="/book" data-route className="button button-primary">Let’s begin a conversation <ArrowUpRight size={17} /></a><span className="small-note">Complimentary clarity call · 15 minutes</span></div></section>;
}
export const QUESTIONS = [
  ['What happens in a clarity call?', 'We begin with what brings you here. You can share a little about your needs, ask questions about coaching, and explore whether working together feels right. It is a complimentary 15 minute conversation, with no pressure to commit.'],
  ['Do I need to know exactly what I want to work on?', 'No. You can arrive with a clear goal, a recurring challenge, or simply a feeling that something needs to change. We can start by making space to understand what matters to you.'],
  ['How do online sessions work?', 'Coaching can take place online, wherever you are. Session timing, format, availability, and fees are agreed together before you begin.'],
  ['Is coaching the same as therapy?', 'Coaching focuses on self-awareness, choices, goals, and practical steps. It is not therapy, diagnosis, or treatment, and does not replace support from a qualified mental health professional.'],
  ['Will the coaching be personal to me?', 'Yes. Your experiences, values, pace, and goals guide the work. We explore tools and next steps together, with room to reflect on what is and isn’t helpful for you.'],
];
export function Questions() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="container section faq-section"><div><p className="eyebrow">A little clarity</p><h2>Questions are<br /><em>welcome here.</em></h2><p className="muted">You deserve to feel comfortable<br />before taking the first step.</p><a href="/contact" data-route className="text-link">Let’s talk <ArrowUpRight size={17} /></a></div><div className="faq-list">{QUESTIONS.map(([q, a], i) => <article key={q}><h3><button aria-expanded={active === i} aria-controls={'answer-' + i} onClick={() => setActive(active === i ? null : i)}>{q}{active === i ? <Minus size={17} /> : <Plus size={17} />}</button></h3><div id={'answer-' + i} hidden={active !== i}><p>{a}</p></div></article>)}</div></section>;
}
